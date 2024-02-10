import { FaSearch } from "react-icons/fa";

const Search = ({search}) => {
  return (
    <div className='flex items-center gap-1 relative bg-red-500 border-4 border-black rounded-lg overflow-hidden'>
        <FaSearch className='text-xl absolute left-2' />
        <input type="text" placeholder='Search For Country' className='p-2 pl-10' onChange={(e) => search(e.target.value)} />
    </div>
  )
}

export default Search