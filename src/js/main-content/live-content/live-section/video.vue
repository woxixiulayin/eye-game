<template>
  <li class="live-item">
    <div class="video-cover">
      <img :src='img' alt="" class="video-img" />
      <div class="play-mask"></div>
    </div>
    <div class="video-title">{{title}}</div>
    <div class="video-info">
      <span class="video-nickname">{{name}}</span>
      <span class="video-nums">{{nums}}</span>
    </div>
  </li>
</template>

<script>
  export default {
    props: ['video'],
    data: () => {
      return {
        name: '灰灰',
        nums: '629',
        title: '小奶：单排冲8000！         ' +
          '               ',
        link: 'http://www.douyu.com/xiaonai',
        img: 'https://rpic.douyucdn.cn/a1610/24/20/224460_161024205221.jpg'
      }
    }
  }

</script>

<style lang='scss' scoped>
  .live-item {
    height: 215px;
    flex-basis: 290px;
    flex-grow: 1;
    flex-shrink: 0;
    border: 1px solid black;
    background: white;
    margin: 5px 5px;
    display: flex;
    flex-flow: row wrap;
    .video-cover {
      position: relative;
      width: 100%;
      height: 158px;
      img {
        width: 100%;
        height: 100%;
      }
      .play-mask {
        position: absolute;
        left: 0;
        height: 0;
        width: 100%;
        height: 100%;
        opacity: 0;
        background: #fff;
      }
    }
    .video-title {
      margin-left: 5px;
      width: 100%;
      line-height: 30px;
      white-space: nowrap;
      font-size: 15px;
    }
    .video-info {
      margin-left: 5px;
      font-size: 14px;
      width: 100%;
      .video-nickname {
        margin-left: 3px;
        float: left;
      }
      .video-nums {
        float: right;
        margin-right: 5px;
      }
    }
  }

</style>
