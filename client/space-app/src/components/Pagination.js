import React from "react";
import { HashLink as Link} from 'react-router-hash-link';

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
    const pageNumbers = [];

    for(let i=1; i <= Math.ceil(totalPosts/postsPerPage); i++){
        pageNumbers.push(i);
    }

    return (
        <nav className="pageNav">
            <ul className="pagination">
                {pageNumbers.map(number => (
                    <li key={number} className="page-item">
                        <Link onClick={()=>paginate(number)} tabIndex="1"  className="page-link pageNumbers" to="#explore">{number}
                        </Link> 
  
                    </li>
                ))}
            </ul>
        </nav>
    )
}
export default Pagination;