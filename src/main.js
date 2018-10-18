// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Axios from 'axios' 
import 'github-markdown-css'
Vue.prototype.$http = Axios //注意这里的大小写要与定义的一致


Vue.config.productionTip = false


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
Vue.filter('fromDate',function(str){
	if(!str) return ''
	var date = new Date(str) //把传递过来的时间格式化
	var time = new Date().getTime() - date.getTime() //算出时差单位是毫秒
	if(time /1000 < 30 ){
		return '刚刚'
	}else if((time / 1000) < 60){
		return parseInt(time / 1000) + '秒前'
	}else if((time / 60000) < 60){
		return parseInt(time / 60000) + '分钟前'
	}else if((time / 3600000) < 24){
		return parseInt(time / 3600000) + '小时前'
	}else if((time / 86400000) < 31){
		return parseInt(time / 86400000) + '天前'
	}else if((time / 2592000000) < 12){
		return parseInt(time / 2592000000) + '个月前'
	}else{
		return parseInt(time / 31536000000) + '年前'
	}
})
Vue.filter('sort',function(val){
	if(val.top == true){
		return '置顶'
	}else if(val.good == true){
		return '精华'
	}else if(val.tab == 'ask'){
		return '问答'
	}else if(val.tab == 'share'){
		return '分享'
	}else if(val.tab == 'job'){
		return '招聘'
	}
})
Vue.filter('tabSort',function(val){
	if(val == 'ask'){
		return '问答'
	}else if(val == 'share'){
		return '分享'
	}else{
		return '招聘'
	}
})