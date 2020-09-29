import React from "react"
import { useSelector} from "react-redux";
import {withRouter} from "react-router-dom";
import {UserWiewInfo} from "./WiewuserInfo";
import {Wiew} from "./wiew";

const WiewInfo = (props) => {
    let userId = +props.match.params.userId
    const ItemsAll = useSelector((state) => state.ListPage.AllItemsSHow)

    let user = ItemsAll.filter(n => n.order == userId) //gating List who click
    return (
        <div>
            {
                user.map(n => <Wiew kay={n.id} user={n}/>)
            }
        </div>
    )
}
export default withRouter(WiewInfo);
