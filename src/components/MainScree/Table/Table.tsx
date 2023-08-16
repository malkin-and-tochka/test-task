import React, {useContext, useEffect, useState} from 'react';
import Row from "./Row/Row";
import style from './Table.module.scss'
import CoinModalWindow from "../../ModalWindow/CoinModalWindow";
import {getCoinsPortion} from "../../../api/api";
import {TestContext} from "../../../Context/testContext";
import Paginator from "./Paginator/Paginator";
import {CurrentCoinType} from "../../../Context/ContextTypes";

const Table: React.FC = () => {
    const [modalToggle, setModalToggle] = useState<boolean>(false)
    const [currentPage, serCurrentPage] = useState<number>(1)
    const [portionCoins, setPortionCoins] = useState<CurrentCoinType [] | undefined>([])

    const context = useContext(TestContext)

    useEffect(() => {
        async function fetchData() {
            try {
                setPortionCoins(await getCoinsPortion(currentPage))
            } catch (err) {
                console.log(err);
            }
        }

        fetchData();
    }, []);

    context.setPageCoins(portionCoins)
    const removeWindow = () => setModalToggle(false)
    const openModalWindow = () => {
        setModalToggle(!modalToggle)
    }
    const CoinsElements = portionCoins?.map((item: {
        symbol: any;
        id: string; priceUsd: number; rank: number; }) =>
        <Row
            name={item.id}
            price={item.priceUsd}
            rank={item.rank}
            key={item.id}
            setModalToggle={openModalWindow}
            symbol={item.symbol}
        />)

    const onPageChange = (page: number) => {
        async function fetchData() {
            try {
                setPortionCoins(await getCoinsPortion(page))
            } catch (err) {
                console.log(err);
            }
        }
        fetchData();
    }
    const onButtonClick = () => {
        if (setModalToggle) {
            setModalToggle(true)
        }
    }

    return (
        <div className={style.tableContainer}>
            <div className={style.table}>
                <div className={style.row}>
                    <div className={style.row}>
                        <span>Symbol</span>
                        <span>Name</span>
                        <span>Top</span>
                        <span>Price</span>
                    </div>
                    <button onClick={onButtonClick} className={style.addButton}>+</button>
                </div>
                {CoinsElements}
                <Paginator onPageChange={onPageChange} currentPage={currentPage}/>
            </div>
            {modalToggle ? <CoinModalWindow removeWindow={removeWindow}/> : <></>}
        </div>
    );
};

export default Table;