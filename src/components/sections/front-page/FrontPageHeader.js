import * as React from 'react'
import { Link } from 'gatsby'

const FrontPageHeader = () => (
    <>
        <section id="front-page-header" className="container-fluid bg-primary bg-gradient py-5 text-white">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4">
                        <img className="img-fluid rounded-circle" src="https://www.oyvindremme.no/wp-content/uploads/2021/01/profile-e1611222972953.jpg" />
                    </div>
                    <div className="col-lg-8 d-flex flex-column justify-content-center">
                        <h1>Hjemmesider for små bedrifter</h1>
                        <p className="fs-5">
                            Jeg bygger 100% skreddersydde og optimaliserte hjemmesider som kan hjelpe deg med å skaffe flere kunder
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