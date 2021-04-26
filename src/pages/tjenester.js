import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

import PageHeader from "../components/sections/misc/PageHeader"

import Layout from "../components/sections/misc/Layout"
import Pricing from "../components/sections/misc/Pricing"
import SEO from "../components/SEO"
import IconBox from "../components/sections/misc/IconBox"

const perks = [
    {
        iconName: "bi-pencil-fill",
        name: "Oppdatering av design",
        description: "Om du noen gang trenger et nytt design, så designer jeg gjerne om hele hjemmesiden din uten ekstra kostnad."
    },
    {
        iconName: "bi-rulers",
        name: "Universell utforming",
        description: "Jeg holder meg på toppen av kravene for universell utforming på internett."
    },
    {
        iconName: "bi-search",
        name: "Når algoritmen oppdaterer",
        description: "Hjemmesiden din vil være ajour med retningslinjene Google danner for å rangere på søkeresultatene."
    },
    {
        iconName: "bi-google",
        name: "Forretningsprofil på Google",
        description: "Jeg hjelper til med å tilpasse profilene dine på Google, Bing, Yahoo, osv."
    }
]

const Tjenester = () => (
    <Layout>
        <SEO
            siteTitle="Tjenester"
            siteDescription="En annerledes måte å bygge hjemmesider."
        />
        <PageHeader
            headingText="Tjenester"
        />
        <section className="container p-3 p-md-5 my-5">
            <div className="row">
                <div className="col-md-6">
                    <StaticImage
                        src="../images/illustrations/webdesign.png"
                        placeholder="blurred"
                    />
                </div>
                <div className="col-md-6">
                    <h2 className="fw-bold">En annerledes måte å bygge hjemmesider</h2>
                    <p>
                        Det som gjør meg unik i utviklingsverden er at jeg ikke bruker WordPress eller nettsidebyggere. Jeg skriver koden linje for linje. Dette gir meg enda mer kontroll over designet, og hjemmesiden yter lynraskt fordi koden er ren.
                    </p>
                    <p>
                        Hjemmesider bygd for hånd vil <span className="text-primary fw-bold">utkonkurrere de fleste hjemmesider som er bygget på WordPress</span> og nettsidebyggere som vil koste deg titusener av kroner. På internett er det de raske og mer organiserte hjemmesidene som vinner.
                    </p>
                </div>
            </div>
        </section>
        <section className="container p-3 p-md-5 my-5">
            <div className="row">
                <div className="col-md-6 order-1 order-md-0">
                    <h2 className="fw-bold">SEO for 2021</h2>
                    <p>
                        Om noen forteller deg at de kan få deg på forsiden av Google innen tre måneder - LØP! Med mindre hjemmesiden din har vært vist fram på populære tidsskrifter, kan det ta flere år før du rangerer på toppen av søkeresultatene.
                    </p>
                    <p>
                        <strong>Jeg tilbyr en rekke teknikker for søkemotoroptimalisering i 2021:</strong>
                    </p>
                    <ul>
                        <li>
                            Blogg og innhold fokusert på nøkkelord som kundene søker etter
                        </li>
                        <li>
                            Optimalisert for mobile enheter
                        </li>
                        <li>
                            Ren og strukturert kode for algoritmene
                        </li>
                        <li>
                            Tilpasset alle skjermstørrelser
                        </li>
                    </ul>
                </div>
                <div className="col-md-6 order-0 order-md-1">
                    <StaticImage
                        src="../images/illustrations/seo.png"
                        placeholder="blurred"
                    />
                </div>
            </div>
        </section>
        <section className="container p-3 p-md-5 my-5">
            <div className="row">
            <div className="col-md-6">
                    <StaticImage
                        src="../images/illustrations/logo.png"
                        placeholder="blurred"
                    />
                </div>
                <div className="col-md-6">
                    <h2 className="fw-bold">En annerledes måte å bygge hjemmesider</h2>
                    <p>Det som gjør meg unik er verktøyene jeg bruker for å bygge hjemmesidene. Verktøyene jeg bruker gir meg mer kontroll over designet, noe som gjør at hjemmesiden yter bedre.</p>
                    <p>Hjemmesider bygget av meg vil utkonkurere de fleste WordPress-sidene, fordi de bruker nettsidebyggere som spyr ut kode som sakker ned siden, og straffer den når det kommer til rangering på søkemotorene. Når det kommer til webdesign er det de beste verktøyene som hjelper deg med å vinne over konkurrentene.</p>
                </div>
            </div>
        </section>
        <section className="container p-3 p-md-5 my-5">
            <div className="row">
                <div className="col-md-6">
                    <h2 className="fw-bold">
                        Du får uendelig antall oppdateringer for hjemmesiden din
                    </h2>
                    <p>
                        Google forandrer algoritmen sin nå og da, og det endrer også på hva det er som gjør at hjemmesiden din rangerer på søkeresultatene. I tillegg oppdaterer Google kravene for universell utforming, til fordel for nettleserbrukere som enten er blinde eller har lignende tilbakesettende handikapper når de skal bruke hjemmesider. Derfor tilbyr jeg uendelig antall oppdateringer for hjemmesiden din for å sikre at hjemmesiden aldri blir utdatert, og alltid holder seg med på tiden.
                    </p>
                </div>
                <div className="col-md-6">
                    <div className="row">
                        {perks.map(perk => (
                            <IconBox
                                colWidth="6"
                                iconName={perk.iconName}
                                name={perk.name}
                                description={perk.description}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
        <Pricing />
    </Layout>
)

export default Tjenester