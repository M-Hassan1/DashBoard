"use client"
import { GrClose, GrSearch } from 'react-icons/gr';
import { propsForSearch } from '@/component/utils/types';

const SearchBar = ({ hideSearch }: propsForSearch) => {

  return (
      
      <div className='px-4 py-8 flex items-center h-full bg-white border-b-2 border-gray-500 space-x-6'>
      <GrSearch className='cursor-pointer' size={22} />
      <input
        type='text' placeholder='Search here' name='search' className='flex-1 text-xl'
      />
      <GrClose onClick={() => hideSearch(false)} size={21} className='cursor-pointer' />
      </div>
    
  );
};

export default SearchBar;