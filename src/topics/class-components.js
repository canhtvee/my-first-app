import React from "react";

export default class ClassComponent extends React.Component {
    render() {
        return(
            <p>
                <h1>Class Component</h1>
                <h1>Hello, {this.props.name}</h1>
                <h2>Hello, {this.props.sex}</h2>
                <h3>Hello, {this.props.age}</h3>
            </p>
        )
    }
}

