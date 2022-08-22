import CryptoJS from 'crypto-js'

export const encryptData = (data, secret = process.env.REACT_APP_SECRET_FE_BE) => {
  if (typeof data !== 'undefined') {
    return CryptoJS.AES.encrypt(JSON.stringify(data), secret).toString()
  }
}

export const decryptData = (data, secret = process.env.REACT_APP_SECRET_FE_BE) => {
  try {
    const bytes = CryptoJS.AES.decrypt(data, secret)
    const decryptData = bytes.toString(CryptoJS.enc.Utf8)
    if (decryptData) return JSON.parse(decryptData)
  } catch {
    return ''
  }
}
