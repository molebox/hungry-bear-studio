module.exports = {
    siteMetadata: {
        title: 'Hungry Bear Studio',
        description: 'Hungry Bear Studio Web and Mobile Design',
        siteUrl: '',
        twitter: 'studio_hungry'
    },
    plugins: [
        {
            resolve: 'gatsby-plugin-google-fonts',
            options: {
              fonts: [
                `Open Sans`,
                `source sans pro\:300,400,400i,700` 
              ]
            }
        },
        {
            resolve: 'gatsby-theme-seo', 
            options: {
                title: 'Hungry Bear Studio',
                description: 'Hungry Bear Studio Web and Mobile Design',
                author: 'Rich Haines',
                siteUrl: '',
                social: {
                    twitter: 'studio_hungry'
                }
            }
        },
        `gatsby-plugin-emotion`,
        `gatsby-plugin-sitemap`,
        `gatsby-plugin-robots-txt`,
        'gatsby-plugin-theme-ui',
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
              name: `Hungry Bear Studio Web and Mobile Design`,
              short_name: `Hungry Bear Studio`,
              start_url: `/`,
              background_color: `#A5A5A5`,
              theme_color: `#A5A5A5`,
              display: `standalone`,
              icon: ''
            },
          },
          'gatsby-plugin-offline'
    ]
}