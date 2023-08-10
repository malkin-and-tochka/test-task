import React from "react";
import {CurrentCoinType} from "./ContextTypes";


type InitialStateType = {
    currentCoin: CurrentCoinType,
    pageCoins: CurrentCoinType []
}

const setPageCoins = (newPageCoins: CurrentCoinType []) => {
    initialState.pageCoins = newPageCoins
}

const setCurrentCoin = (rank: number) => {
    const tempPageCoins = initialState.pageCoins
    initialState.currentCoin =  tempPageCoins.filter(coin => coin.rank === rank)[0]
}

const getCoinById = (id: string) => {
    return initialState.pageCoins.filter(coin => coin.id === id)[0]
}

export const initialState: InitialStateType = {
    currentCoin: {
        changePercent24Hr: 2.4765321279402955,
        explorer: "https://blockchain.info/",
        id: "bitcoin",
        marketCapUsd: 575030805654.3689033590251600,
        maxSupply: 21000000.0000000000000000,
        name: "Bitcoin",
        priceUsd: 29562.4379558473376394,
        rank: 1,
        supply: 19451400.0000000000000000,
        symbol: "BTC",
        volumeUsd24Hr: 4330388412.1130873698778794,
        vwap24Hr: 29193.7508542854601593
    },
    pageCoins: []
}


type ValueType = {
    initialState: InitialStateType
    setPageCoins: (pageCoins: CurrentCoinType [])=>void
    setCurrentCoin: (rank: number) => void
    getCoinById: (id: string) => CurrentCoinType
}

const value: ValueType = {
    initialState,
    setPageCoins,
    setCurrentCoin,
    getCoinById
}

export const TestContext = React.createContext(value);
// @ts-ignore
export const ContextComponentContainer = ({children}) => {
    // @ts-ignore
    return <TestContext.Provider value={value}>{children}</TestContext.Provider>
}