import React, {useContext, useEffect} from 'react';
import style from './Portfolio.module.scss'
import {PortfolioContext} from "../../../../Context/PortfolioContext";
import {TempPortfolioPrice} from "../../../../Context/TempPortfolioPrice";

type PortfolioType = {
    setPortfolioModalWindow: (bool: boolean)=>void
}

const Portfolio: React.FC<PortfolioType> = ({setPortfolioModalWindow}) => {
    const tempPriceContext = useContext(TempPortfolioPrice)
    console.log(tempPriceContext.sessionPrice)
    return (
        <PortfolioContext.Consumer>
            {theme =>
                <div onClick={()=>setPortfolioModalWindow(true)} className={style.container}>
                    Portfolio:
                    <div>
                        <span>{parseFloat(String(theme.initialState.totalCost - tempPriceContext.sessionPrice)).toFixed(2)} USD</span><br/>
                        <span>+ {theme.initialState.totalCost ? parseFloat(String(tempPriceContext.sessionPrice)).toFixed(2) : 0} USD{tempPriceContext.sessionPrice ? <> ({parseFloat(String((tempPriceContext.sessionPrice / theme.initialState.totalCost) * 100)).toFixed(2)}%)</> : null}</span>
                    </div>
                </div>}
        </PortfolioContext.Consumer>
    );
};

export default Portfolio;