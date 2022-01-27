import styles from "styles/Pagination.module.scss";
import Link from "next/link";
import { useRouter } from "next/router";
import AngleDoubleLeftIcon from "./icons/AngleDoubleLeftIcon";
import AngleLeftIcon from "./icons/AngleLeftIcon";
import AngleDoubleRightIcon from "./icons/AngleDoubleRightIcon";
import AngleRightIcon from "./icons/AngleRightIcon";

const Pagination = ({ totalCount, itemsPerPage }) => {
  const router = useRouter();

  const currentPage = isNaN(parseInt(router.query.page))
    ? 1
    : parseInt(router.query.page);
  const pageCount = Math.ceil(totalCount / itemsPerPage);
  const firstPage = 1;
  const prevPage = parseInt(currentPage) - 1;
  const nextPage = parseInt(currentPage) + 1;
  const lastPage = pageCount;
  const pages = [
    prevPage - 1 >= firstPage && prevPage - 1,
    prevPage >= firstPage && prevPage,
    currentPage,
    nextPage <= lastPage && nextPage,
    nextPage + 1 <= lastPage && nextPage + 1,
  ];
  const isFirstPage = prevPage < firstPage;
  const isLastPage = nextPage > lastPage;
  return (
    <div className={styles.pagination}>
      <Link
        href={{
          pathname: router.pathname,
          query: { ...router.query, page: firstPage },
        }}
      >
        <a
          className={`${styles.control} ${isFirstPage ? styles.disabled : ""}`}
        >
          <AngleDoubleLeftIcon />
        </a>
      </Link>
      <Link
        href={{
          pathname: router.pathname,
          query: { ...router.query, page: isFirstPage ? 1 : prevPage },
        }}
      >
        <a
          className={`${styles.control} ${isFirstPage ? styles.disabled : ""}`}
        >
          <AngleLeftIcon />
        </a>
      </Link>
      <div className={styles.pages}>
        {pages.map(
          (page) =>
            page && (
              <Link
                href={{
                  pathname: router.pathname,
                  query: { ...router.query, page },
                }}
                key={page}
              >
                <a
                  className={`${styles.page} ${
                    currentPage == page ? styles.active : ""
                  }`}
                >
                  {page}
                </a>
              </Link>
            )
        )}
      </div>
      <Link
        href={{
          pathname: router.pathname,
          query: {
            ...router.query,
            page: isLastPage ? lastPage : nextPage,
          },
        }}
      >
        <a className={`${styles.control} ${isLastPage ? styles.disabled : ""}`}>
          <AngleRightIcon />
        </a>
      </Link>
      <Link
        href={{
          pathname: router.pathname,
          query: { ...router.query, page: lastPage },
        }}
      >
        <a className={`${styles.control} ${isLastPage ? styles.disabled : ""}`}>
          <AngleDoubleRightIcon />
        </a>
      </Link>
    </div>
  );
};

export default Pagination;
