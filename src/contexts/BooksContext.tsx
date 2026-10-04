'use client'
import { IBook } from '@/types/books.type';
import React, { createContext, ReactNode, useState } from 'react';


interface BooksContextType {
  readBooks: IBook[];
  setReadBooks : React.Dispatch<React.SetStateAction<IBook[]>>;
  wishlist: IBook[];
  setWishlist: React.Dispatch<React.SetStateAction<IBook[]>>;
}

export const BooksContext = createContext<BooksContextType>({
    readBooks: [],
    setReadBooks : () => {},
    wishlist: [],
    setWishlist: () => {},
});

const BooksProvider = ({children}: {children: ReactNode}) => {

    const [readBooks, setReadBooks] = useState<IBook[]>([])
    const [wishlist, setWishlist] = useState<IBook[]>([])

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