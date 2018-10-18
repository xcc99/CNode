<template>
	<div class="slideBar">
	    <!-- <div class="loading" v-if="isLoading">
	  		<img src="../assets/loading.gif" >
	  	</div> -->
	  	<div class="author">
	  		<p class="topbar">作者</p>
	  		<router-link :to="{
    				name: 'user_info',
    				params: {
    					loginname: userinfo.loginname
    				}
    			}">
    				<img :src="userinfo.avatar_url">
    			</router-link>
    		<span>{{userinfo.loginname}}</span>
	  		<p>积分: {{userinfo.score}} </p>
	  	</div>
	  	<div class="create">
	  		<p class="topbar">最新创建</p>
			<div v-for="list in createTitle" class="list">
				<router-link :to="{
						name: 'post_content',
						params: {
							id: list.id,
							loginname: list.loginname
						}
					}">
						<span class="link">{{list.title}}</span>
				</router-link>
			</div>
	  	</div>
	  	<div class="reply">
	  		<p class="topbar">最近回复</p>
	  		<div v-for="replys in userinfo.recent_replies" class="list">
	  			<router-link :to="{
	  				name:'post_content',
	  				params: {
	  					id: replys.id,
	  					loginname: replys.author.loginname
	  				}
	  			}">
	  				<span>{{replys.title}}</span>
	  			</router-link>
	  		</div>
	  	</div>
  	</div>
</template>

<script>
export default {
  name: 'SlideBar',
  data(){
  	return {
  		isLoading: false,
  		userinfo: {}
  	}
  },
  methods:{
  	getData(){
  		this.$http.get(`https://cnodejs.org/api/v1/user/${this.$route.params.name}`)
  		.then(res=>{
  			this.isLoading = false
  			this.userinfo = res.data.data
  			console.log(res)
  		})
  	}
  },
  computed:{
  	createTitle(){
  		if(this.userinfo.recent_topics){
  			return this.userinfo.recent_topics.slice(0,5)//替换
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
	.slideBar {
		/*margin: 20 auto;*/
		width: 25%;
		float: right;
		margin-right: 50px;
	}
	.author,.create,.reply {
		margin-top: 20px;
		background-color: #fff;
		margin: 20px auto;
		border-radius: 3px;
		font-size: 13px;
	}
	.topbar {
		background-color: #efefef;
		
		color: #444;
		padding: 10px;
	}
	.author img {
		width: 40px;
		height: 40px;
		vertical-align: middle;
		margin: 10px;
	}
	.author span {
		color: #ccc
	}
	.author p {
		padding: 10px;
	}
	.list {
		padding: 10px;
		color: #444;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;

	}
	.link {
		color: #444;
	}
</style>
