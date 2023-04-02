import styles from '../styles/pagination.module.css';

export default function Pagination({ currentPage, totalPages, onPageChange }) {
  const pages = [];
  const maxPages = 5; // maximum number of pages to show in the pagination

  // calculate the range of pages to show in the pagination
  const startPage = Math.max(1, currentPage - Math.floor(maxPages / 2));
  const endPage = Math.min(totalPages, startPage + maxPages - 1);

  // add page numbers to the pages array
  for (let i = startPage; i <= endPage; i++) {
    pages.push(i);
  }

  function handlePageChange(pageNumber) {
    onPageChange(pageNumber);
  }

  return (
    <div className={styles.pagination}>
      {currentPage > 1 && (
        <button className={styles.pageLink} onClick={() => handlePageChange(currentPage - 1)}>
          &lt;
        </button>
      )}

      {pages.map((page) => (
        <button
          key={page}
          className={`${styles.pageLink} ${page === currentPage ? styles.active : ''}`}
          onClick={() => handlePageChange(page)}
        >
          {page}
        </button>
      ))}

      {currentPage < totalPages && (
        <button className={styles.pageLink} onClick={() => handlePageChange(currentPage + 1)}>
          &gt;
        </button>
      )}
    </div>
  );
}
