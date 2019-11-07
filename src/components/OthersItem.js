import React, { useContext}  from 'react'
import { authContext } from "../contexts/AuthContext"
import { listsContext } from "../contexts/ListsContext"
import { apiRequest } from '../utils/Helpers'
import './Lists.css'

const OthersItem = ({ username, name, comment, links, reserver, buyer, bought }) => {

    console.log(username, name, comment, links, reserver, buyer, bought)

    const { auth } = useContext(authContext)
    const { othersLists, updateOthersLists } = useContext(listsContext)
  
    const getUpdatedOthersLists = async () => {
        const newLists = await apiRequest(
            `http://localhost:4001/items/others/${auth.name}`,
            "get"
        )
        if (!newLists.found) {
            console.log("Couldn't find others' lists for some reason")
            return
        }
        updateOthersLists(newLists.othersLists)
        console.log("new lists context: ", othersLists)
    }

    const updateBoughtState = async () => {
        const response = await apiRequest(
            `http://localhost:4001/items`,
            "put",
            { item: { username, name, comment, links, buyer: auth.name, reserver, bought: !bought }}
        )
        if (!response.updated) {
            console.log("couldn't update others' lists for some reason")
            return
        } else {
            console.log("item updated")
        }
        getUpdatedOthersLists()
    }

    const updateReservedState = async () => {
        const newReserver = reserver ? '' : auth.name
        const response = await apiRequest(
            `http://localhost:4001/items`,
            "put",
            { item: { username, name, comment, links, reserver: newReserver, bought: false }}
        )
        if (!response.updated) {
            console.log("couldn't update others' lists for some reason")
            return
        } else {
            console.log("item updated")
        }
        getUpdatedOthersLists()
    }

    return (
        <div style={{ textDecoration: bought ? 'line-through' : ''}}>
            <p>
                <button onClick={updateBoughtState}>
                    {bought 
                        ? <i className="far fa-check-square"></i>
                        : <i className="far fa-square"></i>
                    }
                </button>
                {name}, {comment}, {links.map(link => {
                if (link.length > 0) {
                    return <a href={link} target='_blank' key={link}>Link</a>
                }
                })}
                {bought
                    ? `Bought by ${buyer}`
                    :
                        <button onClick={updateReservedState}>
                            <i className="fas fa-snowman"></i>
                        </button>
                }
                {!bought && reserver
                    ? `Reserved by ${reserver}`
                    : ''
                }
            </p>
        </div>
    )
}
  
export default OthersItem