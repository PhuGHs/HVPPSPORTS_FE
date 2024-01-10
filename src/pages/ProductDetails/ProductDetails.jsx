import styles from './ProductDetails.module.scss'
import classNames from 'classnames/bind'
import { Rating } from '@mui/material'
import { toVND } from '../../helpers/vndCurrency'
import Button from '../../components/Button/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faArrowRight, faShareNodes } from '@fortawesome/free-solid-svg-icons'
import Accordion from '../../components/Accordion/Accordion'
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'
import { useContext, useEffect, useState } from 'react'
import Reviews from '../../components/Reviews/Reviews'
import { motion } from 'framer-motion'
import { useCallback } from 'react'
import { useParams } from 'react-router-dom'
import { ProductApi } from '~/api/product.api'
import { sizeKeys } from '~/utils/sharedResource'
import SizeItem from '~/components/SizeItem/SizeItem'
import Spinner from '~/components/Spinner/Spinner'
import { CartContext } from '~/store/cart-context'
import { UserContext } from '~/store/user-context'
import ProductItem from '~/components/ProductItem/ProductItem'
import { FeedbackApi } from '~/api/feedback.api'

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

const cx = classNames.bind(styles)
const ProductDetails = () => {
  const { user } = useContext(UserContext)
  const [product, setProduct] = useState(null)
  const [recommendedProducts, setRecommendedProducts] = useState([])
  const [description, setDescription] = useState([])
  const [feedbacks, setFeedbacks] = useState(null)
  const [sizes, setSizes] = useState([])
  const [selectedSize, setSelectedSize] = useState()
  const [index, setIndex] = useState(0)
  const [imageList, setImageList] = useState(null)
  const [mainImage, setMainImage] = useState(null)
  const [direction, setDirection] = useState(0)
  const [isLoading, setIsLoading] = useState(true)
  const [quantity, setQuantity] = useState(1)
  const { id } = useParams()
  const { addItem } = useContext(CartContext)

  const handleImageClick = (clickedIndex) => {
    if (clickedIndex > index) {
      setDirection(1)
    } else if (clickedIndex < index) {
      setDirection(-1)
    }
    setMainImage(imageList[clickedIndex])
    setIndex(clickedIndex)
  }

  const handleSizeItemClick = (item) => {
    setSelectedSize(item)
  }

  const handleMoveForward = useCallback(() => {
    setDirection(1)
    if (index < imageList.length - 1) {
      setIndex(index + 1)
      setMainImage(imageList[index + 1])
    } else {
      setIndex(0)
      setMainImage(imageList[0])
    }
  }, [imageList, index])

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

  const handleChangeQuantity = (type) => {
    if (type === 'increase') {
      if (selectedSize.quantity - quantity < 1) return
      setQuantity((prev) => prev + 1)
    } else {
      if (quantity <= 1) return
      setQuantity((prev) => prev - 1)
    }
  }

  const handleAddToCart = () => {
    addItem({ product: product, productID: product.id, size: `Size${selectedSize.size}`, quantity: quantity })
  }

  useEffect(() => {
    const intervalId = setInterval(() => {
      handleMoveForward()
    }, 3000)

    return () => {
      clearInterval(intervalId)
    }
  }, [handleMoveForward, index])

  useEffect(() => {
    window.scrollTo(0, 0)
    const fetchData = async () => {
      try {
        const productData = await ProductApi.getProductById(id)
        const { urlThumb, urlMain, urlSub1, urlSub2, description } = productData
        setProduct(productData)
        setImageList([
          { id: 1, image: urlThumb },
          { id: 2, image: urlMain },
          { id: 3, image: urlSub1 },
          { id: 4, image: urlSub2 }
        ])
        setMainImage({ id: 1, image: urlThumb })
        setDescription([{ id: 1, key: 'Mô tả sản phẩm', value: description }])
        const sizes = sizeKeys.map((sizeKey) => ({
          size: sizeKey,
          quantity: productData[`size${sizeKey}`]
        }))
        setSizes(sizes)
        for (const size of sizes) {
          if (size.quantity >= 1) {
            setSelectedSize(size)
            break
          }
        }
        const feedbacksData = await FeedbackApi.getFeedBacks(id)
        setFeedbacks(feedbacksData)
        const data = await ProductApi.getRecommendedProducts(user.id)
        setRecommendedProducts(data)
      } catch (error) {
        console.log(error)
      } finally {
        setIsLoading(false)
      }
    }
    fetchData()
  }, [id, user.id])

  if (isLoading) {
    return (
      <div className={cx('spinner-container')}>
        <Spinner />
      </div>
    )
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
          <p className={cx('product-name')}>{product.name}</p>
          <Rating className={cx('rating-comp')} readOnly value={product.point} />
          <h2>{toVND(product.price)}</h2>
          <p>
            Kích cỡ: {selectedSize.size} | Số lượng: {selectedSize.quantity}
          </p>
          <div className={cx('size-container')}>
            {sizes.map((size, index) => (
              <SizeItem
                item={size}
                key={index}
                isSoldOut={size.quantity < 1}
                selected={selectedSize.size === size.size}
                handleClick={() => handleSizeItemClick(size)}
              />
            ))}
          </div>
          <div className={cx('quantity-btn')}>
            <div className={cx('quantity-action')} onClick={() => handleChangeQuantity('decrease')}>
              <FontAwesomeIcon icon={faMinus} style={{ color: 'gray' }} />
            </div>
            <div className={cx('quantity-text')}>
              <p>
                <b>{quantity}</b>
              </p>
            </div>
            <div className={cx('quantity-action')} onClick={() => handleChangeQuantity('increase')}>
              <FontAwesomeIcon icon={faPlus} style={{ color: 'gray' }} />
            </div>
          </div>
          <div className={cx('action')}>
            <Button secondary onClick={handleAddToCart}>
              Thêm vào giỏ hàng
            </Button>
            <Button grey_outline rightIcon={<FontAwesomeIcon icon={faShareNodes} />}>
              Chia sẻ
            </Button>
          </div>
          <div className={cx('guidances')}>
            {description.map((item, index) => {
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
          <p>{product.point}</p>
          <Rating className={cx('rating-comp')} readOnly value={product.point} />
        </div>
        <p>({feedbacks.length} đánh giá)</p>
        <hr style={{ margin: '30px' }} />
        <div className={cx('reviews-list')}>
          <Reviews reviews={feedbacks} />
        </div>
      </div>
      <div className={cx('discover-more')}>
        <h2>KHÁM PHÁ THÊM</h2>
        <div className={cx('product-list')}>
          {recommendedProducts.map((item, index) => (
            <ProductItem product={item.product} key={index} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProductDetails
