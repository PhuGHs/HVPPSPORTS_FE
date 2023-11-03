import styles from './CategoryPage.module.scss'
import classNames from 'classnames/bind'
import { Chip, Pagination } from '@mui/material'
import ProductItem from '../../components/ProductItem/ProductItem'
import { Link } from 'react-router-dom'

const cx = classNames.bind(styles)
const CategoryPage = () => {
  return (
    <div className={cx('container')}>
      <div className={cx('sidebar')}>
        <p>
          <b>Danh mục</b>
        </p>
        <ul>
          <li>
            <Link to='/categories/premier-league'>Premier League</Link>
          </li>
          <li>
            <Link to='/categories/laliga'>Laliga</Link>
          </li>
          <li>
            <Link to='/categories/bundesliga'>Bundesliga</Link>
          </li>
          <li>
            <Link to='/categories/ligue1'>Ligue 1</Link>
          </li>
          <li>
            <Link to='/categories/serieA'>Serie A</Link>
          </li>
          <li>
            <Link to='/categories/international'>International</Link>
          </li>
        </ul>
      </div>
      <div className={cx('content')}>
        <div className={cx('chip-container')}>
          <Chip className={cx('chip-btn-active')} label='Manchester City' variant='filled' />
          <Chip className={cx('chip-btn')} label='Manchester United' variant='outlined' />
          <Chip className={cx('chip-btn')} label='Chelsea' variant='outlined' />
          <Chip className={cx('chip-btn')} label='Liverpool' variant='outlined' />
        </div>
        <div className={cx('sort-button')}>sort</div>
        <div className={cx('product-list')}>
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
        </div>
        <div className={cx('pagination-container')}>
          <Pagination className={cx('pagination-item')} count={10} shape='rounded' />
        </div>
      </div>
    </div>
  )
}

export default CategoryPage
