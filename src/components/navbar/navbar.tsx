'use client'

import Link from "next/link";
import IcHotel from "../icons/ic-hotel";
import IcSell from "../icons/ic-sell";
import IcGroup from "../icons/ic-group";
import IcAvatar from "../icons/ic-avatar";
import IcPencil from "../icons/ic-pencil";

const Navbar=()=>{
    return (
        <div className="hidden lg:flex py-6 bg-blue-900">
            <Link href="/" className="flex-shrink-0 flex items-center justify-center px-20 lg:pl-24 xl:pl-32 lg:pr-16 xl:pr-20 ">
                <span className="text-3xl font-bold">InnSight</span>
            </Link>
            <nav className="contents text-base md:text-sm lg:text-lg mr-auto">
                <div className={`grid grid-cols-3 gap-1 items-center`}>
                    <Link
                        className="flex"
                        href={'/home'}>
                        <IcHotel color="white"/>
                        <span className='ml-4 text-xl '>Lưu trú</span>
                    </Link>

                    <Link
                        className="flex"
                        href={'/home'}>
                        <IcSell color="white"/>
                        <span className='ml-4 text-xl '>Ưu đãi</span>
                    </Link>

                    <Link
                        className="flex"
                        href={'/home'}>
                        <IcGroup color="white"/>
                        <span className='ml-4 text-xl '>Hợp tác với chúng tôi</span>
                    </Link>
                </div>
            </nav>
            <div className="flex items-center md:px-4 lg:px-6 xl:px-8">
                <Link href={'/sign-in'} className={'py-2 px-4 drop-shadow-md inline-flex items-center justify-between'}>
                    <IcAvatar color="white"/>
                    <span className='ml-4 text-xl '>Đăng nhập</span>
                </Link>
                <Link href={'/sign-up'} className={'sm:py-2 sm:px-4 drop-shadow-md inline-flex items-center justify-between' }>
                    <IcPencil color="white"/>
                    <span className='ml-4 text-xl '>Đăng ký</span>
                </Link>

            </div>
        </div>
    );
}
export default Navbar;