import React, { useState } from 'react';
import { Link } from 'react-router-dom'; 
import useStore from '../context/searchContext';

const Navbar = () => {

  const search = useStore((state) => state.search)

    const update = useStore((state=>state.updatesearch))
    const increasePopulation = useStore((state) => state.increasePopulation)


    return (
        <>
       
        
        <nav className="navbar bg-body-tertiary">
         
          <div className="container-fluid">
           <Link to='/' className='link-offset-2 link-underline link-underline-opacity-0'>  <span className="navbar-brand mb-0 h1">Animes</span></Link>
          
           <form className="d-flex" role="search" onSubmit={e => e.preventDefault()}>

        <input className="form-control me-2" type="search" placeholder="Search Animes..." aria-label="Search"     value={search}
          onChange={e => update(e.target.value)}/>
         <button className='btn btn-outline-secondary' onClick={increasePopulation} >Search </button>
          </form>

          </div> 
        </nav>
        
        </>
    );
}

export default Navbar;
