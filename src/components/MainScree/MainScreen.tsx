import React from 'react';
import Table from "./Table/Table";
import Header from "./Header/Header";
import style from './MainScreen.module.scss'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import CurrencyPage from "../CurrencyPage/CurrencyPage";

const MainScreen: React.FC = () => {
    return (
        <div className={style.mainScreen}>
            <BrowserRouter>
                <Routes>
                    <Route path='/table' element={<Table/>}/>
                    <Route path='/currency-page/:coinId' element={<CurrencyPage/>}/>
                </Routes>
            </BrowserRouter>
            <Header/>
        </div>
    );
};

export default MainScreen;