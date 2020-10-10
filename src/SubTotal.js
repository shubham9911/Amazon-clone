import React from 'react'
import './SubTotal.css';
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from './StateProvider';



function SubTotal() {
    // import { useStateValue } from './StateProvider';
    const [{ basket }, dispatch] = useStateValue();


    return (
        <div className='subtotal'>
            <CurrencyFormat
                renderText={(value) => (
                    <>
                    <p>
                        Subtotal ({basket?.length} items): <strong>0</strong>
                    </p>
                    <small className='subtotal_gift'>
                        <input type='checkbox' /> This order contains a gift
                    </small>
                    </>
                )}

                decimalScale={2}
                value={0} //Part of the homework
                displayType={'text'}
                thousandSeparator={true}
                prefix={'$'}
            />
            <button className='checkout_btn'>
                Proceed to Checkout
            </button>
        </div>
    )
}

export default SubTotal
