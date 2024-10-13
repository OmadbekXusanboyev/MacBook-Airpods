import React from 'react'
import './Macbook.css'

function Macbook({item, addCard}) {
  return (
    <div className='card'>
            <img src={item.img} alt="" />
                  <div className="card-title">
                    <h3>{item.name}</h3>
                    <h5>${item.price} <span>USD</span></h5>
                    <div className="card-btns">
                      <button onClick={()=>{
                        addCard(item.id)
                      }} className='buy'>Buy</button>
                      <button className='learn-more'>Details</button>
                    </div>
                  </div>
    </div>
  )
}

export default Macbook