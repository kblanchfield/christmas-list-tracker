import React from 'react'
import OthersItem from './OthersItem'
import './../App.css'
import './Lists.css'

const OthersList = ({ name, data }) => {

  console.log("OthersList props: ", name, data)
  const possessiveName = name[name.length - 1] === 's' ? `${name}'` : `${name}'s`

  return (
    <div className="others-list">
      <p className="name">{possessiveName} list</p>
      <div className="list">
        {data.map(item => <OthersItem 
          key={item.name}
          username={item.username}
          name={item.name}
          comment={item.comment}
          links={item.links}
          reserver={item.reserver}
          buyer={item.buyer}
          bought={item.bought} 
        />)}
      </div>
    </div>
  )
}

export default OthersList
