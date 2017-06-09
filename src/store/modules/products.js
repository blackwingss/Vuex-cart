import shop from '../../../api/shop.js'
import * as types from '../mutation-types'
const state = {
  all: []
}
const getters = {
  allProducts: state => state.all
}
// 唯一的请求数据的地方
const actions = {
  getAllProducts ({ commit }) {
    shop.getProducts(products => {
      commit(types.RECEIVE_PRODUCTS, { products })
    })
  }
  // addToCart ({ commit }) {
  //
  // }
}
const mutations = {
  [types.RECEIVE_PRODUCTS] (state, { products }) {
    state.all = products
  }
}
export default {
  state,
  getters,
  actions,
  mutations
}
