import {
  documentGetInitialProps,
  DocumentHeadTags,
  DocumentHeadTagsProps
} from "@mui/material-nextjs/v13-pagesRouter"
import {
  DocumentContext,
  DocumentProps,
  Head,
  Html,
  Main,
  NextScript
} from "next/document"
import { dark, ligth, roboto } from "../styles/theme"

export default function MyDocument(
  props: DocumentProps & DocumentHeadTagsProps
) {
  return (
    <Html lang="pt-BR" className={roboto.className}>
      <Head>
        <meta
          name="theme-light"
          content={ligth.palette.primary.main}
          media="(prefers-color-scheme: light)"
        />
        <meta
          name="theme-dark"
          content={dark.palette.primary.main}
          media="(prefers-color-scheme: dark)"
        />
        <link rel="icon" href="/favicon.png" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
        <meta name="emotion-insertion-point" content="" />
        <DocumentHeadTags {...props} />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

MyDocument.getInitialProps = async (ctx: DocumentContext) => {
  const finalProps = await documentGetInitialProps(ctx)
  return finalProps
}
