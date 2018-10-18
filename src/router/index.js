import Vue from 'vue'
import Router from 'vue-router'
import Article from '../components/Article'
import PostList from '../components/PostList'
import UserInfo from '../components/UserInfo'
import SlideBar from '../components/SlideBar'
import Login from '../components/Login'

Vue.use(Router)

export default new Router({
  routes: [
  	{
  		name:'root',
  		path: '/',
  		components: {
  			main: PostList
  		}
  	},
    {
    	name: 'post_content',//跳转过后的名字
     	path: '/topic/:id&author=:name',//要跳转的地址
      	components: {
      		main: Article,
      		slidebar: SlideBar
      }
    },
    {
    	name:'login',
    	path:'/user/',
    	components: {
    		main: Login
    	}
    },
    {
    	name:'user_info',
    	path:'/user/:loginname',
    	components: {
    		main: UserInfo
    	}
    }
  ]
})
