<script setup>
import Profile from './Profile.vue';
import Article from './Article.vue';
import { reqEditUserInfo, reqInfo } from '@/api/profile';
import { reactive, ref } from 'vue';

const userInfo = ref({});
getUser();
async function getUser() {
  const result = await reqInfo();
  userInfo.value = result.users;
  console.log(userInfo);
  console.log('------------');
}
</script>
<template>
  <div class="content">
    <div class="left"><Article :list="articleList" /></div>
    <div class="right">
      <!-- <ArticleHot :list="articleHotList" /> -->
      <Profile :userInfo="userInfo" />
      <!-- <TeamHot :list="teamHotList" /> -->
    </div>
  </div>
</template>

<style lang="scss" scoped>
.content {
  display: flex;
  // justify-content: space-between;
  /* border-radius: 8px; */
  /* background-color: pink; */
  margin: 16px 0;
  min-width: 900px;
  overflow: auto;
  .left {
    flex-grow: 1;
    padding-right: 20px;
  }
  .right {
    width: 30%;
    flex-shrink: 0;
    .user {
      // padding: 20px 0;
      margin: 40px 0;
    }
  }
}
</style>
