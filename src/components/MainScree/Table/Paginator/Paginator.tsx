import React, {useState} from 'react';
import style from './Paginator.module.scss'

type PaginatorType = {
    currentPage: number
    onPageChange: (page: number) => void
}

const Paginator: React.FC<PaginatorType> = ({currentPage, onPageChange}) => {
    let portionSize = 5
    let pageCount = Math.ceil(100 / portionSize)

    let [portionNumber, setPortionNumber] = useState(1)
    let leftBarrier = (portionNumber - 1) * portionSize - 1
    let rightBarrier = portionNumber * portionSize
    let pages: number [] = []
    for (let i = 1; i <= pageCount; i++) {
        pages.push(i)
    }
    let paginatorPage = pages
        .filter(p => p - 1 > leftBarrier && p <= rightBarrier)
        .map(p => {
            // @ts-ignore
            return <span onClick={()=>{
                onPageChange(p)
            }} className={(currentPage === p && style.selectPage) || style.pages}>{p}</span>
        })

    return (
        <div className={style.paginatorWrapper}>
            {portionNumber !== 1 &&
                <button className={style.paginatorButton} onClick={() => {
                    setPortionNumber(portionNumber - 1)
                }}>
                    prev
                </button>
            }
            {paginatorPage}
            {pageCount > portionNumber &&
                <button className={style.paginatorButton} onClick={() => {
                    setPortionNumber(portionNumber + 1)
                }}>
                    next
                </button>
            }
        </div>
    );
};

export default Paginator;