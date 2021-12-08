import React from "react";


export default class DataSource extends React.Component{
    constructor(props) {
        super(props);
      }
    getText() {
        return "This text was returned from DataSource.getText()"
    }
}