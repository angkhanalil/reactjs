import React from "react";
import { Link, useLocation } from "react-router-dom";

const Pagination = (props) => {
  const { pages, currentPage } = props;
  return (
    <nav
      className="pagination is-centered"
      role="navigation"
      aria-label="pagination"
    >
      <a className="pagination-previous">Previous</a>
      <a className="pagination-next">Next page</a>
      <ul className="pagination-list">
        {pages.map((page) => {
          const className =
            page === currentPage
              ? "pagination-link is-current"
              : "pagination-link";
          return (
            <li key={page}>
              <Link to={`/album-list?p=${page}`} className={className}>
                {page}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Pagination;
