import React, { useState, useContext } from 'react'
import { authContext } from "../contexts/AuthContext"
import './../App.css'

const OthersList = ({ name}) => {
  const { auth } = useContext(authContext)

  // useEffect here to update db if user reserves or compeltes an item on another's list
  // const user_id = auth.id - so we know who has reserved or completed an item on another's list

  return (
    <div className="others-list">
        <p>Here is the list for: {name}</p>
    </div>
  );
}

export default OthersList;