import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

// TODO: Fix image fetching

const PortfolioItem = props => (
    <div className="col-md-4 mb-4">
        <div className="border border-5 border-end-0 border-primary border-start-0 border-top-0  p-3 p-md-5 rounded-3 shadow position-relative" style={{
            minHeight: "570px"
        }}>
            <div className="mb-3">
                {props.image}
            </div>
            <h3>{props.name}</h3>
            <p>{props.description}</p>
            <a href={props.url} target="_blank" rel="nofollow" className="btn btn-primary text-light fw-bold position-absolute mt-5" style={{
                bottom: "3rem"
            }}>Se hjemmesiden</a>
        </div>
    </div>
)

const FrontPagePortfolio = () => (
    <section id="portefolje" className="container p-3 p-md-5 mb-5 text-center">
      <div className="mb-5">
        <h2 className="text-uppercase fw-bold">
          <span className="text-primary">Min</span> portefølje
        </h2>
      </div>
      <div className="row text-start">
        <PortfolioItem
            image={(
                <StaticImage
                    src="../../../images/plastfritthav.png"
                />
            )}
            name="Plastfritt Hav"
            description="Plastfritt Hav er en miljøorganisasjon med kjærlighet for havet. De samarbeider med skoleklasser, barnehager og bedrifter for å rydde plast fra havet."
            url="https://plastfritthav.no/"
        />
        <PortfolioItem
            image={(
                <StaticImage
                    src="../../../images/cestan.png"
                />
            )}
            name="Cestan AS"
            description="Cestan AS er en bedrift med til sammen 30 års erfaring med prosjektering, bygging og drift av et stort antall maritime fartøy."
            url="https://cestan.no/"
        />
        <PortfolioItem
            image={(
                <StaticImage
                    src="../../../images/jentegeren.png"
                />
            )}
            name="Jentegærn"
            description="Jentegærn (Fredrik Strøm) er en datingcoach som hjelper menn med å finne drømmejenta ved hjelp av naturlige sjekkemetoder."
            url="https://jentegeren.no/"
        />
      </div>
    </section>
)

export default FrontPagePortfolio