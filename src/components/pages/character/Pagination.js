import React from "react";

// Component
import Button from "../../common/Button";

// Style
import "./style/Pagination.scss";

export default function Pagination({ page, pagination, setPage }) {

  const isNext = () => {
    return page === (pagination && pagination.pages)
  }

  const isPrev = () => {
    return page === 1
  }

  return (
    <div className="containerPagination">
      <Button
        size={`${ isPrev() ? 'small_disable':'' }`}
        content="Anterior"
        type="none"
        onClick={() => page > 1 && setPage(page - 1)}
      />
      <span className="containerPagination-page">
        {" "}
        {page} de {pagination && pagination.pages}{" "}
      </span>
      <Button
        size={`${  isNext() ? 'small_disable':'' }`}
        content="Siguiente"
        type="none"
        onClick={() => !isNext() && setPage(page + 1)}
      />
    </div>
  );
}
