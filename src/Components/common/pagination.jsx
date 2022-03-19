import React from "react";
import propTypes from "prop-types";
import _ from "lodash";
const Pagination = (props) => {
  const { itemCount, pageSize, onPageChange, currentPage } = props;

  const pageCount = Math.ceil(itemCount / pageSize);
  if (pageCount === 1) return null;
  const pages = _.range(1, pageCount + 1);

  return (
    <nav aria-label="Page navigation">
      <ul className="pagination ">
        {pages.map((page) => (
          <li
            key={page}
            className={page === currentPage ? "page-item active" : "page-item"}
            onClick={() => onPageChange(page)}
          >
            <a className="page-link" to="#">
              {page}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
Pagination.propTypes = {
  itemCount: propTypes.number.isRequired,
  pageSize: propTypes.number.isRequired,
  onPageChange: propTypes.func.isRequired,
  currentPage: propTypes.number.isRequired,
};

export default Pagination;
