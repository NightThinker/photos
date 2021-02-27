import Search from '../../components/Search/Search'
const Layout = ({ children, search, onChange, className }) => {
  return (
    <ul className={`main flex flex-col px-10 pt-1 pb-10 ${className}`}>
      <li><Search value={search} onChange={onChange} /></li>
      <li className='mt-7'>
        {children}
      </li>
    </ul>
  )
}

export default Layout