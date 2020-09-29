import vpn from "./data.json"

export const ListApi = {
    GetList(page = 1, portionSize = 6) {
        let leftPorcianPagesNumber = (page - 1) * portionSize;
        let rightPorcianPagesNumber = page * portionSize;

        return Object.entries(vpn.filter(b => b.order >= leftPorcianPagesNumber && b.order <= rightPorcianPagesNumber));
    },
    GetListAll() {
        return Object.entries(vpn)
    },


}

