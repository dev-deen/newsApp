import React, { Component } from 'react';

export class Pagination extends Component {

  render() {
    const {page, pageSize, totalPages, onPageChange} = this.props;
    return (
      <div>
        <nav aria-label="Page navigation example">
          <ul className="pagination justify-content-center">
            <li className={`page-item ${page <= 1 && 'disabled'}`}>
              <button className="page-link" 
              onClick={()=>onPageChange(page-1)} aria-label="Previous">
                <span aria-hidden="true">&laquo;</span>
              </button>
            </li>
            {page > 1 && (
              <li className="page-item">
                <button className="page-link" 
                onClick={()=>onPageChange(page-1)}
            >{page - 1}</button></li>)
            }
            <li className="page-item active">
              <button className="page-link">{page}
              </button>
            </li>
            {page < Math.ceil(totalPages/pageSize) && (
              <li className="page-item"><button className="page-link" 
              onClick={()=>onPageChange(page+1)}>{page + 1}</button></li>)
            }
            {console.log(Math.ceil(totalPages/pageSize))}
            <li className={`page-item ${page >= Math.ceil(totalPages/pageSize) && 'disabled'}`}>
              <button className="page-link" onClick={()=>onPageChange(page+1)} aria-label="Next">
                <span aria-hidden="true">&raquo;</span>
              </button>
            </li>
          </ul>
        </nav>
      </div>
    )
  }
}

export default Pagination
