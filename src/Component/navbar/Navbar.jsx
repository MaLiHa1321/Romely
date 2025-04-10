import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/logo (1).png';
import { AuthContext } from '../../provider/AuthProvider';

const Navbar = () => {

  const {user,logOut} = useContext(AuthContext);

    const navAccess = <>
    <NavLink to='/'>Home</NavLink>
    <NavLink to='/destination'>Destination</NavLink>
    <NavLink to='/blog'>Blog</NavLink>
    <NavLink to='/contact'>Contact</NavLink>
   
    </>
    return (
        <div>
            <div className="navbar bg-base-100 shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow gap-5 items-center">
       {navAccess}
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">
        <img className='w-24' src={logo} alt="" />
    </a>
  </div>
  <div className="navbar-center hidden lg:flex items-center justify-center">
  <input type="text" placeholder="Search your destination" className="input input-bordered w-80 md:w-auto" />
    <ul className="menu menu-horizontal px-1 gap-5">
    
       {navAccess}
    </ul>
  </div>
  <div className="navbar-end">
  {
    user && user?.email ?( 
       <button className="btn btn-warning text-black" onClick={logOut}>Logout</button>) : <Link to='/login' className="btn btn-warning text-black">Login</Link> 
  }
 </div>
  </div>

 
</div>
            
  
    );
};

export default Navbar;