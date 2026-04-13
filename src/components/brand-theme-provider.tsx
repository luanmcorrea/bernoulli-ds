import * as React from "react"

import {
  brandThemeOptions,
  defaultBrandTheme,
  defaultProfileTheme,
  getBrandThemeOption,
  type BrandThemeId,
  type ProfileThemeId,
} from "@/lib/brand-themes"

type BrandThemeProviderProps = {
  children: React.ReactNode
  defaultBrand?: BrandThemeId
  defaultProfile?: ProfileThemeId
  brandStorageKey?: string
  profileStorageKey?: string
}

type BrandThemeProviderState = {
  brandTheme: BrandThemeId
  profileTheme: ProfileThemeId
  setBrandTheme: (brandTheme: BrandThemeId) => void
  setProfileTheme: (profileTheme: ProfileThemeId) => void
}

const BrandThemeProviderContext = React.createContext<
  BrandThemeProviderState | undefined
>(undefined)

function isBrandTheme(value: string | null): value is BrandThemeId {
  return brandThemeOptions.some((brand) => brand.id === value)
}

function isProfileTheme(value: string | null): value is ProfileThemeId {
  return ["student", "family", "teacher", "school", "system"].includes(
    value ?? ""
  )
}

function resolveProfileTheme(
  brandTheme: BrandThemeId,
  profileTheme: ProfileThemeId
) {
  const brand = getBrandThemeOption(brandTheme)

  if (brand.supportedProfiles.includes(profileTheme)) {
    return profileTheme
  }

  return brand.supportedProfiles[0] ?? defaultProfileTheme.id
}

export function BrandThemeProvider({
  children,
  defaultBrand = defaultBrandTheme.id,
  defaultProfile = defaultProfileTheme.id,
  brandStorageKey = "brand-theme",
  profileStorageKey = "profile-theme",
}: BrandThemeProviderProps) {
  const [brandTheme, setBrandThemeState] = React.useState<BrandThemeId>(() => {
    const storedBrandTheme = localStorage.getItem(brandStorageKey)
    return isBrandTheme(storedBrandTheme) ? storedBrandTheme : defaultBrand
  })

  const [profileTheme, setProfileThemeState] = React.useState<ProfileThemeId>(
    () => {
      const storedProfileTheme = localStorage.getItem(profileStorageKey)
      return isProfileTheme(storedProfileTheme)
        ? resolveProfileTheme(brandTheme, storedProfileTheme)
        : resolveProfileTheme(brandTheme, defaultProfile)
    }
  )

  const setBrandTheme = React.useCallback(
    (nextBrandTheme: BrandThemeId) => {
      localStorage.setItem(brandStorageKey, nextBrandTheme)
      setBrandThemeState(nextBrandTheme)
      setProfileThemeState((currentProfileTheme) => {
        const nextProfileTheme = resolveProfileTheme(
          nextBrandTheme,
          currentProfileTheme
        )

        localStorage.setItem(profileStorageKey, nextProfileTheme)
        return nextProfileTheme
      })
    },
    [brandStorageKey, profileStorageKey]
  )

  const setProfileTheme = React.useCallback(
    (nextProfileTheme: ProfileThemeId) => {
      const resolvedProfileTheme = resolveProfileTheme(
        brandTheme,
        nextProfileTheme
      )

      localStorage.setItem(profileStorageKey, resolvedProfileTheme)
      setProfileThemeState(resolvedProfileTheme)
    },
    [brandTheme, profileStorageKey]
  )

  React.useEffect(() => {
    const root = document.documentElement
    root.dataset.brand = brandTheme
    root.dataset.profile = profileTheme
  }, [brandTheme, profileTheme])

  React.useEffect(() => {
    const handleStorageChange = (event: StorageEvent) => {
      if (event.storageArea !== localStorage) {
        return
      }

      if (event.key === brandStorageKey) {
        const nextBrandTheme = isBrandTheme(event.newValue)
          ? event.newValue
          : defaultBrand

        setBrandThemeState(nextBrandTheme)
        setProfileThemeState((currentProfileTheme) =>
          resolveProfileTheme(nextBrandTheme, currentProfileTheme)
        )
      }

      if (event.key === profileStorageKey) {
        const nextProfileTheme = isProfileTheme(event.newValue)
          ? event.newValue
          : defaultProfile

        setProfileThemeState(resolveProfileTheme(brandTheme, nextProfileTheme))
      }
    }

    window.addEventListener("storage", handleStorageChange)

    return () => {
      window.removeEventListener("storage", handleStorageChange)
    }
  }, [
    brandTheme,
    brandStorageKey,
    defaultBrand,
    defaultProfile,
    profileStorageKey,
  ])

  const value = React.useMemo(
    () => ({
      brandTheme,
      profileTheme,
      setBrandTheme,
      setProfileTheme,
    }),
    [brandTheme, profileTheme, setBrandTheme, setProfileTheme]
  )

  return (
    <BrandThemeProviderContext.Provider value={value}>
      {children}
    </BrandThemeProviderContext.Provider>
  )
}

export function useBrandTheme() {
  const context = React.useContext(BrandThemeProviderContext)

  if (context === undefined) {
    throw new Error("useBrandTheme must be used within a BrandThemeProvider")
  }

  return context
}
