import './App.css';
import React from "react"
import { DisplayDataInSmallFont, DisplayDataInLargeFont } from './topics/higher-order-component'

function App() {

  return (
    <div className="App">
      <header className="App-header">
          <DisplayDataInSmallFont others="canh"/>
          <DisplayDataInLargeFont others="canh"/>
      </header>
    </div>
  );
}

export default App;

