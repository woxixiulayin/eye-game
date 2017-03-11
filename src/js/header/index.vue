<template>
  <div class="header">
    <el-menu mode='horizontal' :default-active="currentIndex" class='header-nav' @select='select'>
      <el-menu-item v-for='(item, index) in items' :index='String(index)' class="menu-item" :key="index"
      >
        {{item}}
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
  import {
    gameCategory
  } from 'js/config'

  export default {
    data: () => {
      return {
        items: Object.keys(gameCategory),
        currentIndex: '0'
      }
    },
    methods: {
      select: index => (this.currentIndex = index)
    }
  }

</script>

<style lang="scss" scoped>
  @import "~@/css/variable.scss";
  .header {
    position: fixed;
    top: 0;
    width: 100%;
    height: $headerHeight;
    border-bottom: 2px solid $activeColor;
  }
  
  .header-nav {
    position: absolute;
    width: 1200px;
    margin: 0 auto;
    bottom: 0;
    left: 0;
    right: 0;
    font-weight: bold;
    background: transparent;
  }
  
  .menu-item {
    font-size: 17px;
    // color : #333;
  }
  
  .is-active {
    border-bottom: 5px solid #20a0ff;
  }

</style>
