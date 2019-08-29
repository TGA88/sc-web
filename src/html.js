import React from "react"
import PropTypes from "prop-types"
import { gt } from "lokijs";

export default function HTML(props) {

  return (
    <html {...props.htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />


      {/* GA */}
<script async src="https://www.googletagmanager.com/gtag/js?id=UA-144041210-1"></script>
<script
          dangerouslySetInnerHTML={{ __html: `window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'UA-25467023-2');`}}
        />

{/* GTM */}
<script
          dangerouslySetInnerHTML={{ __html: `
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-5JQFCZT');
     `,}}
        />
 

        {props.headComponents}
        <link rel="stylesheet" href="https://cdn.plyr.io/3.5.6/plyr.css" />
        <link rel="stylesheet" href=" https://maxcdn.bootstrapcdn.com/font-awesome/4.6.3/css/font-awesome.min.css" />
        <link rel="stylesheet" href={`${process.env.ASSET_PATH}plugins/bootstrap/bootstrap-grid.min.css`} />

       
      </head>
      <body {...props.bodyAttributes}>
        {props.preBodyComponents}
        <noscript key="noscript" id="gatsby-noscript">
          This app works best with JavaScript enabled.
        </noscript>

        <noscript
          dangerouslySetInnerHTML={{ __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-5JQFCZT"
          height="0" width="0" style="display:none;visibility:hidden"></iframe>`,}}
        />

        <div
          key={`body`}
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        {props.postBodyComponents}
      </body>
    </html>
  )
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
}
