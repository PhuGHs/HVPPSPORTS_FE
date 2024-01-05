import classNames from 'classnames/bind'
import styles from './AddressPage.module.scss'
import modalStyles from '../../../components/Modal/Modal.module.scss'
import Button from '../../../components/Button/Button'
import Address from '../../../components/Address/Address'
import Modal from '../../../components/Modal/Modal'
import { useEffect, useRef, useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import Tabs from '~/components/Tab/Tab'
import { addresses } from '~/utils/sharedResource'
import { AddressApi } from '~/api/address.api'

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
  const [index, setIndex] = useState(0)
  const [isInputFocused, setIsInputFocused] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [tabItems, setTabItems] = useState(addresses)
  const [selectedType, setSelectedType] = useState(tabItems[index])
  const [addressList, setAddressList] = useState([])
  const dropdownRef = useRef()
  const [value, setValue] = useState('')
  const [selectedProvince, setSelectedProvince] = useState({})
  const [selectedDistrict, setSelectedDistrict] = useState({})
  const [selectedWard, setSelectedWard] = useState({})

  const handleOpenModal = () => {
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
  }

  const handleFocus = () => {
    if (addresses[index + 1]) setIsInputFocused(true)
  }

  const handleBlur = () => {
    if (dropdownRef.current) {
      return
    }
    setIsInputFocused(false)
  }

  const handleFocusOnOthers = () => {
    setIsInputFocused(false)
  }

  const handleSelect = (item) => {
    if (index + 1 > addresses.length) {
      return
    }

    setIndex((prev) => prev + 1)
    setSelectedType(addresses[index + 1])

    if (index === 0) {
      setSelectedProvince({ name: item.name, code: item.code })
      setSelectedDistrict({})
      setSelectedWard({})
      setValue(item.name)
    } else if (index === 1) {
      setSelectedDistrict({ name: item.name, code: item.code })
      setSelectedWard({})
      setValue((prev) => `${prev}, ${item.name}`)
    } else if (index === 2) {
      setSelectedWard({ name: item.name, code: item.code })
      setValue((prev) => `${prev}, ${item.name}`)
      setIsInputFocused(false)
    }

    tabItems[index + 1].disabled = false
    setTabItems(tabItems)
    setIsLoading(true)
  }

  const handleChange = (event) => {
    if (event.target.value === '') {
      setIndex(0)
      setIsLoading(true)
      setIsInputFocused(true)
      setSelectedType(addresses[0])
    }
    setValue(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
  }

  const handleSelectType = (item) => {
    if (item.name === tabItems[0].name) {
      setIndex(0)
    } else if (item.name === tabItems[1].name) {
      setIndex(1)
    } else if (item.name === tabItems[2].name) {
      setIndex(2)
    }
    setIsLoading(true)
    setSelectedType(item)
  }

  useEffect(() => {
    const fetch = async () => {
      try {
        let data
        if (index === 0) {
          data = await AddressApi.getProvinces()
          setAddressList(data)
        } else if (index === 1) {
          data = await AddressApi.getDistricts(selectedProvince.code)
          setAddressList(data.districts)
        } else {
          data = await AddressApi.getWards(selectedDistrict.code)
          setAddressList(data.wards)
        }
      } catch (error) {
        console.error(error)
      } finally {
        setIsLoading(false)
      }
    }

    if (isLoading) {
      fetch()
    }
  }, [index, isLoading, selectedDistrict, selectedProvince, selectedType])

  return (
    <div className={cx('container')}>
      <div className={cx('header')}>
        <p>Sổ địa chỉ</p>
        <Button secondary onClick={handleOpenModal}>
          Thêm địa chỉ mới
        </Button>
      </div>
      <div className={cx('address-list')}>
        <Address list={list} />
      </div>

      <AnimatePresence>
        {isModalOpen && (
          <Modal title='Địa chỉ mới' onClose={handleCloseModal} className={cx('form-data')}>
            <form method='post' onSubmit={handleSubmit} className={cx('form-data')}>
              <div className={cx('first-row')}>
                <input type='text' placeholder='Họ và tên' onFocus={handleFocusOnOthers} />
                <input type='text' placeholder='Số điện thoại' onFocus={handleFocusOnOthers} />
              </div>
              <div className={cx('second-row-1')}>
                <input
                  type='text'
                  placeholder='Tỉnh/ Thành phố, Quận/Huyện, Phường/Xã'
                  onFocus={handleFocus}
                  value={value}
                  onBlur={handleBlur}
                  onChange={handleChange}
                />
                {isInputFocused && (
                  <div className={cx('choose-address')} ref={dropdownRef}>
                    <Tabs
                      items={tabItems}
                      selectedType={selectedType}
                      onSelectType={handleSelectType}
                      hasFullWidth={true}
                    >
                      <ul className={cx('dropdown-list')}>
                        {!isLoading &&
                          addressList.map((item, index) => (
                            <li key={index} onClick={() => handleSelect(item)}>
                              {item.name}
                            </li>
                          ))}
                      </ul>
                    </Tabs>
                  </div>
                )}
              </div>
              <div className={cx('second-row')}>
                <input type='text' placeholder='Địa chỉ cụ thể' onFocus={handleFocusOnOthers} />
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
      </AnimatePresence>
    </div>
  )
}

export default AddressPage
