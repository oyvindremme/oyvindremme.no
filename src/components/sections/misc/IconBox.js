import * as React from "react"

const IconBox = props => (
    <div className={`col-md-${props.colWidth} mb-4`}>
        <div className="mb-3">
            <i className={`bi ${props.iconName} fs-1 text-primary`}></i>
        </div>
        <h3 className="h4 fw-bold">{props.name}</h3>
        <p>
            {props.description}
        </p>
    </div>
)

export default IconBox