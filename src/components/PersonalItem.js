import React, { useContext } from 'react'
import { itemsContext } from "../contexts/ItemsContext"
import Item from './Item'
import './Lists.css'

const PersonalItem = ({ name, comment, links }) => {
    const { isEditItemFormVisible, updateItemToEdit, showEditItemForm } = useContext(itemsContext) 

    const toggleForm = () => {
        if (!isEditItemFormVisible) {
            const item = { name, comment, links }
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
            <Item name={name} comment={comment} links={links} />
        </div>
    )
}

export default PersonalItem