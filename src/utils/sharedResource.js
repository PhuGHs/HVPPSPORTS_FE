export const baseURL = 'https://localhost:7030/api'
import Bundesliga from '../assets/images/Bundesliga.png'
import International from '../assets/images/International.png'
import Laliga from '../assets/images/laliga.png'
import Ligue1 from '../assets/images/ligue1.png'
import SerieA from '../assets/images/serieA.png'
import PremierLeague from '../assets/images/premierleague.png'

export const categories = [
  {
    id: '1',
    route: '/categories/premier-league',
    name: 'Premier League',
    key: 'PremierLeague',
    src: PremierLeague,
    isActive: false
  },
  { id: '2', route: '/categories/laliga', name: 'Laliga', key: 'Laliga', src: Laliga, isActive: false },
  { id: '3', route: '/categories/bundesliga', name: 'Bundesliga', key: 'Bundesliga', src: Bundesliga, isActive: false },
  { id: '4', route: '/categories/ligue1', name: 'Ligue 1', key: 'Ligue1', src: Ligue1, isActive: false },
  { id: '5', route: '/categories/serieA', name: 'Serie A', key: 'SerieA', src: SerieA, isActive: false },
  {
    id: '6',
    route: '/categories/international',
    name: 'International',
    key: 'International',
    src: International,
    isActive: false
  }
]

export const sizeKeys = ['S', 'M', 'L', 'XL']

export const description = [
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

// const images = [
//   {
//     id: 1,
//     image:
//       'https://shop.mancity.com/dw/image/v2/BDWJ_PRD/on/demandware.static/-/Sites-master-catalog-MAN/default/dw21a150b7/images/large/701225667001_pp_01_mcfc.png?sw=400&sh=400&sm=fit'
//   },
//   {
//     id: 2,
//     image:
//       'https://shop.mancity.com/dw/image/v2/BDWJ_PRD/on/demandware.static/-/Sites-master-catalog/default/dw34725556/product-sets/mancity-23/away_kids_set_bg2324.png?sw=1600&sh=1600&sm=fit'
//   },
//   {
//     id: 3,
//     image:
//       'https://shop.mancity.com/dw/image/v2/BDWJ_PRD/on/demandware.static/-/Sites-master-catalog-MAN/default/dwe19c4448/images/large/701225698001_pp_01_mcfc.png?sw=1600&sh=1600&sm=fit'
//   },
//   {
//     id: 4,
//     image:
//       'https://shop.mancity.com/dw/image/v2/BDWJ_PRD/on/demandware.static/-/Sites-master-catalog-MAN/default/dw78dae72f/images/large/701225658001_pp_01_mcfc.png?sw=1600&sh=1600&sm=fit'
//   }
// ]

// const reviews = [
//   {
//     id: 1,
//     username: 'Lê Văn Phú',
//     userAvatar:
//       'https://scontent.fsgn5-2.fna.fbcdn.net/v/t39.30808-6/334570789_2749937308476053_1930244561718576836_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_ohc=-tKVcyBjZ5oAX-_rsBu&_nc_oc=AQkcgvcgaK5YoNKZEV3kgGAhTR48jhN2G078jztCbJ8JKajxARHKl_D9SfwSncs9XNU&_nc_ht=scontent.fsgn5-2.fna&oh=00_AfAkvQwjRShQUd3r68D4F9FmdbYyWYJ67A_S4xx7cHDuvA&oe=654DF2DB',
//     rating: 4,
//     comment: 'Chất vải tốt so với giá tiền. 2 màu 2 chất vải khác nhau, cái tối màu vải mát hơn',
//     createdAt: '2023-09-22 11:48',
//     size: 'XL'
//   },
//   {
//     id: 2,
//     username: 'Trần Tuấn Vũ',
//     userAvatar: 'https://i.natgeofe.com/k/6d301bfc-ff93-4f6f-9179-b1f66b19b9b3/pig-young-closeup_3x4.jpg',
//     rating: 4,
//     comment: 'Chất vải tốt so với giá tiền. 2 màu 2 chất vải khác nhau, cái tối màu vải mát hơn',
//     createdAt: '2023-09-22 11:48',
//     size: 'XL'
//   },
//   {
//     id: 3,
//     username: 'Hoàng Phúc',
//     userAvatar: 'https://i.natgeofe.com/k/6d301bfc-ff93-4f6f-9179-b1f66b19b9b3/pig-young-closeup_3x4.jpg',
//     rating: 4,
//     comment: 'Chất vải tốt so với giá tiền. 2 màu 2 chất vải khác nhau, cái tối màu vải mát hơn',
//     createdAt: '2023-09-22 11:48',
//     size: 'XL'
//   }
// ]

export const addresses = [
  { name: 'Tỉnh/Thành phố', disabled: false },
  { name: 'Quận/Huyện', disabled: true },
  { name: 'Phường/Xã', disabled: true }
]

export const myOrders = [
  { name: 'Tất cả', disabled: false },
  { name: 'Xác nhận', disabled: false },
  { name: 'Vận chuyển', disabled: false },
  { name: 'Đang giao', disabled: false },
  { name: 'Hoàn thành', disabled: false }
]

export const myReviews = [
  { name: 'Chờ đánh giá', disabled: false },
  { name: 'Đã đánh giá', disabled: false }
]

export const dummyProductData = [
  {
    id: 1,
    src: 'https://shop.mancity.com/dw/image/v2/BDWJ_PRD/on/demandware.static/-/Sites-master-catalog-MAN/default/dw21a150b7/images/large/701225667001_pp_01_mcfc.png?sw=400&sh=400&sm=fit',
    name: "Kids' Manchester City Home Jersey 2023/24 With Custom Printing",
    price: 230000,
    quantity: 1
  },
  {
    id: 2,
    src: 'https://shop.mancity.com/dw/image/v2/BDWJ_PRD/on/demandware.static/-/Sites-master-catalog-MAN/default/dw21a150b7/images/large/701225667001_pp_01_mcfc.png?sw=400&sh=400&sm=fit',
    name: "Kids' Manchester City Home Jersey 2023/24 With Custom Printing",
    price: 280000,
    quantity: 1
  },
  {
    id: 3,
    src: 'https://shop.mancity.com/dw/image/v2/BDWJ_PRD/on/demandware.static/-/Sites-master-catalog-MAN/default/dw21a150b7/images/large/701225667001_pp_01_mcfc.png?sw=400&sh=400&sm=fit',
    name: "Kids' Manchester City Home Jersey 2023/24 With Custom Printing",
    price: 300000,
    quantity: 1
  }
]
