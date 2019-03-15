require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title : "bvillaroman",
  },
  plugins: [
    // {
    //   resolve: `gatsby-plugin-favicon`,
    //   options: {
    //       logo: "./src/favicon.png",
    //       injectHTML: true,
    //       icons: {
    //         android: true,
    //         appleIcon: true,
    //         appleStartup: true,
    //         coast: false,
    //         favicons: true,
    //         firefox: true,
    //         twitter: false,
    //         yandex: false,
    //         windows: false
    //       }
    //   }
    // },
    // `gatsby-transformer-sharp`,
    // `gatsby-plugin-sharp`,
    `gatsby-plugin-styled-components`,
    // {
    //   resolve: `gatsby-plugin-manifest`,
    //   options: {
    //     name: `gatsby-starter-default`,
    //     short_name: `starter`,
    //     start_url: `/`,
    //     background_color: `#663399`,
    //     theme_color: `#663399`,
    //     display: `minimal-ui`,
    //     icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
    //   },
    // },
    `gatsby-plugin-stripe`,
    // {
    //   resolve: `gatsby-plugin-favicon`,
    //   options: {
    //       logo: "./src/favicon.png",
    //       injectHTML: true,
    //       icons: {
    //         android: true,
    //         appleIcon: true,
    //         appleStartup: true,
    //         coast: false,
    //         favicons: true,
    //         firefox: true,
    //         twitter: false,
    //         yandex: false,
    //         windows: false
    //       }
    //   }
    // },
    {
      resolve: `gatsby-source-stripe`,
      options: {
        objects: ['Balance', 'BalanceTransaction', 'Product', 'ApplicationFee', 'Sku', 'Subscription'],
        secretKey:process.env.STRIPE_API_SECRET,
        downloadFiles: true
      }
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // 'gatsby-plugin-offline',
  ],
}
