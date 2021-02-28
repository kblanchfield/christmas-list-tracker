import { useState } from 'react'
import { IItem } from '../../models'

const useItemHandler = () => {
    const [isEditItemFormVisible, setEditFormVisible] = useState<boolean>(false)
    const [itemToEdit, setItemToEdit] = useState<IItem>({} as IItem)

    const showEditItemForm = (bool: boolean) => {
        setEditFormVisible(bool)
    }

    const updateItemToEdit = (item: IItem) => {
        setItemToEdit(item)
    }

    return {
        isEditItemFormVisible,
        showEditItemForm,
        itemToEdit,
        updateItemToEdit
    }
}

export default useItemHandler