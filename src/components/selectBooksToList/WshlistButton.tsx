'use client'
import { BooksContext } from '@/contexts/BooksContext';
import { IBook } from '@/types/books.type';
import React, { useContext } from 'react';
import { toast } from 'react-toastify';

const WishlistButton = ({book}: {book: IBook}) => {
    const {wishlist, setWishlist, readBooks} = useContext(BooksContext)
 
    const handleAddToWishlist = () =>{
        const alreadyInWishlist = wishlist.some((Book: IBook) => Book.bookId === book.bookId)
        const alreadyInReadList = readBooks.some((readBook: IBook) => readBook.bookId === book.bookId)
        
        if(alreadyInWishlist){
            toast.info(`"${book.bookName}" is already in your wishlist books.`);
            return;
        }
        if(alreadyInReadList){
            toast.error(`"${book.bookName}" is already in your read list books.`);
            return;
        }
        setWishlist([...wishlist, book]);
        toast.success(`"${book.bookName}" is added to wishlist.`)
    }

    return (
        <button onClick={() => handleAddToWishlist()}  className="btn px-6 text-white bg-[#50B1C9] outline-none">
            Wishlist
        </button>
    );
};

export default WishlistButton;