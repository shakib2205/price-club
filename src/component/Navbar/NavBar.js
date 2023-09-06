import React, { useState } from 'react';
import Link from '../Link/Link';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'

const NavBar = () => {

    const [open, setOpen] = useState(false)

    const routes = [
        { id: 1, name: 'Home', path: '/Home' },
        { id: 2, name: 'Products', path: '/Products' },
        { id: 3, name: 'Orders', path: '/Orders' },
        { id: 4, name: 'Contact', path: '/Contact' },
        { id: 5, name: 'About', path: '/About' },
    ]
    return (
        <nav className='bg-sky-950 w-full'>
           <div onClick={()=> setOpen(!open)} className="h-6 w-6 text-white md:hidden " >
            {
                open ? <XMarkIcon />:<Bars3Icon/>
            }
           </div>
            <ul className= {`bg-sky-950 md:flex justify-center w-full md:static absolute duration-500 ease-in ${open ? 'top-6': 'top-[-120px]'}`}>
                { routes.map (route => <Link 
                key = {route.id}
                route ={route}
                ></Link>)}
            </ul>
        </nav>
    );
};

export default NavBar; 