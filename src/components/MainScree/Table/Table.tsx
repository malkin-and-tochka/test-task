import React, {useContext, useEffect, useState} from 'react';
import Row from "./Row/Row";
import style from './Table.module.scss'
import CoinModalWindow from "../../ModalWindow/CoinModalWindow";
import {getCoinsPortion} from "../../../api/api";
import {TestContext} from "../../../Context/testContext";
import Paginator from "./Paginator/Paginator";

const Table: React.FC = () => {
    const [modalToggle, setModalToggle] = useState(false)
    const [currentPage, serCurrentPage] = useState(1)
    const [portionCoins, setPortionCoins] = useState([])

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
        console.log("click")
    }

    const CoinsElements = portionCoins?.map((item: { id: string; priceUsd: number; rank: number; }) => <Row
        name={item.id} price={item.priceUsd} rank={item.rank} key={item.id} setModalToggle={openModalWindow}/>)

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

    return (
        <div className={style.tableContainer}>
            <div className={style.table}>
                <div className={style.infoRow}>
                    <span>Name</span>
                    <span>Rank</span>
                    <span>Price</span>
                    <span></span>
                </div>
                {CoinsElements}
                <Paginator onPageChange={onPageChange} currentPage={currentPage}/>
            </div>
            {modalToggle ? <CoinModalWindow removeWindow={removeWindow}/> : <></>}
        </div>

    );
};

export default Table;