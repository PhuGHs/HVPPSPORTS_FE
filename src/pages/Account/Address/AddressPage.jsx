import classNames from 'classnames/bind'
import styles from './AddressPage.module.scss'
import Button from '../../../components/Button/Button'
import Address from '../../../components/Address/Address'
import Modal from '../../../components/Modal/Modal'
import { useState } from 'react'

const cx = classNames.bind(styles)

const list = [
  {
    id: 1,
    name: 'Lê Văn Phú',
    phone: '0814321006',
    address: 'Đông Hoà, Dĩ An, Bình Dương',
    isDefault: true
  },
  {
    id: 2,
    name: 'Lê Văn Phi',
    phone: '0814321005',
    address: 'Quảng Trị',
    isDefault: false
  },
  {
    id: 3,
    name: 'Lê Văn Phong',
    phone: '0814321004',
    address: 'Quảng Trị',
    isDefault: false
  }
]
const AddressPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleOpenModal = () => {
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
  }
  return (
    <div className={cx('container')} id='modal'>
      <div className={cx('header')}>
        <p>Sổ địa chỉ</p>
        <Button secondary onClick={handleOpenModal}>
          Thêm địa chỉ mới
        </Button>
      </div>
      <div className={cx('address-list')}>
        <Address list={list} />
      </div>

      {isModalOpen && (
        <Modal title='Địa chỉ mới' onClose={handleCloseModal}>
          <form>
            <div className={cx('first-row')}>
              <input type='text' placeholder='Họ và tên' />
              <input type='text' placeholder='Số điện thoại' />
            </div>
            <div className={cx('second-row')}>
              <input type='text' placeholder='Địa chỉ cụ thể' />
            </div>
            <div className={cx('action-row')}>
              <Button grey_outline onClick={handleCloseModal}>
                Huỷ
              </Button>
              <Button secondary onClick={handleCloseModal}>
                Lưu
              </Button>
            </div>
          </form>
        </Modal>
      )}
    </div>
  );
};

export default AddressPage;