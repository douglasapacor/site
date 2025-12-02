import "../styles/globals.css"
import "../styles/navbar-styles.css"
import "../styles/bottom-navigation-styles.css"
import { AppCacheProvider } from "@mui/material-nextjs/v15-pagesRouter"
import { AppProps } from "next/app"
import Head from "next/head"
import { ReactNode } from "react"
import { NextPage } from "next"
import ApplicationProvider from "@/lib/components/ApplicationContext"

type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  layout?: React.ComponentType<{ children: React.ReactNode }>
}

interface AppPropsWithLayout extends AppProps {
  Component: NextPageWithLayout
}

export default function MyApp(props: AppPropsWithLayout) {
  const { Component, pageProps } = props
  const Layout: React.ComponentType<{ children: ReactNode }> =
    Component.layout ?? (({ children }) => <>{children}</>)
  return (
    <AppCacheProvider {...props}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ApplicationProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ApplicationProvider>
    </AppCacheProvider>
  )
}
