'use client'
import { IBook } from '@/types/books.type';
import React, { createContext, ReactNode, useState } from 'react';


interface BooksContextType {
  readBooks: IBook[];
  wishlist: IBook[];
}

export const BooksContext = createContext<BooksContextType | null>(null);

const BooksProvider = ({children}: {children: ReactNode}) => {

    const [readBooks, setReadBooks] = useState([])
    const [wishlist, setWishlist] = useState([])

    const globalData = {
        readBooks,
        setReadBooks,
        wishlist,
        setWishlist,
    }

    return (
        <BooksContext.Provider value={globalData}>
            {children}
        </BooksContext.Provider>
    );
};

export default BooksProvider;