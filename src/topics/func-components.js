import React from "react"

export default function FuncComponent(props) {
    return(
        <p>
            <h1>Function Component</h1>
            <h1>Hello, {props.name}</h1>
            <h2>Hello, {props.sex}</h2>
            <h3>Hello, {props.age}</h3>
        </p>
    )
}
