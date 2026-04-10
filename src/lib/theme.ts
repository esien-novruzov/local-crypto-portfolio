import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react"

const config = defineConfig({
  theme: {
    semanticTokens: {
      colors: {
        // --- Backgrounds ---
        // Page-level bg: header, table cards
        "app.bg.page": {
          value: { _light: "white", _dark: "#121418" },
        },
        // Surface bg: cards, panels
        "app.bg.surface": {
          value: { _light: "gray.100", _dark: "#1A1D21" },
        },
        // Canvas bg: page body
        "app.bg.canvas": {
          value: { _light: "gray.50", _dark: "#303432" },
        },
        // Input bg
        "app.bg.input": {
          value: { _light: "gray.50", _dark: "#0D0F12" },
        },

        // --- Borders ---
        "app.border": {
          value: { _light: "gray.200", _dark: "#1A1D21" },
        },

        // --- Text ---
        "app.fg": {
          value: { _light: "gray.800", _dark: "white" },
        },
        "app.fg.muted": {
          value: { _light: "gray.600", _dark: "gray.400" },
        },
        // Balance/headline number text
        "app.fg.balance": {
          value: { _light: "#303432", _dark: "white" },
        },

        // --- Interactive ---
        // Row hover background
        "app.hover.bg": {
          value: { _light: "gray.50", _dark: "#121418" },
        },
      },
    },
  },
})

export const system = createSystem(defaultConfig, config)
