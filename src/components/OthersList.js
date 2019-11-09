import React from 'react'
import OthersItem from './OthersItem'
import './../App.css'
import './Lists.css'

const OthersList = ({ name, index, data }) => {

  const possessiveName = name[name.length - 1] === 's' ? `${name}'` : `${name}'s`

  const imageIndex = {
    '1': 'partridge',
    '2': 'robin',
    '3': 'bird',
    '4': 'dove',
  }

  return (
    <div className="others-list">
      <div className="others-name">
        <p className="name">{possessiveName} list</p>
        <img src={`./images/${imageIndex[index + 1]}.png`} alt={`${imageIndex[index + 1]}`} />
      </div>
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
