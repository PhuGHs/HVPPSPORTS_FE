import MyComment from '../../../components/MyComment/MyComment'
import styles from './MyReviews.module.scss'
import classNames from 'classnames/bind'
import Tabs from '../../../components/Tab/Tab'
import { useContext, useEffect, useState } from 'react'
import { myReviews } from '~/utils/sharedResource'
import { FeedbackApi } from '~/api/feedback.api'
import { UserContext } from '~/store/user-context'
import NotificationContext from '~/store/notification-context'
import Spinner from '~/components/Spinner/Spinner'

const cx = classNames.bind(styles)
const data = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }]
const MyReviews = () => {
  const [selectedType, setSelectedType] = useState(myReviews[0])
  const { user } = useContext(UserContext)
  const notificationCtx = useContext(NotificationContext)
  const [unReviewedReviews, setUnReviewedReviews] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [reviewedReviews, setReviewedReviews] = useState([])

  const handleSelectType = (type) => {
    setSelectedType(type)
  }

  useEffect(() => {
    const fetch = async () => {
      try {
        const data = await FeedbackApi.getFeedBacksByCustomerID(user.id)
        setReviewedReviews(data)
        setIsLoading(false)
      } catch (error) {
        notificationCtx.error(`Có lỗi xảy ra: ${error.mesage}`)
      }
    }

    const fetchUnReviewed = async () => {
      try {
        const data = await FeedbackApi.getUnReviewedProducts(user.id)
        setUnReviewedReviews(data)
        setIsLoading(false)
      } catch (error) {
        notificationCtx.error(`Có lỗi xảy ra: ${error.mesage}`)
      }
    }

    if (selectedType === myReviews[0]) {
      fetchUnReviewed()
    } else if (selectedType === myReviews[1]) {
      fetch()
    }
  }, [isLoading, notificationCtx, selectedType, user.id])

  if (isLoading) {
    return (
      <div className={cx('spinner-container')}>
        <Spinner />
      </div>
    )
  }
  return (
    <div className={cx('container')}>
      <p className={cx('head-name')}>Đánh giá của tôi</p>
      <Tabs onSelectType={handleSelectType} selectedType={selectedType} items={myReviews}>
        <MyComment reviewed={reviewedReviews} unreviewed={unReviewedReviews} type={selectedType} />
      </Tabs>
    </div>
  )
}

export default MyReviews
