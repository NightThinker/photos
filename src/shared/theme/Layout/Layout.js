import Search from '../../components/Search/Search'
const Layout = ({ children, search, onChange }) => {
  return (
    <ul className='flex flex-col p-10'>
      <li><Search value={search} onChange={onChange} /></li>
      <li className='mt-7'>
        {children}
      </li>
    </ul>
  )
}

export default Layout