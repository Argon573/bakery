import { NavLink } from 'react-router-dom'

const Header = () => {
    return (
        <NavLink
            to={'/'}
            className="header bg-amber-100 w-full h-[12vh] flex justify-center items-center rounded-b-2xl shadow-[0_6px_15px_-5px_rgba(0,0,0,0.15)]">
            <img src='/logo.png' alt="Logo" className='w-25 h-20'/>
        </NavLink>
    )
}

export default Header;