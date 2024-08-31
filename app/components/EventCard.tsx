import React from 'react'

const EventCard = ({cardImg, cardTitle, cardPrice, cardAvailability, cardDateTime }) => {
  return (
    <div>
        <img src={cardImg} className='card-img-top object-cover img-fluid' style={{height: '200px'}} />
        <div className='list-group border-0 '>
            <div className='list-group-item border-0 py-2'>
                <div className='card-text opacity-50'>{cardDateTime}</div>
                <div className='card-text opacity-50'>{cardTitle}</div>
            </div>
            <div className='list-group-item bg-secondary bg-opacity-10 border-0 py-2'>
                <div className='card-text opacity-75'>{cardPrice}</div>
                <div className='card-text opacity-75'>{cardAvailability}</div>
            </div>
            
            
        </div>
        
    </div>
  )
}

export default EventCard