import React, {useState} from "react";
import {CurrentCoinType} from "./ContextTypes";
import {addSessionPortfolioPrice} from "./TempPortfolioPrice";

export type CurrentPortfolio = {
    coin: CurrentCoinType
    amount: number

}

const addCoinToPortfolio = (coin: CurrentCoinType, amount: number) => {
    let count = 0
    portfolioState.initialState.currentCoins.forEach(el => {
        if (el.coin.id === coin.id) {
            el.amount = Number(el.amount) + Number(amount)
            count++
        }
    })
    if (!count) {
        portfolioState.initialState.currentCoins.push({coin, amount})
    }

    portfolioState.initialState.sessionPurchases += amount * coin.priceUsd
    portfolioState.initialState.totalCost += amount * coin.priceUsd

    addSessionPortfolioPrice(amount * coin.priceUsd)

    localStorage.setItem('initialState', JSON.stringify(portfolioState.initialState))
}

const removeCoinFromPortfolio = (coin: CurrentCoinType, amount: number) => {
    portfolioState.initialState.totalCost = portfolioState.initialState.totalCost - amount * coin.priceUsd
    portfolioState.initialState.currentCoins = portfolioState.initialState.currentCoins.filter(el => el.coin.id !== coin.id)

    localStorage.setItem('initialState', JSON.stringify(portfolioState.initialState))
}

export const localStorageToStore = () => {
    if (!localStorage.length) {
        setLocalStorage()
    }
    // @ts-ignore
    portfolioState.initialState = JSON.parse(localStorage.getItem('initialState'))
}

export const setLocalStorage = () => {
    localStorage.setItem('initialState', JSON.stringify(portfolioState.initialState))
}

type InitialStateType = {
    totalCost: number
    sessionPurchases: number
    currentCoins: CurrentPortfolio []
}

const initialState: InitialStateType = {
    totalCost: 0,
    sessionPurchases: 0,
    currentCoins: [],
}

export type PortfolioStateType = {
    initialState: InitialStateType
    addCoinToPortfolio: (coin: CurrentCoinType, amount: number) => void
    removeCoinFromPortfolio: (coin: CurrentCoinType, amount: number) => void
}

const portfolioState: PortfolioStateType = {
    initialState,
    addCoinToPortfolio,
    removeCoinFromPortfolio
}


export const PortfolioContext = React.createContext(portfolioState);

export const PortfolioContextComponentContainer = ({children}: any) => {
    const [data, setData] = useState(portfolioState)

    return <PortfolioContext.Provider value={data}>{children}</PortfolioContext.Provider>
}