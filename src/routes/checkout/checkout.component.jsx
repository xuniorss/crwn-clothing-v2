import { useSelector } from 'react-redux'

import CheckoutItem from '../../components/checkout-item/checkout-item.component'
import { selectCartItems, selectCartTotal } from '../../store/cart/cart.selector'

import './checkout.styles.scss'

const header = ['Product', 'Description', 'Quantity', 'Price', 'Remove']

const Checkout = () => {
   const cartItems = useSelector(selectCartItems)
   const cartTotal = useSelector(selectCartTotal)

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
