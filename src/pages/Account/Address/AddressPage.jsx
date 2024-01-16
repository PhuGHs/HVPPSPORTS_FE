import classNames from 'classnames/bind'
import styles from './AddressPage.module.scss'
import modalStyles from '../../../components/Modal/Modal.module.scss'
import Button from '../../../components/Button/Button'
import Address from '../../../components/Address/Address'
import Modal from '../../../components/Modal/Modal'
import { useContext, useEffect, useRef, useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import Tabs from '~/components/Tab/Tab'
import { addresses } from '~/utils/sharedResource'
import { AddressApi } from '~/api/address.api'
import { UserContext } from '~/store/user-context'
import { useInput } from '~/hooks/useInput'
import { Helper } from '~/utils/helper'
import NotificationContext from '~/store/notification-context'

const cx = classNames.bind(styles)
const AddressPage = () => {
  const notificationCtx = useContext(NotificationContext)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const { user } = useContext(UserContext)
  const [index, setIndex] = useState(0)
  const [isInputFocused, setIsInputFocused] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [isAddressLoading, setIsAddressLoading] = useState(true)
  const [tabItems, setTabItems] = useState(addresses)
  const [selectedType, setSelectedType] = useState(tabItems[index])
  const [data, setData] = useState([])
  const [addressList, setAddressList] = useState([])
  const dropdownRef = useRef()
  const [value, setValue] = useState('')
  const [selectedProvince, setSelectedProvince] = useState({})
  const [selectedDistrict, setSelectedDistrict] = useState({})
  const [selectedWard, setSelectedWard] = useState({})
  const [mode, setMode] = useState('add')
  const [id, setId] = useState(null)

  const {
    value: usernameValue,
    handleInputChange: handleUsernameValueChange,
    handleInputBlur: handleUsernameBlur,
    setValue: setUsernameValue,
    hasError: usernamehasError
  } = useInput('', Helper.validateUsername)

  const {
    value: phonenumberValue,
    handleInputChange: handlePhoneNumberChange,
    handleInputBlur: handlePhoneNumberBlur,
    setValue: setPhoneNumberValue,
    hasError: phonenumberHasError
  } = useInput('', Helper.validatePhoneNumber)

  const {
    value: moreDetailAddressValue,
    handleInputChange: handleMoreDetailAddressValueChange,
    handleInputBlur: handleMoreDetailAddressValueBlur,
    setValue: setAddressValue,
    hasError: moreDetailAddressHasError
  } = useInput('', Helper.validateAddress)

  console.log(usernamehasError)

  const handleOpenModal = async (mode, id) => {
    if (mode === 'edit' && id) {
      const data = await AddressApi.getUserAddressById(user.id, id)
      const addresses = data.address.split(',').map((part) => part.trim())
      const phone = data.phone
      const name = data.name
      setValue(`${addresses[3]}, ${addresses[2]}, ${addresses[1]}`)
      setSelectedProvince({ name: addresses[3] })
      setSelectedDistrict({ name: addresses[2] })
      setSelectedWard({ name: addresses[1] })
      setAddressValue(addresses[0])
      setPhoneNumberValue(phone)
      setUsernameValue(name)
      setId(id)
    }
    setMode(mode)
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setMode('add')
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

  const handleSubmit = async (event) => {
    event.preventDefault()
    const body = {
      customerID: user.id,
      name: usernameValue,
      address: `${moreDetailAddressValue}, ${selectedWard.name}, ${selectedDistrict.name}, ${selectedProvince.name}`,
      phone: phonenumberValue
    }
    if (phonenumberHasError || usernamehasError || moreDetailAddressHasError || value === '') {
      notificationCtx.error('Đã có lỗi xảy ra! Hãy kiểm tra lại!')
      return
    }
    if (mode === 'add') {
      await AddressApi.createNewAddress(body)
    } else {
      if (id) {
        await AddressApi.updateAddress(id, body)
      }
    }
    setUsernameValue('')
    setAddressValue('')
    setPhoneNumberValue('')
    setValue('')
    setIsAddressLoading(true)
    handleCloseModal()
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

    const fetchAddress = async () => {
      try {
        const data = await AddressApi.getUserAddresses(user.id)
        setData(data)
      } catch (error) {
        console.error(error)
      } finally {
        setIsAddressLoading(false)
      }
    }

    if (isAddressLoading) {
      fetchAddress()
    }

    if (isLoading) {
      fetch()
    }
  }, [index, isAddressLoading, isLoading, selectedDistrict, selectedProvince, selectedType, user.id])

  return (
    <div className={cx('container')}>
      <div className={cx('header')}>
        <p>Sổ địa chỉ</p>
        <Button secondary onClick={() => handleOpenModal('add')}>
          Thêm địa chỉ mới
        </Button>
      </div>
      <div className={cx('address-list')}>
        <Address list={data} handleOpenModal={handleOpenModal} setIsLoading={setIsAddressLoading} />
      </div>

      <AnimatePresence>
        {isModalOpen && (
          <Modal title='Địa chỉ mới' onClose={handleCloseModal} className={cx('form-data')}>
            <form method='post' onSubmit={handleSubmit} className={cx('form-data')}>
              <div className={cx('first-row')}>
                <input
                  type='text'
                  placeholder='Họ và tên'
                  value={usernameValue}
                  onChange={handleUsernameValueChange}
                  onBlur={handleUsernameBlur}
                  onFocus={handleFocusOnOthers}
                  style={{ borderColor: usernamehasError ? 'red' : 'grey' }}
                />
                <input
                  type='text'
                  placeholder='Số điện thoại'
                  value={phonenumberValue}
                  onChange={handlePhoneNumberChange}
                  onBlur={handlePhoneNumberBlur}
                  onFocus={handleFocusOnOthers}
                  style={{ borderColor: phonenumberHasError ? 'red' : 'grey' }}
                />
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
                <input
                  type='text'
                  placeholder='Địa chỉ cụ thể'
                  value={moreDetailAddressValue}
                  onChange={handleMoreDetailAddressValueChange}
                  onBlur={handleMoreDetailAddressValueBlur}
                  onFocus={handleFocusOnOthers}
                  style={{ borderColor: moreDetailAddressHasError ? 'red' : 'grey' }}
                />
              </div>
              <div className={cx('action-row')}>
                <Button grey_outline onClick={handleCloseModal}>
                  Huỷ
                </Button>
                <Button secondary>Lưu</Button>
              </div>
            </form>
          </Modal>
        )}
      </AnimatePresence>
    </div>
  )
}

export default AddressPage
