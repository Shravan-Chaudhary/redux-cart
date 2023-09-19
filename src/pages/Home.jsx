import { useEffect, useState } from 'react'
import Spinner from '../components/Spinner'
import Product from '../components/Product'

const Home = () => {
  const [loading, setLoading] = useState(false)
  const [posts, setPosts] = useState([])

  const fetchProductsData = async () => {
    setLoading(true)
    try {
      const res = await fetch('https://fakestoreapi.com/products')
      const data = await res.json()
      setPosts(data)
    } catch (error) {
      console.log('Error', error)
      setPosts([])
    }
    setLoading(false)
  }

  useEffect(() => {
    fetchProductsData()
  }, [])

  return (
    <div>
      {loading ? (
        <Spinner />
      ) : posts.length > 0 ? (
        <div>
          {posts.map((post) => (
            <Product key={post.id} post={post} />
          ))}
        </div>
      ) : (
        <div>
          <p>No Data Found</p>
        </div>
      )}
    </div>
  )
}

export default Home
