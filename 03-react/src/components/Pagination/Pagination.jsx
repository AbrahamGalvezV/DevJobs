import styles from "./Pagination.module.css";

export function Pagination({ currentPage = 1, totalPages = 10, onPageChange }) {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === totalPages;

  const stylePrevButton = isFirstPage
    ? { pointerEvents: "none", opacity: 0.5 }
    : {};

  const styleNextButton = isLastPage
    ? { pointerEvents: "none", opacity: 0.5 }
    : {};

  const handlePrevClick = (e) => {
    e.preventDefault();
    if (!isFirstPage) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNextClick = (e) => {
    e.preventDefault();
    if (!isLastPage) {
      onPageChange(currentPage + 1);
    }
  };

  const handleChangePage = (e) => {
    e.preventDefault();
    const page = Number(e.currentTarget.dataset.page);

    if (page !== currentPage) {
      onPageChange(page);
    }
  };

  return (
    <nav className={styles.pagination}>
      <a href="#" style={stylePrevButton} onClick={handlePrevClick}>
        ‹
      </a>

      {pages.map((page) => (
        <a
          key={page}
          data-page={page}
          href="#"
          onClick={handleChangePage}
          className={currentPage === page ? styles.isActive : ""}
        >
          {page}
        </a>
      ))}

      <a href="#" style={styleNextButton} onClick={handleNextClick}>
        ›
      </a>
    </nav>
  );
}
