import React from "react"
import DataSource from "./data-sources"

export default function displayData(DisplayComponent, getData) {
    return class extends React.Component {
        constructor(props) {
            super(props)
            this.state = {
                data: getData(DataSource)
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
    (DataSource) => new DataSource().getText()
);

const DisplayDataInLargeFont = displayData(
    LargeFontComponent, 
    (DataSource) => new DataSource().getText()
);

export {DisplayDataInSmallFont, DisplayDataInLargeFont}



function SmallFontComponent(props) {
    return <h4>{props.text} {props.others}</h4>
}

function LargeFontComponent(props) {
    return <h1>{props.text} {props.others}</h1>
}
