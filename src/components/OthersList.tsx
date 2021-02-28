import React from 'react'
import OthersItem from './OthersItem'
import { IItem } from '../models'
import './../App.css'
import './Lists.css'

const OthersList = ({ name, index, list }: { name: string, index: number, list: IItem[]}) => {

  const possessiveName = name[name.length - 1] === 's' ? `${name}'` : `${name}'s`

  const imageIndex: {[key: string]: string} = {
    '1': 'partridge',
    '2': 'robin',
    '3': 'bird',
    '4': 'dove',
  }

  const getImageName = (index: number): string => {
    return imageIndex[(index + 1).toString()]
  }

  return (
    <div className="others-list">
      <div className="others-name">
        <p className="name">{possessiveName} list</p>
        <img src={`./images/${getImageName(index)}.png`} alt={`${imageIndex[index + 1]}`} />
      </div>
      <div className="list">
        {list.map((item: IItem, idx: number) => <OthersItem 
          key={`${item.name}-${idx}`}
          item={item}
        />)}
      </div>
    </div>
  )
}

export default OthersList
