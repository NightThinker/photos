import Search from '../../components/Search/Search'
const Layout = ({ children }) => {
  return (
    <ul className='flex flex-col'>
      <li><Search /></li>
      <li>
        {children}
      </li>
    </ul>
  )
}

export default Layout