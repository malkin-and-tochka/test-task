import React from "react";
import {CurrentCoinType} from "./ContextTypes";

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

    localStorage.setItem('totalCost', '')

    const obj = {
        coin,
        amount
    }

    // @ts-ignore
    localStorage.setItem(coin.id , obj)
}

const removeCoinFromPortfolio = (coin: CurrentCoinType, amount: number) => {
    portfolioState.initialState.totalCost = portfolioState.initialState.totalCost - amount * coin.priceUsd
    console.log(portfolioState.initialState.totalCost)
    portfolioState.initialState.currentCoins = portfolioState.initialState.currentCoins.filter(el => el.coin.id !== coin.id)
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
    return <PortfolioContext.Provider value={portfolioState}>{children}</PortfolioContext.Provider>
}