<template>
  <div class="header">
    <el-menu mode='horizontal' :default-active="'0'" class='header-nav' @select='select'
    >
      <el-menu-item class='menu-item' index='0'>
        DOTA
      </el-menu-item>
      <el-menu-item class='menu-item' index='1'>
        LOL
      </el-menu-item>
      <el-menu-item class='menu-item' index='2'>
        炉石
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>

  export default {
    methods: {
      select: index => console.log(index)
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
