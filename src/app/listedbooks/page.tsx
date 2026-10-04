"use client";
import ReadedBooksList from "@/components/selectedBooksList/SelectedBooksList";
import { BooksContext } from "@/contexts/BooksContext";
import { IBook } from "@/types/books.type";
import React, { useContext, useState } from "react";

const ListedBooksPage = () => {
  const { readBooks, wishlist } = useContext(BooksContext);
  // console.log();
  // console.log(readBooks, "read book", wishlist, "added to wishlist");
  
  const [sortBy, setSortBy] = useState<"rating" | "pages" | "year">("rating");

  const sortList = (books: IBook[]) =>{
    const booksList = [...books];

    if(sortBy === "rating"){
      booksList.sort((a, b) => b.rating - a.rating);
    } else if(sortBy === "pages"){
      booksList.sort((a, b) => b.totalPages - a.totalPages);
    } else if(sortBy === "year"){
      booksList.sort((a, b) => b.yearOfPublishing - a.yearOfPublishing);
    }

    return booksList;
  }

  const sortedReadBookList = sortList(readBooks);
  const sortedWishlist = sortList(wishlist);

  return (
    <div className="container mx-auto">
      <h2 className="font-bold text-2xl text-center py-8 my-4 bg-[#131313]/5 rounded-2xl">
        Books
      </h2>

      {/* Sort By Selection */}
      <div className="text-center my-10">
          <select 
            value={sortBy}
            onChange={(e) => 
              setSortBy(e.target.value as "rating" | "pages" | "year")
            }            
            className="select select-ghost bg-green-500 text-white font-medium w-40 outline-none rounded-lg"
          >
            <option disabled={true}>Sort By</option>
            <option value="rating">Rating</option>
            <option value="pages">Number of pages</option>
            <option value="year">Publisher year</option>
          </select>
      </div>

      {/* Reads Books Tab & Wishlist Tab */}
      <div className="tabs tabs-lift">
        <input
          type="radio"
          name="my_tabs_3"
          className="tab outline-none"
          aria-label="Read Books"
          defaultChecked
        />
        <div className="tab-content bg-base-100 border-base-300 p-6 space-y-5">
          {/* used tarnary operator */}
          {
            (sortedReadBookList.length > 0) ? sortedReadBookList.map((readBook: IBook, index: number) => 
            <ReadedBooksList key={index} book={readBook}></ReadedBooksList>) : 
            <p className="text-center font-medium">No books have been added to the read books list</p>
          }
        </div>

        <input
          type="radio"
          name="my_tabs_3"
          className="tab outline-none"
          aria-label="Wishlist Books"
        />
        <div className="tab-content bg-base-100 border-base-300 p-6 space-y-5">
            {/* used tarnary operator */}
            {
              (sortedWishlist.length > 0) ? sortedWishlist.map((book: IBook, index: number) => 
              <ReadedBooksList key={index} book= {book} ></ReadedBooksList>) : 
              <p className="text-center font-medium">No books have been added to the wishlist.</p>
            }
        </div>
      </div>
    </div>
  );
};

export default ListedBooksPage;
