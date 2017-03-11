<template>
<div class="main-content">
    <rankSection />
    <liveSection />
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
  margin-top: $headerHeight;
  margin-right: $rightSideWidth;
}
</style>
