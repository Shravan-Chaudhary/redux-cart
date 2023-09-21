import { AiFillDelete } from 'react-icons/ai'
import { removeFromCart } from '../redux/slices/CartSlice.js'
import { useDispatch } from 'react-redux'

const CartItem = ({ item }) => {
  const dispatch = useDispatch()
  const handleRemoveFromCart = () => {
    dispatch(removeFromCart(item.id))
  }

  return (
    <div>
      <div>
        <div>
          <img src={item.image} alt="product-image"/>
        </div>
        <div>
          <h1>{item.title}</h1>
          <h1>{item.description}</h1>
          <div>
            <p>{item.price}</p>
            <button>
              <AiFillDelete onClick={handleRemoveFromCart}/>
            </button>
          </div>
        </div>

      </div>
    </div>
  )
}

export default CartItem
