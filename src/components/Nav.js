import React from 'react'
import { Link } from 'react-router-dom'
export default function Nav() {
    return (
        <header className="text-gray-400 bg-gray-900 body-font">
            <div className="mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <Link to = "/" className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
                        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                    </svg>
                    <span className="ml-3 text-xl">Tailblocks</span>
                </Link>
                <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
                    <Link className="mr-5 hover:text-white cursor-pointer" to="/">Image gallery</Link>
                    <Link className="mr-5 hover:text-white cursor-pointer" to="/image/drive">Image drive</Link>
                    <div className="pt-2 relative mx-auto text-gray-600">
                        <input className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
                            type="search" name="search" placeholder="Search" />
                        <button type="submit" className="absolute right-0 top-0 mt-5 mr-4">
                        <i className="fa-solid fa-magnifying-glass"></i>
                        </button>
                    </div>
                </nav>
                <button className="inline-flex items-center bg-purple-800 border-0 py-1 px-3 focus:outline-none hover:bg-purple-700 rounded text-base mt-4 md:mt-0 mx-4"><Link to="/login">Login</Link>
                </button>
                <button className="inline-flex items-center bg-purple-800 border-0 py-1 px-3 focus:outline-none hover:bg-purple-700 rounded text-base mt-4 md:mt-0"><Link to="/signup">SignUp</Link></button>
            </div>
        </header>
    )
}
