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
    name: 'site-header'
  }

</script>

<style lang="scss" scoped>
  .header {
    position: fixed;
    width: 100%;
    height: 65px;
    border-bottom: 2px solid #20a0ff;
  }
  
  .header-nav {
    height: 50px;
    width: 1200px;
    margin: 0 auto;
    font-weight: bold;
    margin-top: 15px;
    background: transparent;
  }
  
  .menu-item {
    font-size: 17px;
  }

</style>
