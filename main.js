import Vue from 'vue'
import App from './App'

import { myRequest } from "./util/api.js"

Vue.config.productionTip = false

Vue.prototype.$myRequest = myRequest

Vue.filter("formatDate",(date)=>{
	const nDate = new Date()
	const year = nDate.getFullYear()
	const month = (nDate.getMonth()+1).toString().padStart(2,0)
	const day = nDate.getDate().toString().padStart(2,0)
	return year+"-"+month+"-"+day
})

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
