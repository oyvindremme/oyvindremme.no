import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/sections/misc/Layout"
import PageHeader from "../components/sections/misc/PageHeader"

const Kontakt = () => (
    <Layout>
        <PageHeader
            headingText="Kontakt"
        />
        <section className="container p-3 p-md-5 my-5">
            <div className="row">
                <div className="col-md-6">
                    <h2 className="fw-bold text-uppercase mb-4">
                        <span className="text-primary">Send</span> meg en melding
                    </h2>
                    <form action="https://formsubmit.co/hei@oyvindremme.no" method="POST">
                        <div class="mb-3">
                            <label for="company" class="form-label">Bedrift / firma</label>
                            <input type="email" class="form-control" id="company" aria-describedby="emailHelp" />
                        </div>
                        <div class="mb-3">
                            <label for="contactperson" class="form-label">Kontaktperson</label>
                            <input type="email" class="form-control" id="contactperson" aria-describedby="emailHelp" />
                        </div>
                        <div class="mb-3">
                            <label for="phone" class="form-label">Telefonnummer</label>
                            <input type="email" class="form-control" id="phone" aria-describedby="emailHelp" />
                        </div>
                        <div class="mb-3">
                            <label for="emailaddress" class="form-label">Epostadresse</label>
                            <input type="email" class="form-control" id="emailaddress" aria-describedby="emailHelp" />
                        </div>
                        <div class="mb-3">
                            <label for="message" class="form-label">Melding</label>
                            <textarea class="form-control" id="message" rows="8"></textarea>
                        </div>
                        <button type="submit" class="btn btn-primary text-light">Send</button>
                    </form>
                </div>
                <div className="col-md-6">
                    <StaticImage
                        src="../images/illustrations/contact.png"
                        placeholder="blurred"
                    />
                    <p>
                        <strong>E-post:</strong> hei@oyvindremme.no
                    </p>
                    <p>
                        <strong>Telefon:</strong> 484 50 240
                    </p>
                </div>
            </div>
        </section>
    </Layout>
)

export default Kontakt