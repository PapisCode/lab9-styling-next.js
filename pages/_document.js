// pages/_document.js
import Document from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
  static async getIntitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props => sheet.collectStyles(<App { ...props } />),
        });

        const intialProps = await Document.getInitialProps(ctx);
        return {
          ...intialProps,
          styles: (
            <>
            {InitialProps.styles}
            {sheet.getStyleElement()}
            </>
          ),
    };
  } finally {
    sheet.seal();
  }
}
}