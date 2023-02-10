<script setup>
import { RouterLink } from 'vue-router';
import menu from '@/router/menu';
import SvgIcon from '@/components/SvgIcon.vue';
// import {Menu, MenuItem, LayoutSider} from 'ant-design-vue'
</script>

<template>
  <div class="side-bar">
    <div class="title">Blog Web</div>
    <RouterLink
      v-for="item of menu"
      :to="{ name: item.name }"
      class="item"
      activeClass="active"
      :key="item.name"
    >
      <div class="icon-wrap">
        <SvgIcon :name="item.meta.icon" />
      </div>
      {{ item.meta.label }}
    </RouterLink>
  </div>
</template>

<style lang="scss">
.side-bar {
  display: flex;
  width: 248px;
  flex-direction: column;
  flex-shrink: 0;
  background-color: transparent;
  user-select: none;
  padding: 16px;
  padding-top: 50px;

  .title {
    padding-left: 50px;
    padding-bottom: 50px;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-size: 20px;
    color: #928b8b;
  }
  .item {
    display: flex;
    height: 48px;
    width: 240px;
    box-sizing: border-box;
    align-items: center;
    justify-content: flex-start;
    padding-left: 46px;
    color: rgb(51, 46, 46);
    text-decoration: none;
    border-radius: 6px;
    margin-bottom: 10px;
    &.active {
      background-color: bisque;
      color: #000;
      font-weight: 600;
      background-color: #fff;
      box-shadow: 0 2px 8px rgb(0 0 0 / 15%);
      .icon-wrap {
        color: #fff;
        background-color: #1890ff;
      }
    }

    .icon-wrap {
      height: 33px;
      width: 33px;
      border-radius: 6px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #8a8888;
      background-color: #f3efef;
      margin-right: 10px;
      font-size: 23px;
    }
  }
}
// .side-bar {
//   display: flex;
//   width: 148px;
//   flex-direction: column;
//   flex-shrink: 0;
//   background-color: greenyellow;
//   user-select: none;
//   .item {
//     display: flex;
//     height: 48px;
//     box-sizing: border-box;
//     align-items: center;
//     justify-content: center;
//     color: brown;
//     text-decoration: none;
//     &.active {
//       background-color: bisque;
//       color: blueviolet;
//     }
//   }
// }
</style>
