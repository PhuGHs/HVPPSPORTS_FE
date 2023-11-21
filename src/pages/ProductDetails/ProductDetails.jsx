import styles from './ProductDetails.module.scss'
import classNames from 'classnames/bind'
import { Rating } from '@mui/material'
import { toVND } from '../../helpers/vndCurrency'
import Button from '../../components/Button/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faArrowRight, faShareNodes } from '@fortawesome/free-solid-svg-icons'
import Accordion from '../../components/Accordion/Accordion'
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import Reviews from '../../components/Reviews/Reviews'
import ProductItem from '../../components/ProductItem/ProductItem'
import { AnimatePresence, motion } from 'framer-motion'

const variants = {
  initial: (direction) => {
    return {
      x: direction > 0 ? 100 : -100,
      opacity: 0,
      transition: { ease: 'easeInOut', duration: 0.5 }
    }
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: { ease: 'easeInOut', duration: 0.5 }
  },
  exit: (direction) => {
    return {
      x: direction > 0 ? -100 : 100,
      opacity: 0,
      transition: { ease: 'easeInOut', duration: 0.5 }
    }
  }
}

const data = [
  {
    id: 1,
    key: 'Mô tả',
    value:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
  },
  {
    id: 2,
    key: 'Hướng dẫn sử dụng',
    value:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
  }
]

const reviews = [
  {
    id: 1,
    username: 'Lê Văn Phú',
    userAvatar:
      'https://scontent.fsgn5-2.fna.fbcdn.net/v/t39.30808-6/334570789_2749937308476053_1930244561718576836_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_ohc=-tKVcyBjZ5oAX-_rsBu&_nc_oc=AQkcgvcgaK5YoNKZEV3kgGAhTR48jhN2G078jztCbJ8JKajxARHKl_D9SfwSncs9XNU&_nc_ht=scontent.fsgn5-2.fna&oh=00_AfAkvQwjRShQUd3r68D4F9FmdbYyWYJ67A_S4xx7cHDuvA&oe=654DF2DB',
    rating: 4,
    comment: 'Chất vải tốt so với giá tiền. 2 màu 2 chất vải khác nhau, cái tối màu vải mát hơn',
    createdAt: '2023-09-22 11:48',
    size: 'XL'
  },
  {
    id: 2,
    username: 'Trần Tuấn Vũ',
    userAvatar: 'https://i.natgeofe.com/k/6d301bfc-ff93-4f6f-9179-b1f66b19b9b3/pig-young-closeup_3x4.jpg',
    rating: 4,
    comment: 'Chất vải tốt so với giá tiền. 2 màu 2 chất vải khác nhau, cái tối màu vải mát hơn',
    createdAt: '2023-09-22 11:48',
    size: 'XL'
  },
  {
    id: 3,
    username: 'Hoàng Phúc',
    userAvatar: 'https://i.natgeofe.com/k/6d301bfc-ff93-4f6f-9179-b1f66b19b9b3/pig-young-closeup_3x4.jpg',
    rating: 4,
    comment: 'Chất vải tốt so với giá tiền. 2 màu 2 chất vải khác nhau, cái tối màu vải mát hơn',
    createdAt: '2023-09-22 11:48',
    size: 'XL'
  }
]

const images = [
  {
    id: 1,
    image:
      'https://shop.mancity.com/dw/image/v2/BDWJ_PRD/on/demandware.static/-/Sites-master-catalog-MAN/default/dw21a150b7/images/large/701225667001_pp_01_mcfc.png?sw=400&sh=400&sm=fit'
  },
  {
    id: 2,
    image:
      'https://shop.mancity.com/dw/image/v2/BDWJ_PRD/on/demandware.static/-/Sites-master-catalog/default/dw34725556/product-sets/mancity-23/away_kids_set_bg2324.png?sw=1600&sh=1600&sm=fit'
  },
  {
    id: 3,
    image:
      'https://shop.mancity.com/dw/image/v2/BDWJ_PRD/on/demandware.static/-/Sites-master-catalog-MAN/default/dwe19c4448/images/large/701225698001_pp_01_mcfc.png?sw=1600&sh=1600&sm=fit'
  },
  {
    id: 4,
    image:
      'https://shop.mancity.com/dw/image/v2/BDWJ_PRD/on/demandware.static/-/Sites-master-catalog-MAN/default/dw78dae72f/images/large/701225658001_pp_01_mcfc.png?sw=1600&sh=1600&sm=fit'
  }
]

