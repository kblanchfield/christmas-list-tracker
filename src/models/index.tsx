export interface IAuth {
    id: number,
    name: string,
}

export interface IItem {
    username: string,
    name: string,
    comment: string,
    links: string[],
    reserver?: string,
    buyer?: string,
    bought: boolean,
}

export interface IUser {
    user: string,
    item: IItem,
}

export interface IOthersLists {
    [key: string]: IItem[], 
}