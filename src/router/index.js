import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Home from '../components/home'
import Gouqingsong from '../components/gouqingsong/gouqingsong'
import Gouwudai from '../components/gouwudai/gouwudai'
import Wode from '../components/wode/wode'
import Isscroll from "../components/common/isscroll"
import Login from "../components/register-login/login"
import Product from "../components/productdetails/product"
import Register from "../components/register-login/register"
import Setpassword from "../components/register-login/setpassword"
import BuyNow from "../components/productdetails/buy-now"
import Lijigoumai from "../components/productdetails/lijigoumai"
import Productone from "../components/productdetails/productone"
import Barcode from "../components/common/barcode"
Vue.use(Router)

export default new Router({
	linkActiveClass : "active",
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello,
      redirect : "/home"
    },
		{
    	path : "/home",
    	component : Home
    },{
    	path : "/gouqingsong",
    	component : Gouqingsong
    },{
    	path : "/gouwudai",
    	component : Gouwudai
    },{
    	path : '/wode',
    	component : Wode
    },{
    	path :　'/isscroll',
    	component :　Isscroll
    },{
    	path : '/login',
    	component:Login
    },{
    	path : '/product',
    	component : Product
    },
    {
    	path : '/productone',
    	component : Productone
    },{
    	path : '/register',
    	component : Register
    },{
    	path : '/setpassword',
    	component : Setpassword
    },{
    	path : '/buynow',
    	component : BuyNow
    },{
    	path : '/lijigoumai',
    	component : Lijigoumai
    },{
    	path : '/barcode',
    	component : Barcode
    }
    
  ]
})
