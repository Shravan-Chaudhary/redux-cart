const CartItem = ({ item }) => {
  return (
    <div className=" w-full flex flex-col items-center gap-8 bg-black px-8 py-6">
      <div className="text-xl">{item.title}</div>
      <div>
        <img className="w-[400px] h-[200px]" src={item.image} alt="product-image"/>
      </div>
      <div className="flex justify-between bg-red-400 w-full px-4 py-2">
        <div>${item.price}</div>
        <div>delete</div>
      </div>
    </div>
  )
}

export default CartItem
