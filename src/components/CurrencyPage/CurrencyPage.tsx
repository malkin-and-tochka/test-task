import React, {useContext, useEffect} from 'react';
import style from './CurrencyPage.module.scss'
import {useParams} from "react-router-dom";
import {CurrentCoinType, initialState, TestContext} from "../../Context/testContext";

const CurrencyPage = () => {
    const useParam = useParams()
    console.log(useParam.coinId)
    const context = useContext(TestContext)
    let currentCoin: CurrentCoinType = initialState.currentCoin
    useEffect(() => {
        console.log('привеь')
    }, [])

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