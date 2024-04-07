import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Navbar.css';
import logo from '../assets/logo/CareerHub.png'
import { authContext } from './AuthProvider';



const Navbar = () => {
    const authInfo = useContext(authContext)
    const {user, logOut} = authInfo;
    const handleLogOut = () => {
        logOut()
        .then(result => console.log(result))
        .catch(err => console.error(err))
    }
    return (
        <div>
            <div className="navbar bg-violet-50">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <NavLink to="/" className={({isActive}) => isActive ? "active" : ""}>
                            Home
                        </NavLink>
                        <NavLink to="/application" className={({isActive}) => isActive ? "active" : ""}>
                            Applications
                        </NavLink>
                        <NavLink to="/blog" className={({isActive}) => isActive ? "active" : ""}>
                            Blogs
                        </NavLink>
                        <NavLink to="/add-application" className={({isActive}) => isActive ? "active" : ""}>
                            Add
                        </NavLink>
                        <NavLink to="/dashboard" className={({isActive}) => isActive ? "active" : ""}>
                            Dashboard
                        </NavLink>
                        <NavLink to="/login" className={({isActive}) => isActive ? "active" : ""}>
                            login
                        </NavLink>
                        <NavLink to="/users" className={({isActive}) => isActive ? "active" : ""}>
                            Users
                        </NavLink>
                        
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">
                        <img src={logo} alt="logo" />
                    </a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <NavLink to="/" className={({isActive}) => isActive ? "active" : ""}>
                            Home
                        </NavLink>
                        <NavLink to="/application" className={({isActive}) => isActive ? "active" : ""}>
                            Applications
                        </NavLink>
                        <NavLink to="/blog" className={({isActive}) => isActive ? "active" : ""}>
                            Blogs
                        </NavLink>
                        <NavLink to="/add-application" className={({isActive}) => isActive ? "active" : ""}>
                            Add
                        </NavLink>
                        <NavLink to="/dashboard" className={({isActive}) => isActive ? "active" : ""}>
                            Dashboard
                        </NavLink>
                        <NavLink to="/login" className={({isActive}) => isActive ? "active" : ""}>
                            login
                        </NavLink>
                        <NavLink to="/users" className={({isActive}) => isActive ? "active" : ""}>
                            Users
                        </NavLink>
                    </ul>
                </div>
                <div className="navbar-end">
                    {user ? <div> <p> {user.email} </p>  <button onClick={handleLogOut}>LogOut</button> </div> : <Link to="/login"><button className="btn bg-violet-700 text-white hover:bg-violet-500">Login</button></Link>}
                    
                </div>
            </div>
        </div>
    );
};

export default Navbar;