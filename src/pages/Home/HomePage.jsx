import styles from './HomePage.module.scss'
import classNames from 'classnames/bind'
import Banner from '../../assets/images/banner.png'
import Bundesliga from '../../assets/images/Bundesliga.png'
import International from '../../assets/images/International.png'
import Laliga from '../../assets/images/laliga.png'
import Ligue1 from '../../assets/images/ligue1.png'
import SerieA from '../../assets/images/serieA.png'
import PremierLeague from '../../assets/images/premierleague.png'
import Button from '../../components/Button/Button'
import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ProductItem from '../../components/ProductItem/ProductItem'
import { Link } from 'react-router-dom'

const cx = classNames.bind(styles)

const HomePage = () => {
  return (
    <div className={cx('home')} id='begin'>
      <div className={cx('banner-img')}>
        <img src={Banner} alt='banner.png' />
      </div>
      <section id='categories' style={{ margin: '2% 0' }}>
        <ul>
          <li>
            <Link to='/categories'>
              <img src={PremierLeague} alt='premier-league' />
              <p>Premier League</p>
            </Link>
          </li>
          <li>
            <img src={Laliga} alt='laliga' />
            <p>Laliga</p>
          </li>
          <li>
            <img src={Bundesliga} alt='bundesliga' />
            <p>Bundesliga</p>
          </li>
          <li>
            <img src={Ligue1} alt='ligue1' />
            <p>Ligue 1</p>
          </li>
          <li>
            <img src={SerieA} alt='SeriaA' />
            <p>Serie A</p>
          </li>
          <li>
            <img src={International} alt='international' />
            <p>International</p>
          </li>
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
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
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
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
        </div>
      </section>
    </div>
  )
}

export default HomePage
