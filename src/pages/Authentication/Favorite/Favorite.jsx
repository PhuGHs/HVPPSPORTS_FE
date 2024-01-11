import classNames from 'classnames/bind'
import styles from './Favorite.module.scss'
import Button from '~/components/Button/Button'
import { AuthApi } from '~/api/auth.api'
import { useLocation, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { ChatApi } from '~/api/chat.api'

const cx = classNames.bind(styles)
const Favorite = () => {
  const { state } = useLocation()
  const navigate = useNavigate()
  const [selectedTeams, setSelectedTeams] = useState([])

  const handleCheckboxChange = (team) => {
    if (selectedTeams.includes(team)) {
      setSelectedTeams(selectedTeams.filter((selectedTeam) => selectedTeam !== team))
    } else {
      setSelectedTeams([...selectedTeams, team])
    }
  }

  const handleSubmit = async () => {
    try {
      const response = await AuthApi.sendFavorites(state.id, selectedTeams)
      await ChatApi.addNewRoom(state.id)
      if (response.status === 200) {
        navigate('/auth/signin')
      }
    } catch (error) {
      console.error(error)
    }
  }
  return (
    <div className={cx('container')}>
      <h2>
        <span className={cx('first-logo')}>HVPP </span>
        <span className={cx('second-logo')}>SPORTS</span>
      </h2>

      <p className={cx('welcome-text')}>Hãy chọn đội bóng theo sở thích của bạn!!!</p>
      <div className={cx('favorite-team-container')}>
        <div className={cx('favorite-team-col')}>
          <div className={cx('favorite-team')}>
            <input type='checkbox' id='RealMadrid' onChange={() => handleCheckboxChange('Real Madrid')} />
            <label htmlFor='RealMadrid'>Real Madrid</label>
          </div>
          <div className={cx('favorite-team')}>
            <input type='checkbox' id='Liverpool' onChange={() => handleCheckboxChange('Liverpool')} />
            <label htmlFor='Liverpool'>Liverpool</label>
          </div>
          <div className={cx('favorite-team')}>
            <input type='checkbox' id='ACMilan' onChange={() => handleCheckboxChange('AC Milan')} />
            <label htmlFor='ACMilan'>AC Milan</label>
          </div>
          <div className={cx('favorite-team')}>
            <input type='checkbox' id='BayernMunich' onChange={() => handleCheckboxChange('Bayern Munich')} />
            <label htmlFor='BayernMunich'>Bayern Munich</label>
          </div>
        </div>
        <div className={cx('favorite-team-col')}>
          <div className={cx('favorite-team')}>
            <input type='checkbox' id='Brazil' onChange={() => handleCheckboxChange('Brazil')} />
            <label htmlFor='Brazil'>Brazil</label>
          </div>
          <div className={cx('favorite-team')}>
            <input type='checkbox' id='Argentina' onChange={() => handleCheckboxChange('Argentina')} />
            <label htmlFor='Argentina'>Argentina</label>
          </div>
          <div className={cx('favorite-team')}>
            <input type='checkbox' id='Germany' onChange={() => handleCheckboxChange('Germany')} />
            <label htmlFor='Germany'>Germany</label>
          </div>
          <div className={cx('favorite-team')}>
            <input type='checkbox' id='England' onChange={() => handleCheckboxChange('England')} />
            <label htmlFor='England'>England</label>
          </div>
        </div>
      </div>
      <div className={cx('row-btn-container')}>
        <Button secondary onClick={handleSubmit}>
          Gửi
        </Button>
      </div>
    </div>
  )
}

export default Favorite
