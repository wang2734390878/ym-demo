import App from './App'
import Vue from 'vue'
// main.js
import uView from 'uview-ui'

Vue.use(uView)
uni.$u.setConfig({
	config: {
		unit: 'rpx'
	},
	props: {
		radio: {
			size: 15
		}
	}
})
Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue({
    ...App
})
app.$mount()