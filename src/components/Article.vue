<template>
<div class="article">
 	<div class="main">
    	<div class="loading" v-if="isLoading">
  			<img src="../assets/loading.gif" >
  		</div>
  		<div class="topic_header">
			<span class="title_sort">{{post|sort}}</span>
			<span class="title_title">{{post.title}}</span>
  			<ul>
  				<li>• 发布于 {{post.create_at|fromDate}}</li>
  				<li>• 作者 {{post.author.loginname}}</li>
				<li>• {{post.visit_count}} 次浏览</li>
				<li>• 来自 {{post.tabSort | tabSort}}</li>
  			</ul>
  		</div>
		<div class="markdown-body content" v-html="post.content"></div>
    </div>
    <div class="reply">
    	<div class="reply_header">{{post.reply_count}} 回复</div>
    	<ul>
    		<li v-for="(replys,index) in replies">
    			<router-link :to="{
    				name: 'user_info',
    				params: {
    					loginname: replys.author.loginname
    				}
    			}">
    				<img :src="replys.author.avatar_url">
    			</router-link>
    			
    			<span>{{replys.author.loginname}}</span>
    			<span>{{index+1}}楼 •{{replys.create_at |fromDate }}</span>
    			<span class="reply_sort" 
    			v-if="replys.author.loginname == post.author.loginname">
    				作者
    			</span>
    			<span v-else></span>
    			<span class="ups" v-if="replys.ups.length > 0">☝ {{replys.ups.length}}</span>
				<p v-html="replys.content" class="markdown-body"></p>
    		</li>
    	</ul>
    </div>
</div>
</template>

<script>
export default {
  name: 'Article',
  data:function(){
  	return {
  		isLoading: false,
  		post: {}, //代表当前页的所有内容
  		replies: {},
  		index: 1
  	}
  },
  methods: {
  	getAtrData(){
  		this.$http.get(`https://cnodejs.org/api/v1/topic/${this.$route.params.id}`)//ES6语法相当于https://.../+'this.$route.params.id'
  		.then(res=>{
  			
  				this.post = res.data.data
  				this.replies = res.data.data.replies
  				this.isLoading = false
  				console.log(res.data.data)
  			
  		})
  		.catch(function(){
  			console.log('erro...')
  		})
  	}
  },
  beforeMount:function(){
  	this.isLoading = true
  	this.getAtrData()
  },
  watch: {
    '$route' (to, from) {
      // 对路由变化作出响应...
      console.log('变化了');
      this.isLoading = true
      this.getAtrData()
    }
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.article {
		width: 100%;
		background-color: #e1e1e1;
		padding: .1px;
		/*display: flex;*/
	}
	.article .main {
		width: 65%;
		margin-top: 20px;
		margin-left: 50px;
		margin-right: 300px;
		background-color: #fff;
		/*flex: .9;*/
		border-radius: 3px;
	}
	.topic_header {
		padding: 15px;
	}
	.content {
		padding: 15px;
	}
	.article .title_sort {
		background-color: #80bd01;
		color: #fff; 
		border-radius: 3px;
		font-size: 12px;
		padding: 2px 5px;
	}
	.article .title_title {
		font-size: 22px;
		line-height: 1.5;
		font-weight: bold;
		width: 75%;
	}
	.main ul {
		list-style: none;
		color: #838383;
		font-size: 12px;
		margin: 5px 0;
		padding: 10px 0;
		border-bottom: 1px solid #efefef;
	}
	.topic_header li {
		display: inline-block;
	}
	.article .reply {
		width: 65%;
		margin: 10px auto;
		margin-left: 50px;
		border-radius: 3px;
		background-color: #fff;
	}
	.reply_header {
		background-color: #f6f6f6;
		padding: 15px;
		color: #444;
		font-size: 14px;
	}
	.reply img {
		width: 30px;
		height: 30px;
		vertical-align: middle;
	}
	.reply li {
		padding: 10px;
		border-bottom: 1px solid #efefef;
	}
	.reply li span {
		font-size: 12px;
		
	}
	.reply .reply_sort {
		background-color: #80bd01;
		color: #fff; 
		border-radius: 3px;
		font-size: 12px;
		padding: 2px 3px 2px 0;
	}
	.reply .ups {
		float: right;
		margin-right: 10px;
		margin-top: 10px;
		color:#8ea2b3;
		font-size: 15px;
	}
	.reply p {
		margin-left: 40px;
	}
	@media (min-width: 360px) and (max-width: 376px) {
		.article .main {
			width: 100%;
			margin: 0;
		}
		.article .reply {
			width: 100%;
			margin: 0;
			margin-top: 20px;
		}
	}
	 @media (min-width: 768px) and (max-width: 1100px) {
     	.article .main {
     		width: 68%;
     		margin: 20px 20px;
     	}
     	.article .reply {
     		width: 68%;
     		margin: 20px 20px;
     	}
     }
</style>
