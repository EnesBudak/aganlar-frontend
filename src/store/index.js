import { createStore } from 'vuex'
import axios from 'axios'



const state = {
  categories:[],
  yachts: [],
  yacht:[],
  token: localStorage.getItem('token') || null,
  isLogged:localStorage.getItem('token')  || false,
  notifications:[]
}  

const  getters = {
  getYachts:state => state.yachts,
  getYacht:state => state.yacht,
  getCategories:state => state.categories,
  getCart: state => state.cart,
  cartSummary:state => state.cartTotal
  
}

const mutations = {
  addToCart(state,payload){
    state.cart.push(payload)
  },
  setCartSummary(state){
    state.cart.map((cartItem) => state.cartTotal += Number( cartItem.price))
  },
  setYachts(state,payload){
  
    state.yachts = payload;
  },
  setYacht(state,payload){
    state.yacht = payload
  },
  setCategories(state){
    state.categories = state.yachts.map(yacht => yacht.town)
  },
  setLogin(state, token) {
    state.token = token;
    state.isLogged = true;
  },
  setLogout(state) {
    state.isLogged = false;
    state.token = null;
  },
  deleteProduct(state,productId){
    state.cart = state.cart.filter(cartItem => cartItem.id !== productId)
  }
}

const actions = {
  async getYachts({commit},payload){
   try {
     console.log("calisti");
     console.log(payload,"payload");
    const {data} =  await axios.get(`/yacht/?${payload}`)
    console.log("dataaa");
    if(data.success === true ){
      commit('setYachts',data.result)
      commit('setCategories')
      
      return data.result
    }
   } catch (error) {
     console.log(error);
   }
  },
  async getYacht({commit},yachtId){
    try {
   
      const {data} =await axios.get(`/yacht/${yachtId}`);
      console.log(data,"data dsadsa");
      if(data.success === true ){
      
        commit('setYacht',data.result)
        
        return data.result
      }
    } catch (error) {
      
    }
  },
  async LOGIN({commit},user){
    try {
      const {data} = await axios.post('/auth/login',{email:user.email,password:user.password});
      if(data.success){
        const token = data.token;
        localStorage.setItem("token",token);
        commit("setLogin",token);
        return data
      }
    } catch (error) {
      commit("setLogout");
      return err
    }
  },
  async LOGOUT({commit}){
    try {
      commit("setLogout");
      localStorage.removeItem("token");
    } catch (error) {
      
    }
  }
}

const store = createStore({
  state,getters,mutations,actions
})

export default store