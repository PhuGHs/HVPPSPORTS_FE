import styles from './ProductDetails.module.scss'
import classNames from 'classnames/bind'
import { Rating } from '@mui/material'
import { toVND } from '../../helpers/vndCurrency'
import Button from '../../components/Button/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShareNodes } from '@fortawesome/free-solid-svg-icons'
import Accordion from '../../components/Accordion/Accordion'
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'

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

const cx = classNames.bind(styles)
const ProductDetails = () => {
  return (
    <div className={cx('container')}>
      <div className={cx('product')}>
        <div className={cx('image-container')}>
          <div className={cx('main-image')}></div>
          <div className={cx('side-images')}>
            <div className={cx('sub-image')}></div>
            <div className={cx('sub-image')}></div>
            <div className={cx('sub-image')}></div>
            <div className={cx('sub-image')}></div>
          </div>
        </div>
        <div className={cx('details')}>
          <h2>Kids Manchester City Home Jersey 2023/24 With Custom Printing</h2>
          <Rating className={cx('rating-comp')} readOnly value={4} />
          <h3>{toVND(320000)}</h3>
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
            <FontAwesomeIcon icon={faMinus} style={{ color: 'gray', cursor: 'pointer' }} />
            <p>
              <b>1</b>
            </p>
            <FontAwesomeIcon icon={faPlus} style={{ color: 'gray', cursor: 'pointer' }} />
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
        <h2>ĐÁNH GIÁ SẢN PHẨM</h2>
        <div></div>
      </div>
    </div>
  )
}

export default ProductDetails
