import React from "react"


class RenderPropComponent extends React.Component {
    constructor(props) {
        super(props);
        this.handleMouseMove = this.handleMouseMove.bind(this);
        this.state = { x: 0, y: 0 };
    }

    handleMouseMove(event) {
        this.setState({
          x: event.clientX,
          y: event.clientY
        });
    }  

    render() {
        return(
            <div style={{height: '100vh'}} onMouseMove={this.handleMouseMove}>
                <h1>Render Props</h1>
                {this.props.mrender(this.state)}
            </div>
        )
    }
}

class Logo extends React.Component {
    render() {
        const mouse = this.props.mouse
        return(
            // <img src="/logo.svg" style={{ position: 'absolute', left: mouse.x, top: mouse.y }}/>
            <h1 style={{position: 'absolute', left: mouse.x, top: mouse.y}}>mouse here</h1>
        );
    }
}

export {RenderPropComponent, Logo};

