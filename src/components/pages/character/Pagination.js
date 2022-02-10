import React from "react";

// Component
import Button from "../../common/Button";

// Style
import "./style/Pagination.scss";

export default function Pagination({ page, pagination, setPage }) {
  return (
    <div className="containerPagination">
      <Button
        size={`${ pagination && !pagination.prev ? 'small_disable':'' }`}
        content="Anterior"
        type="none"
        onClick={() => pagination.prev && setPage(page - 1)}
      />
      <span className="containerPagination-page">
        {" "}
        {page} de {pagination && pagination.pages}{" "}
      </span>
      <Button
        size={`${ pagination && !pagination.next ? 'small_disable':'' }`}
        content="Siguiente"
        type="none"
        onClick={() => pagination.next && setPage(page + 1)}
      />
    </div>
  );
}
