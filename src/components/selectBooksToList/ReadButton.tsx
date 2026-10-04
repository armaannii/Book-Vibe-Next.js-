'use client'
import { BooksContext } from '@/contexts/BooksContext';
import { IBook } from '@/types/books.type';
import React, { useContext } from 'react';
import { toast } from 'react-toastify';

const ReadButton = ({book}: {book: IBook}) => {
    const {readBooks, setReadBooks, wishlist} = useContext(BooksContext);
    
    const handleReadBook = () =>{
        const alreadyRead = readBooks.some((readBook: IBook) => readBook.bookId === book.bookId)
        const alreadyInWishlist = wishlist.some((Book: IBook) => Book.bookId === book.bookId)

        if(alreadyRead){
            toast.info(`"${book.bookName}" is already in your read books list.`);
            return;
        }
        if(alreadyInWishlist){
            toast.error(`"${book.bookName}" is already in your wishlist list.`);
            return;
        }
        setReadBooks([...readBooks, book]);
        toast.success(`You have read "${book.bookName}".`)
    }

    return (
        <button className="btn px-6 outline-none" onClick={() => handleReadBook()}>
            Read
        </button>
        
    );
};

export default ReadButton;