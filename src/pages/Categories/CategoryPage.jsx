import styles from './CategoryPage.module.scss'
import classNames from 'classnames/bind'
import { Chip } from '@mui/material'
import ProductItem from '../../components/ProductItem/ProductItem'
import { Link, useLocation, useParams } from 'react-router-dom'
import { categories } from '~/utils/sharedResource'
import { useEffect, useState } from 'react'
import Dropdown from '../../components/Dropdown/Dropdown'
import { CategoryApi } from '~/api/category.api'
import Spinner from '~/components/Spinner/Spinner'
import Button from '~/components/Button/Button'
import Pagination from '~/components/Pagination/Pagination'

const initFilters = {
  names: [],
  seasons: [],
  groups: [],
  club: [],
  nation: [],
  minPrice: 0,
  maxPrice: 10000000,
  sortBy: 'Price',
  descending: false,
  sizeS: false,
  sizeM: false,
  sizeL: false,
  sizeXL: false,
  page: 1,
  productPerPage: 8
}

const cx = classNames.bind(styles)
const CategoryPage = () => {
  const { type } = useParams()
  const location = useLocation()
  const { key } = location.state
  const [products, setProducts] = useState([])
  const [filters, setFilters] = useState(initFilters)
  const [isLoading, setIsLoading] = useState(true)
  const [routes, setRoutes] = useState(categories)
  const [clubs, setClubs] = useState([])
  const [minPrice, setMinPrice] = useState(0)
  const [maxPrice, setMaxPrice] = useState(0)
  const [selectedFilter, setSelectedFilter] = useState('')
  const [currentPage, setCurrentPage] = useState(1)

  const handleMaxMinChange = (type, event) => {
    const { value } = event.target
    const numericValue = value.replace(/[^0-9]/g, '')
    const formattedValue = new Intl.NumberFormat('en-US').format(numericValue)
    if (type === 'min') setMinPrice(formattedValue)
    else setMaxPrice(formattedValue)
  }

  const handleSetActive = () => {
    const updatedRoutes = routes.map((item) => {
      return {
        ...item,
        isActive: item.route.split('/categories/')[0] === type
      }
    })
    setRoutes(updatedRoutes)
    setIsLoading(true)
  }

  const handleFilterChange = (descending, type) => {
    if (type === 'maxmin') {
      setFilters((prevFilters) => ({
        ...prevFilters,
        minPrice: minPrice,
        maxPrice: maxPrice
      }))
      setIsLoading(true)
    } else if (type === 'price-order') {
      console.log(type, descending)
      setFilters((prevFilters) => ({
        ...prevFilters,
        sortBy: 'Price',
        descending: descending
      }))
      setIsLoading(true)
    }
  }

  useEffect(() => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      groups: [key]
    }))
    if (isLoading) {
      fetchProducts()
    }
  }, [isLoading, key])

  const fetchProducts = async () => {
    try {
      filters.groups = [key]
      const data = await CategoryApi.getProductsByLeague(filters)
      const list = await CategoryApi.getByGroups(key)
      const updatedList = list.map((item) => ({ club: item, isSelected: false }))
      setClubs(updatedList)
      setProducts(data)
    } catch (error) {
      console.error(error)
    } finally {
      setTimeout(() => setIsLoading(false), 100)
    }
  }

  if (isLoading) {
    return (
      <div className={cx('spinner-container')}>
        <Spinner />
      </div>
    )
  }

  return (
    <div className={cx('container')}>
      <div className={cx('sidebar')}>
        <p>Danh mục</p>
        <ul className={cx('dt-cat-links')}>
          {routes.map((item) => {
            return (
              <li className={item.isActive ? cx('active') : ''} key={item.id} onClick={handleSetActive}>
                <Link to={item.route} state={{ key: item.key }}>
                  {item.name}
                </Link>
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
            {clubs.map((item, index) => (
              <Chip
                className={cx(item.isSelected ? 'chip-btn-active' : 'chip-btn')}
                label={item.club}
                variant={item.isSelected ? 'filled' : 'outlined'}
                key={index}
              />
            ))}
          </div>
        </div>
        <div className={cx('sort-and-filter')}>
          <div className={cx('sort-button')}>
            <p>Lọc và xắp sếp sản phẩm</p>
            <div className={cx('list-dropdown')}>
              <Dropdown
                handleChange={handleFilterChange}
                setSelectedFilter={setSelectedFilter}
                selectedFilter={selectedFilter}
              />
            </div>
          </div>
          <div className={cx('sort-button')}>
            <p>Chọn mức giá</p>
            <div className={cx('list-dropdown')}>
              <input
                type='text'
                placeholder='Giá khởi đầu'
                value={minPrice}
                onChange={(event) => handleMaxMinChange('min', event)}
              />
              <input
                type='text'
                placeholder='Giá kết thúc'
                value={maxPrice}
                onChange={(event) => handleMaxMinChange('max', event)}
              />
            </div>
            <Button secondary onClick={() => handleFilterChange('maxmin')}>
              Áp dụng
            </Button>
          </div>
        </div>
        <div className={cx('product-list')}>
          {products.map((item, index) => (
            <ProductItem product={item} key={index} />
          ))}
        </div>
        <Pagination
          className={cx('pagination-bar')}
          currentPage={currentPage}
          totalCount={products.length}
          pageSize={initFilters.productPerPage}
          onPageChange={(page) => {
            setCurrentPage(page)
            setFilters((prev) => ({
              prev,
              page: page
            }))
          }}
        />
      </div>
    </div>
  )
}

export default CategoryPage
