import * as React from "react"
import pageHeaderImage from "../../../images/page-header.jpg"

const PageHeader = props => (
    <section className="container-fluid bg-primary text-light p-5 pt-7 pb-7" style={{
        "background-image": `linear-gradient(rgb(236, 106, 17, .9), rgba(209, 60, 60, .9)), url(${pageHeaderImage})`,
        backgroundSize: "auto, cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "0 50%"
    }}>
        <div className="container">
            <h1 className="text-center fw-bold h2 m-0">
                {props.headingText}
            </h1>
        </div>
    </section>
)

export default PageHeader