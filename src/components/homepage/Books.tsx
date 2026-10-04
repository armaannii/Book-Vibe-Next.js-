import React from 'react';
import BookCard from '../shared/BookCard';
import { IBook } from '@/types/books.type';

const getBooks = async() =>{
    const res = await fetch('http://localhost:3000/booksData.json');
    return res.json();
}

const Books = async() => {
    const books = await getBooks();
    // console.log(books)
    return (
        <div className='container mx-auto my-25'>
            <div className='mb-10'>
                <h2 className='font-bold text-4xl text-center'>Explore Popular Books</h2>
            </div>
            <div className='grid grid-cols-3 gap-4'>
                {
                    books.slice(1, 7).map((book: IBook, index: number) => <BookCard key={index} book={book}></BookCard>)
                }
            </div>
        </div>
    );
};

export default Books;