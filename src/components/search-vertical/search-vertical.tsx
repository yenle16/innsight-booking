import Link from 'next/link'
import React from 'react'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/router'
import Button, { } from '@/components/core/Button'
interface SearchVerticalProps {
    city: string;
    min: number;
    max: number;
  }
const SearchVertical: React.FC<SearchVerticalProps> = ({city,min,max}) => {
// const SearchVertical: React.FC = () => {
    // const SearchVertical: React.FC<SearchVerticalProps> = ({ city }) => {

    // const router = useRouter();
    // const { city } = router.query;
    return (
        <>
            <form className="w-full h-full border-2 p-2 rounded-md ">
                    <label className="w-full">
                        <span className="text-sm float-left text-black py-1">Location</span>
                        <input
                            className="form-input block w-full text-black border-2 mb-2 p-1"
                            placeholder="Where are you going?"
                            defaultValue={city}
                        />
                    </label>

                <div className="w-full flex flex-col gap-1">
                    <div className="w-full flex flex-wrap gap-x-5">
                        <label className="flex-1">
                            <span className="text-sm text-black py-1">Check In</span>
                            <input type="date" className="form-input block w-full text-black border-2 mb-2 p-1" />
                        </label>
                        <label className="flex-1">
                            <span className="text-sm text-black py-1">Check Out</span>
                            <input type="date" className="form-input block w-full text-black border-2 mb-2 p-1" />
                        </label>
                    </div>
                    <label className="w-full">
                        <span className="text-sm text-black py-1">Room</span>
                        <input type="number" className="form-input block w-full text-black border-2 mb-2 p-1" />
                    </label>
                    <div className="w-full flex flex-wrap gap-x-5">
                        <label className="flex-1">
                            <span className="text-sm text-black py-1">Min Price</span>
                            <input
                                type="number"
                                className="form-input block w-full text-black border-2 mb-2 p-1"
                                defaultValue={min}
                            />
                        </label>
                        <label className="flex-1">
                            <span className="text-sm text-black py-1">Max Price</span>
                            <input
                                type="number"
                                className="form-input block w-full text-black border-2 mb-2 p-1"
                                defaultValue={max}
                            />
                        </label>
                    </div>

                   
                </div>


            </form>
        </>
    )
}

export default SearchVertical