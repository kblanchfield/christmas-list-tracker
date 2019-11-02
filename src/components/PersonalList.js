import React from 'react'
import NewPersonalItem from './NewPersonalItem'
import './../App.css'

const PersonalList = ({ name, data }) => {

  return (
    <div className="personal-list">
        <p>Hi, <span className="display-name">{name}</span>. Here's your Christmas list</p>
        <NewPersonalItem />
    </div>
  )
}

export default PersonalList