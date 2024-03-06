import React from 'react';
import { Link } from 'react-router-dom';
const Cards = (props) => {
    return ( 
    <div className="card" style={{width: "12rem",padding:"3px",margin:'5px'}}>
      <span className="badge rounded-pill text-bg-dark" style={{width:"40px"}}>{props.rank}</span>

  <img src={props?.img} style={{width:'150px',height:"200px"}} className="card-img-top" alt="..."/>
  
  <h5>{props.title.split('',20)}...</h5>
  <p>Total Episodes:{props?.ep}</p>
  <h6>{props?.year}</h6>

  <div className="card-body">
    <p className="card-text">{props.discription?.split('',70)}  <Link className='link-secondary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover'to={`/moreinfo/${props?.mal_id}`}> ...Read More </Link></p>
  </div>
 
</div> 
    );
}

export default Cards;
