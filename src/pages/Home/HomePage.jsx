import styles from './HomePage.module.scss'
import classNames from 'classnames/bind'
import Banner from '../../assets/images/banner.png'
import Button from '../../components/Button/Button'
import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ProductItem from '../../components/ProductItem/ProductItem'
import { Link } from 'react-router-dom'
import { categories } from '~/utils/sharedResource'
import { useQuery } from '@tanstack/react-query'
import { ProductApi } from '~/api/product.api'
import Spinner from '~/components/Spinner/Spinner'
const cx = classNames.bind(styles)

const HomePage = () => {
  const {
    data: bestSellerProducts,
    isLoading: isLoadingBestSeller,
    isSuccess: isSuccessBestSeller
  } = useQuery({
    queryKey: ['BEST-SELLER'],
    queryFn: ProductApi.getBestSellerProducts
  })

  const {
    data: newArrivalProducts,
    isLoading: isLoadingNewArrival,
    isSuccess: isSucessNewArrival
  } = useQuery({
    queryKey: ['NEW-ARRIVAL'],
    queryFn: ProductApi.getNewArrivalProducts
  })

  return (
    <div className={cx('home')} id='begin'>
      <div className={cx('banner-img')}>
        <img src={Banner} alt='banner.png' />
      </div>
      <section id='categories' style={{ margin: '2% 0' }}>
        <p className={cx('cate-header')}>Chọn giải đấu yêu thích của bạn</p>
        <ul>
          {categories.map((item) => (
            <li key={item.id}>
              <Link to={item.route}>
                <div className={cx('image-holder')}>
                  <img src={item.src} alt={item.name} />
                </div>
                <p>{item.name}</p>
              </Link>
            </li>
          ))}
        </ul>
      </section>
      <section id='new-product' style={{ margin: '2% 0' }}>
        <div className={cx('section-header')}>
          <p>HÀNG MỚI VỀ</p>
          <Button large secondary rightIcon={<FontAwesomeIcon icon={faAngleDoubleRight} />}>
            Xem tất cả
          </Button>
        </div>
        <div className={cx('product-list')}>
          {isLoadingNewArrival && <Spinner />}
          {isSucessNewArrival &&
            newArrivalProducts.map((product, index) => {
              return <ProductItem key={index} product={product} />
            })}
        </div>
      </section>
      <section id='recommendation' style={{ margin: '2% 0' }}>
        <div className={cx('section-header')}>
          <p>HÀNG BÁN CHẠY</p>
          <Button large secondary rightIcon={<FontAwesomeIcon icon={faAngleDoubleRight} />}>
            Xem tất cả
          </Button>
        </div>
        <div className={cx('product-list')}>
          {isLoadingBestSeller && <Spinner />}
          {isSuccessBestSeller &&
            bestSellerProducts.map((product, index) => {
              return <ProductItem key={index} product={product} />
            })}
        </div>
      </section>
    </div>
  )
}

export default HomePage
