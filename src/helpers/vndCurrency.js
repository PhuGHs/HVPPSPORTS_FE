import currency from 'currency.js'

export function toVND(value) {
  return currency(value, { symbol: 'đ', precision: 0, pattern: '# !' }).format()
}
