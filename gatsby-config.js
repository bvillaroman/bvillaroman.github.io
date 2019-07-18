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
      resolve: "gatsby-source-graphql",
      options: {
        // This type will contain remote schema Query type
        typeName: "BVILLAROMAN",
        // This is the field under which it's accessible
        fieldName: "bvillaroman",
        // URL to query from
        url: "https://bvillaroman.herokuapp.com/v1/graphql",
        headers: {
          // Learn about environment variables: https://gatsby.dev/env-vars
          'x-hasura-admin-secret': `${process.env.API_KEY}`,
        },
      },
    },
    {
      resolve: `gatsby-plugin-stripe`,
      options: {
        async: true,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `projects`,
        path: `${__dirname}/src/projects`,
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
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
