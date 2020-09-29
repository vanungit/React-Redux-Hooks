import React, {useState} from 'react';
import style from './Paginator.module.css';
import cn from "classnames";


let ListPaginator = ({totalUsersCount, pageSize = 8, onclickchange, portionSize = 6, currentPage}) => {

    let pagesCount = Math.ceil(totalUsersCount / pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    let porcianCount = Math.ceil(pagesCount / portionSize);
    let [portionNumber, SetPortionNumber] = useState(1);
    let leftPorcianPagesNumber = (portionNumber - 1) * portionSize;
    let rightPorcianPagesNumber = portionNumber * portionSize;

    return <div className={style.paginator}>
        {portionNumber > 1 &&
        <span className={style.prev}>
            <button onClick={() => {
                SetPortionNumber(portionNumber - 1)
            }}>Prev
            </button>
        </span>
        }
        <div className={style.paginator}>
        {
            pages.filter(b => b >= leftPorcianPagesNumber && b <= rightPorcianPagesNumber).map(a => {
                return <span className={cn({[style.b]: currentPage === a})} onClick={() => {
                    onclickchange(a)
                }}>{a}</span>
            })
        }
        </div>
        {porcianCount > portionNumber &&
        <span className={style.next}>
        <button onClick={() => {
            SetPortionNumber(portionNumber + 1)
        }}>Next</button>
        </span>
        }
    </div>


}
export default ListPaginator;




