<template>
  <div id="app">
    <global-header />
    <router-view>
    </router-view>
  </div> 
</template>

<script>
import Header from 'js/header'

export default {
  name: 'app',
  components: {
    'global-header': Header
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: right;
  color: #2c3e50;
  position: relative;
}
</style>
