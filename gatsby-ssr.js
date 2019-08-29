// /**
//  * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
//  *
//  * See: https://www.gatsbyjs.org/docs/ssr-apis/
//  */

// // You can delete this file if you're not using it

// import React from "react";
// export function onRenderBody(
//   { setHeadComponents, setPreBodyComponents, setPostBodyComponents }) {
// setHeadComponents([
//      <script
//         type="text/javascript"
//         src='<script async src="https://www.googletagmanager.com/gtag/js?id=UA-144041210-1"></script>'
//       />,
//      <script
//      dangerouslySetInnerHTML={{
//         __html:`window.dataLayer = window.dataLayer || [];
//         function gtag(){dataLayer.push(arguments);}
//         gtag('js', new Date());
//         gtag('config', 'UA-25467023-7');`
//      }}
//      />,
//   <script
//   dangerouslySetInnerHTML={{
//      __html:`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
//      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
//      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
//      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
//      })(window,document,'script','dataLayer','GTM-5JQFCZT');`
//   }}
//   />
// ]);
 
// setPreBodyComponents([
// 	// <script
//     //     key="xyz"
// 	//   type="text/javascript"
//     //      src="https://xyz.com/xyz/xyz1345.js"
//     //     />,
//     <noscript dangerouslySetInnerHTML={{ __html:`<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-5JQFCZT"
// height="0" width="0" style="display:none;visibility:hidden"></iframe>`}}/>
// ]);
 
// // setPostBodyComponents([
// // 	<script
// //          key="pqr"
// // 	  type="text/javascript"
// //          src="https://pqr.com/pqr/pqr12345.js"
// //         />,
// // ]);

// }