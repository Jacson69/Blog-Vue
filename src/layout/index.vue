<script setup>
import { watchEffect } from 'vue';
import { RouterView, useRoute } from 'vue-router';
import SideBar from './SideBar.vue';
import Header from './Header.vue';
import { NScrollbar } from 'naive-ui';
const route = useRoute();

watchEffect(() => {
  console.log(route.path, route.meta);
});
</script>

<template>
  <div class="layout">
    <SideBar />
    <div class="main-container">
      <Header />
      <n-scrollbar>
        <div class="view">
          <RouterView />
        </div>
      </n-scrollbar>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.layout {
  display: flex;
  width: 100vw;
  height: 100vh;
  background-color: #fafafa;
  // overflow: hidden;
  .main-container {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    width: auto;
    // padding: 0 40px;
    // background-color: #cc8888;
    overflow: hidden;
    height: 100vh;
    .view {
      padding: 0 40px;
    }
  }
}
</style>
