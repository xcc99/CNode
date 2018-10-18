<template>
  <div class="postList">
  	<div class="loading" v-if="isLoading">
  		<img src="../assets/loading.gif" >
  	</div>
    <div class="main">
    	<ul>
    		<li class="header">
    			<span class="active">全部</span>
    			<span>精华</span>
    			<span>分享</span>
    			<span>问答</span>
    			<span>招聘</span>
    			<span>客户端测试</span>

    		</li>
    		<li v-for="post in posts" >
    			<!-- 动态绑定属性必须要用v-bind -->
    			<router-link :to="{
    				name: 'user_info',
    				params: {
    					loginname: post.author.loginname
    				}
    			}">
    				<img :src="post.author.avatar_url" class="author_img">
    			</router-link>
    			
    			<span class="reply_count">{{post.reply_count}}</span><span class="f">/</span><span class="visit_count">{{post.visit_count}}</span>
    			<span :class="[{put_good : (post.good == true)},{put_top: (post.top == true)},{put_tab: (post.good != true && post.top != true)}]" >
    				{{post | sort}}
    			</span>
    			<router-link :to="{
    				name:'post_content',
    				params: {
    					id:post.id,
    					name: post.author.loginname
    				}
    			}">
    				<span class="title">
    					{{post.title}}
    				</span>
    			</router-link>
    			
    			<span class="rely_img"></span>
    			<span class="last_reply">{{post.last_reply_at | fromDate}}</span>
    		</li>
    		
   	 	</ul>
   	 	<!-- 在父组件中自定义一个事件 -->

   	 	<pagination @handle="getList"></pagination>
    </div>
  </div>
</template>

<script>
	import pagination from './Pagination'
export default {
    name: 'PostList',
    data: function(){
    	return {
    		isLoading: false,
    		posts: [], //获取到的数据存放的位置
    		pageNum:1
    	}
    },
    components: {
    	pagination
    },
    methods: {
  		getData(){
	  		this.$http.get(' https://cnodejs.org/api/v1/topics',{
	  			params: {
	  				page: this.pageNum,
	  				limit: 20
	  			}
	  		})
	  		.then(res=>{
	  			this.posts = res.data.data
	  			this.isLoading = false
	  			console.log(res.data.data)
	  		})
  		},
  		getList(value){
  			this.pageNum = value
  			this.getData()
  		}
    },
    beforeMount(){//表示在加载之前进行
    	this.isLoading = true
    	this.getData()
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.postList {
		background-color: #e1e1e1;
		padding: .1px;	 
	}
	.main {
		width: 90%;
		margin: 20px auto;
		border: 1px solid #e1e1e1;
		border-radius: 5px; 
		background-color: #fff; 
	}
	ul {
		list-style: none;
		width: 100%;
	}
	li{
		padding: 10px;
		border-bottom: 1px solid #f5f5f5;
	}
	.header {
		background-color: #f6f6f6;
		font-size: 14px;
	}
	.header>span {
		padding: 2px;
		margin: 0 10px;
		color: #80bd01;
	}
	.header .active {
		background-color: #80bd01;
		border-radius: 5px;
		color: #fff;
		padding: 2px 4px;
	}
	li:hover {
		background-color: #f5f5f5;
	}
	.author_img {
		width: 30px;
		height: 30px;
		vertical-align: middle;
		margin-right: 5px;
	}
	.reply_count {
		color: #a684c3;
		font-size: 14px;
	}
	.visit_count {
		color: #c9c7c6;
		font-size: 12px;
		margin-right: 10px;
	}
	.f {
		color: #aeb2ab;
		font-size: 13px;
	}
	.put_good,
	.put_top {
		background-color: #80bd01;
		color: #fff; 
		border-radius: 3px;
		font-size: 12px;
		padding: 2px 1px 2px 4px;
	}
	.put_tab {
		background-color: #e5e5e5;
		color: #afadad;
		border-radius: 3px;
		font-size: 12px;
		padding: 2px 1px 2px 4px;
	}
	.title {
		font-family: Arial;
		width: 70%;
		display: inline-block;
		line-height: 30px;
		margin-left: 10px;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
		vertical-align: middle;
	}
	.last_reply {
		float: right;
		font-size: 11px;
		color: #777;
		line-height: 40px;
	}
</style>
