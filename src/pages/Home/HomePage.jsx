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

export const categories = [
  { id: '1', route: '/categories/premier-league', name: 'Premier League', src: PremierLeague, isActive: false },
  { id: '2', route: '/categories/laliga', name: 'Laliga', src: Laliga, isActive: false },
  { id: '3', route: '/categories/bundesliga', name: 'Bundesliga', src: Bundesliga, isActive: false },
  { id: '4', route: '/categories/ligue1', name: 'Ligue 1', src: Ligue1, isActive: false },
  { id: '5', route: '/categories/serieA', name: 'Serie A', src: SerieA, isActive: false },
  { id: '6', route: '/categories/international', name: 'International', src: International, isActive: false }
]

const HomePage = () => {
  return (
    <div className={cx('home')} id='begin'>
      <div className={cx('banner-img')}>
        <img src={Banner} alt='banner.png' />
      </div>
      <section id='categories' style={{ margin: '2% 0' }}>
        <ul>
          {categories.map((item) => (
            <li key={item.id}>
              <Link to={item.route}>
                <img src={item.src} alt={item.name} />
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
