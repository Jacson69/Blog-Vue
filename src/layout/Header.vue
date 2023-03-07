<script setup>
import SvgIcon from '@/components/SvgIcon.vue';
import { NAvatar, NBreadcrumb, NBreadcrumbItem, NButton, NDropdown } from 'naive-ui';
import { useUserStore } from '@/stores/user';
import { useRouter } from 'vue-router';
const userStore = useUserStore();
const router = useRouter();
// const u = reactive({ ...userStore.user });
const options = [
  { label: '个人资料', key: 'profile' },
  { label: '退出登录', key: 'exit' },
];
const handleSelect = async (key) => {
  console.log(key);
  if (key === 'profile') {
    router.replace({ path: '/profile' });
  } else {
    userStore.exitUser();
    router.replace({ path: '/login' });
  }
};
</script>
<template>
  <div class="header">
    <div class="left">
      <!-- <div class="top">Pages / Dashboard</div>
      <div class="bottom">Dashboard</div> -->
      <div class="top">
        <n-breadcrumb separator=">">
          <n-breadcrumb-item> 博客社区</n-breadcrumb-item>
          <n-breadcrumb-item> {{ this.$route.meta.label }}</n-breadcrumb-item>
        </n-breadcrumb>
      </div>

      <!-- <div class="bottom">Dashboard</div> -->
    </div>
    <div class="right">
      <!-- <div class="icon-wrap"> -->
      <!-- <div class="user"> -->
      <!-- <SvgIcon :name="'account'" /> -->

      <n-dropdown :options="options" trigger="click" @select="handleSelect">
        <!-- <n-button>用户资料</n-button> -->
        <div class="user">
          <NAvatar round :src="`${userStore.user.img_url}`" size="large" />
          {{ userStore.user.name }}
        </div>
      </n-dropdown>
      <!-- </div> -->
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
  // background-color: #f9efef;
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
