<template>
  <div class="setting]-wrap">
    设置模块
    <van-button size="mini" type="primary" @click="onAddCount">主要按钮</van-button>
    {{ settingStore.count }}
  </div>
</template>
<script setup>
import { useSettingStore } from '@/store/setting'
const settingStore = useSettingStore()
const onAddCount = () => {
  settingStore.addCount()
}
</script>
<style lang="">
.ignore-wrapper {
     /* 不转换 */
     padding:10px;
}
</style>
