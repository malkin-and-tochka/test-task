import React from "react";
import style from "./TopCoins.module.scss";

type TopCoinsType = {
    name: string
    rank: number
    price: number
    marketCup: number
}

const TopCoins: React.FC<TopCoinsType> = ({name, price, rank, marketCup}) => {
    return (
        <div key={rank} className={style.row}>
            <span>{rank}</span>
            <span>{name}</span>
            <span>{parseFloat(String(price)).toFixed(2)}</span>
            <span>{parseFloat(String(marketCup)).toFixed(2)}</span>
        </div>
    )
}
export default TopCoins