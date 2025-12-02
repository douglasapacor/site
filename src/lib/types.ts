export type settings = {
  level: 0 | 1 | 2
  role?: string[]
  permissions?: string[]
}
export type Method =
  | "get"
  | "GET"
  | "post"
  | "POST"
  | "put"
  | "PUT"
  | "patch"
  | "PATCH"
  | "delete"
  | "DELETE"
export type route = { url: string; method: Method }
export type router = Record<string, route>
export type themeMode = "dark" | "light"
export type theme = {
  mode: themeMode
  setMode: (mode: themeMode) => void
}
export type applicationContextProps = {
  theme: theme
  user: user | null
}
export type breadcrumbsLocationType = Array<{ href: string; text: string }>
export type user = {}
