'use client';

import { createContext, useState } from "react";

type TSearchContext = {
    searchQuery: string;
    handleChangeSearchQuery: (val: string) => void;
}

export const SearchContext = createContext<TSearchContext | null>(null);

const SearchContextProvider = ({ children }: {
    children: React.ReactNode,
}) => {
    const [searchQuery, setSearchQuery] = useState('');

    const handleChangeSearchQuery = (newVal: string) => {
        setSearchQuery(newVal);
    }

    return (
        <SearchContext.Provider value={{
            searchQuery,
            handleChangeSearchQuery
        }}>
            {children}
        </SearchContext.Provider>
    )
}

export default SearchContextProvider