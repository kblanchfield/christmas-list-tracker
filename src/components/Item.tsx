import React from 'react'
import { IItem } from '../models'
import './Lists.css'

const Item = ({ item: { name, comment, links } }: { item: IItem }) => {
    return (
        <div className='item'>
            <span>{name}</span>
            {comment && <span className="item-comment"> - {comment}</span>}
            <br />
            {links && links.map((link: string, idx: number) => {
                    if (link.length > 0) {
                        return <a href={link} target='_blank' rel="noopener noreferrer" key={`${link}-${idx}`}>[example]</a>
                    } else {
                        return ''
                    }
                })
            }
        </div>
    )
}

export default Item