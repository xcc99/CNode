
<template>
  <div class="header">
  	<div class="layout">
  		<router-link :to="{
  			name: 'root',
  			params: {
  				
  			}
  		}">
  			<img src="//static2.cnodejs.org/public/images/cnodejs_light.svg">
  		</router-link>
  		
  		
  		<input type="text">
  		<ul>
  			<li><a href="">首页</a></li>
  			<li><a href="">新手入门</a></li>
  			<li><a href="">API</a></li>
  			<li><a href="">关于</a></li>
  			<li><a href="">注册</a></li>
  			<li>
				<router-link :to="{
					name: 'login',
					params: {
						
					}
				}">
					登录
				</router-link>
  			
  			</li>
  		</ul>
  	</div>
   	
  </div>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style scoped> 
	html,body {
		width: 100%;
	}
	.clearfix::after {
		content: '';
		display: block;
		clear: both;
	}
	.header {
		width: 100%;
		background-color: #444;
	}
	.layout {
		margin: 0 40px;
		padding: 5px;
	}
	img {
		width: 120px;
		height: 30px;
		padding: 3px 20px;
		vertical-align: middle;
		
	}
	input {
		padding: 3px 5px 3px 22px;
		background-color: #666;
		border-radius: 15px;
		border: none;
		width: 206px;
		height: 20px;
		vertical-align: middle;
	}
	ul {
		list-style: none;
		float: right;
		margin-right: 20px;
	}
	li {
		display: inline-block;
		
	}
	a {
		padding: 10px 15px;
		line-height: 40px;
		font-size: 13px;
		text-decoration: none;
		color: #ccc;

	}
	a:hover {
		color: #fff;
	}
</style>