import * as React from "react"
import Layout from "../components/sections/misc/Layout"
import SEO from "../components/SEO"

// Sections
import FrontPageHeader from '../components/sections/front-page/FrontPageHeader';
import FrontPageFeatures from '../components/sections/front-page/FrontPageFeatures';
import FrontPagePricingDescription from "../components/sections/front-page/FrontPagePricingDescription";
import FrontPagePortfolio from "../components/sections/front-page/FrontPagePortfolio"
import FrontPageAboutMe from "../components/sections/front-page/FrontPageAboutMe"
import Pricing from "../components/sections/misc/Pricing"

const Home = () => (
  <Layout>
    <SEO
        siteTitle="Hjemmesider for små bedrifter"
        siteDescription="Jeg bygger 100% optimaliserte og skreddersydde hjemmesider som vil hjelpe deg med å skaffe flere kunder."
    />
    <FrontPageHeader />
    <FrontPageFeatures />
    <FrontPagePricingDescription />
    <FrontPagePortfolio />
    <FrontPageAboutMe />
    <Pricing />
  </Layout>
)

export default Home
