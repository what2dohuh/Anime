import React, { useState }  from 'react';
import dateFormat from 'dateformat';
import Loader from './Loader';

const Reviews = (props) => {
    
    const [showFull, setShowFull] = useState(false);
    
    return (
        <div>
            {props.length<0?<Loader/>:
            <div className="d-flex align-items-center border border-secondary mb-3 border-opacity-50 rounded-start border-end-0 border-start-0">
  <div className="-shrink-0">
    <p>~{props.username}</p>
    <img src={props.img} width='100px' height='100px'flex alt="..."/>
  </div>
  <div className="flex-grow-1 ms-3">
   {showFull ? <div onClick={()=>setShowFull(!showFull)}>{props.review}<span className='text-secondary'>...ShowLess</span></div> : (<div onClick={()=>setShowFull(!showFull)}>{props.review?.slice(0,300)}<span className='text-secondary'>...ReadMore</span></div>)}

    </div>
    <p className="card-text"><small className="text-body-secondary">{dateFormat(props.date,'mmmm dd,yyyy')}</small></p>
   
</div>}
        </div>
    );
}

export default Reviews;
