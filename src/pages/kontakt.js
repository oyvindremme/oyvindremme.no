import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/sections/misc/Layout"
import PageHeader from "../components/sections/misc/PageHeader"
import SEO from "../components/SEO"

const Kontakt = () => (
    <Layout>
        <SEO
            siteTitle="Kontakt"
            siteDescription="Kontakt meg for en uforpliktende samtale om hjemmesiden din."
        />
        <PageHeader
            headingText="Kontakt"
        />
        <section className="container p-3 p-md-5 my-5">
            <div className="row">
                <div className="col-md-6">
                    <h2 className="fw-bold text-uppercase mb-4">
                        <span className="text-primary">Send</span> meg en melding
                    </h2>
                    <form action="https://formsubmit.co/3f8d4b08ef8f1ce9c1ad8bdfa09f2244" method="POST">
                        <div class="mb-3">
                            <label for="Bedrift" class="form-label">Bedrift / firma</label>
                            <input type="text" class="form-control" id="Bedrift" name="Bedrift" required />
                        </div>
                        <div class="mb-3">
                            <label for="Kontaktperson" class="form-label">Kontaktperson</label>
                            <input type="text" class="form-control" id="Kontaktperson" name="Kontaktperson" required />
                        </div>
                        <div class="mb-3">
                            <label for="Telefonnummer" class="form-label">Telefonnummer</label>
                            <input type="tel" class="form-control" id="Telefonnummer" name="Telefonnummer" required />
                        </div>
                        <div class="mb-3">
                            <label for="Epostadresse" class="form-label">Epostadresse</label>
                            <input type="email" class="form-control" id="Epostadresse" name="Epostadresse" required />
                        </div>
                        <div class="mb-3">
                            <label for="Melding" class="form-label">Melding</label>
                            <textarea class="form-control" id="Melding" name="Melding" required rows="8"></textarea>
                        </div>
                        <button type="submit" class="btn btn-primary text-light">Send</button>
                    </form>
                </div>
                <div className="col-md-6">
                    <StaticImage
                        src="../images/illustrations/contact.png"
                        placeholder="blurred"
                        alt="Illustrasjon med bilde av mennesker og ikoner som gir bilde på forskjellige måter å ta kontakt på"
                    />
                    <p>
                        <strong>E-post:</strong> <a href="mailto:hei@oyvindremme.no">hei@oyvindremme.no</a>
                    </p>
                    <p>
                        <strong>Telefon:</strong> <a href="tel:48450240">484 50 240</a>
                    </p>
                </div>
            </div>
        </section>
    </Layout>
)

export default Kontakt