<script setup>
import Memories from './Memories.vue';
import Team from './Team.vue';
import TeamArticle from './TeamArticle.vue';
import Resource from './Resource.vue';
import { reqGetArticlesByTeam, reqGetDiariesByTeamName, reqGetMembersByTeamName } from '@/api/team';
import { reactive, ref } from 'vue';

const diariesList = ref([]);
getDiaries();
async function getDiaries() {
  const result = await reqGetDiariesByTeamName();
  diariesList.value = result.diaries;
  // console.log(diariesList.value);
}

const menberList = ref([]);
getMembers();
async function getMembers() {
  const result = await reqGetMembersByTeamName();
  menberList.value = result.members;
  // console.log(menberList.value);
}

const articleList = reactive({ count: 0, articles: [] });
getArticles({ PageSize: 5, PageNo: 0 });
async function getArticles(obj) {
  const result = await reqGetArticlesByTeam(obj);
  articleList.articles = result.articles;
  articleList.count = result.count;
  // console.log(articleList.value);
}
</script>
<template>
  <div class="content">
    <div class="top"><Memories :list="diariesList" /></div>
    <div class="right"><Team :list="menberList" /></div>
    <div class="left"><TeamArticle :list="articleList" /></div>
    <div class="bottom"><Resource /></div>
  </div>

  <!-- <div>
    <div></div>
    <div></div>
  </div> -->
</template>
<style lang="scss" scoped>
.content {
  display: flex;
  margin: 16px;
  min-width: 900px;
  overflow: auto;
}
.top {
  flex-grow: 1;
  padding-right: 20px;
}
.right {
  width: 50%;
  flex-shrink: 0;
}
</style>
