<template>
  <!-- 一般vue项目都会使用vue-router -->
  <!-- 所以我们这里直接写一个 router-view -->
  <router-view></router-view>
  <!-- 开启底部安全区适配 -->
  <van-number-keyboard safe-area-inset-bottom />
</template>
<script setup></script>
<style lang="less">
#app {
  height: 100vh;
}
</style>

