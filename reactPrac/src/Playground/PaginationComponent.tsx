import React from "react";

export function PaginationComponent({
  currentPage,
  totalPages,
  countOfDataToShow,
  goToNextPage,
  goToPreviousPage,
  goToSpecificPage,
}) {
  const buttonRef = React.useRef<any>([]);
  React.useEffect(() => {
    const targetIndex = currentPage - 1;
    if (buttonRef.current[targetIndex]) {
      buttonRef.current[targetIndex]?.focus();
    }
  }, [currentPage]);
  return (
    <>
      <button
        disabled={currentPage == 1}
        onClick={() => goToPreviousPage(currentPage - 1)}
      >
        Prev
      </button>
      {Array.from({ length: totalPages }, (_, ind) => (
        <button
          ref={(el) => {
            buttonRef.current[ind] = el;
          }}
          onClick={() => goToSpecificPage(ind + 1)}
        >
          {ind + 1}
        </button>
      ))}
      <button
        disabled={currentPage == totalPages}
        onClick={() => goToNextPage(currentPage + 1)}
      >
        Next
      </button>
    </>
  );
}
