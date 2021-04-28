import * as React from "react"
import { Link } from "gatsby"

const Pricing = () => (
    <section className="container py-5 mb-5 text-center">
      <div className="row">
        <div className="col-md-4 mb-4">
          <div className="p-0 shadow">
            <div className="bg-secondary text-light fs-4 p-4">
              Standard + Blogging
            </div>
            <div className="p-4">
              <p className="text-secondary fs-4 mb-1 text-uppercase">Startpris</p>
              <h3 className="fs-1 text-primary fw-bold mb-4">
                3000,-* <span className="fs-3 fw-normal">/mnd</span>
              </h3>
              <ul className="list-group list-group-flush text-start mb-4">
                <li className="text-center align-items-center justify-content-center d-flex list-group-item">
                  Innlegg på rundt 1000 ord
                </li>
                <li className="text-center align-items-center justify-content-center d-flex list-group-item">
                  Ett innlegg per måned
                </li>
                <li className="text-center align-items-center justify-content-center d-flex list-group-item">
                  1500,- per ekstra innlegg
                </li>
              </ul>
              <Link to="/kontakt" className="btn btn-lg btn-primary text-light">
                Ta kontakt
              </Link>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="p-0 shadow">
            <div className="bg-primary text-light fs-4 p-4">
              Standard
            </div>
            <div className="p-4">
              <p className="text-secondary fs-4 mb-1 text-uppercase">5 sider</p>
              <h3 className="fs-1 text-primary fw-bold mb-4">
                1500,-* <span className="fs-3 fw-normal">/mnd</span>
              </h3>
              <ul className="list-group list-group-flush text-start mb-4">
                <li className="text-center align-items-center justify-content-center d-flex list-group-item">
                  Ubegrenset redigering
                </li>
                <li className="text-center align-items-center justify-content-center d-flex list-group-item">
                  Inkludert webhosting / webhotell
                </li>
                <li className="text-center align-items-center justify-content-center d-flex list-group-item">
                  Kundestøtte 24 timer i døgnet
                </li>
              </ul>
              <Link to="/kontakt" className="btn btn-lg btn-primary text-light">
                Ta kontakt
              </Link>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="p-0 shadow">
            <div className="bg-secondary text-light fs-4 p-4">
              Logo
            </div>
            <div className="p-4">
              <p className="text-secondary fs-4 mb-1 text-uppercase">Inkludert!</p>
              <h3 className="fs-1 text-primary fw-bold mb-4">
                0,-
              </h3>
              <ul className="list-group list-group-flush text-start mb-4">
                <li className="text-center align-items-center justify-content-center d-flex list-group-item">
                  To revisjoner
                </li>
                <li className="text-center align-items-center justify-content-center d-flex list-group-item">
                  Alle filformater
                </li>
                <li className="text-center align-items-center justify-content-center d-flex list-group-item">
                  GRATIS med abonnement
                </li>
              </ul>
              <Link to="/kontakt" className="btn btn-lg btn-primary text-light">
                Ta kontakt
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
)

export default Pricing