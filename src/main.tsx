import { StrictMode } from "react"
import { createRoot } from "react-dom/client"

import "./styles/index.css"
import "./utils/clarity.js"
import App from "./App.tsx"
import { BrandThemeProvider } from "@/components/brand-theme-provider.tsx"
import { ThemeProvider } from "@/components/theme-provider.tsx"
import { TooltipProvider } from "@/components/ui/tooltip.tsx"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
      <TooltipProvider>
        <BrandThemeProvider>
          <App />
        </BrandThemeProvider>
      </TooltipProvider>
    </ThemeProvider>
  </StrictMode>
)
