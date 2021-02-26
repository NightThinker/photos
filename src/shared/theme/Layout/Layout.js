import Search from '../../components/Search/Search'
const Layout = ({ children }) => {
  return (
    <ul className='flex flex-col p-10'>
      <li><Search /></li>
      <li className='mt-7'>
        {children}
      </li>
    </ul>
  )
}

export default Layout