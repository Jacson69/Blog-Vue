<script setup>
import SvgIcon from '@/components/SvgIcon.vue';
import { NBreadcrumb, NBreadcrumbItem, NIcon } from 'naive-ui';
// import { MdCash } from '@vicons/ionicons4';
</script>
<template>
  <div class="header">
    <div class="left">
      <!-- <div class="top">Pages / Dashboard</div>
      <div class="bottom">Dashboard</div> -->
      <div class="top">
        <n-breadcrumb separator=">">
          <n-breadcrumb-item> Pages</n-breadcrumb-item>
          <n-breadcrumb-item> 天津分行</n-breadcrumb-item>
        </n-breadcrumb>
      </div>

      <!-- <div class="bottom">Dashboard</div> -->
    </div>
    <div class="right">
      <!-- <div class="icon-wrap"> -->
      <div class="user">
        <SvgIcon :name="'account'" />
        小陈
      </div>
      <div class="menu">
        <SvgIcon :name="'ic_fluent_apps_list_24_filled'" />
      </div>
      <!-- </div> -->
    </div>
  </div>
</template>

<style lang="scss" scoped>
.header {
  flex-grow: 0;
  background-color: #f9efef;
  display: flex;
  border-radius: 8px;
  justify-content: space-between;
  margin: 16px 40px;
  height: auto;
  box-shadow: 0 5px 8px rgb(0 0 0 / 15%);
  .left {
    margin: 20px 15px;

    .top {
      color: #aaa8a8;
      padding-bottom: 12px;
    }
    .bottom {
      font-weight: 700;
    }
  }
  .right {
    display: flex;
    align-items: center;
    font-weight: 700;
    padding-right: 50px;
    font-size: 20px;
    .user {
      display: flex;
      align-items: center;
      cursor: pointer;
      padding-right: 15px;
    }
  }
}
</style>
