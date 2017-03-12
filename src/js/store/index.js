import {
  gameCategory
} from 'js/config'

const store = {
  state: {
    videoStore: new Map(Object.keys(gameCategory).map(category => [category, new Map(
      gameCategory[category].map(site => [site, {}])
    )])),
    categoryList: Object.keys(gameCategory),
    categorySites: gameCategory
  }
}

export default store
