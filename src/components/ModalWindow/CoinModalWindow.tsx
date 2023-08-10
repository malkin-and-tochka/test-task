import React, {useContext} from 'react';
import style from './CoinModalWindow.module.scss'
import {TestContext} from "../../Context/testContext";

type CoinModalWindowType = {
    removeWindow: () => void
}

const CoinModalWindow: React.FC<CoinModalWindowType> = ({removeWindow}) => {
    const context = useContext(TestContext)
    // const name = context.initialState.currentCoin.name
    return (
        <div className={style.modal}>
            <div className={style.modal__content}>
                {context.initialState.currentCoin.name}
                <input className={style.inputNum} placeholder={"Enter desired number"} type='number'/>
                <div className={style.subRow}>
                    <button className={style.addButton}>Add in portfolio</button>
                    <button className={style.negativeButton} onClick={removeWindow}>cancel</button>
                </div>
            </div>
        </div>
    );
};

export default CoinModalWindow;