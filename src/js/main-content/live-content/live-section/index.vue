<template>
  <div class="live-section" ref='liveSection'>
    <el-tabs v-for='categoryItem in categoryList' v-show='currentCategory===categoryItem' @tab-click="handleClick" :value='currentSiteName'
      :key='categoryItem'>
      <el-tab-pane v-for='(site,index) in categorySites[currentCategory]' :label="site" :name="site" :key='site'>
        <div class="video-list">
          <video-item v-for='item in 10' :key='item' />
        </div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
  import store from 'js/store'
  import videoItem from './video'

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
    components: {
      videoItem
    },
    mounted () {
      const liveSection = this.$refs.liveSection
      console.log(liveSection)
      // const that = this
      const reSizeIfWidthChange = (() => {
        let lastWidth = liveSection.clientWidth
        return () => {
          let width = liveSection.clientWidth
          if (width !== lastWidth) {
            lastWidth = width
            console.log(width)
          }
        }
      })()

      setInterval(reSizeIfWidthChange, 500)
    },
    methods: {
      handleClick: () => {}
    }
  }

</script>

<style lang='scss' scoped>
  .live-section {
    flex-grow: 1;
    flex-shrink: 1;
  }
  
  .video-list {
    display: inline-flex;
    flex-wrap: wrap;
    flex-grow: 0;
    justify-content: center;
    padding: 10px 20px;
  }
  
  .video-item-wrap {
    display: flex;
  }

</style>
