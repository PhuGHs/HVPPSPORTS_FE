/* eslint-disable react/prop-types */
import classNames from 'classnames/bind'
import { usePagination, DOTS } from '~/hooks/usePagination'
import styles from './Pagination.module.scss'

const cx = classNames.bind(styles)
const Pagination = ({ onPageChange, totalCount, siblingCount = 1, currentPage, pageSize, className }) => {
  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize
  })

  if (currentPage === 0 || paginationRange.length < 2) {
    return null
  }

  const onNext = () => {
    onPageChange(currentPage + 1)
  }

  const onPrevious = () => {
    onPageChange(currentPage - 1)
  }

  let lastPage = paginationRange[paginationRange.length - 1]
  return (
    <ul className={cx('pagination-container', { [className]: className })}>
      <li
        className={cx('pagination-item', {
          disabled: currentPage === 1
        })}
        onClick={onPrevious}
      >
        <div className='arrow left' />
      </li>
      {paginationRange.map((pageNumber) => {
        if (pageNumber === DOTS) {
          return (
            <li key={pageNumber} className={cx('pagination-item dots')}>
              &#8230;
            </li>
          )
        }

        return (
          <li
            key={pageNumber}
            className={cx('pagination-item', {
              selected: pageNumber === currentPage
            })}
            onClick={() => onPageChange(pageNumber)}
          >
            {pageNumber}
          </li>
        )
      })}
      <li
        className={cx('pagination-item', {
          disabled: currentPage === lastPage
        })}
        onClick={onNext}
      >
        <div className='arrow right' />
      </li>
    </ul>
  )
}

export default Pagination
