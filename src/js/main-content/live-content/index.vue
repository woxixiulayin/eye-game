<template>
<div class="main-content">
    <liveSection />
    <rankSection />
</div>
</template>

<script>
import rankSection from './rank-section'
import liveSection from './live-section'

export default {
  components: {
    rankSection,
    liveSection
  }
}

</script>

<style lang="scss">
@import "~@/css/variable.scss";

.main-content {
  // margin-top: $headerHeight+1;
  // margin-right: $rightSideWidth;
  display: flex;
  flex-direction: row;
  flex-grow: 1;
  height: 100%;
}
</style>
