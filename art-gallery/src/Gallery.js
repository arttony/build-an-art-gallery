import React from 'react'

export function Gallery(props) {
    return (
        <div style={{'width': '100%'}}>
            <img src={props.objectImg} alt={props.title} />
            <p>{props.artist}</p>
        </div>
    )
}
