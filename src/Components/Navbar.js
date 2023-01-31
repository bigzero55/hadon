import React, {useState} from "react";
import { Link } from "react-router-dom";
import IconHome from "../Icons/IconHome";
import IconSearch from "../Icons/IconSearch";


export default function Navbar () {
  let Hadits = window.location.pathname == '/'
  return (
  <div className="myNav">
    {/* <div className="flex justify-center bg-neutral">
      <p className="text-secondary-content">Beta Version, in Testing Mode</p>
    </div> */}
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
          </label>
          <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            <li>
              <Link to="/">Beranda</Link>
            </li>
            <li>
              <Link to="about">
                About
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="navbar-center">
        <button className="btn btn-ghost normal-case text-xl">
          Hadits Online
        </button>
      </div>
      <div className="navbar-end">
        <IconSearch 
          display={Hadits}
        />
        <Link to="/">
          <button className="btn btn-ghost btn-circle">
            <div className="indicator">
              <IconHome />
            </div>
          </button>
        </Link>
      </div>
    </div>
  </div>
  )
}