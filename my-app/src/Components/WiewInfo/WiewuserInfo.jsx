import React from "react"
import {Wiew} from "./wiew";

 export const UserWiewInfo =({user})=>{
     let userArray= Object.entries(user)

    return(
        <div>
            {
                userArray.map(n => <Wiew user={n} kay={n.id}/>)
            }
        </div>
    )
}

