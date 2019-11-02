import React from 'react'
import OthersList from './OthersList'
import './../App.css'

const OthersLists = ({ data }) => {

  const others = ["Alex", "Bernie", "Claire", "Dee"] // Object.keys(data)
  return (
    <div className="others-lists">
        {others.map(person => <OthersList key={person} name={person} />)}
    </div>
  )
}

export default OthersLists