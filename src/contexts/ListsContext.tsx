import React, { createContext } from 'react'
import { IItem, IOthersLists } from '../models'
import useListsHandler from '../utils/custom-hooks/ListsHander'

interface IListsContext {
    personalList: IItem[],
    othersLists: IOthersLists,
    updatePersonalList: (list: IItem[]) => void,
    updateOthersLists: (othersLists: IOthersLists) => void,
}

export const listsContext = createContext<IListsContext>({
  personalList: [],
  othersLists:  {},
  updatePersonalList: (list: IItem[]) => {},
  updateOthersLists: (othersLists: IOthersLists) => {},
})

const { Provider } = listsContext

const ListsProvider = ({ children }: any) => {
    const { personalList, othersLists, updatePersonalList, updateOthersLists } = useListsHandler()

    return (
        <Provider value={{ personalList, othersLists, updatePersonalList, updateOthersLists }}>
            {children}
        </Provider>
    )
}

export default ListsProvider