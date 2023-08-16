import React, {useContext} from 'react';
import style from './ModalPortfolio.module.scss'
import {CurrentPortfolio, PortfolioContext} from "../../../../../Context/PortfolioContext";
import {CurrentCoinType} from '../../../../../Context/ContextTypes';

type ModalPortfolioType = {
    setPortfolioModalWindow: (bool: boolean) => void
}

const ModalPortfolio: React.FC<ModalPortfolioType> = ({setPortfolioModalWindow}) => {
    const testFunc = (theme: { initialState: { currentCoins: { coin: CurrentCoinType; amount: number; }[]; }; }) => {
        return theme.initialState.currentCoins.map((el: { coin: CurrentCoinType; amount: number; }) =>
            <PortfolioCoin
                //@ts-ignore
                id={el.id}
                coin={el.coin}
                amount={el.amount}
            />)
    }

    return (
        <PortfolioContext.Consumer>
            {theme =>
                <div onClick={() => {
                    setPortfolioModalWindow(false)
                }} className={style.modal}>
                    <div onClick={e => e.stopPropagation()} className={style.modal__content}>
                        <div className={style.row}>
                            <span>Name</span>
                            <span>Amount</span>
                            <span>Total price</span>
                        </div>
                        {testFunc(theme)}
                        <button className={style.defaultButton} onClick={() => {
                            setPortfolioModalWindow(false)
                        }}>Go back
                        </button>
                    </div>
                </div>}
        </PortfolioContext.Consumer>
    );
};

const PortfolioCoin: React.FC<CurrentPortfolio> = ({coin, amount}) => {
    const portfolioContext = useContext(PortfolioContext)
    const onClick = () => {
        portfolioContext.removeCoinFromPortfolio(coin, amount)
    }
    return (
        <div className={style.row}>
            <span>{coin.name}</span>
            <span>{amount}</span>
            <span>{parseFloat(String(coin.priceUsd * amount)).toFixed(2)}</span>
            <button className={style.negativeButton} onClick={onClick}>Remove coin</button>
        </div>
    )
}

export default ModalPortfolio;