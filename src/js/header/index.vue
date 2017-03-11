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
    display: flex;
    width: 100%;
    // height: $headerHeight;
    padding-top: 20px;
    flex-shrink: 0;
    border-bottom: 2px solid $activeColor;
  }
  
  .header-nav {
    max-width: 1200px;
    margin:  0 auto;
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
