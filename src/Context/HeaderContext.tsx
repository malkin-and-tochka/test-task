import React from "react";
import {CurrentCoinType} from "./ContextTypes";

type InitialStateType = {
    TopThreeCoins: CurrentCoinType []
}
//-------------------initial state-------------------
export const initialState: InitialStateType = {
    TopThreeCoins: []
}

//-------------------methods-------------------
const setTopThreeCoins = (newTopThreeCoins: CurrentCoinType []) => {
    initialState.TopThreeCoins = newTopThreeCoins
}

//-------------------final value-------------------
type ValueType = {
    initialState: InitialStateType
    setTopThreeCoins: (newTopThreeCoins: CurrentCoinType []) => void
}

const value: ValueType = {
    initialState,
    setTopThreeCoins
}

export const HeaderContext = React.createContext(value);
export const HeaderContextComponentContainer = ({children}: any) => {
    return <HeaderContext.Provider value={value}>{children}</HeaderContext.Provider>
}