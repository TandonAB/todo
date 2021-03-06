import React from 'react';

const Pagination = ({ todosPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / todosPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className='pagination my-4'>
        {pageNumbers.map(number => (
          <li key={number} className='page-item'>
            <span onClick={() => paginate(number)} className='page-link'>
              {number}
            </span>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;