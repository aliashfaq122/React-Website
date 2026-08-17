import React, { useState } from 'react'
import { cartAdd } from './cartAdd'
import Swal from 'sweetalert2'
export const Card = ({ item }) => {
    const [count, setCount] = useState(0);

    function countAdd() {
        setCount(count + 1);
    }

    function countRemove() {
        if (count > 0) {
            setCount(count - 1);
        }

    }

   function showSuccessAlert() {
    Swal.fire({
        toast: true,
        position: "top",
        title: "✓   Item added to cart",
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true,

        customClass: {
            popup: "cartToast"
        }
    });
}

 function showRemoveAlert() {
    Swal.fire({
        toast: true,
        position: "top",
        title: "✓   Item removed from cart",
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true,

        customClass: {
            popup: "cartRemove"
        }
    });
}

    return (

        <>
            <div className='cardParent '>
                <div className="cardImg">

                    <img
                        src={item.image}
                        alt={item.title}
                        width={280}
                    />

                    {<div onClick={() => {
                        countAdd();
                        showSuccessAlert();
                    }} className={`  ${count < 1 ? `icon plusIcon` : 'hidden'}`}><i className="  fa-solid fa-plus"></i></div>}

                    <div className={` ${count > 0 ? `cartConfig` : 'hidden'}`} >

                        <div onClick={() => {countRemove();
                            showRemoveAlert();
                        }} className="removeIcon">
                            <i class="fa-solid fa-minus"></i>
                        </div>

                        <div className="itemCount">
                            {count}
                        </div>

                        <div onClick={() => {
                        countAdd();
                        showSuccessAlert();
                    }} className="addIcon">
                            <i class="fa-solid fa-plus"></i>
                        </div>

                    </div>

                </div>
                <div className="cardHead">{item.title}</div>
                <div className="cardBody">{item.description}</div>
                <div className="cardFoot flex justify-between">

                    <button>Rs.{item.price}</button>



                    {/* <div onClick={cartAdd} className=" icon plusIcon"><i className="  fa-solid fa-plus"></i></div> */}



                </div>
            </div>
        </>
    )
}


{/* <div onClick={countAdd} className={` icon plusIcon ${count > 0 ? `` : ''}`}><i className="  fa-solid fa-plus"></i></div> */ }