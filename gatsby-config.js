module.exports = {
  siteMetadata: {
    title: `Mario Fayolle`,
    description: `Front-end developer & designer UI/UX living in Paris, currently studying at HETIC and looking for new opportunities to learn and progress.`,
    author: `@mariofayolle`,
    siteUrl: `https://example.com`,
  },
  plugins: [
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 590,
              quality: 90,
            },
          },
        ],
      },
    },

    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`,

    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/assets/technoIcon/logosite.png`,
      },
    },
    `gatsby-plugin-styled-components`,
    "gatsby-plugin-root-import",

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/src/assets`,
      },
    },
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: `http://localhost:1337`,
        queryLimit: 1000, // Default to 100
        contentTypes: [`projects`],
        //If using single types place them in this array.
        // singleTypes: [`home-page`, `contact`],
        // // Possibility to login with a strapi user, when content types are not publically available (optional).
        // loginData: {
        //   identifier: "",
        //   password: "",
        // },
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-transformer-json`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-transition-link`,

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
