export const baseURL = 'https://localhost:7030/api'
import Bundesliga from '../assets/images/Bundesliga.png'
import International from '../assets/images/International.png'
import Laliga from '../assets/images/laliga.png'
import Ligue1 from '../assets/images/ligue1.png'
import SerieA from '../assets/images/serieA.png'
import PremierLeague from '../assets/images/premierleague.png'

export const categories = [
  { id: '1', route: '/categories/premier-league', name: 'Premier League', src: PremierLeague, isActive: false },
  { id: '2', route: '/categories/laliga', name: 'Laliga', src: Laliga, isActive: false },
  { id: '3', route: '/categories/bundesliga', name: 'Bundesliga', src: Bundesliga, isActive: false },
  { id: '4', route: '/categories/ligue1', name: 'Ligue 1', src: Ligue1, isActive: false },
  { id: '5', route: '/categories/serieA', name: 'Serie A', src: SerieA, isActive: false },
  { id: '6', route: '/categories/international', name: 'International', src: International, isActive: false }
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
