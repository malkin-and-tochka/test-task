import React, {useContext} from 'react';
import style from './Row.module.scss'
import {NavLink} from "react-router-dom";
import {TestContext} from "../../../../Context/testContext";

type PropsType = {
    name: string,
    price: number,
    rank: number,
    key: string,
    setModalToggle?: (state: boolean) => void
    symbol: string
}

const Row: React.FC<PropsType> = ({name, price, rank, key, setModalToggle, symbol}) => {

    const context = useContext(TestContext)

    const onClick = () => {
        context.setCurrentCoin(rank)
    }

    const onButtonClick = () => {
        context.setCurrentCoin(rank)
        if (setModalToggle) {
            setModalToggle(true)
        }
    }

    return (
        <div key={key} className={style.row}>
            <NavLink className={style.row} onClick={onClick} to={'/currency-page/' + name}>
                <span>{symbol}</span>
                <span>{name}</span>
                <span>{rank}</span>
                <span>{parseFloat(String(price)).toFixed(2)}</span>
            </NavLink>
            <button onClick={onButtonClick} className={style.addButton}>+</button>
        </div>
    );
};

export default Row;