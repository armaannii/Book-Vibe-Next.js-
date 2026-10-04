import React from 'react';
import { IBook } from '@/types/books.type';
import BookCard from '@/components/shared/BookCard';

const getBooks = async() =>{
    try{
        const baseUrl = process.env.NEXT_PUBLIC_SERVER_BASE_URL || 'http://localhost:3000';
        const res = await fetch(`${baseUrl}/booksData.json`);
        return res.json();
    }catch(error){
        console.error("Error fetching books data: ", error);
        return [];
    }
}

const BooksPage = async() => {
    const books = await getBooks();
    // console.log(books)
    return (
        <div className='container mx-auto my-25'>
            <div className='mb-10'>
                <h2 className='font-bold text-4xl text-center'>Explore All Books</h2>
            </div>
            <div className='grid grid-cols-3 gap-4'>
                {
                    books.map((book: IBook, index: number) => <BookCard key={index} book={book}></BookCard>)
                }
            </div>
        </div>
    );
};

export default BooksPage;