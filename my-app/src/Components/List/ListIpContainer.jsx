import React, {useEffect} from "react"
import List from "./List"
import {GetList, GetListAll} from "../../redux/List-reducer";
import {useDispatch, useSelector} from "react-redux";
import ListPaginator from "../../paginator/usersPaginator";

export const ListComponent = (props) => {

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(GetList())//gating List part
        dispatch(GetListAll())//gating All list
    }, [])
    const ItemsAll = useSelector((state) => state.ListPage.AllItems)
    const currentPage = useSelector((state) => state.ListPage.currentPage)
    const AllItemsSHow = useSelector((state) => state.ListPage.AllItemsSHow)
    const totalUsersCount = AllItemsSHow.length

    const onclickchange = (page) => {
        dispatch(GetList(page))
    }

    return (
        <div>
            <ListPaginator onclickchange={onclickchange} totalUsersCount={totalUsersCount} currentPage={currentPage}/>

            {
                ItemsAll.map(n => <List list={n}/>)
            }

        </div>
    )
}
