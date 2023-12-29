import styles from './CategoryPage.module.scss'
import classNames from 'classnames/bind'
import { Chip, Pagination } from '@mui/material'
import ProductItem from '../../components/ProductItem/ProductItem'
import { Link, useParams } from 'react-router-dom'
import { categories } from '~/utils/sharedResource'
import { useEffect, useState, useCallback } from 'react'
import Dropdown from '../../components/Dropdown/Dropdown'

const cx = classNames.bind(styles)
const CategoryPage = () => {
  const { type } = useParams()
  const [routes, setRoutes] = useState(categories)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleSetActive = useCallback(() => {
    const updatedRoutes = routes.map((item) => {
      return {
        ...item,
        isActive: item.route.split('/categories/')[0] === type
      }
    })
    setRoutes(updatedRoutes)
  })

  useEffect(() => {
    handleSetActive()
  }, [type])

  return (
    <div className={cx('container')}>
      <div className={cx('sidebar')}>
        <p>Danh mục</p>
        <ul className={cx('dt-cat-links')}>
          {routes.map((item) => {
            return (
              <li className={item.isActive ? cx('active') : ''} key={item.id} onClick={handleSetActive}>
                <Link to={item.route}>{item.name}</Link>
              </li>
            )
          })}
        </ul>
        <ul className={cx('mb-tb-cat-links')}>
          {routes.map((item) => {
            return (
              <Chip
                className={cx(item.isActive ? 'chip-btn-active' : 'chip-btn')}
                key={item.id}
                label={item.name}
                variant={item.isActive ? 'filled' : 'outlined'}
              />
            )
          })}
        </ul>
      </div>
      <div className={cx('content')}>
        <div className={cx('chips')}>
          <p>Các đội</p>
          <div className={cx('chip-container')}>
            <Chip className={cx('chip-btn-active')} label='Manchester City' variant='filled' />
            <Chip className={cx('chip-btn')} label='Manchester United' variant='outlined' />
            <Chip className={cx('chip-btn')} label='Chelsea' variant='outlined' />
            <Chip className={cx('chip-btn')} label='Liverpool' variant='outlined' />
          </div>
        </div>
        <div className={cx('sort-button')}>
          <p>Lọc và xắp sếp sản phẩm</p>
          <div className={cx('list-dropdown')}>
            <Dropdown />
            <Dropdown />
          </div>
        </div>
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
