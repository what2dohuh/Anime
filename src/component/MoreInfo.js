import React, { useEffect, useState } from 'react';
import YouTube from "react-youtube";
import dateFormat from 'dateformat';
import { useParams,Link} from 'react-router-dom'; 
import Loader from './Loader';
import Reviews from './Reviews';
import News from './News';
const MoreInfo = () => {

    const {mal_id}=useParams()
    const [loading,setLoading]=useState(true)
    const [Isloading,setIsLoading]=useState(true)
    const [res,setRes]=useState([])
    const [Rev,setRev]=useState([])
    const [newss,setNew]=useState([])
    const [current, setcurrent] = useState(true);
   
    useEffect(()=>{
        const get=async()=>{
            const response = await fetch(`https://api.jikan.moe/v4/anime/${mal_id}/full`)
            const data = await response.json()
            setRes(data)
            setLoading(false)
         }
     
         const getReviews=async()=>{
             try{
                 const response= await fetch(`https://api.jikan.moe/v4/anime/${mal_id}/reviews`)
                 const json = await response.json()
                 setRev(json.data)
               
             }catch(err){
                 console.error(err)
             }finally{
                 setIsLoading(false)
             }
         }
         const news = async()=>{
             try{
                 const response= await fetch(`https://api.jikan.moe/v4/anime/${mal_id}/news`)
                 const json = await response.json()
                 setNew(json.data)
                 
             }catch(err){
                 console.error(err)
             }finally{
                 setIsLoading(false)
             }
         }
        get()
        news()
        getReviews()
    },[])

    return (
        <>
        {(loading ?(<Loader/>):(

<div className='container'>

<p className="text-start badge text-bg-primary text-wrap">Rank: {res.data?.rank}</p>
 <p className='text-center text-uppercase fw-medium font-monospace'>{res.data?.title}</p>
 <p className='text-center text-uppercase fw-medium font-monospace'>{res.data?.title_japanese}</p>
 <div className='container text-center'>
 <img src={res.data?.images.jpg.large_image_url} alt='img' height='300px'/>
</div>
<p className='fw-light text-end'>Year Of Release: {res.data?.year} <br/> Season:{res.data?.season}<br/>Aired:<br/>{ dateFormat(res.data?.aired.from, "mmmm dS, yyyy")}-{ dateFormat(res.data?.aired.to, "mmmm dS, yyyy")}<br/>Studio:{res.data?.studios[0].name}</p>
{res.data?.genres.map((gn)=><div className='btn btn-secondary' style={{padding:'2px',margin:'2px'}}>#{gn.name}</div>)}<br/>
<div className="badge text-bg-dark text-wrap" style={{margin:'4px'}} >
Total Episodes: {res.data?.episodes}
</div>
<p className='text-start text-uppercase fw-medium font-monospace'>Trailer:</p>

<YouTube videoId={res.data?.trailer.youtube_id} style={{width:'200px'}} id="video"/>
<p className='font-monospace' style={{padding:'2px',margin:'2px'}}>Where Can You Watch:{res.data?.streaming.map((da=><p>{da.name}:<br/><Link href={da.url} className='link-secondary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover'>{da.url}</Link></p>))}</p>
<p className='fw-semibold'>Synopsis:</p>
<p className='fw-normal'>{res.data?.synopsis}</p>

<ul className="nav nav-tabs">
  <li className="nav-item">
    <Link className={`nav-link ${current?'active':''}`} aria-current="page" onClick={()=>setcurrent(true)}>Reviews</Link>
  </li>
  <li className="nav-item" onClick={()=>setcurrent(false)}>
    <Link className={`nav-link ${current?'':'active'}`} >News</Link>
  </li>
 
</ul>
{Isloading?<Loader/>: current?(
 Rev.map((data)=><Reviews length={data.length}review={data.review} date={data.date}username={data.user.username}img={data.user.images.jpg.image_url}/>)
):(newss.map((data)=><News title={data?.title} date={data?.date} author={data?.author_username} img={data.images.jpg.image_url} url={data?.url} excerpt={data?.excerpt}></News>)
)}

  </div>
        ))}
      
        </>
    );
}

export default MoreInfo;
