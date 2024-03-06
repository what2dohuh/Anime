import React, { useEffect, useState} from 'react';
import { Link } from 'react-router-dom'; 
import Cards from './component/Cards';
import Sidebar from './component/Sidebar';
import Loader from './component/Loader';
import useStore from './context/searchContext';
const App = () => { 

  const [data, setData] = useState([]);
  const [Loading,setLoading]=useState(true)
  const search = useStore((state) => state.search)
  const btn = useStore((state) => state.btn)
  
  const [currentPage, setcurrentPage] = useState(1);

  const getMovies = async () => {
    try {
      const response = await fetch(`https://api.jikan.moe/v4/anime?page=${currentPage}&q=${search}`);
      const json = await response.json();
      setData(json.data);  
       setLoading(false)
    } catch (error) {
      console.error(error);
    } 
  }
useEffect(()=>{

getMovies()
},[currentPage,btn])
  return (
    <>
    {(Loading ? (<Loader/>):(
     
      <>
       <nav aria-label="Page navigation example">
  <ul className="pagination justify-content-center">
    <li className="page-item">
      <Link className="page-link"  aria-label="Previous"onClick={()=>{if(currentPage>1){setcurrentPage(currentPage-1)}}}>
        <span aria-hidden="true">&laquo;</span>
      </Link>
    </li> 
    <li className="page-item"><a className="page-link" >{currentPage}</a></li> 
   
   
    <li className="page-item">
      <Link className="page-link" aria-label="Next" onClick={()=>setcurrentPage(currentPage+1)}>
        <span aria-hidden="true">&raquo;</span>
      </Link>
    </li>
  </ul>
</nav>
    <div className="container-sm  d-flex flex-grow- flex-fill "style={{padding:"10px"}}>
    <div className="  d-flex flex-wrap justify-content-center" style={{padding:"5px"}}>

      {data.map(da=>
          <Cards mal_id={da?.mal_id} title={da?.title} rank={da?.rank} ep={da?.episodes}img={da?.images.jpg.image_url} discription={da?.synopsis} year={da?.year}></Cards>
          )}      
 

</div>
        <div className="container-sm  d-flex  flex-column mb-1 "style={{width:'200px'}}>
       

<Sidebar/>

        </div>
        

    </div>
    </>))
    }
    </>
  );
};

export default App;