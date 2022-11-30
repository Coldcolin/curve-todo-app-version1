import React from 'react'
import "./Card.css"

const Card = (props) => {
  
  return (
    <div className="card-holder">
      <div className="card-right" style={{backgroundColor: props.bg}}>
        <div className="image-holder">
          {/* <img src="" alt="picture"/> */}
        </div>
      </div>
      <div className="card-left">
        <div className="left-top">
          <h3>{props.largeText}</h3>
        </div>
        <div className="left-middle">
          <p>{props.smallText}</p>
        </div>
        <div className="left-bottom">
          <div className="bottom-right">
            <div className="ash-box"></div>
            <div className="ash-box"></div>
            {props.eval && <div className="ash-box"></div>}
          </div>
          <div className="bottom-left">{props.num}% Completed</div>
        </div>
      </div>
    </div>
  )
}

export default Card