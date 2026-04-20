"use client"

import * as React from "react"

export type ThemeFonts = {
  body: string
  heading: string
}

function resolveCssVariable(
  styles: CSSStyleDeclaration,
  variableName: string,
  visited = new Set<string>()
) {
  if (visited.has(variableName)) {
    return ""
  }

  visited.add(variableName)

  const value = styles.getPropertyValue(variableName).trim()
  const nestedVariable = value.match(/^var\((--[^),\s]+)/)?.[1]

  if (!nestedVariable) {
    return value
  }

  return resolveCssVariable(styles, nestedVariable, visited)
}

function formatFontLabel(fontValue: string, fallback: string) {
  const [primaryFont] = fontValue
    .split(",")
    .map((font) => font.trim().replace(/^['"]|['"]$/g, ""))

  return primaryFont || fallback
}

export function useThemeFonts() {
  const [fonts, setFonts] = React.useState<ThemeFonts>({
    body: "Default Sans",
    heading: "Default Sans",
  })

  React.useEffect(() => {
    const root = document.documentElement

    const syncThemeSnapshot = () => {
      const styles = getComputedStyle(root)
      const bodyFont = formatFontLabel(
        resolveCssVariable(styles, "--font-sans"),
        "Default Sans"
      )
      const headingFont = formatFontLabel(
        resolveCssVariable(styles, "--font-heading"),
        bodyFont
      )

      setFonts({
        body: bodyFont,
        heading: headingFont,
      })
    }

    syncThemeSnapshot()

    const observer = new MutationObserver(() => {
      syncThemeSnapshot()
    })

    observer.observe(root, {
      attributes: true,
      attributeFilter: ["class", "style"],
    })

    return () => {
      observer.disconnect()
    }
  }, [])

  return fonts
}
