import * as React from 'react'
import { Link } from 'gatsby'

const FrontPageHeader = () => (
    <>
        <section id="front-page-header" className="align-items-center container-fluid d-flex py-5 text-white min-vh-100" style={{
            "background": "linear-gradient(#ec6a11, #d13c3c)"
        }}>
            <div className="container">
                <div className="row">
                    <div className="col-md-4 d-none d-lg-block">
                        <img className="img-fluid rounded-circle" src="https://www.oyvindremme.no/wp-content/uploads/2021/01/profile-e1611222972953.jpg" />
                    </div>
                    <div className="col-lg-8 d-flex flex-column justify-content-center">
                        <h1 className="display-2 fw-bold">Hjemmesider for små bedrifter</h1>
                        <p className="lead">
                            Jeg bygger 100% optimaliserte og skreddersydde hjemmesider som vil hjelpe til med å skaffe flere kunder
                        </p>
                        <Link>
                            <button type="button" class="btn btn-lg btn-light">Ta kontakt</button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    </>
)

export default FrontPageHeader