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
      {loading ?
        (<Spinner/>) :
        posts.length > 0 ?
          (
            <div
              className="grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl p-2 mx-auto space-x-5 space-y-10 min-h-[80vh] ">
              {posts.map((post) => (
                <Product key={post.id} post={post}/>
              ))}
            </div>
          ) : (
            <div className="flex justify-center items-center">
              <p>No Data Found</p>
            </div>
          )}
    </div>
  )
}

export default Home
