import React, { useState, useEffect } from 'react'
import axios from 'axios'
import PersonalList from './PersonalList'
import OthersLists from './OthersLists'
import '../App.css'

const Lists = ({ user, user: {id, name} })=> {

const [personalList, setPersonalList] = useState([])
const [othersLists, setOthersLists] = useState({})

useEffect(() => {
    const getLists = async id => {
        const result = await axios(
        `https://localhost:4001/lists?user=${id}`, // get list data for user
        )
        setPersonalList(result.personalList)
        setOthersLists(result.othersLists)
    }
    getLists()
}, [id])

  return (
    <>
        <PersonalList name={name} data={personalList} />
        <OthersLists id={id} data={othersLists} />
    </>
  )
}

export default Lists