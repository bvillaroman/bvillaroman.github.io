module.exports = {
  plugins: [
    `gatsby-plugin-styled-components`,
    {
    resolve: `gatsby-plugin-favicon`,
    options: {
      logo: './src/favicon.png',
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
  }
  ],
  pathPrefix: `/bvillaroman.github.io`
}
