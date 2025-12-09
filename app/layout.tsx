import { ReactNode } from "react"
import "./globals.css"
import Frame from "@/components/app/Frame"

export default function Layout({
  children
}: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="pt-br">
      <body>
        <Frame>{children}</Frame>
      </body>
    </html>
  )
}
