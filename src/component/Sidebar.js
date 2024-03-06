import React, { useEffect, useState } from 'react'; 
import { Link } from 'react-router-dom';

const Sidebar = (props) => {

  const [genre, setgenre] = useState([]);
  useEffect(() => {
    setTimeout(() => {
      
      getgenres() 
    }, 1000);
    }, []);
  const getgenres= async()=>{

    try{
      const response = await fetch('https://api.jikan.moe/v4/genres/anime')
      const json = await response.json()
      setgenre(json.data)
    }catch(e){
      console.error(e)
    }
   
  }

    return (
        <div className="container" >
<button className="btn btn-secondary d-lg-none" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasResponsive" aria-controls="offcanvasResponsive">Toggle</button>

 
<div className="offcanvas-lg offcanvas-end" tabindex="-1" id="offcanvasResponsive" aria-labelledby="offcanvasResponsiveLabel">
  <div className="offcanvas-header">
    <h5 className="offcanvas-title" id="offcanvasResponsiveLabel">Animes</h5>
    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" data-bs-target="#offcanvasResponsive" aria-label="Close"></button>
  </div>
  <div className="offcanvas-body ">
  <div className="border border-secondary border-opacity-50 rounded-start rounded-end " style={{padding:'5px'}}>
    Catogeries:<br/>
    {genre.map((data=> <div className='btn btn-secondary' style={{padding:'2px',margin:'2px'}}>{data.name}</div>))}
 
</div>
  </div>
  <hr/>
 <Link to='/topanimes' style={{textDecoration:'none'}}>
  <p className="font-monospace text-secondary" style={{margin:'5px'}}>Top Anime</p>
 </Link>
  <hr/>


</div>
        </div>
    );
}

export default Sidebar;
