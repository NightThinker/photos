import { NavLink } from 'react-router-dom'

import Text from '../../components/Text/Text'

const NavBarItem = ({ to, name }) => {
  return (<li>
    <NavLink
      className='flex m-0 pl-6 py-4  hover:rounded-r-full hover:bg-gray-100'
      exact
      to={to}
      activeClassName='bg-gray-100 rounded-r-full'
    >
      <Text weight='font-medium'>{name}</Text>
    </NavLink>
  </li>)
}

export default NavBarItem