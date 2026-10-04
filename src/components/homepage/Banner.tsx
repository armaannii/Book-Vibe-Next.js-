import Image from 'next/image';
import React from 'react';
import bannerImg from "@/assets/hero_img.jpg"
import { Link } from 'lucide-react';

const Banner = () => {
    return (
        <section>
            <div className='grid grid-cols-12 items-center justify-around container mx-auto p-20 bg-[#131313]/5 rounded-2xl my-10'>
                <div className='col-span-7'>
                    <h1 className='text-5xl font-bold leading-normal'>Books to freshen up <br/> your bookshelf</h1>
                        <button className='btn bg-[#23BE0A] text-white mt-10 outline-none'>  
                            <a href="../../books" className='outline-none'>View The List</a>
                        </button>
                </div>
                <div className='col-span-5'>
                    <Image src={bannerImg} alt='Banner' className=' rounded-xl'></Image>
                </div>
            </div>
        </section>
    );
};

export default Banner;