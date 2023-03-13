import { useContext } from 'react'

import CheckoutItem from '../../components/checkout-item/checkout-item.component'
import { CartContext } from '../../contexts/cart.context'

import './checkout.styles.scss'

const header = ['Product', 'Description', 'Quantity', 'Price', 'Remove']

const Checkout = () => {
   const { cartItems, cartTotal } = useContext(CartContext)

   return (
      <div className="checkout-container">
         <div className="checkout-header">
            {header.map((headerName) => (
               <div key={headerName} className="header-block">
                  <span>{headerName}</span>
               </div>
            ))}
         </div>

         {cartItems.map((cartItem) => (
            <CheckoutItem key={cartItem.id} cartItem={cartItem} />
         ))}
         <span className="total">Total: ${cartTotal}</span>
      </div>
   )
}

export default Checkout
