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
    <div
      className="flex flex-col items-center justify-between hover:scale-110 transition duration-300 ease-in shadow gap-3 p-4 mt-10  ml-5 rounded-xl">
      <div>
        <p className="text-gray-700 font-semibold text-lg text-left truncate w-40 mt-1">{post.title}</p>
      </div>
      <div>
        <p
          className="w-40 text-gray-400 font-normal text-[10px] text-left">{post.description.split(' ').slice(0, 10).join(' ') + '...'}</p>
      </div>
      <div className="h-[180px]">
        <img src={`${post.image}`} className="w-full h-full" alt="product-image"/>
      </div>
      <div className="flex justify-between gap-12 items-center w-full">
        <div>
          <p className="text-green-600 font-semibold">${post.price}</p>
        </div>

        {
          cart.some(p => p.id === post.id) ?
            <button onClick={handleRemoveFromCart}
                    className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold text-[12px] p-1 px-3 uppercase hover:bg-gray-700 hover:text-white transition duration-300 ease-in"
            > Remove Item</button> :
            <button onClick={handleAddToCart}
                    className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold text-[12px] p-1 px-3 uppercase hover:bg-gray-700 hover:text-white transition duration-300 ease-in"
            >Add To Cart</button>
        }
      </div>
    </div>
  )
}

export default Product
