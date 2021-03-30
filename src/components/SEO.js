import * as React from "react"

import { Helmet } from "react-helmet"

const SEO = props => (
    <Helmet>
        <title>{props.siteTitle} | Webdesigner Øyvind Remme</title>
        <meta name="title" content={`${props.siteTitle} | Webdesigner Øyvind Remme`} />
        <meta name="description" content={props.siteDescription} />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.oyvindremme.no/" />
        <meta property="og:title" content={`${props.siteTitle} | Webdesigner Øyvind Remme`} />
        <meta property="og:description" content={props.siteDescription} />
        <meta property="og:image" content={`https://www.oyvindremme.no${seoImage}`} />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.oyvindremme.no/" />
        <meta property="twitter:title" content={`${props.siteTitle} | Webdesigner Øyvind Remme`} />
        <meta property="twitter:description" content={props.siteDescription} />
        <meta property="twitter:image" content={`https://www.oyvindremme.no${props.seoImage}`} />
    </Helmet>
)

export default SEO