import Link from 'next/link'
import React, { useState } from 'react'
import Button from '../core/Button'
import Image from "next/image";
import styles from '@/components/search-header/search-header.module.scss';
import imgBg from '@/assets/images/header-background.png';

const SearchHeader = () => {
    const [city, setCity] = useState('')

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCity(e.target.value)
    }

    return (
        <div className="w-full ">
            <div className=" mx-auto container  relative ">
                <div className={`${styles['header-image']}`}>
                    <Image src={imgBg} alt="" />
                </div>
                <div
                    className="     
                    absolute z-50 left-1/2 transform -translate-x-1/2 -translate-y-1/2
                    container px-4 lg:px-6 xl:px-40
                    "
                >
                    <div
                        className="mx-auto w-full rounded-full bg-slate-100 flex flex-wrap items-end justify-center gap-2.5 p-2 pb-5 border-2">
                        <div className="">
                            <span className="text-black">Location</span>
                            <input
                                value={city}
                                className="mt-1 py-2 px-3 text-black block rounded border-2"
                                placeholder="Where are you going?"
                                onChange={handleChange}
                            />
                        </div>
                        <div className="">
                            <span className='text-black'>Check In</span>
                            <input type="date" className="mt-1 py-2 px-3 text-black block rounded border-2" />
                        </div>
                        <div className="">
                            <span className='text-black'>Check Out</span>
                            <input type="date" className="mt-1 py-2 px-3 text-black block rounded border-2" />
                        </div>
                        <div className="">
                            <span className='text-black'>Room</span>
                            <input type="number" min={0} className="mt-1 py-2 px-3 text-black block rounded border-2" />
                        </div>

                        <Link
                            href={`search/${city}`}
                            className={!city ? 'pointer-events-none cursor-not-allowed' : ''}
                        >
                            <div>
                                <Button
                                    text="Search"
                                    textColor="text-black"
                                />
                            </div>
                        </Link>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default SearchHeader