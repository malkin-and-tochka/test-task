import React from 'react';
import './App.css';
import MainScreen from "./components/MainScree/MainScreen";
import {ContextComponentContainer} from "./Context/testContext";
import {HeaderContextComponentContainer} from "./Context/HeaderContext";
import {PortfolioContextComponentContainer} from "./Context/PortfolioContext";
import {TempPortfolioPriceComponentContainer} from "./Context/TempPortfolioPrice";

function App() {
    return (
        <div className="App">
            <TempPortfolioPriceComponentContainer>
                <PortfolioContextComponentContainer>
                    <ContextComponentContainer>
                        <HeaderContextComponentContainer>
                            <MainScreen/>
                        </HeaderContextComponentContainer>
                    </ContextComponentContainer>
                </PortfolioContextComponentContainer>
            </TempPortfolioPriceComponentContainer>
        </div>
    );
}

export default App;
