<template>
  <div class="header">
    <el-menu mode='horizontal' class='header-nav'>
      <el-menu-item class='menu-item' index='0'>
        Dota
      </el-menu-item>
      <el-menu-item class='menu-item' index='1'>
        LOL
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
  export default {
  }

</script>

<style lang="scss" scoped>
@import "~@/css/variable.scss";

  .header {
    position: fixed;
    top: 0;
    width: 100%;
    height: $headerHeight;
    border-bottom: 2px solid $activityColor;
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
  }

</style>
