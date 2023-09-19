import { FaShoppingCart } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <div className='p-6'>
      <div className='flex justify-between'>
        {/* LOGO */}
        <NavLink to='/'>
          <div className=''>
            <img src='../assets/store.svg' />
          </div>
        </NavLink>

        {/* LINKS */}
        <div className='flex items-center space-x-4'>
          <NavLink to='/'>
            <p>Home</p>
          </NavLink>
          <NavLink to='/cart'>
            <FaShoppingCart />
          </NavLink>
        </div>
      </div>
    </div>
  )
}

export default NavBar
