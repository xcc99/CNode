
<template>
  <div class="pagination">
  	<div class="btn">
  		<!-- 事件不传递参数，默认传递的是原生的event属性 -->
	    <button @click="changePage">首页</button>
	    <button @click="changePage">«</button>
		<button v-if="judge">•••</button>
	    <button v-for="page in pages "
	     :class="{currentPage:page == currentPage}"
	     @click="changePage(page)">
	    	{{page}}
	    </button>
	    <button @click="changePage">»</button>
    </div>
  </div>
</template>

<script>
	import $ from 'jquery'
export default {
  name: 'pagination',
  data(){
  	return {
  		pages: [1,2,3,4,5,'•••'],
  		currentPage: 1,
  		judge: false
  	}
  },
  methods: {
  	changePage(page){
  		if(typeof page != "number"){
  			switch(page.target.innerText){
  				case '«': 
  				// 点«的时候就出发点击当前页的上一个的事件
  				$('button.currentPage').prev().click()
  				break;
  				case '»': 
  				$('button.currentPage').next().click()
  				break;
  				case '首页' :
  				//当不在首页的时候数组就变化了
  				this.pages = [1,2,3,4,5,'•••'];
  				this.changePage(1);
  				break;
  			}
  			return
  		}
  		this.currentPage = page 
  		if(page > 4){
  			this.judge = true
  		}else{
  			this.judge = false
  		}
  		if(page == this.pages[4]){
  			this.pages.shift()
  			this.pages.splice(4,0,page+1)
  		}else if(page == this.pages[0] && page != 1){
  			this.pages.splice(4,1)
  			this.pages.unshift(page-1)
  		}
  		this.$emit('handle',this.currentPage)
  	}
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.pagination {
		padding: 10px;
	}
	.btn {
		display: inline-block;
		font-size: 13px;
		border: 1px solid #ddd;
		border-radius: 3px;
	}
	button {
		background-color: #fff;
		padding: 5px 10px;
		border: none;
		color: #999;
		outline: none;
	}
	button:hover {
		background-color: #efefef;
	}
	button:not(:last-child){
		border-right: 1px solid #ddd;
	}
	.currentPage {
		color: #80bd01;
	}
</style>
