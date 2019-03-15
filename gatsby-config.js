require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title : "bvillaroman",
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-stripe`,
      options: {
        async: true,
      },
    },
    {
      resolve: `gatsby-source-stripe`,
      options: {
        objects: ['Balance', 'BalanceTransaction', 'Product', 'ApplicationFee', 'Sku', 'Subscription'],
        secretKey:process.env.STRIPE_API_SECRET,
        downloadFiles: true
      }
    },
  ],
}
