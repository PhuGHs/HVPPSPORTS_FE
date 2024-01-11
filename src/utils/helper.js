import { format } from 'date-fns'
export class Helper {
  static validateEmail(email) {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )
  }

  static validatePassword(password) {
    return password.length > 5
  }

  static validateAddress(address) {
    return address != ''
  }

  static validatePhoneNumber(phonenumber) {
    const phoneRegex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/
    if (phonenumber.match(phoneRegex)) {
      return true
    }
    return false
  }

  static validateUsername(username) {
    return username.length > 5
  }

  static validateDate(date) {
    const isValidDate = Date.parse(date)
    if (isNaN(isValidDate)) return false
    return true
  }

  static convertToDMY(inputDate) {
    const parsedDate = new Date(inputDate)
    const formattedDate = format(parsedDate, 'dd/MM/yyyy HH:mm:ss')
    return formattedDate
  }

  static convertToDMYWithoutHours(inputDate) {
    const parsedDate = new Date(inputDate)
    const formattedDate = format(parsedDate, 'dd/MM/yyyy')
    return formattedDate
  }

  static getOrderStatus(input) {
    switch (input) {
      case 'Pending':
        return 'Đang chờ'
      case 'Packaging':
        return 'Đóng gói'
      case 'Delivering':
        return 'Đang giao'
      case 'Completed':
        return 'Giao hàng thành công'
    }
  }

  static getActualSize = (size) => {
    if (size === 'SizeL') return 'L'
    if (size === 'SizeM') return 'M'
    if (size === 'SizeXL') return 'XL'
    return 'S'
  }

  static getActualDeliveryMethod = (deliveryMethod) => {
    if (deliveryMethod.toLowerCase() === 'express') {
      return 'Giao hàng nhanh (Express)'
    }
    return 'Giao hàng tiêu chuẩn (Normal)'
  }

  static getActualPaymentMethod = (paymentMethod) => {
    if (paymentMethod.toLowerCase() === 'cash') {
      return 'Thanh toán bằng tiền mặt khi nhận hàng'
    }
    return 'Thanh toán bằng ví VNPAY'
  }

  static getIndexOfTabs = (type) => {
    switch (type) {
      case 'Tất cả':
        return 0
      case 'Đang chờ':
        return 1
      case 'Đóng gói':
        return 2
      case 'Đang giao':
        return 3
      default:
        return 4
    }
  }

  static validateFile = (file) => {
    const validImageTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif']
    return file && validImageTypes.indexOf(file.type) > -1
  }

  static checkFileSize = (file) => {
    let fileError = ''
    const isValid = this.validateFile(file)
    if (!isValid) {
      fileError = `File ${file.name} not accepted`
    }
    if (file.size > 50000000) {
      // 50 MB
      fileError = 'File is too large.'
    }
    return fileError
  }

  static checkFile = (file) => {
    if (!this.validateFile(file)) {
      window.alert(`File ${file.name} is not accepted`)
      return false
    }
    if (this.checkFileSize(file)) {
      window.alert(this.checkFileSize(file))
      return false
    }
    return true
  }

  static readAsBase64 = async (file) => {
    const reader = new FileReader()

    const fileValue = new Promise((resolve, reject) => {
      reader.addEventListener('load', () => {
        resolve(reader.result)
      })

      reader.addEventListener('error', (event) => {
        reject(event)
      })

      reader.readAsDataURL(file)
    })

    return fileValue
  }

  static feedbackRatingAsSentence = (rating) => {
    switch (rating) {
      case 1:
        return 'Rất không hài lòng'
      case 2:
        return 'Không hài lòng'
      case 3:
        return 'Tạm chấp nhận được'
      case 4:
        return 'Hài lòng'
      case 5:
        return 'Cực kỳ hài lòng'
    }
  }
}
