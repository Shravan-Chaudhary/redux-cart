import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import CartItem from '../components/CartItem.jsx'
import { useEffect, useState } from 'react'

const Cart = () => {
  const { cart } = useSelector(state => state)
  // const [totalAmount, setTotalAmount] = useState(0)
  //
  // useEffect(() => {
  //   let total = cart.reduce((acc, curValue) => acc + curValue.price)
  //   setTotalAmount(total)
  // }, [cart])

  return (
    <div className="w-screen">
      {cart.length > 0 ?
        <div className="flex justify-between">
          {/*CartItems*/}
          <div className="w-5/12">
            {cart.map(item => (
              <CartItem key={item.id} item={item}/>
            ))}
          </div>

          {/*CartSummary*/}
          <div>
            <div>
              <div>Your Cart</div>
              <div>Summary</div>
              <p>
                <span>Total Items: {cart.length}</span>
              </p>
            </div>
            <div>
              {/*<p>Total Amount: {totalAmount}</p>*/}
              <button>Checkout Now</button>
            </div>
          </div>
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
