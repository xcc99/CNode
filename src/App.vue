<template>
  <div id="app">

    <Header />
    <div class="main">
      <router-view name="slidebar"></router-view>
      <router-view name="main" ></router-view>
      <!-- <SlideBar /> -->
    </div>
  </div>
</template>

<script>
  import Header from './components/Header'
  import PostList from './components/PostList'
  import SlideBar from './components/SlideBar'
export default {
  name: 'App',
  components: {
    Header,PostList,SlideBar
  }
}
</script>

<style>
  * {
    padding: 0;
    margin: 0;
  }
  a{
    color: #000;
    text-decoration: none;
    }
  ul {
    list-style: none;
  }
  .loading {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
  }
 
</style>
