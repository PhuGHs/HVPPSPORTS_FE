import styles from './CategoryPage.module.scss'
import classNames from 'classnames/bind'
import { Chip, Pagination } from '@mui/material'
import ProductItem from '../../components/ProductItem/ProductItem'
import { Link, useParams } from 'react-router-dom'
import { categories } from '../Home/HomePage'
import { useState } from 'react'


const cx = classNames.bind(styles)
const CategoryPage = () => {
  const { type } = useParams()
  const [routes, setRoutes] = useState(categories)
  const handleSetActive = () => {
    const updatedRoutes = routes.map((item) => {
      return {
        ...item,
        isActive: item.route.split('/categories/')[0] === type
      }
    })
    setRoutes(updatedRoutes)
  }

  return (
    <div className={cx('container')}>
      <div className={cx('sidebar')}>
        <p>
          <b>Danh mục</b>
        </p>
        <ul>
          {routes.map((item) => {
            if (item.isActive) {
              return (
                <li className={cx('active')} key={item.id} onClick={handleSetActive}>
                  <Link to={item.route}>{item.name}</Link>
                </li>
              )
            }
            return (
              <li key={item.id} onClick={handleSetActive}>
                <Link to={item.route}>{item.name}</Link>
              </li>
            )
          })}
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
