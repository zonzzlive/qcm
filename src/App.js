import logo from './logo.svg';
import './App.css';
import { Hello } from './components/Hello';
import React from 'react';
import List from './components/List';
import Qcm from './components/Qcm'

class App extends React.Component {
  
  identity = {
    firstname : "Louison",
    lastname : "Clery"
  }

  render (){
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            {/*Edit <code>src/App.js</code> and save to reload.*/}
          </p>
          {/*<Hello identity={this.identity} />*/}
          {/*<List/>*/}
          <Qcm/>
        </header> 
      </div>
    );
  }
}

export default App;
