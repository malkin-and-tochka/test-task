import React, {useContext} from 'react';
import style from './CurrencyPage.module.scss'
import {useParams} from "react-router-dom";
import {initialState, TestContext} from "../../Context/testContext";
import {CurrentCoinType} from "../../Context/ContextTypes";

const CurrencyPage = () => {
    const useParam = useParams()
    console.log(useParam.coinId)
    const context = useContext(TestContext)
    let currentCoin: CurrentCoinType = initialState.currentCoin

    if (useParam.coinId) {
        currentCoin = context.getCoinById(useParam.coinId.toString())
        console.log(context.getCoinById(useParam.coinId.toString()))
    }


    return (
        <div className={style.container}>
            {currentCoin.id}
        </div>
    )

};

export default CurrencyPage;