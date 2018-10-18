<template>
  <div class="user" >
  	<div class="loading" v-if="isLoading">
  			<img src="../assets/loading.gif" >
  		</div>
    <div class="user_infomation">
    	<div class="homePage">
    		<div class="header">
	    		<router-link :to="{
	    			name: 'root',
	    			params:{
	    				//不传值
	    			}
	    		}">
	    			<span class="jump">主页</span>
	    		</router-link> /
			</div>
    		<div class="username">
    			<img :src="userInfo.avatar_url" alt="" >
    			<span>{{userInfo.loginname}}</span>
    		</div>
    		<p>{{userInfo.score}} 积分</p>
    		<p>{{userInfo.recent_replies.length}}个话题收藏</p>
    		<p>注册时间 {{userInfo.create_at | fromDate}}</p>
    	</div>
    	<div class="create">
    		<p>最近创建的话题</p>
			<ul>
				<li v-for="topic in createTitle">
					<img :src="userInfo.avatar_url" class="avatar">
					<router-link :to="{
						name: 'post_content',
						params: {
							id: topic.id,
							name: userInfo.loginname
						}
					}">
						<span></span>
						<span class="link" >{{topic.title}}</span>
					</router-link>
					
				</li>
				<li>查看更多<span class="more">》</span></li>
			</ul>
    	</div>
    	<div class="join">
    		<p>最近参与的话题</p>
    		<ul>
    			<li v-for=" item in userInfo.recent_replies">
    				<img :src="item.author.avatar_url" class="avatar">
    				<router-link :to="{
    					name: 'post_content',
    					params: {
    						id: item.id,
    						name: item.author.loginname
    					}
    				}">
	    			<span  class="link">{{item.title}}</span>
    				</router-link>
	    			
    			</li>
    			<li>查看更多<span class="more">》</span></li>
    		</ul>
    		
    	</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UserInfo',
  data(){
  	return {
  		isLoading: false,
  		userInfo: {}
  	}
  },
  methods:{
  	getData(){
  		this.$http.get(`https://cnodejs.org/api/v1/user/${this.$route.params.loginname}`)
  		.then(res=>{
  			this.isLoading = false
  			this.userInfo = res.data.data
  			console.log(res)
  		})
  	}
  },
  computed:{
  	createTitle(){
  		if(this.userInfo.recent_topics.length > 5){
  			return this.userInfo.recent_topics.slice(0,5)//替换
  		}else{
  			return this.userInfo.recent_topics
  		}
  	}
  },
  beforeMount:function(){
  	this.isLoading = true
  	this.getData()
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.user {
	background-color: #e1e1e1;
	padding: .1px;
}
.user_infomation {
	width: 75%;
	margin: 20px auto;
	
}
/*有问题!!!!!*/
.homePage {
	color: #ccc;
	border-radius: 5px;
	background-color: #fff;
}
.header {
	border-bottom: 1px solid #efefef;
	padding: 10px;
	background-color: #f6f6f6;
}
.jump {
	color: #80bd01;
	
}
.jump:hover {
	text-decoration: underline #80bd01;
}
.homePage img {
	width: 40px;
	height: 40px;
	vertical-align: top;
	padding: 10px;
}
.username span {

}
.homePage p {
	line-height: 2;
	padding: 5px;
}
.create,
.join {
	margin-top: 20px;
	border-radius: 3px;
	background-color: #fff; 
}
.create>p,.join p{
	padding: 10px;
	background-color: #f6f6f6;
}
 li {
	padding: 10px;
	border-bottom: 1px solid #efefef;
}
 .link {
	color: #08c
}
 .link:hover {
	color: #026596;
	text-decoration: underline;
}

.avatar {
	width: 30px;
	height: 30px;
	vertical-align: middle;
}
.more {
	font-size: 13px;
}
</style>
