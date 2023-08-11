import React, {useContext, useState} from 'react';
import style from './CurrencyPage.module.scss'
import {useParams} from "react-router-dom";
import {initialState, TestContext} from "../../Context/testContext";
import {CurrentCoinType} from "../../Context/ContextTypes";
import Graphics from "./Graphics";
import {PortfolioContext} from "../../Context/PortfolioContext";

const CurrencyPage = () => {
    const [value, setValue] = useState(0)
    const useParam = useParams()
    const context = useContext(TestContext)
    const portfolioContext = useContext(PortfolioContext)

    let currentCoin: CurrentCoinType = initialState.currentCoin
    if (useParam.coinId) {
        currentCoin = context.getCoinById(useParam.coinId.toString())
    }

    const onClick = () => {
        portfolioContext.addCoinToPortfolio(context.initialState.currentCoin, value)
        setValue(0)
    }

    return (
        <div className={style.container}>
            <div className={style.row}>
                <div className={style.tableWrapper}>
                    <div className={style.table}>
                        <div className={style.row}>
                            <span>Symbol</span>
                            <span>Name</span>
                            <span>Top</span>
                            <span>Price</span>
                            <span>Price for the last 24 hours</span>
                        </div>
                        <div className={style.row}>
                            <span>{currentCoin.symbol}</span>
                            <span>{currentCoin.id}</span>
                            <span>{currentCoin.rank}</span>
                            <span>{parseFloat(String(currentCoin.priceUsd)).toFixed(2)}</span>
                            <span>{parseFloat(String(currentCoin.vwap24Hr)).toFixed(2)}</span>
                        </div>
                    </div>
                </div>
                <div className={style.addInput}>
                    {/*// @ts-ignore*/}
                    <input onChange={e => setValue(e.target.value)} value={value} className={style.inputNum}
                           placeholder={"Enter desired number"} type='number'/>
                    <button className={style.addButton} onClick={onClick}>+</button>
                </div>
            </div>
            <div className={style.containerGraphics}>
                <Graphics coin={currentCoin}/>
            </div>
        </div>
    )
};
export default CurrencyPage;