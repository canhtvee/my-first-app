import React from "react"
import DataSource from "./data-sources"

export default function displayData(DisplayComponent, getData) {
    return class extends React.Component {
        constructor(props) {
            super(props)
            this.state = {
                data: getData()
            }
        }

        render() {
            return(
                <DisplayComponent text={this.state.data} {...this.props}/>
            )
        }
    }
}


const DisplayDataInSmallFont = displayData(
    SmallFontComponent, 
    () => new DataSource().getText()
);

const DisplayDataInLargeFont = displayData(
    LargeFontComponent, 
    () => new DataSource().getText()
);

export {DisplayDataInSmallFont, DisplayDataInLargeFont}



function SmallFontComponent(props) {
    return <h4>{props.text} {props.name} {props.age}</h4>
}

function LargeFontComponent(props) {
    return <h1>{props.text} {props.others}</h1>
}
