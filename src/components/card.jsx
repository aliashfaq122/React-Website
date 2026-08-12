import React from 'react'

export const Card = ({ item }) => {
    return (
        <>
            <div className='cardParent '>
                <div className="cardImg">
                    <img src={item.image} alt={item.title} width={280} />
                </div>
                <div className="cardHead">{item.title}</div>
                <div className="cardBody">{item.description}</div>
                <div className="cardFoot flex justify-between">
                    <button>Rs.{item.price}</button>
                    <div className="icon"><i class="fa-solid fa-plus"></i></div>

                </div>
            </div>
        </>
    )
}
