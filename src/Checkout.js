import React from 'react';
import './Checkout.css';
import SubTotal from './SubTotal';

function Checkout() {
    return (
        <div className='checkout'>
            <div className='checkout_left'>
                <img
                    className='checkout_ad'
                    src='https://images-eu.ssl-images-amazon.com/images/G/31/img17/pc_banner_2.jpg'
                    alt=''
                />
            
                <div>
                    <h2 className='checkout_title'>Your shoping basket</h2>

                    {/* BasketItem */}
                    {/* BasketItem */}
                    {/* BasketItem */}
                    {/* BasketItem */}
                    {/* BasketItem */}
                    {/* BasketItem */}
                </div>
               
            </div>
            <div className='checkout_right'>
                {/* <h2>the sub total component</h2> */}
                <SubTotal />
            </div>
        </div>
    )
}

export default Checkout
