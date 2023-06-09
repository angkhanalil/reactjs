import React, { useEffect, useState } from "react";
import axios from "../axios.js";
import { Link, useLocation } from "react-router-dom";
import Pagination from "../components/Pagination.jsx";

const AlbumList = () => {
  const limit = 5;
  const { search } = useLocation();
  const [albums, setAlbums] = useState([]);
  const [pages, setPages] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    // console.log(search.replace(/\?p=/, ""));
    const p = search.replace(/\?p=/, "");
    if (p === "") {
      setCurrentPage(1);
    } else {
      setCurrentPage(parseInt(p));
    }
  }, [search]);

  useEffect(() => {
    axios.get(`albums?_limit=${limit}&_page=${currentPage}`).then((res) => {
      // console.log(res.headers["x-total-count"]);

      const totalPage = Math.ceil(
        parseInt(res.headers["x-total-count"]) / limit
      ); //find total page
      setPages(new Array(totalPage).fill().map((each, idx) => idx + 1));
      //console.log(new Array(totalPage).fill().map((each, idx) => idx + 1));
      console.log(res.data);
      setAlbums(res.data);
    });
  }, [currentPage]);
  return (
    <>
      <h1 className="title">Album List</h1>
      <Pagination pages={pages} currentPage={currentPage} />
      <hr />
      {albums.map((each) => {
        return (
          <p key={each.id}>
            {each.id},{each.title}
          </p>
        );
      })}

      <hr />
      <Pagination pages={pages} currentPage={currentPage} />
      {/* <nav
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
      </nav> */}
    </>
  );
};

export default AlbumList;
