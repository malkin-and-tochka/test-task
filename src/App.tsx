import React from 'react';
import logo from './logo.svg';
import './App.css';
import MainScreen from "./components/MainScree/MainScreen";
import {ContextComponentContainer} from "./Context/testContext";
import {HeaderContextComponentContainer} from "./Context/HeaderContext";

function App() {
    return (
        <div className="App">
            <ContextComponentContainer>
                <HeaderContextComponentContainer>
                    <MainScreen/>
                </HeaderContextComponentContainer>
            </ContextComponentContainer>
        </div>
    );
}

export default App;
