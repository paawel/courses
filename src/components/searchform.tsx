'use client';

import { useSearchContext } from "@/lib/hooks";
import { ChangeEvent } from "react";

const SearchForm = () => {
  const { searchQuery, handleChangeSearchQuery } = useSearchContext();

  function handleOnChange(e: ChangeEvent<HTMLInputElement>) {
    handleChangeSearchQuery(e.target.value);
  }

  return (
    <form className='w-full h-full'>
      <input
        onChange={handleOnChange}
        value={searchQuery}
        className='
          w-full 
          h-full
          rounded-md
          px-5
          outline-none
          placeholder:text-white/50
          hover:bg-white/30
          focus:bg-white/50
          bg-white/20
        '
        type="search"
        placeholder='Search pets' />
    </form>
  )
}

export default SearchForm