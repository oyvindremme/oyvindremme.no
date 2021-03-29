import * as React from "react"
import { Link } from "gatsby"

const FrontPageAboutMe = () => (
    <section className="container py-5 mb-5 text-center">
      <div className="mb-7">
        <h2 className="text-uppercase fw-bold">
          <span className="text-primary">Hvem</span> jeg er
        </h2>
        <p>
          Jeg heter Øyvind Remme, og jeg bygger hjemmesider for små bedrifter. Jeg startet denne bedriften fordi jeg hadde et ønske om å være mer tilgjengelig for familien min. Jeg har utdannet meg som frontend-utvikler, og oversetter dette godt til hva jeg gjør her. <Link to="/om-meg"><a>LÆR MER</a></Link>
        </p>
      </div>
      <div className="row">
        <div className="col-md-3 mx-auto">
          <img className="img-fluid rounded-circle mb-3" src="https://www.oyvindremme.no/wp-content/uploads/2021/01/profile-e1611222972953.jpg" />
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