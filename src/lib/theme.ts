import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react"

/**
 * Dark palette — "Slate Dark"
 * Inspired by Linear, GitHub Dark, Vercel, Coinbase.
 * The world's best dark UIs share this DNA: deep cool blue-black base,
 * subtle elevation via blue-gray tints, high-contrast text.
 *
 * Elevation model:
 *   Header/nav  #090C12  ← deepest, anchors the chrome
 *   Canvas      #0F1117  ← page body (GitHub dark signature tone)
 *   Cards       #161C28  ← elevated surface (+blue tint adds depth)
 *   Hover       #1C2333  ← interactive layer
 *
 * WCAG contrast (text on canvas #0F1117):
 *   Primary  #E6ECF4  →  15.8:1  (AAA)
 *   Muted    #8896AA  →   6.3:1  (AA)
 *
 * Light palette — "Classic Clean"
 * Inspired by Linear, Vercel. Neutral grays, white cards, crisp and timeless.
 *   Canvas      #F7F7F7  ← neutral light gray page body
 *   Header/nav  #FFFFFF  ← white chrome
 *   Cards       #FFFFFF  ← white, elevated above canvas
 *   Hover       #F0F0F0  ← slightly darker than canvas
 */

const config = defineConfig({
  theme: {
    semanticTokens: {
      colors: {
        // --- Backgrounds ---
        "app.bg.page": {
          value: { _light: "#FFFFFF", _dark: "#090C12" },
        },
        "app.bg.surface": {
          value: { _light: "#FFFFFF", _dark: "#161C28" },
        },
        "app.bg.canvas": {
          value: { _light: "#F7F7F7", _dark: "#0F1117" },
        },
        "app.bg.input": {
          value: { _light: "#F2F2F2", _dark: "#0C1018" },
        },

        // --- Borders ---
        "app.border": {
          value: { _light: "#E5E5E5", _dark: "#1E2A3A" },
        },

        // --- Text ---
        "app.fg": {
          value: { _light: "#1E293B", _dark: "#E6ECF4" },
        },
        "app.fg.muted": {
          value: { _light: "#475569", _dark: "#8896AA" },
        },
        "app.fg.balance": {
          value: { _light: "#1E293B", _dark: "#E6ECF4" },
        },

        // --- Interactive ---
        "app.hover.bg": {
          value: { _light: "#F0F0F0", _dark: "#1C2333" },
        },
      },
    },
  },
})

export const system = createSystem(defaultConfig, config)
