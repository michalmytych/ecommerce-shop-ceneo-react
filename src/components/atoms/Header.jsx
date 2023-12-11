import React from 'react'
import { ReactComponent as LogoIcon } from '../../assets/building.svg';
import { ReactComponent as SearchIcon } from '../../assets/search.svg';
import { ReactComponent as CartIcon } from '../../assets/cart.svg';
import { ReactComponent as HeartIcon } from '../../assets/heart.svg';
import { ReactComponent as UserIcon } from '../../assets/user.svg';

export default function Header() {
    return (
        <header className='flex justify-between px-2 py-2 bg-white'>

            {/* Do osobnego komponentu */}
            <div className='text-orange-600 hover:text-orange-500 transition cursor-pointer pl-4'>
                <LogoIcon />
            </div>

            {/* Do osobnego komponentu */}
            <div className='flex items-center w-1/3'>
                <input
                    className='p-1.5 border-1 ring-1 ring-inset w-full'
                    type="text"
                    placeholder='Znajdź produkt'
                />
                <button className='text-white bg-orange-600 hover:bg-orange-500 flex gap-2 items-center p-1.5'>
                    <SearchIcon />
                    <div className='mr-1'>
                        SZUKAJ
                    </div>                    
                </button>
            </div>

            {/* Do osobnego komponentu */}
            <div className='flex items-center gap-6 pr-4'>
                <div className='hover:scale-125 transition cursor-pointer'>
                    <CartIcon />
                </div>
                <div className='hover:scale-125 transition cursor-pointer'>
                    <HeartIcon />
                </div>
                <div className='hover:scale-125 transition cursor-pointer'>
                    <UserIcon />
                </div>
            </div>

        </header>
    )
}
