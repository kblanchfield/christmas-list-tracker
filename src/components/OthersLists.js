import React, { useContext, useEffect } from 'react'
import { authContext } from "../contexts/AuthContext"
import { listsContext } from "../contexts/ListsContext"
import { apiRequest } from '../utils/Helpers'
import OthersList from './OthersList'
import './../App.css'

const OthersLists = () => {
  const { auth } = useContext(authContext) 
  const { othersLists, updateOthersLists } = useContext(listsContext)

  useEffect(() => {
    const getOthersLists = async () => {
      const newLists = await apiRequest(
          `http://localhost:4001/items/others/${auth.name}`,
          "get"
      )
      if (!newLists.found) {
          console.log("Couldn't find others' lists for some reason")
          return
      }
      updateOthersLists(newLists.othersLists)
    }
    getOthersLists()
  }, [])

  return (
    <div className="others-lists">
        {Object.keys(othersLists).map(person => <OthersList key={person} name={person} data={othersLists[person]} />)}
    </div>
  )
}

export default OthersLists