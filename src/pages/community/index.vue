<script setup>
import Article from './Article.vue';
import ArticleHot from './ArticleHot.vue';
import UserHot from './UserHot.vue';
import TeamHot from './TeamHot.vue';
import {
  reqGetArticlesByPage,
  reqGetArticlesHot,
  reqGetTeamsHot,
  reqGetUsersHot,
} from '@/api/article';
import { reactive, ref } from 'vue';

const articleList = reactive({ count: 0, articles: [], user: [] });

getArticle(10, 0);

async function getArticle(PageSize, PageNo) {
  // console.log(PageNo);
  // console.log(PageSize);
  const result = await reqGetArticlesByPage({ PageSize, PageNo });
  const map = {};
  articleList.articles = [];
  articleList.count = result.count;
  articleList.user = result.user;
  for (const value of result.records) {
    map[value.Title] = value;
  }
  for (const value of result.articles) {
    articleList.articles.push({ ...map[value.Title], ...value });
  }
  console.log(articleList);
}

const articleHotList = ref([]);
getArticleHot({ Num: 6 });
async function getArticleHot(obj) {
  const result = await await reqGetArticlesHot(obj);
  // console.log('-----------88888888888888888888');
  // console.log(result);
  articleHotList.value = result.articles;
}

const userHotList = ref([]);
getUserHot({ Num: 6 });
async function getUserHot(obj) {
  const result = await reqGetUsersHot(obj);
  userHotList.value = result.users;
}

const teamHotList = ref([]);
getTeamHot({ Num: 6 });
async function getTeamHot(obj) {
  const result = await reqGetTeamsHot(obj);
  teamHotList.value = result.teams;
}
</script>
<template>
  <div class="content">
    <div class="left"><Article :list="articleList" /></div>
    <div class="right">
      <ArticleHot :list="articleHotList" />
      <UserHot :list="userHotList" class="user" />
      <TeamHot :list="teamHotList" />
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
