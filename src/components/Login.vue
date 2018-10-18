<template>
  <div class="login">
  	<div class="layout">
	    <div class="topBar">
	    	<router-link :to="{
		    			name: 'root',
		    			params:{
		    				//不传值
		    			}
		    		}">
		    			<span class="jump">主页</span>
		    		</router-link> /
			<span>登录</span>
	    </div>
	    <div class="content">
	    	<div class="ipt">
		    	<p><span class="name">用户名</span> <input type="text"></p>
		    	<p><span class="password">密码</span> <input type="password"></p> 
	    	</div>
	    	<div class="bottom">
	    		<button>登录</button>
	    		<button>通过GitHub登录</button>
	    		<span>忘记密码了？</span>
	    	</div>
	    </div>
	</div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.login {
		background-color: #e1e1e1;
		padding: .1px;
	}
	.layout {
		margin: 20px 10px 20px 50px;
		width: 65%;
		/*border-radius: 3px;*/
	}
	.topBar {
		/*width: 100%;*/
		color: #999;
		font-size: 14px;
		border-bottom: 1px solid #efefef;
		padding: 10px;
		background-color: #f6f6f6;
		border-radius: 3px 3px 0 0;
	}
	.jump {
		color: #80bd01;
	}
	.jump:hover {
	text-decoration: underline #80bd01;
    }
    .content {
    	/*width: 100%;*/
    	background-color: #fff;
    	padding: 10px;
    	border-radius: 0 0 3px 3px;
		
    }
    .ipt {
    	width: 350px;
    	margin: 50px auto;
    	font-size: 15px;
    }
    .ipt p {
    	padding: 4px 6px;
    }
    .name,.password {
    	display: inline-block;
    	width: 50px;
		color: #5bc0de;
    }
    input {
		width: 250px;
		height: 25px;
		border: 1px solid #ccc;
		border-radius: 3px ;
		transition: all 1s;
    } 
    input:focus {
    	border: 1px solid #5bc0de;
    	box-shadow: 1px 1px 10px rgba(100,149,237,.5);
    	outline: none;
    }
    .bottom {
    	width: 350px;
    	margin: 0 auto;
    }
    button {
    	padding: 10px 15px;
    	outline: none;
    	border: none;
    	color: #fff;
    	border-radius: 3px;
    }
    button:nth-of-type(1) {
    	background-color: #08c;
    }
    button:nth-of-type(2) {
    	background-color: #5bc0de;
    }
    .bottom span {
    	font-size: 14px;
    	color: #999;
    }
</style>
