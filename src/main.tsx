import { StrictMode } from "react"
import { createRoot } from "react-dom/client"

import "./styles/index.css"
import "./utils/clarity.js"
import App from "./App.tsx"
import { BrandThemeProvider } from "@/components/brand-theme-provider.tsx"
import { ThemeProvider } from "@/components/theme-provider.tsx"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
      <BrandThemeProvider>
        <App />
      </BrandThemeProvider>
    </ThemeProvider>
  </StrictMode>
)
