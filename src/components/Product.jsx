const Product = ({ post }) => {
  return (
    <div className='flex flex-col'>
      <div>
        <p>{post.title}</p>
      </div>
      <div>
        <p>{post.description}</p>
      </div>
      <div>
        <img src={`${post.image}`} className='w-24 h24' />
      </div>
      <div>
        <p>${post.price}</p>
      </div>
      <button>Add To Cart</button>
    </div>
  )
}

export default Product
