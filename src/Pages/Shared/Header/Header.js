import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className="navbar bg-base-100">
            <div className="flex-1">
                <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal p-0">
                    <NavLink className='mx-2 my-auto font-semibold' to='/'>Courses</NavLink>
                    <NavLink className='mx-2 my-auto font-semibold' to=''>FAQ</NavLink>
                    <NavLink className='mx-2 my-auto font-semibold' to='/blog'>Blog</NavLink>
                    <NavLink className='mx-2 my-auto font-semibold' to='/login'>Login</NavLink>
                    <NavLink className='mx-2 my-auto font-semibold' to='/registration'>Registration</NavLink>
                    <label className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img src="https://placeimg.com/80/80/people" />
                        </div>
                    </label>
                    
                    <input type="checkbox" className="toggle m-auto" />
                </ul>
            </div>
        </div>
    );
};

export default Header;