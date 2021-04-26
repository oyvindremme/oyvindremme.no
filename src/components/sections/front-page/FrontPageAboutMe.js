import * as React from "react"
import { Link } from "gatsby"

import { StaticImage } from "gatsby-plugin-image"

import aboutMeImage from "../../../images/oyvind.jpg"

const FrontPageAboutMe = () => (
    <section className="container p-3 p-md-5 mb-5 text-center">
      <div className="mb-7">
        <h2 className="text-uppercase fw-bold">
          <span className="text-primary">Hvem</span> jeg er
        </h2>
        <p>
          Jeg heter Øyvind Remme, og jeg bygger hjemmesider for små bedrifter. Jeg startet denne bedriften fordi jeg hadde et ønske om å være mer tilgjengelig for familien min. Jeg har utdannet meg som frontend-utvikler, og oversetter dette godt til hva jeg gjør her. <Link to="/om-meg">LÆR MER</Link>
        </p>
      </div>
      <div className="row">
        <div className="col-md-3 mx-auto">
          <StaticImage
            className="img-fluid rounded-circle mb-3"
            src={aboutMeImage}
            alt="Et bilde av Øyvind"
          />
          <p className="fw-bold mb-0">
            Øyvind Remme
          </p>
          <p>
            Eier / Designer
          </p>
        </div>
      </div>
    </section>
)

export default FrontPageAboutMe