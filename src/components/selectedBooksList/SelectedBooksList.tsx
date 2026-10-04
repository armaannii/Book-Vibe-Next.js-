import { MapPin, Users, FileText } from 'lucide-react';
import { IBook } from '@/types/books.type';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const ReadedBooksList = ({book}: {book: IBook}) => {
    const {bookId, bookName, image, author,tags, yearOfPublishing, publisher, totalPages, category, rating} = book;

    return (
        <div>
            <div className="flex flex-col gap-5 rounded-2xl border border-gray-200 bg-white p-4 sm:flex-row sm:p-5">

                {/* Book image */}
                <div className="flex shrink-0 items-center justify-center rounded-xl bg-gray-100 px-8 py-6 sm:w-[136px]">
                    <Image
                        src={image}
                        alt={bookName}
                        width={800}
                        height={500}
                        className="h-32 w-auto object-contain shadow-md"
                    />
                </div>

                {/* Book details */}
                <div className="flex flex-1 flex-col justify-between gap-3">
                    <div className="space-y-3">
                        <h2 className="font-serif text-xl font-bold text-gray-900">
                            {bookName}
                        </h2>

                        <p className="text-sm font-medium text-gray-700">
                            By : {author}
                        </p>

                        {/* Tags + year */}
                        <div className="flex flex-wrap items-center gap-3">
                            <span className="text-sm font-semibold text-gray-800">Tag</span>

                            {tags.map((tag) => (
                                <span
                                    key={tag}
                                    className="rounded-full bg-green-50 px-3 py-1 text-xs font-medium text-green-600"
                                >
                                    #{tag}
                                </span>
                            ))}

                            <span className="flex items-center gap-1.5 text-sm text-gray-600">
                                <MapPin size={16} />
                                Year of Publishing: {yearOfPublishing}
                            </span>
                        </div>

                        {/* Publisher + pages */}
                        <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500">
                            <span className="flex items-center gap-1.5">
                                <Users size={16} />
                                Publisher: {publisher}
                            </span>
                            <span className="flex items-center gap-1.5">
                                <FileText size={16} />
                                Page {totalPages}
                            </span>
                        </div>
                    </div>

                    {/* Divider */}
                    <hr className="border-gray-200" />

                    {/* Badges + button */}
                    <div className="flex flex-wrap items-center gap-3">
                        <span className="rounded-full bg-blue-50 px-4 py-2 text-sm font-medium text-blue-600">
                            Category: {category}
                        </span>

                        <span className="rounded-full bg-yellow-50 px-4 py-2 text-sm font-medium text-yellow-500">
                            Rating: {rating}
                        </span>

                        <Link
                            href={`/books/${bookId}`}
                            className="rounded-full bg-green-500 px-5 py-2 text-sm font-semibold text-white transition hover:bg-green-600"
                        >
                            View Details
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReadedBooksList;