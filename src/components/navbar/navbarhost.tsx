'use client'

import Link from "next/link";
import IcAvatar from "../icons/ic-avatar";
import IcPencil from "../icons/ic-pencil";

const NavbarHost=()=>{
    return (
        <div className="hidden lg:flex py-6 bg-indigo-950 justify-between">
            <Link href="/" className="flex-shrink-0 flex items-center justify-center px-20 lg:pl-24 xl:pl-32 lg:pr-16 xl:pr-20 ">
                <span className="text-3xl font-bold">InnSight</span>
            </Link>
            <div className="flex items-center  md:px-4 lg:px-6  xl:pr-32">
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
export default NavbarHost;