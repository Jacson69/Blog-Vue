<script setup>
import Profile from './Profile.vue';
import Article from './Article.vue';
import { reqEditUserInfo, reqGetArticlesByUser, reqInfo } from '@/api/profile';
import { reactive, ref } from 'vue';
import ShowArticle from '@/components/ShowArticle.vue';

const articleList = reactive({ count: 0, articles: [] });

getArticleByUser(10, 0);

async function getArticleByUser(PageSize, PageNo) {
  // console.log(PageNo);
  // console.log(PageSize);
  const result = await reqGetArticlesByUser({ PageSize, PageNo });
  articleList.articles = result.articles;
  articleList.count = result.count;
}

const userInfo = ref({});
getUser();
async function getUser() {
  const result = await reqInfo();
  userInfo.value = result.user;
  // console.log(userInfo);
}

const article = ref({});
const handlerView = (id) => {
  console.log('--------------======================');
  console.log(id);
  for (let i = 0; i < articleList.articles.length; i++) {
    if (1 === articleList.articles[i]) {
      article.value = articleList.articles[i];
    }
  }
  // console.log(article.value);
};
</script>
<template>
  <div class="content">
    <div class="left"><Article :list="articleList" @view="handlerView(id)" /></div>
    <div class="right">
      <!-- <ArticleHot :list="articleHotList" /> -->
      <Profile :userInfo="userInfo" />
      <!-- <TeamHot :list="teamHotList" /> -->
    </div>
  </div>
  <ShowArticle :article="article" />
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
