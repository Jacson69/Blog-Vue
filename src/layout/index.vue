<script setup>
import { watchEffect } from 'vue';
import { RouterView, useRoute } from 'vue-router';
import SideBar from './SideBar.vue';
import Header from './Header.vue';
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
      <div class="view">
        <RouterView />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.layout {
  display: flex;
  width: 100vw;
  height: 100vh;
  // overflow: hidden;
  .main-container {
    flex-grow: 1;
    width: auto;
  }
}
</style>
