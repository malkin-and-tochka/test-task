import React, {useContext, useEffect} from 'react';
import style from './Portfolio.module.scss'
import {PortfolioContext} from "../../../../Context/PortfolioContext";

type PortfolioType = {
    setPortfolioModalWindow: (bool: boolean)=>void
}

const Portfolio: React.FC<PortfolioType> = ({setPortfolioModalWindow}) => {
    // const portfolioContext = useContext(PortfolioContext)

    return (
        <PortfolioContext.Consumer>
            {theme =>
                <div onClick={()=>setPortfolioModalWindow(true)} className={style.container}>
                    Portfolio:
                    <div>
                        <span>{parseFloat(String(theme.initialState.totalCost)).toFixed(2)}</span>
                    </div>
                </div>}
        </PortfolioContext.Consumer>
    );
};

export default Portfolio;