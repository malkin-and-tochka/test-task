import React from "react";

type TempPortfolioPriceType = {
    sessionPrice: number
}

const tempPortfolioPrice: TempPortfolioPriceType = {
    sessionPrice: 0
}

export const addSessionPortfolioPrice = (price: number) => {
    tempPortfolioPrice.sessionPrice += price
}

export const TempPortfolioPrice = React.createContext(tempPortfolioPrice);

export const TempPortfolioPriceComponentContainer = ({children}: any) => {
    return <TempPortfolioPrice.Provider value={tempPortfolioPrice}>{children}</TempPortfolioPrice.Provider>
}