import axios from "axios";
// import {saveAvatarPhoto} from "../../redux/profile-reduce";
// import {string} from "yup";

//2759a782-8e45-471c-92ea-60c56e89419e
const instance = axios.create({
    baseURL: 'https://api.coincap.io/v2/',
})

type GetCoinPropsType ={
    id: number
}

export const getCoinData = (id: number) => {
    return (
        instance.get(`/assets`)
            .then(response => response)
    )
}
export const getCoinsPortion = async (portionNumber: number) => {
    return (
        await instance.get(`/assets`)
            .then(response => response.data.data.filter((el: { rank: number; }) => el.rank <= portionNumber * 5 && el.rank > (portionNumber - 1) * 5))
    )
}
