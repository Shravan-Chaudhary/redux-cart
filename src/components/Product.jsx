import { useDispatch, useSelector } from 'react-redux'
import { addToCart, removeFromCart } from '../redux/slices/CartSlice.js'

const Product = ({ post }) => {
  const { cart } = useSelector(state => state)
  const dispatch = useDispatch()

  const handleAddToCart = () => {
    dispatch(addToCart(post))
    console.log(cart)
  }

  return (
    <div className="flex flex-col">
      <div>
        <p>{post.title}</p>
      </div>
      <div>
        <p>{post.description}</p>
      </div>
      <div>
        <img src={`${post.image}`} className="w-24 h24"/>
      </div>
      <div>
        <p>${post.price}</p>
      </div>
      <button onClick={handleAddToCart}>Add To Cart</button>

    </div>
  )
}

export default Product
