import React from 'react';
import style from './CoinModalWindow.module.scss'

type CoinModalWindowType = {
    name: string,
    removeWindow: () => void
}

const CoinModalWindow: React.FC<CoinModalWindowType> = ({name, removeWindow}) => {
    return (
        <div className={style.modal}>
            <div className={style.modal__content}>
                {name}
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