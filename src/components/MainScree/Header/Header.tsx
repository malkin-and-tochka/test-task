import React, {useContext, useEffect, useState} from 'react';
import style from './Header.module.scss'
import {HeaderContext} from "../../../Context/HeaderContext";
import {getTopThreeCoins} from "../../../api/api";
import {CurrentCoinType} from "../../../Context/ContextTypes";
import TopCoins from "./ TopCoins/TopCoins";
import Portfolio from "./Portfolio/Portfolio";
import {PortfolioContext} from "../../../Context/PortfolioContext";

type HeaderType = {
    setPortfolioModalWindow: (bool:boolean)=>void
}

const Header: React.FC<HeaderType> = ({setPortfolioModalWindow}) => {
    const headerContext = useContext(HeaderContext)
    const [newTopThreeCoins, setNewTopThreeCoins] = useState<CurrentCoinType []>([])

    const portfolioContext = useContext(PortfolioContext)
    useEffect(() => {
        async function fetchData() {
            try {
                setNewTopThreeCoins(await getTopThreeCoins())
            } catch (err) {
                console.log(err);
            }
        }
        fetchData()
    }, [])
    headerContext.setTopThreeCoins(newTopThreeCoins)

    const topCoinsComponent = newTopThreeCoins.map(el =>
        <TopCoins
            name={el.name}
            rank={el.rank}
            key={el.id}
            price={el.priceUsd}
            marketCup={el.marketCapUsd}
        />)

    return (
        <div className={style.header}>
            <div className={style.container}>
                <div className={style.topContainer}>
                    <div className={style.row}>
                        <span>Rank</span>
                        <span>Name</span>
                        <span>Price</span>
                        <span>Market Cap</span>
                    </div>
                    {topCoinsComponent}
                </div>
                <Portfolio setPortfolioModalWindow={setPortfolioModalWindow}/>
            </div>
        </div>
    );
};


export default Header;