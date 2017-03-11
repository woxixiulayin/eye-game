<template>
<section class="rank-section">
  <ul class="rank-list">
   <li class="rank-item">
     123
     </li> 
  </ul>
</section>
</template>
<script>
export default {

}
</script>

<style lang="scss">
@import "~@/css/variable.scss";

.rank-section {
  position: fixed;
  top:80px;
  height: 100%;
  right: 0;
  width: $rightSideWidth;
  border-left: 1px solid $activityColor;
}
</style>
