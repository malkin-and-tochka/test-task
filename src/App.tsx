import React from 'react';
import './App.css';
import MainScreen from "./components/MainScree/MainScreen";
import {ContextComponentContainer} from "./Context/testContext";
import {HeaderContextComponentContainer} from "./Context/HeaderContext";
import {PortfolioContextComponentContainer} from "./Context/PortfolioContext";

function App() {
    return (
        <div className="App">
            <PortfolioContextComponentContainer>
                <ContextComponentContainer>
                    <HeaderContextComponentContainer>
                        <MainScreen/>
                    </HeaderContextComponentContainer>
                </ContextComponentContainer>
            </PortfolioContextComponentContainer>
        </div>
    );
}

export default App;
