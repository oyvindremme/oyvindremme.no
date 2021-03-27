module.exports = {
    plugins: [
        `gatsby-plugin-sass`,
        {
            resolve: `gatsby-plugin-purgecss`,
            options: {
                bootstrap: true
            }
        }
    ]
}