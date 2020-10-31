import React from 'react'
import './Lists.css'

const Item = ({ name, comment, links }) => {
    return (
        <div className='item'>
            <span>{name}</span>
            {comment && <span className="item-comment"> - {comment}</span>}
            <br />
            {links && links.map((link, idx) => {
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