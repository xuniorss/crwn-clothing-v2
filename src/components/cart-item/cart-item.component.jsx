import './cart-item.styles.scss'

const CartItem = ({ cartItem }) => {
   const { name, quantity } = cartItem

   return (
      <>
         <h2>{name}</h2>
         <span>{quantity}</span>
      </>
   )
}

export default CartItem
