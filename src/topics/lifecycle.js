import React from "react";

export default class LifeCycleComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
    }

    componentDidMount() {
        this.timer  = setInterval(
            () => this.tick(), 1000  
        );
    }

    componentWillUnmount() {
        clearInterval(this.timer)
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }

    render() {
        return(
            <div>
                <h1>Lifecyle Component</h1>
                <h2>It is {this.state.date.toLocaleTimeString()}</h2>
            </div>
        );
    }
}