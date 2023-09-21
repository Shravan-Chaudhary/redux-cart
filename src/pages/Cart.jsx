import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import CartItem from '../components/CartItem.jsx'

const Cart = () => {
  const { cart } = useSelector(state => state)

  return (
    <div>
      {cart.length > 0 ?
        <div className="flex justify-between">
          {/*CartItems*/}
          <div>
            {cart.map(item => (
              <CartItem key={item.id} item={item}/>
            ))}
          </div>

          {/*CartSummary*/}
          <div></div>
        </div> :
        <div className="flex flex-col items-center justify-center">
          <h1>Cart is Empty</h1>
          <NavLink to="/">
            <button>Shop Now!</button>
          </NavLink>
        </div>
      }
    </div>
  )
}

export default Cart
