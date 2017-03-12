<template>
  <div class="live-section">
    <el-tabs v-for='categoryItem in categoryList' v-show='currentCategory===categoryItem' @tab-click="handleClick" :value='currentSiteName'
      :key='categoryItem'>
      <el-tab-pane v-for='(site,index) in categorySites[currentCategory]' :label="site" :name="site" :key='site'>用户管理
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
  import store from 'js/store'

  export default {
    props: ['currentCategory'],
    data: () => {
      const globalState = store.state

      return {
        categoryList: globalState.categoryList,
        categorySites: globalState.categorySites,
        currentSiteIndexMap: new Map(globalState.categoryList.map(category => [category, 0]))
      }
    },
    computed: {
      currentSiteName: function () {
        const currentCategory = this.currentCategory
        return this.categorySites[currentCategory][this.currentSiteIndexMap.get(currentCategory)]
      }
    },
    methods: {
      handleClick: () => {}
    }
  }

</script>

<style>
  .live-section {
    flex-grow: 1;
    flex-shrink: 1;
  }

</style>
