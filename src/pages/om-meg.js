import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

import PageHeader from "../components/sections/misc/PageHeader"

import Layout from "../components/sections/misc/Layout"
import Pricing from "../components/sections/misc/Pricing"
import SEO from "../components/SEO"

const OmMeg = () => (
    <Layout>
        <SEO
            siteTitle="Om meg"
            siteDescription="Jeg heter Øyvind Remme, og er selvstendig webutvikler."
        />
        <PageHeader
            headingText="Om meg"
        />
        <section className="container p-5">
            <div className="row">
                <div className="col-lg-5">
                    <StaticImage
                        src="../images/oyvind.jpg"
                        placeholder="blurred"
                        alt="Et bilde av Øyvind Remme"
                    />
                </div>
                <div className="col-lg-7">
                    <span className="text-primary">
                        Webdesigner Øyvind Remme
                    </span>
                    <h2>
                        Gir små bedrifter "the big business treatment"
                    </h2>
                    <p>
                        Jeg heter Øyvind Remme, og er selvstendig webutvikler. Jeg ble interessert i å lage hjemmesider etter å ha bygget en for et familiemedlem, og hadde et sterkt ønske om å kunne være tilgjengelig hjemme, og se barnet mitt vokse, mens jeg kunne jobbe i umiddelbar nærhet. Jeg har utdanning i frontend-utvikling, og tilbyr mine tjenester for små bedrifter som er ute etter å øke inntektene sine.
                    </p>
                    <p>
                        Det jeg fant ut etterhvert var at mange små bedrifter ikke hadde råd til å betale mange titusener av kroner for en hjemmeside. Og de som hadde råd ble som oftest lurt, og endte opp med et forderdelig resultat. De var frustrerte - enten hadde de ikke råd til en hjemmeside, og om de gjorde det, visste de ikke hvem de kunne stole på for å lage noe de var fornøyde med. Med det endre jeg forretningsmodellen min for å tilpasse behovet. Det var sånn jeg kom på at jeg skulle tilby 0 kroner i etablering og 1500 kroner per måned. Det er rett og slett mer håndterbart for små bedrifter.
                    </p>
                </div>
            </div>
        </section>
        <section className="container p-5 pb-7">
            <div className="mb-7 text-center">
                <h2 className="text-uppercase fw-bold">
                    <span className="text-primary">Kvalitet</span> over kvantitet
                </h2>
                <p>
                    Jeg fokuserer på hver individuelle bedrift, og skreddersyr innhold rundt hva det er som gjør bedriften unik. Vi samarbeider tett på hverandre for å bygge en hjemmeside du er 100% fornøyd med, og ikke bare noe som er satt sammen i en hast.
                </p>
            </div>
            <div className="row mb-7">
                <div className="col-md-4 text-center">
                    <div className="mb-3">
                        <i class="bi bi-hand-thumbs-up h1 text-center text-primary"></i>
                    </div>
                    <h3 className="h5 fw-bold">Ingen maler</h3>
                    <p>
                        Jeg skriver unik og engasjerende innhold som om handler bedriften din. Alle er unike!
                    </p>
                </div>
                <div className="col-md-4 text-center">
                    <div className="mb-3">
                        <i class="bi bi-hand-thumbs-up h1 text-center text-primary"></i>
                    </div>
                    <h3 className="h5 fw-bold">Uslåelig kundestøtte</h3>
                    <p>
                        Det er ingen automatiske systemer eller dokumentasjon. Når du ringer, er det jeg som svarer på telefonen.
                    </p>
                </div>
                <div className="col-md-4 text-center">
                    <div className="mb-3">
                        <i class="bi bi-hand-thumbs-up h1 text-center text-primary"></i>
                    </div>
                    <h3 className="h5 fw-bold">Design uten begrensninger</h3>
                    <p>
                        Jeg kan redigere designet for å tilpasse din smak. Alt kan skreddersys!
                    </p>
                </div>
            </div>
            <div className="text-center">
                <Link to="/tjenester" className="text-center">
                    Les mer om tjenestene jeg tilbyr
                </Link>
            </div>
        </section>
        <Pricing />
    </Layout>
)

export default OmMeg