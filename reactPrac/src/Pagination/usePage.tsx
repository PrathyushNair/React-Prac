import React from "react";

export const usePage = (length) => {
  const [currentPage, setCurrentPage] = React.useState(1);
  const [itemsPerPage, setItemsPerPage] = React.useState(6);
  const totalPages = Math.ceil(length / itemsPerPage);

  function currentData(data) {
    const startPage = (currentPage - 1) * itemsPerPage;
    const endPage = startPage + itemsPerPage;
    return data.slice(startPage, endPage);
  }
//   const currentData = React.useCallback((data) => {
//     const startPage = (currentPage - 1) * itemsPerPage;
//     const endPage = startPage + itemsPerPage;
//     return data.slice(startPage, endPage);
//   },[currentPage]);
  function goToNextPage() {
    setCurrentPage((prevPage) => prevPage + 1);
  }

  function goToPrevPage() {
    setCurrentPage((prevPage) => prevPage - 1);
  }

  function goToSpecificPage(pageNumber: number) {
    setCurrentPage(pageNumber);
  }
  return {
    totalPages,
    currentData,
    currentPage,
    goToNextPage,
    goToPrevPage,
    goToSpecificPage,
  };
};
