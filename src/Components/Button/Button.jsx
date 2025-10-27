import React from "react"
import classnames from "classnames"
import './Button.css'

export default function Button({type = 'primary', 
    shape= 'square', 
    children= 'submit', //lable
    onClick})
    {
        const typeClass = `button ${type}`
        const shapeClass = shape === "pills" ? "pills" : ""

        const className = classnames(typeClass, shapeClass)

    return (
        <>
            <button className={className} onClick={onClick}>{children}</button>
        </>
    )
}