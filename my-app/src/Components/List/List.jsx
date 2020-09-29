import React from "react"
import {NavLink} from "react-router-dom";
import a from './List.module.css';

const List = ({list}) => {
    return (
        <div>
            <NavLink to={'/WiewInfo/' + list.order}>
                <div className={a.list}>
                    <img src={list[1].photo} alt="" className={a.photo}/>
                    <span className={a.midnightblue}>{list.order} </span>
                    {list[1].territory}
                    {list[1].formname}
                </div>
            </NavLink>
        </div>
    )
}
export default List

