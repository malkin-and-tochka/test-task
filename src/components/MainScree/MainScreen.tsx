import React, {useEffect, useState} from 'react';
import Table from "./Table/Table";
import Header from "./Header/Header";
import style from './MainScreen.module.scss'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import CurrencyPage from "../CurrencyPage/CurrencyPage";
import ModalPortfolio from "./Header/Portfolio/ModalPortfolio/ModalPortfolio";
import {localStorageToStore, setLocalStorage} from "../../Context/PortfolioContext";

const MainScreen: React.FC = () => {
    const [portfolioModalWindow, setPortfolioModalWindow] = useState(false)
    useEffect(()=>{
        localStorageToStore()
    }, [])
    return (
        <div className={style.mainScreen}>
            <BrowserRouter>
                <Routes>
                    <Route path='/test-task' element={<Table/>}/>
                    <Route path='/currency-page/:coinId' element={<CurrencyPage/>}/>
                </Routes>
            </BrowserRouter>
            <Header setPortfolioModalWindow={setPortfolioModalWindow}/>
            {portfolioModalWindow ? <ModalPortfolio setPortfolioModalWindow={setPortfolioModalWindow}/> : <></>}
        </div>
    );
};

export default MainScreen;