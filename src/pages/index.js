import * as React from "react"
import { Link } from 'gatsby'

// Sections
import FrontPageHeader from '../components/sections/front-page/FrontPageHeader';
import FrontPageFeatures from '../components/sections/front-page/FrontPageFeatures';
import FrontPagePricingDescription from "../components/sections/front-page/FrontPagePricingDescription";
import FrontPagePortfolio from "../components/sections/front-page/FrontPagePortfolio"

const Home = () => (
  <>
    <FrontPageHeader />
    <FrontPageFeatures />
    <FrontPagePricingDescription />
    <FrontPagePortfolio />
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
    <section className="container py-5 mb-5 text-center">
      <div className="row">
        <div className="col-md-4">
          <div className="p-0 border">
            <div className="bg-secondary text-light fs-4 p-4">
              Standard + Blogging
            </div>
            <div className="p-4">
              <p className="text-secondary fs-4 mb-1 text-uppercase">Startpris</p>
              <h3 className="fs-1 text-primary fw-bold mb-4">
                3000,- <span className="fs-3 fw-normal">/mnd</span>
              </h3>
              <ul className="list-group list-group-flush text-start mb-4">
                <li className="align-items-center justify-content-center d-flex list-group-item">
                  Innlegg på rundt 1000 ord
                </li>
                <li className="align-items-center justify-content-center d-flex list-group-item">
                  Ett innlegg per måned
                </li>
                <li className="align-items-center justify-content-center d-flex list-group-item">
                  1500,- per ekstra innlegg
                </li>
              </ul>
              <Link to="/kontakt" className="btn btn-lg btn-primary">
                Ta kontakt
              </Link>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="p-0 border">
            <div className="bg-primary text-light fs-4 p-4">
              Standard
            </div>
            <div className="p-4">
              <p className="text-secondary fs-4 mb-1 text-uppercase">5 sider</p>
              <h3 className="fs-1 text-primary fw-bold mb-4">
                1500,- <span className="fs-3 fw-normal">/mnd</span>
              </h3>
              <ul className="list-group list-group-flush text-start mb-4">
                <li className="align-items-center justify-content-center d-flex list-group-item">
                  Ubegrenset redigering
                </li>
                <li className="align-items-center justify-content-center d-flex list-group-item">
                  Inkludert webhosting / webhotell
                </li>
                <li className="align-items-center justify-content-center d-flex list-group-item">
                  Kundestøtte 24 timer i døgnet
                </li>
              </ul>
              <Link to="/kontakt" className="btn btn-lg btn-primary">
                Ta kontakt
              </Link>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="p-0 border">
            <div className="bg-secondary text-light fs-4 p-4">
              Logo
            </div>
            <div className="p-4">
              <p className="text-secondary fs-4 mb-1 text-uppercase">Inkludert!</p>
              <h3 className="fs-1 text-primary fw-bold mb-4">
                0,- <span className="fs-3 fw-normal">/mnd</span>
              </h3>
              <ul className="list-group list-group-flush text-start mb-4">
                <li className="align-items-center justify-content-center d-flex list-group-item">
                  Innlegg på rundt 1000 ord
                </li>
                <li className="align-items-center justify-content-center d-flex list-group-item">
                  Ett innlegg per måned
                </li>
                <li className="align-items-center justify-content-center d-flex list-group-item">
                  1500,- per ekstra innlegg
                </li>
              </ul>
              <Link to="/kontakt" className="btn btn-lg btn-primary">
                Ta kontakt
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  </>
)

export default Home
