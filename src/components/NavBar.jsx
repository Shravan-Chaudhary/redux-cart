import { FaShoppingCart } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'

const NavBar = () => {
  const { cart } = useSelector(state => state)

  return (
    <div className="">
      <nav className="flex justify-between items-center h-20 max-w-7xl mx-auto">
        {/* LOGO */}
        <NavLink to="/">
          <div className="">
            <img src="../assets/store.svg"/>
          </div>
        </NavLink>

        {/* LINKS */}
        <div className="flex items-center space-x-10 text-slate-100 font-medium">
          <NavLink to="/">
            <p>
              <span className="text-xl">Home</span>
            </p>
          </NavLink>
          <NavLink to="/cart">

            <div className="relative">
              <FaShoppingCart className="text-3xl"/>
              {
                cart.length > 0 &&
                <span
                  className="absolute -right-1 -top-1 bg-green-600 text-xs w-5 h-5 flex items-center justify-center rounded-full text-white">{cart.length}</span>
              }
            </div>
          </NavLink>
        </div>
      </nav>
    </div>
  )
}

export default NavBar
