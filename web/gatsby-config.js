let activeEnv =
  process.env.GATSBY_ACTIVE_ENV || process.env.NODE_ENV || "development" || "production"

require("dotenv").config({
  path: `.env.${activeEnv}`,
})

module.exports = {
    siteMetadata: {
        title: 'Hungry Bear Studio',
        description: 'Hello Im Richard Haines. Im a software developer who specializes in frontend and mobile development.',
        siteUrl: 'https://hungrybearstudio.com',
        twitter: 'studio_hungry'
    },
    plugins: [
      {
        resolve: 'gatsby-source-sanity',
        options: {
          projectId: process.env.SANITY_PROJECT_ID,
          dataset: process.env.SANITY_PROJECT_DATASET,
          watchMode: true
          // a token with read permissions is required
          // if you have a private dataset
          // token: process.env.MY_SANITY_TOKEN
        }
      },
        {
            resolve: 'gatsby-plugin-google-fonts',
            options: {
              fonts: [
                'Josefin Sans',
                'Poppins',
                `Open Sans`,
                `source sans pro\:300,400,400i,700` 
              ]
            }
        },
        {
            resolve: 'gatsby-theme-seo', 
            options: {
                title: 'Hungry Bear Studio',
                description: 'Hello Im Richard Haines. Im a software developer who specializes in frontend and mobile development.',
                author: 'Rich Haines',
                siteUrl: 'https://hungrybearstudio.com',
                social: {
                    twitter: 'studio_hungry'
                }
            }
        },
        {
          resolve: 'gatsby-plugin-react-svg',
          options: {
              rule: {
                include: /assets/
              }
          }
        },
        'gatsby-transformer-sharp',
        'gatsby-plugin-sharp',
        `gatsby-plugin-emotion`,
        `gatsby-plugin-sitemap`,
        `gatsby-plugin-robots-txt`,
        'gatsby-theme-hbs-mdx',
        'gatsby-plugin-theme-ui',
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
              name: `Hungry Bear Studio Web and Mobile Development`,
              short_name: `Hungry Bear Studio`,
              start_url: `/`,
              background_color: `#A5A5A5`,
              theme_color: `#A5A5A5`,
              display: `standalone`,
              icon: 'src/assets/bear-favicon.png'
            },
          },
          'gatsby-plugin-offline'
    ]
}