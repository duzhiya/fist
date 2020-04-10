<template>
  <div id="app">
    <!-- <index></index> -->
    <router-view></router-view>
    <bottom></bottom>
  </div>
</template>

<script>
  import index from './components/index'
  import bottom from './components/bottom'
  import homepage from './components/homepage'
  import Stars from './components/Stars'
  export default {
    components: {
      index,
      Stars,
      homepage,
      bottom
    },
    name: 'App'
  }
</script>

<style>
  #app {
    margin: 0;
    padding: 0;
  }
</style>
