import PropTypes from "prop-types"
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { BsGithub } from 'react-icons/bs'
import { themeChange } from 'theme-change'


import Themes from "../shared/Themes";

const Navbar = ({title}) => {
    // for css-theme-change
    useEffect(() => {
        themeChange(false)
    }, [])

    return (
        <nav className="navbar mb-12 bg-neutral text-neutral-content">
            <div className="container mx-auto">
            <div className="flex justify-between items-center w-full">
                <div className="navbar-start sm:hidden w-fit">
                    <div class="dropdown">
                        <label tabindex="0" class="btn btn-ghost btn-circle">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                        </label>
                        <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/about">About</Link></li>
                        </ul>
                    </div>
                </div>

                <div class="navbar-center w-fit">
                    <div className="flex-none mx-2 px-2">
                        <BsGithub className="inline text-2xl sm:text-4xl pr-2" />
                        <Link to="/"
                            className="text-md sm:text-lg font-bold align-middle whitespace-normal">
                            {title}
                        </Link>
                    </div>
                </div>

                <div class="navbar-end hidden sm:block w-fit">
                    <div className="flex-1 mx-2 px-2 hidden sm:block">
                        <div className="flex justify-end items-center">
                            <Link to="/" className="btn btn-ghost btn-sm rounded-btn">
                                HOME
                            </Link>
                            <Link to="/about" className="btn btn-ghost btn-sm rounded-btn">
                                ABOUT
                            </Link>
                            <div>
                                <Themes />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="sm:hidden w-fit">
                    <Themes />
                </div>
            </div>
            </div>


                {/* <div className="flex gap-2 items-center">
                    {/* hidden menu 
                    <div className="block sm:hidden dropdown">
                        <label tabIndex="0" className="btn btn-circle btn-ghost">
                            <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" /></svg>
                        </label>
                        <ul tabIndex="0" className="dropdown-content menu menu-compact lg:menu-normal bg-base-100 p-2 rounded-box w">
                            <li><Link to="/" className="btn btn-ghost btn-sm rounded-btn">
                                HOME
                            </Link></li>
                            <li><Link to="/about" className="btn btn-ghost btn-sm rounded-btn">
                                ABOUT
                            </Link></li>
                        </ul>
                    </div>
                    <div className="flex-none mx-2 px-2">
                        <BsGithub className="inline text-4xl pr-2" />
                        <Link to="/"
                        className="text-lg font-bold align-middle whitespace-normal">
                            {title}
                        </Link>
                    </div>
                </div>

                <div className="flex-1 mx-2 px-2 hidden sm:block">
                    <div className="flex justify-end items-center">
                        <Link to="/" className="btn btn-ghost btn-sm rounded-btn">
                            HOME
                        </Link>
                        <Link to="/about" className="btn btn-ghost btn-sm rounded-btn">
                            ABOUT
                        </Link>
                        <div>
                            <Themes /></div> 
                    </div>
                </div>
                <div className="sm:hidden w-fit ml-auto">
                    <Themes />
                </div>  */}
        </nav>
    );
}

Navbar.defaultProps = {
    title: 'FindMy Github'
}
Navbar.propTypes = {
    title: PropTypes.string
}
export default Navbar;