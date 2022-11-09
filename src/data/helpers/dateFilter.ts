import { Item } from "../types/Item";

export const getCurrentMonth = () =>{
    let now = new Date();
    return `${now.getFullYear()}-${now.getMonth()+1}`;
}

export const filterListByMonth = (list: Item[], date: Date): Item[] => {
    let newList: Item[] = [];
    let dateSplit = date.split('-')


    return newList
}