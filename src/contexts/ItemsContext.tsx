import React, { createContext } from 'react'
import { IItem } from '../models'
import useItemsHandler from '../utils/custom-hooks/ItemsHander'

interface IItemsContext {
    itemToEdit: IItem,
    updateItemToEdit: (item: IItem) => void,
    isEditItemFormVisible: boolean,
    showEditItemForm: (bool: boolean) => void
}

export const itemsContext = createContext<IItemsContext>({
    itemToEdit: {} as IItem,
    updateItemToEdit: (item: IItem) => {},
    isEditItemFormVisible: false,
    showEditItemForm: (bool: boolean) => {}
})

const { Provider } = itemsContext

const ItemsProvider = ({ children }: any) => {
    const { itemToEdit, updateItemToEdit, isEditItemFormVisible, showEditItemForm } = useItemsHandler()

    return (
        <Provider value={{ itemToEdit, updateItemToEdit, isEditItemFormVisible, showEditItemForm }}>
            {children}
        </Provider>
    )
}

export default ItemsProvider