import { Link, useHistory } from "react-router-dom";

import Logo from '../../components/Logo/Logo'
import NavbarItem from './NavbarItem'

const NavBar = () => {
  const route = [
    { path: '/photo', name: 'Photo' },
    { path: '/album', name: 'Albums' },
  ]
  const history = useHistory()

  return (
    <nav className='nav h-screen w-52 fixed'>
      <ul className='flex flex-col my-5 gap-4'>
        <li className='mb-4 w-20 pl-6'><Logo onClick={() => history.push('/')} /></li>
        {route.map(({ path, name }) => (
          <NavbarItem key={path} to={path} name={name} />
        ))}
      </ul>
    </nav>
  )
}

export default NavBar