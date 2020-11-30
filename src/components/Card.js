import React from 'react'
// import './styles/Greet.css'

const Card = (props) => {
    return(
        <div className="Card">
            <p>{props.username}</p>
            <img src={props.source} alt={props.username}/>
        </div>
    )
}

export default Card