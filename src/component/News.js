
import React from 'react';
import { Link} from 'react-router-dom'; 
import dateFormat from 'dateformat';
const News = (props) => {
    return (
        <div>
             <div>
            <div className="d-flex align-items-center border border-secondary mb-3 border-opacity-50 rounded-start border-end-0 border-start-0">
  <div className="-shrink-0">
    <p>~{props.author}</p>
    <img src={props.img} width='100px' height='100px'flex alt="..."/>
  </div>
  <div className="flex-grow-1 ms-3">
  <p className='text-center text-uppercase fw-medium font-monospace'>
  {props.title} 

  </p>
  {props.excerpt}
  <Link className='text-secondary' to={props.url}>To Read More</Link>
    </div>
    <p className="card-text"><small className="text-body-secondary">{dateFormat(props.date,'mmmm dd,yyyy')}</small></p>
   
</div>
        </div>
        </div>
    );
}

export default News;
