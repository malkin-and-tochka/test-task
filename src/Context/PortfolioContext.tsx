import React from "react";
import {CurrentCoinType} from "./ContextTypes";

type CurrentPortfolio = {
    coin: CurrentCoinType
    amount: number
}

type PortfolioStateType = {
    totalCost: number
    sessionPurchases: number
    currentAmount: CurrentPortfolio []
}

const portfolioState: PortfolioStateType = {
    totalCost: 0,
    sessionPurchases: 0,
    currentAmount: []
}


export const TestContext = React.createContext(portfolioState);