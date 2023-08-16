import axios, {AxiosResponse} from "axios";
import {CurrentCoinType} from "../Context/ContextTypes";

//2759a782-8e45-471c-92ea-60c56e89419e
const instance = axios.create({
    baseURL: 'https://api.coincap.io/v2/',
})

export const getCoinData = async () => {
    try {
        return (
            await instance.get<CurrentCoinType>(`/assets`)
                .then(response => response)
        )
    } catch (e) {
        console.log(e)
    }
}
export const getCoinsPortion = async (portionNumber: number) => {
    try {
        return (
            await instance.get<{ data: CurrentCoinType [] }>(`/assets`)
                .then(response => response.data.data.filter((el) => el.rank <= portionNumber * 5 && el.rank > (portionNumber - 1) * 5))

        )
    } catch (e) {
        console.log(e)
    }
}
export const getTopThreeCoins = async () => {
    try {
        return (
            await instance.get(`/assets`)
                .then(response => response.data.data.filter((el: { rank: number; }) => el.rank < 4))
        )
    } catch (e) {
        console.log(e)
    }
}

export const getCoinHistory = async (id: string) => {
    try {
        return (
            await instance.get(`/assets/${id}/history?interval=m30`)
                .then(response => response.data.data)
        )
    } catch (e) {
        console.log(e)
    }
}