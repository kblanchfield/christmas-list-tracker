import React, { useContext } from 'react'
import { itemsContext } from "../contexts/ItemsContext"
import Item from './Item'
import { IItem } from '../models'
import './Lists.css'

const PersonalItem = ({ item }: { item: IItem }) => {
    const { isEditItemFormVisible, updateItemToEdit, showEditItemForm } = useContext(itemsContext) 

    const toggleForm = () => {
        if (!isEditItemFormVisible) {
            showEditItemForm(true)
            updateItemToEdit(item)
        }
        if (isEditItemFormVisible) {
            showEditItemForm(false)
        }
    }

    return (
        <div className='item-block-personal'>
            <i onClick={toggleForm} className="far fa-snowflake"></i>
            <Item item={item} />
        </div>
    )
}

export default PersonalItem