import { IBook } from '@/types/books.type';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface IBookCardProps {
    book: IBook;
}

const BookCard = ({book}: IBookCardProps) => {
    const {bookId, bookName, tags, author, image, category, rating} = book;

    return (
        <div className="w-full rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">

            {/* Book Image */}
            <div className="flex h-50 items-center justify-center rounded-2xl bg-gray-100 p-5">
                <Image
                    src={image}
                    alt={bookName}
                    width={800}
                    height={500}
                    className="h-full max-w-full object-contain"
                />
            </div>

            {/* Tags */}
            <div className="mt-4 flex gap-4">
                {tags.map((tag: string, index: number) => (
                    <span
                        key={index}
                        className="rounded-full bg-green-50 px-4 py-1.5 text-sm font-medium text-green-500"
                    >
                        {tag}
                    </span>
                ))}
            </div>

            {/* Book Name */}
            <h2 className="mt-3 truncate font-serif text-2xl font-bold text-gray-900">
                {bookName}
            </h2>

            {/* Author */}
            <p className="mt-2 text-sm text-gray-700">
                By : {author}
            </p>

            {/* Divider */}
            <div className="my-3 border-t border-dashed border-gray-300"></div>

            {/* Bottom Information */}
            <div className="flex items-center justify-between text-sm text-gray-700">

                {/* Category */}
                <span>
                    {category}
                </span>

                {/* Rating */}
                <div className="flex items-center gap-1">
                    <span>{rating.toFixed(2)}</span>
                    <span className="text-2xl leading-none text-gray-700">
                        ☆
                    </span>
                </div>

                {/* View details Button */}
                <Link href={`/books/${bookId}`} className='btn bg-green-100 text-green-600 rounded-lg outline-none'>View Details</Link>
            </div>
        </div>
    );
};

export default BookCard;