import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Layout = props => (
    <>
        {console.log(window)}
        <nav className="navbar navbar-expand-lg navbar-light bg-light shadow">
            <div className="container">
                <Link className="navbar-brand" to="/">
                    <StaticImage
                        src="../../../images/logo/logo-full_colors-horizontal.png"
                        placeholder="blurred"
                        width="180"
                    />
                </Link>
                <button className="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navigationBar" aria-controls="navigationBar" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse mr-auto" id="navigationBar">
                    <ul className="navbar-nav ms-auto fw-bold">
                        <li className="nav-item p-3">
                            <Link className="nav-link text-dark" to="/">Hjem</Link>
                        </li>
                        <li className="nav-item p-3">
                            <Link className="nav-link text-dark" to="/om-meg">Om meg</Link>
                        </li>
                        <li className="nav-item p-3">
                            <Link className="nav-link text-dark" to="/#portefolje">Portefølje</Link>
                        </li>
                        <li className="nav-item p-3">
                            <Link className="nav-link text-dark" to="/tjenester">Tjenester</Link>
                        </li>
                        <li className="nav-item p-3">
                            <Link className="nav-link text-dark" to="/kontakt">Kontakt</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        {props.children}
    </>
)

export default Layout