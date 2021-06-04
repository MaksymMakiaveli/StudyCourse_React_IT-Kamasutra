import React from 'react';
import Pagination from '@material-ui/lab/Pagination';

export const PaginatorUI = ({ totalUsersCount, pageSize, currentPage, onPageChanged }) => {
  let pagesCount = Math.ceil(totalUsersCount / pageSize);

  let pages = [];

  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  return (
    <Pagination
      count={pages.length}
      onChange={(event, page) => {
        onPageChanged(page);
      }}
      siblingCount={3}
      color='primary'
      defaultPage={currentPage}
    />
  );
};
