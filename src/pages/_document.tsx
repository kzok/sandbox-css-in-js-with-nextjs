import Document, { DocumentContext } from "next/document";
import { ServerStyleSheet } from "styled-components";

/**
 * @see https://styled-components.com/docs/advanced#nextjs
 * @see https://github.com/vercel/next.js/blob/7ce5d3f2408b08c6121b7edd825615161c616309/examples/with-styled-components/pages/_document.js
 */
export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }
}
