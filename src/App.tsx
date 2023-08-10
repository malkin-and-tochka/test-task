import React from 'react';
import logo from './logo.svg';
import './App.css';
import MainScreen from "./components/MainScree/MainScreen";
import {ContextComponentContainer} from "./Context/testContext";

function App() {
  return (
    <div className="App">
        <ContextComponentContainer>
            <MainScreen />
        </ContextComponentContainer>
    </div>
  );
}

export default App;
