import { createTheme } from "@mui/material"
import { ptBR as coreptBR } from "@mui/material/locale"
import { ptBR } from "@mui/x-date-pickers/locales"
import { Roboto } from "next/font/google"
const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap"
})

const dark = createTheme(
  {
    cssVariables: true,
    palette: {
      mode: "dark",
      background: {
        default: "#121212",
        paper: "#1d1d1d"
      }
    },
    typography: {
      fontFamily: roboto.style.fontFamily
    }
  },
  ptBR,
  coreptBR
)

const ligth = createTheme(
  {
    cssVariables: true,
    palette: {
      mode: "light",
      background: {
        default: "#f5f5f5",
        paper: "#ffffff"
      }
    },
    typography: {
      fontFamily: roboto.style.fontFamily
    }
  },
  ptBR,
  coreptBR
)

export { dark, ligth, roboto }
