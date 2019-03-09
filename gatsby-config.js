module.exports = {
  siteMetadata: {
    title : "bvillaroman",
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    "gatsby-plugin-stripe",
    {
      resolve: `gatsby-plugin-favicon`,
      options: {
          logo: "./src/favicon.png",
          injectHTML: true,
          icons: {
            android: true,
            appleIcon: true,
            appleStartup: true,
            coast: false,
            favicons: true,
            firefox: true,
            twitter: false,
            yandex: false,
            windows: false
          }
      }
    },
  ]
}
