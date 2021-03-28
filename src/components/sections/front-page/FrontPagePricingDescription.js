import * as React from "react"
import { Link } from "gatsby"

const PricingJustification = props => (
    <div className="col-md-6">
        <i className="bi bi-hand-thumbs-up fs-1 text-primary"></i>
        <h3 className="h4">{props.name}</h3>
        <p>
            {props.description}
        </p>
    </div>
)

const justifications = [
    {
        name: "Hosting",
        description: "Hosting er bygget inn i den månedlige prisen for hjemmesiden."
    },
    {
        name: "Ubegrenset redigering",
        description: "Du kan forandre hva som helst. Endringen vil bli utført samme dag."
    },
    {
        name: "Kundestøtte 24/7",
        description: "Ring når som helst, hvor som helst. Ingen telefonsystemer eller automatiske svar."
    },
    {
        name: "Design og utvikilng",
        description: "Inkluderer over 40 timer med design, utvikling og testing."
    },
    {
        name: "Lenker fra andre steder på internett",
        description: "Det er viktig at hjemmesiden din er lenket fra andre steder på internett, som for eksempel bedriftslister (Gule Sider, 1881.no, 180.no, osv)."
    },
    {
        name: "Google Analytics",
        description: "Jeg installerer Google Analytics for å overvåke trafikken, og hvor den kommer fra. Uten ekstra kostnad."
    }
]

const FrontPagePricingDescription = () => (
    <section className="container py-5 mb-5 text-center">
      <div className="row">
        <div className="col-md-5">
          <img className="img-fluid" src="https://www.oyvindremme.no/wp-content/uploads/2021/01/undraw_investing_7u74.png" />
        </div>
        <div className="col-md-7 text-start">
          <div className="mb-5">
            <h2 className="fw-bold">
              <span className="text-primary">0,-</span> i etablering, <span className="text-primary">1500,-</span> per måned
            </h2>
            <p>
              0,- i etablering for en standard hjemmeside med fem faner / sider. Om du trenger mer enn det, kan jeg tilby skreddersydde priser - avhengig av bredden på arbeidet; antall sider du trenger i tillegg og tiden det tar.
            </p>
            <p>
              Du eier domenet, innholdet, oppføringene (Gule Sider, 1881.no, GMB) og profilene. Du kan avlyse når som helst.
            </p>
          </div>
          <div className="row">
            {justifications.map(justification => (
                <PricingJustification
                    name={justification.name}
                    description={justification.description}
                />
            ))}
          </div>
        </div>
      </div>
    </section>
)

export default FrontPagePricingDescription