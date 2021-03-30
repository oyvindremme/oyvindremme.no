import * as React from "react"
import { Link } from "gatsby"

const Feature = props => (
    <div className="col-md-4 mb-4">
        <div className="mx-auto mb-4 rounded-circle bg-primary text-light d-flex justify-content-center align-items-center" style={{
        "width": 90,
        "height": 90
        }}>
            <i className={`bi ${props.featureIcon} h1 m-0`}></i>
        </div>
        <h3 className="fs-4">
            {props.featureTitle}
        </h3>
        <p>
            {props.featureDescription}
        </p>
    </div>
)

const features = [
    {
        featureIcon: "bi-phone-fill",
        featureTitle: "Laget for håndholdte enheter",
        featureDescription: "Jeg begynner med å bygge hjemmesiden for håndholdte enheter først, deretter legger jeg det opp for nettbrett og større skjermer."
    },
    {
        featureIcon: "bi-display",
        featureTitle: "Passer alle flater",
        featureDescription: "Hjemmesiden din vil passe alle flater; telefoner, nettbrett, større skjermer, slik at kundene dine kan sjekke ut hjemmesiden din fra hvor som helst"
    },
    {
        featureIcon: "bi-lightning-charge-fill",
        featureTitle: "Optimalisert",
        featureDescription: "60% av all trafikk på internett kommer fra telefoner. Jeg optimaliserer hjemmesiden slik at den yter best i søkemotorene."
    }
]

const FrontPageFeatures = () => (
    <section className="container p-3 p-md-5 my-5 text-center">
      <div className="mb-7">
        <h2 className="text-uppercase fw-bold">
          <span className="text-primary">Hva</span> jeg gjør
        </h2>
        <p>
          Jeg spesialiserer meg på å bygge og optimalisere hjemmesider for små bedrifter. Hver del av hjemmesiden er skreddersydd og håndtert av meg, for å sikre god ytelse og gode rangeringer på Google, noe som vil hjelpe deg med å potensielt skaffe deg flere kunder. <Link to="/tjenester"><a>LÆR MER</a></Link>
        </p>
      </div>
      <div className="row">
          {features.map(feature => (
              <Feature
                featureIcon={feature.featureIcon}
                featureTitle={feature.featureTitle}
                featureDescription={feature.featureDescription}
              />
          ))}
      </div>
    </section>
)

export default FrontPageFeatures