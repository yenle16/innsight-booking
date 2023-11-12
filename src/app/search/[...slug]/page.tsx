'use client'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import SearchVertical from '@/components/search-vertical/search-vertical'

import Loader from '@/components/loader/loader'


const SearchPage = () => {
    // const router = useRouter();
    // const { city } = router.query;
    return (
        <div className="bg-white min-h-screen">
            <div className="w-full sm:p-3.5 md:p-6 lg:py-10 lg:px-48 lg:flex ">
                <div className="w-full lg:w-1/4 ">
                    <SearchVertical city ={"danang"} min = {100} max={1000}/>
                    {/* <SearchVertical   /> */}

                </div>
                <div className="flex-1">

                </div>
            </div>

        </div>
    )
}

export default SearchPage