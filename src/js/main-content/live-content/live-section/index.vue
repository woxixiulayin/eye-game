<template>
<div class="live-section">
<el-tabs @tab-click="handleClick" v-model="activeName">
    <el-tab-pane v-for='(site,index) in gameSites' :label="site" :name="site" :key='index'>用户管理

    </el-tab-pane>
  </el-tabs>
</div>
</template>

<script>
import {gameCategory} from 'js/config'

export default {
  data: () => {
    return {
      gameSites: gameCategory['DOTA'],
      activeName: '熊猫'
    }
  },

  methods: {
    handleClick: e => console.log(this.data)
  }
}
</script>

<style>
.live-section {
  width: 100%;
}
</style>
