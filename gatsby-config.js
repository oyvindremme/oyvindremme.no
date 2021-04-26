module.exports = {
    siteMetadata: {
        siteUrl: `https://www.oyvindremme.no`,
    },
    plugins: [
        `gatsby-plugin-sass`,
        {
            resolve: `gatsby-plugin-purgecss`,
            options: {
                bootstrap: true
            }
        },
        `gatsby-plugin-image`,
        `gatsby-plugin-sharp`,
        `gatsby-transformer-sharp`,
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images/`,
            },
        },
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `oyvindremme-gatsby`,
                short_name: `oyvindremme`,
                start_url: `/`,
                background_color: `#ec6a11`,
                theme_color: `#ec6a11`,
                icon: `src/images/logo/icon-full_colors.png`
            }
        },
        `gatsby-plugin-sitemap`
    ]
}