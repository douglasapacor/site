import { ReactNode } from "react";
import "./globals.css";

export default function Layout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="pt-br">
      <body>{children}</body>
    </html>
  );
}
