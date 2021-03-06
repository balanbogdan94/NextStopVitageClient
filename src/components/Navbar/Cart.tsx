import React, { useState } from 'react'
import { FiShoppingBag } from 'react-icons/fi';
import "./Cart.scss"




const Cart= () => {

    const [nrOfItems, setNumberOfItems] = useState(0);
    const getCartNrOfItemsStyle = nrOfItems === 0 ? "number-of-items--hidden" : "number-of-items--visible"

return (
    <div className="cart" onClick={()=>setNumberOfItems(nrOfItems + 1)}>
        <FiShoppingBag  fontSize={24}/>
        <div className={"number-of-items "+getCartNrOfItemsStyle}>{nrOfItems}</div>
    </div>
)
}

export default Cart