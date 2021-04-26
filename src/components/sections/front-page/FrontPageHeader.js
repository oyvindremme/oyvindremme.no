import * as React from 'react'
import { Link } from 'gatsby'

import headerImage from "../../../images/page-header.jpg"

const FrontPageHeader = () => (
    <>
        <section id="front-page-header" className="align-items-center container-fluid d-flex p-3 py-7 text-white" style={{
            "background-image": `linear-gradient(rgb(236, 106, 17, .9), rgba(209, 60, 60, .9)), url(${headerImage})`,
            backgroundSize: "auto, cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "0 50%"
        }}>
            <div className="container text-center">
                <h1 className="display-1 fw-bold mb-3">Hjemmesider for små bedrifter</h1>
                <p className="lead fw-normal mb-4">
                    Jeg bygger 100% optimaliserte og skreddersydde hjemmesider som vil hjelpe deg med å skaffe flere kunder
                </p>
                <Link to="/kontakt">
                    <button type="button" class="btn btn-lg text-uppercase btn-light">Ta kontakt</button>
                </Link>
            </div>
        </section>
    </>
)

export default FrontPageHeader