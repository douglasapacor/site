import { dark, ligth } from "@/styles/theme"
import { CssBaseline, ThemeProvider } from "@mui/material"
import { ptBR } from "@mui/x-date-pickers/locales"
import { LocalizationProvider } from "@mui/x-date-pickers"
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs"
import {
  createContext,
  FC,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState
} from "react"
import staticInitialState from "./static"
import { useRouter } from "next/router"
import { applicationContextProps, themeMode, user } from "@/lib/types"

const ApplicationContext =
  createContext<applicationContextProps>(staticInitialState)
export const useApplication = () => useContext(ApplicationContext)

const ApplicationProvider: FC<{ children?: ReactNode }> = ({ ...props }) => {
  const router = useRouter()
  const [themeMode, setThemeMode] = useState<themeMode>("light")
  const [user, setUSer] = useState<user | null>(null)

  const theme = useMemo(
    () => (themeMode === "light" ? ligth : dark),
    [themeMode]
  )

  const setThemeModeFn = useCallback((themefn: themeMode) => {
    localStorage.setItem("--site-theme", themefn)
    setThemeMode(themefn)
  }, [])

  useEffect(() => {
    if (!router.isReady) return

    const savedTheme = localStorage.getItem("--site-theme") as themeMode | null
    if (savedTheme) setThemeMode(savedTheme)
  }, [router.isReady])

  return (
    <ApplicationContext.Provider
      value={{
        theme: { mode: themeMode, setMode: setThemeModeFn },
        user
      }}
    >
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <LocalizationProvider
          adapterLocale="pt-BR"
          dateAdapter={AdapterDayjs}
          localeText={
            ptBR.components.MuiLocalizationProvider.defaultProps.localeText
          }
        >
          {props.children}
        </LocalizationProvider>
      </ThemeProvider>
    </ApplicationContext.Provider>
  )
}

export default ApplicationProvider
