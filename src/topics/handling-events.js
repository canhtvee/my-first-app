import React from "react";

export default class HandlingEvent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isToggleOn: true};
    }

    handleClick = ()=> {
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn
        }), () => {
            console.log(this.state.isToggleOn)
        });
        // this.setState({isToggleOn: !this.state.isToggleOn})
    }

    render() {
        return(
            <div>
                <h1>Handling Event</h1>
                <button onClick={this.handleClick}>
                    {this.state.isToggleOn? "ON" : "OFF"}
                </button>
            </div>
            
        )
    }

}