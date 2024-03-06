import React, { useEffect } from 'react';
import { useState } from 'react';
import Cards from './Cards';
import Loader from './Loader';

const TopAnime = () => {
    const [top, settop] = useState([]);
    const [Loading, setLoading] = useState(true);
    const getTop = async () => {
        try {
          const response = await fetch(`https://api.jikan.moe/v4/top/anime`);
          const json = await response.json();
          settop(json.data);  
           setLoading(false)
        } catch (error) {
          console.error(error);
        } 
      }
      useEffect(() => {
       getTop()
      
      }, []);
    return (
       <>
       
           <p className='text-center text-uppercase fw-medium font-monospace'>
             Top Animes:
            </p>
       <div className="  d-flex flex-wrap justify-content-center" style={{padding:"5px"}}>
              {
                  Loading?<Loader/>:top.map(da=>
                    <Cards mal_id={da?.mal_id} title={da?.title} rank={da?.rank} ep={da?.episodes}img={da?.images.jpg.image_url} discription={da?.synopsis} year={da?.year}></Cards>
                    )}
        </div>
        </>
    );
}

export default TopAnime;
