import React, {useContext} from 'react';
import style from './Row.module.scss'
import {NavLink} from "react-router-dom";
import {TestContext} from "../../../../Context/testContext";

type PropsType = {
    name: string,
    price: number,
    rank: number,
    key: string,
    openModalWindow?: () => void
}

const Row: React.FC<PropsType> = ({name, price, rank, key, openModalWindow}) => {

    const context = useContext(TestContext)

    const onClick = () => {
        context.setCurrentCoin(rank)
    }

    return (
        <div className={style.row}>
            <NavLink onClick={onClick} to={'/currency-page/' + name}>
                <span>{name}</span>
                <span>{rank}</span>
                <span>{price}</span>
            </NavLink>
            <button onClick={openModalWindow} className={style.addButton}>+</button>
        </div>
    );
};

export default Row;