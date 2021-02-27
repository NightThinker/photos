const Search = ({ value, onChange }) => {
  return (
    <input className='border-b w-full h-10 outline-none text-base' value={value} onChange={onChange} />
  )
}

export default Search