import React from 'react';

const Pagination = () => {
    const pages = [];
    for(let i=1 ; i<=5; i++){
        pages.push(i);
    }

    return (
        <div>
            <nav aria-label="Page navigation example">
  <ul className="pagination justify-content-center">
    <li className="page-item">
      <a className="page-link" href="#" aria-label="Previous">
        <span aria-hidden="true">&laquo;</span>
      </a>
    </li>
    {pages.map(page=><><li className="page-item">
       
        <a className="page-link" href="#">{page}</a>
        </li></>)}
   
    <li className="page-item">
      <a className="page-link" href="#" aria-label="Next" >
        <span aria-hidden="true">&raquo;</span>
      </a>
    </li>
  </ul>
</nav>
        </div>
    );
}

export default Pagination;
