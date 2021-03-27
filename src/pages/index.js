import * as React from "react"
import { Link } from 'gatsby'

// Sections
import FrontPageHeader from '../components/sections/front-page/FrontPageHeader';
import FrontPageFeatures from '../components/sections/front-page/FrontPageFeatures';

const Home = () => (
  <>
    <FrontPageHeader />
    <FrontPageFeatures />
    <section className="container py-5 mb-5 text-center">
      <div className="row">
        <div className="col-lg-5">
          <img className="img-fluid" src="https://www.oyvindremme.no/wp-content/uploads/2021/01/undraw_investing_7u74.png" />
        </div>
        <div className="col-lg-7 text-start">
          <div className="mb-5">
            <h2>
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
            <div className="col-lg-6">
              <svg className="mb-3 text-primary" xmlns="http://www.w3.org/2000/svg" width="44" height="44" fill="currentColor" viewBox="0 0 16 16">
                <path d="M6.956 1.745C7.021.81 7.908.087 8.864.325l.261.066c.463.116.874.456 1.012.964.22.817.533 2.512.062 4.51a9.84 9.84 0 0 1 .443-.05c.713-.065 1.669-.072 2.516.21.518.173.994.68 1.2 1.273.184.532.16 1.162-.234 1.733.058.119.103.242.138.363.077.27.113.567.113.856 0 .289-.036.586-.113.856-.039.135-.09.273-.16.404.169.387.107.819-.003 1.148a3.162 3.162 0 0 1-.488.9c.054.153.076.313.076.465 0 .306-.089.626-.253.912C13.1 15.522 12.437 16 11.5 16H8c-.605 0-1.07-.081-1.466-.218a4.826 4.826 0 0 1-.97-.484l-.048-.03c-.504-.307-.999-.609-2.068-.722C2.682 14.464 2 13.846 2 13V9c0-.85.685-1.432 1.357-1.616.849-.231 1.574-.786 2.132-1.41.56-.626.914-1.279 1.039-1.638.199-.575.356-1.54.428-2.59z"/>
              </svg>
              <h3>Hosting</h3>
              <p>
                Hosting er inkludert, og bygd inn i den månedlige prisen for hjemmesiden.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="container py-5 mb-5 text-center">
      <div className="mb-5">
        <h2 className="text-uppercase">
          <span className="text-primary">Min</span> portefølje
        </h2>
      </div>
      <div className="row text-start">
        <div className="col-lg-4">
          <div className="border border-5 border-end-0 border-primary border-start-0 border-top-0  p-5 rounded-3 shadow">
            <img className="img-fluid mb-3" src="https://www.oyvindremme.no/wp-content/uploads/2021/01/plastfritthav.no_-1_macbookgrey_front-e1611226484700.png" />
            <h3>Plastfritt Hav</h3>
            <p>Plastfritt Hav er en miljøorganisasjon med kjærlighet for havet. De samarbeider med skoleklasser, barnehager og bedrifter for å rydde plast fra havet.</p>
            <a className="btn btn-primary">Se hjemmesiden</a>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="border border-5 border-end-0 border-primary border-start-0 border-top-0  p-5 rounded-3 shadow">
            <img className="img-fluid mb-3" src="https://www.oyvindremme.no/wp-content/uploads/2021/01/plastfritthav.no_-1_macbookgrey_front-e1611226484700.png" />
            <h3>Plastfritt Hav</h3>
            <p>Plastfritt Hav er en miljøorganisasjon med kjærlighet for havet. De samarbeider med skoleklasser, barnehager og bedrifter for å rydde plast fra havet.</p>
            <a className="btn btn-primary">Se hjemmesiden</a>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="border border-5 border-end-0 border-primary border-start-0 border-top-0  p-5 rounded-3 shadow">
            <img className="img-fluid mb-3" src="https://www.oyvindremme.no/wp-content/uploads/2021/01/plastfritthav.no_-1_macbookgrey_front-e1611226484700.png" />
            <h3>Plastfritt Hav</h3>
            <p>Plastfritt Hav er en miljøorganisasjon med kjærlighet for havet. De samarbeider med skoleklasser, barnehager og bedrifter for å rydde plast fra havet.</p>
            <a className="btn btn-primary">Se hjemmesiden</a>
          </div>
        </div>
      </div>
    </section>
    <section className="container py-5 mb-5 text-center">
      <div className="mb-5">
        <h2 className="text-uppercase">
          <span className="text-primary">Hvem</span> jeg er
        </h2>
        <p>
          Jeg heter Øyvind Remme, og jeg bygger hjemmesider for små bedrifter. Jeg startet denne bedriften fordi jeg hadde et ønske om å være mer tilgjengelig for familien min. Jeg har utdannet meg som frontend-utvikler, og oversetter dette godt til hva jeg gjør her. <Link to="/om-meg"><a>LÆR MER</a></Link>
        </p>
      </div>
      <div className="row">
        <div className="col-lg-3 mx-auto">
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
        <div className="col-lg-4">
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
        <div className="col-lg-4">
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
        <div className="col-lg-4">
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
