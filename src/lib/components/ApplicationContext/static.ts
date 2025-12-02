import { applicationContextProps, themeMode } from "@/lib/types"

const staticInitialState: applicationContextProps = {
  theme: {
    mode: "light",
    setMode: (mode: themeMode) => {}
  },
  user: {}
}

export default staticInitialState