const cx = classNames.bind(styles)
const ProductDetails = () => {
  const [index, setIndex] = useState(0)
  const [mainImage, setMainImage] = useState(images[0])
  const [imageList, setImageList] = useState(images)
  const [direction, setDirection] = useState(0)

  const handleImageClick = (clickedIndex) => {
    console.log('clickedIndex', clickedIndex)
    console.log('currentIndex', index)
    if (clickedIndex > index) {
      setDirection(1)
    } else if (clickedIndex < index) {
      setDirection(-1)
    }
    setMainImage(imageList[clickedIndex])
    setIndex(clickedIndex)
  }

  const handleMoveForward = () => {
    setDirection(1)
    if (index < imageList.length - 1) {
      setIndex(index + 1)
      setMainImage(imageList[index + 1])
    } else {
      setIndex(0)
      setMainImage(imageList[0])
    }
  }

  const handleMoveBackward = () => {
    setDirection(-1)
    if (index > 0) {
      setIndex(index - 1)
      setMainImage(imageList[index - 1])
    } else {
      setIndex(imageList.length - 1)
      setMainImage(imageList[imageList.length - 1])
    }
  }
  return (
    <div className={cx('container')}>
      <div className={cx('product')}>
        <div className={cx('image-container')}>
          <div className={cx('main-image')}>
            <motion.img
              variants={variants}
              animate='animate'
              initial='initial'
              exit='exit'
              transition={{ type: 'spring', stiffness: 300, damping: 20, duration: 0.2 }}
              src={mainImage.image}
              alt='item'
              key={mainImage.image}
              custom={direction}
            />
            <div className={cx('next-prev-action')}>
              <div className={cx('action')} onClick={handleMoveBackward}>
                <FontAwesomeIcon icon={faArrowLeft} />
              </div>
              <div className={cx('current-image')}>
                <p>
                  <b>
                    {index + 1}/{imageList.length}
                  </b>
                </p>
              </div>
              <div className={cx('action')} onClick={handleMoveForward}>
                <FontAwesomeIcon icon={faArrowRight} />
              </div>
            </div>
          </div>
          <div className={cx('side-images')}>
            {imageList.map((image, index) => (
              <div
                key={image.id}
                className={mainImage.id === image.id ? cx('sub-image-active') : cx('sub-image')}
                onClick={() => handleImageClick(index)}
              >
                <img src={image.image} alt='item' />
              </div>
            ))}
          </div>
        </div>
        <div className={cx('details')}>
          <p className={cx('product-name')}>Kids Manchester City Home Jersey 2023/24 With Custom Printing</p>
          <Rating className={cx('rating-comp')} readOnly value={4} />
          <h2>{toVND(320000)}</h2>
          <p>Kích cỡ: S | Số lượng: 30</p>
          <div className={cx('size-container')}>
            <div className={cx('size-item')}>
              <span>M</span>
            </div>
            <div className={cx('size-item')}>
              <span>L</span>
            </div>
            <div className={cx('size-item')}>
              <span>XL</span>
            </div>
          </div>
          <div className={cx('quantity-btn')}>
            <div className={cx('quantity-action')}>
              <FontAwesomeIcon icon={faMinus} style={{ color: 'gray' }} />
            </div>
            <div className={cx('quantity-text')}>
              <p>
                <b>1</b>
              </p>
            </div>
            <div className={cx('quantity-action')}>
              <FontAwesomeIcon icon={faPlus} style={{ color: 'gray' }} />
            </div>
          </div>
          <div className={cx('action')}>
            <Button secondary>Thêm vào giỏ hàng</Button>
            <Button grey_outline rightIcon={<FontAwesomeIcon icon={faShareNodes} />}>
              Chia sẻ
            </Button>
          </div>
          <div className={cx('guidances')}>
            {data.map((item, index) => {
              if (index !== 0) {
                return (
                  <>
                    <hr />
                    <Accordion item={item} key={index} />
                  </>
                )
              }
              return <Accordion item={item} key={index} />
            })}
          </div>
        </div>
      </div>
      <div className={cx('reviews')}>
        <h2>KHÁCH HÀNG ĐÁNH GIÁ</h2>
        <div className={cx('overall-figure')}>
          <p>4.0</p>
          <Rating className={cx('rating-comp')} readOnly value={4} />
        </div>
        <p>(3 đánh giá)</p>
        <hr style={{ margin: '30px' }} />
        <div className={cx('reviews-list')}>
          <Reviews reviews={reviews} />
        </div>
        {/* <div className={cx('pagination-container')}>
          <Pagination className={cx('pagination-item')} count={1} shape='rounded' />
        </div> */}
      </div>
      <div className={cx('discover-more')}>
        <h2>KHÁM PHÁ THÊM</h2>
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
      </div>
    </div>
  )
}

export default ProductDetails
