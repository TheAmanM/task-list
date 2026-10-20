import './InfoCard.css'
import React from 'react'

const InfoCard = (props) => {
    return (
        <div className="card">
            <div className="circle" style={{"backgroundColor": `rgb(242,235,251)`}}>
                {/* <div className="icon"> */}
                    {props.icon}
                {/* </div> */}
            </div>
            <div className="text">
                <h2>{props.name}</h2>
                <p>{props.value}</p>
            </div>
        </div>
    )
}

export default InfoCard