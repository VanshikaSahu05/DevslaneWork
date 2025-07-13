import React from 'react'

const Search = ({search}) => {
  return (
    <div>
        <input onChange={search} className='w-full h-[32px] border-2 border-gray-400 pl-3 rounded-xs outline-0 md:w-[233px] ' type='text' placeholder='search'>
        </input>
    </div>
  )
}

export default Search