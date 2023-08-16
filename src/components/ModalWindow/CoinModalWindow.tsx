import React, {useContext, useState} from 'react';
import style from './CoinModalWindow.module.scss'
import {TestContext} from "../../Context/testContext";
import {PortfolioContext} from "../../Context/PortfolioContext";

type CoinModalWindowType = {
    removeWindow: () => void
}

const CoinModalWindow: React.FC<CoinModalWindowType> = ({removeWindow}) => {
    const [value, setValue] = useState(0)
    const context = useContext(TestContext)
    const portfolioContext = useContext(PortfolioContext)
    const onClick = () => {
        portfolioContext.addCoinToPortfolio(context.initialState.currentCoin, value)
        setValue(0)
    }
    return (
        <div onClick={removeWindow} className={style.modal}>
            <div onClick={e => e.stopPropagation()} className={style.modal__content}>
                {context.initialState.currentCoin.name}
                {/*// @ts-ignore*/}
                <input onChange={e => setValue(e.target.value)} value={value} className={style.inputNum}
                       placeholder={"Enter desired number"} type='number'/>
                <div className={style.subRow}>
                    <button className={style.defaultButton} onClick={onClick}>Add in portfolio</button>
                    <button className={style.negativeButton} onClick={removeWindow}>cancel</button>
                </div>
            </div>
        </div>
    );
};

export default CoinModalWindow;