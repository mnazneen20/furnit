import React from 'react'
import logo from '../assets/logo.svg'
import { Link } from 'react-router-dom'
import cart from '../assets/cart.svg'
import search from '../assets/search.svg'
import user from '../assets/user.svg'

const Navbar = () => {
    const navlist = [
        {
            name: 'Home',
        },
        {
            name: 'Shop',
        },
        {
            name: 'Blog',
        },
        {
            name: 'About',
        },
        {
            name: 'Contact',
        },
        {
            name: 'Team',
        },
    ]
    return (
        <div className='flex justify-between py-7 px-16'>
            <Link to={'/'}>
                <img src={logo} alt='logo' />
            </Link>
            <ul className='flex items-center gap-5'>
                {
                    navlist.map(m => <li key={m.name}><Link to={'#'}>{m.name}</Link></li>)
                }
            </ul>
            <ul className='flex text-xl items-center gap-6'>
                <li><img src={search} alt='search svg' /></li>
                <li><img src={user} alt='user svg' /></li>
                <li><img src={cart} alt='cart svg' /></li>
            </ul>
        </div>
    )
}

export default Navbar