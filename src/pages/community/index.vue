<script setup>
import Article from '@/components/community/index.vue';
import ArticleHot from '@/components/community/ArticleHot.vue';
import UserHot from '@/components/community/UserHot.vue';
import TeamHot from '@/components/community/TeamHot.vue';
import { reqGetArticlesByPage } from '@/api/article';
import { reactive } from 'vue';

const articleList = reactive({ count: 0, articles: [] });
getArticle(10, 0);
async function getArticle(PageSize, PageNo) {
  const result = await reqGetArticlesByPage({ PageSize, PageNo });
  const map = {};
  articleList.articles = [];
  for (const value of result.articles) {
    map[value.id] = value;
  }
  for (const value of result.records) {
    articleList.articles.push({ ...map[value.id], ...value });
  }
  console.log(articleList.articles);
}
</script>
<template>
  <div class="content">
    <Article :list="articleList" />
    <div>
      <ArticleHot />
      <UserHot />
      <TeamHot />
    </div>
  </div>
</template>

<style>
.content {
  display: flex;
  justify-content: space-between;
  border-radius: 8px;
  background-color: pink;
  margin: 16px;
}
</style>
