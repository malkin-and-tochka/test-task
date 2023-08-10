import React from "react";

export type CurrentCoinType = {
    changePercent24Hr: number
    explorer: string
    id: string
    marketCapUsd: number
    maxSupply: number
    name: string
    priceUsd: number
    rank: number
    supply: number
    symbol: string
    volumeUsd24Hr: number
    vwap24Hr: number
}
type InitialStateType = {
    currentCoin: CurrentCoinType,
    pageCoins: CurrentCoinType []
    setPageCoins: (pageCoins: CurrentCoinType [])=>void
    setCurrentCoin: (rank: number) => void
    getCoinById: (id: string) => CurrentCoinType
}

const setPageCoins = (newPageCoins: CurrentCoinType []) => {
    initialState.pageCoins = newPageCoins
}

const setCurrentCoin = (rank: number) => {
    const tempPageCoins = initialState.pageCoins
    initialState.currentCoin =  tempPageCoins.filter(coin => coin.rank === rank)[0]
}

const getCoinById = (id: string) => {
    console.log(initialState)
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
    pageCoins: [],
    setPageCoins,
    setCurrentCoin,
    getCoinById
}

export const TestContext = React.createContext(initialState);

// const [updatedTestContext, setUpdatedTestContext] = useState(initialState)
const value = {
    initialState,
    setPageCoins,
    setCurrentCoin,
    getCoinById
}
// @ts-ignore
export const ContextComponentContainer = ({children}) => {
    // @ts-ignore
    return <TestContext.Provider value={value}>{children}</TestContext.Provider>
}