import React from "react"
import "./Wiew.css"

export const Wiew =({user})=>{
    return(
        <div className={"wiew"}>
            <span className={"title"}>{user[0]} </span>
            <span className={"desk"}>{user[1]}</span>
        </div>
    )
}

