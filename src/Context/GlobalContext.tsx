import React, {useContext, useReducer} from "react";
//
// const SET_CURRENT_COIN = 'SET_CURRENT_COIN'
// const GET_COIN_BY_ID = 'GET_COIN_BY_ID'
//
// type CurrentCoinType = {
//     changePercent24Hr: "2.4765321279402955"
//     explorer: "https://blockchain.info/"
//     id: "bitcoin"
//     marketCapUsd: "575030805654.3689033590251600"
//     maxSupply: "21000000.0000000000000000"
//     name: "Bitcoin"
//     priceUsd: "29562.4379558473376394"
//     rank: "1"
//     supply: "19451400.0000000000000000"
//     symbol: "BTC"
//     volumeUsd24Hr: "4330388412.1130873698778794"
//     vwap24Hr: "29193.7508542854601593"
// }
//
// const initialState = {
//     currentCoin: {
//         changePercent24Hr: "2.4765321279402955",
//         explorer: "https://blockchain.info/",
//         id: "bitcoin",
//         marketCapUsd: "575030805654.3689033590251600",
//         maxSupply: "21000000.0000000000000000",
//         name: "Bitcoin",
//         priceUsd: "29562.4379558473376394",
//         rank: "1",
//         supply: "19451400.0000000000000000",
//         symbol: "BTC",
//         volumeUsd24Hr: "4330388412.1130873698778794",
//         vwap24Hr: "29193.7508542854601593"
//     }
// }
//
// // @ts-ignore
// const CurrentCoinContext = React.createContext(initialState);
//
// type SetCurrentCoinType = {
//     type: 'SET_CURRENT_COIN',
//     payload: CurrentCoinType
// }
//
// export const setCurrentCoin = (payload: CurrentCoinType): SetCurrentCoinType => {
//     return {type: SET_CURRENT_COIN, payload}
// }
//
// export const globalReducer = (state = initialState, action: SetCurrentCoinType) => {
//     switch (action.type) {
//         case SET_CURRENT_COIN:
//             return {
//                 ...state,
//                 currentCoin: state
//             }
//         default:
//             return state
//     }
// }
//
// export const CurrentCoinProvider: React.FC = (props) =>  {
//     // @ts-ignore
//     const [coin, dispatch] = useReducer(globalReducer, initialState)
//
//     const coinData = {coin, dispatch}
//
//     // @ts-ignore
//     return <CurrentCoinContext.Provider value={coinData} {...props}/>
// }
// export function useCurrentCoinContext() {
//     return useContext(CurrentCoinContext);
// }
// @ts-ignore