import { useDispatch, useSelector } from 'react-redux'
import { addToCart, removeFromCart } from '../redux/slices/CartSlice.js'
import toast from 'react-hot-toast'

const Product = ({ post }) => {
  const { cart } = useSelector(state => state)
  const dispatch = useDispatch()

  const handleAddToCart = () => {
    dispatch(addToCart(post))
    toast.success('Added To Cart')
  }

  const handleRemoveFromCart = () => {
    dispatch(removeFromCart(post.id))
    toast.error('Removed From Cart')
  }

  return (
    <div className="">
      <div>
        <p>{post.title}</p>
      </div>
      <div>
        <p className="text-center">{post.description.split(' ').slice(0, 10).join('') + '...'}</p>
      </div>
      <div>
        <img src={`${post.image}`} className="w-24 h24"/>
      </div>
      <div>
        <p>${post.price}</p>
      </div>

      {
        cart.some(p => p.id === post.id) ?
          <button onClick={handleRemoveFromCart}> Remove From Cart</button> :
          <button onClick={handleAddToCart}>Add To Cart</button>
      }
    </div>
  )
}

export default Product
