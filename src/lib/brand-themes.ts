export type ProfileThemeId =
  | "student"
  | "family"
  | "teacher"
  | "school"
  | "system"

export type BrandThemeId = "multitude" | "bernoulli"

export type ProfileThemeOption = {
  id: ProfileThemeId
  label: string
  description: string
}

export type BrandThemeOption = {
  id: BrandThemeId
  name: string
  platform: string
  available: boolean
  supportedProfiles: ProfileThemeId[]
}

export const profileThemeOptions: ProfileThemeOption[] = [
  {
    id: "student",
    label: "Aluno",
    description: "Perfil voltado para estudantes.",
  },
  {
    id: "family",
    label: "Familia",
    description: "Perfil de responsaveis e familiares.",
  },
  {
    id: "teacher",
    label: "Professor",
    description: "Perfil para docentes.",
  },
  {
    id: "school",
    label: "Escola",
    description: "Perfil institucional da escola.",
  },
  {
    id: "system",
    label: "Sistema",
    description: "Perfil administrativo do sistema.",
  },
]

export const brandThemeOptions: BrandThemeOption[] = [
  {
    id: "multitude",
    name: "Multitude",
    platform: "Adams",
    available: true,
    supportedProfiles: profileThemeOptions.map((profile) => profile.id),
  },
  {
    id: "bernoulli",
    name: "Bernoulli",
    platform: "Meu Bernoulli",
    available: true,
    supportedProfiles: profileThemeOptions.map((profile) => profile.id),
  },
]

export const defaultBrandTheme = brandThemeOptions[0]
export const defaultProfileTheme = profileThemeOptions[0]

export function getBrandThemeOption(brandId: BrandThemeId) {
  return (
    brandThemeOptions.find((brand) => brand.id === brandId) ?? defaultBrandTheme
  )
}

export function getProfileThemeOption(profileId: ProfileThemeId) {
  return (
    profileThemeOptions.find((profile) => profile.id === profileId) ??
    defaultProfileTheme
  )
}
