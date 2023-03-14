import { useContext } from 'react'

// import { CartContext } from '../../assets/shopping-bag.svg'
import { CartContext } from '../../contexts/cart.context'
import { CartIconContainer, ItemCount, ShoppingIcon } from './cart-icon.styles'

const CartIcon = () => {
   const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext)

   return (
      <CartIconContainer onClick={() => setIsCartOpen(!isCartOpen)}>
         <ShoppingIcon />
         <ItemCount>{cartCount}</ItemCount>
      </CartIconContainer>
   )
}

export default CartIcon
