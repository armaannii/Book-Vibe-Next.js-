
import ReadButton from "@/components/selectBooksToList/ReadButton";
import WishlistButton from "@/components/selectBooksToList/WshlistButton";
import { IBook } from "@/types/books.type";
import Image from "next/image";
import { notFound } from "next/navigation";
import React from "react";

const getBooks = async() =>{
    try{
        const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/booksData.json`);
        return res.json();
    }catch(error){
        console.error("Error fetching books data: ", error);
        return [];
    }
}



const BookDetailPage = async ({params}: {params: Promise<{bookId: string}>}) => {
    const {bookId} = await params;

    const books = await getBooks();
    const book: IBook = books.find((book: IBook) => (book.bookId === parseInt(bookId)))
    // If book not found
    if(!book){
        notFound();
    }
    const {bookName, author, category, review, tags, rating, yearOfPublishing, totalPages, publisher, image} = book;

  return (
    <div className="container mx-auto">
      <div className="card lg:card-side bg-base-100 grid grid-cols-2 gap-10 my-25">
        <div className="rounded-lg bg-[#131313]/5 flex items-center justify-center">
          <div className="py-10 h-150">
            <Image
                src={image}
                alt="Album"
                width={800}
                height={500}
                className="h-full max-w-full object-contain"
            />
          </div>
        </div>

        {/* Book Details Content */}
        <div className="">
          <h2 className="card-title"> {bookName} </h2>
          <p>By: {author} </p>
          {/* Divider */}
          <div className="border-t border-gray-300 mt-4"></div>  
          <p>  {category} </p>
          {/* Divider */}
          <div className="border-t border-gray-300 mb-4"></div>
          <p> <span className="font-bold">Review:</span> {review} </p>
            <div className="flex gap-4 items-center pt-4">
                <span className="font-bold">Tag</span>
                {
                    tags.map((tag: string, index: number) => <span key={index} className="text-green-500 bg-green-50 px-4 py-1.5 font-medium rounded-full"> {tag} </span>)
                }
            </div>
            {/* Divider */}
          <div className="border-t border-gray-300 my-4"></div>
          
            <div className="space-y-2">
                <p className="grid grid-cols-[160px_1fr]">
                    <span>Number of Pages:</span>
                    <span className="font-bold">{totalPages}</span>
                </p>

                <p className="grid grid-cols-[160px_1fr]">
                    <span>Publisher:</span>
                    <span className="font-bold">{publisher}</span>
                </p>

                <p className="grid grid-cols-[160px_1fr]">
                    <span>Year of Publishing:</span>
                    <span className="font-bold">{yearOfPublishing}</span>
                </p>

                <p className="grid grid-cols-[160px_1fr]">
                    <span>Rating:</span>
                    <span className="font-bold">{rating}</span>
                </p>
            </div>
            <div className="flex gap-4 pt-6">
                <ReadButton book={book}></ReadButton>
                <WishlistButton book={book}></WishlistButton>
            </div>
          </div>
        </div>
      </div>
  );
};

export default BookDetailPage;
