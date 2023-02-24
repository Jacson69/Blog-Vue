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
import { NModal } from 'naive-ui';
import ShowArticle from '@/components/ShowArticle.vue';
const articleList = reactive({ count: 0, articles: [], user: [] });
const articleRecord = reactive([]);
const page = (data) => {
  // console.log(data);
  getArticle(8, data);
};

async function getArticle(PageSize, PageNo) {
  // console.log(PageNo);
  // console.log(PageSize);
  const result = await reqGetArticlesByPage({ PageSize, PageNo });
  const map = {};
  articleList.articles = [];
  articleList.count = result.count;

  // articleList.user = result.user;
  for (const value of result.records) {
    map[value.Title] = value;
  }
  // for (const value of result.articles) {
  //   articleList.articles.push({ ...map[value.Title], ...value });
  // }
  for (const value of result.articles) {
    articleRecord.push({ ...map[value.Title], ...value });
  }
  for (const value of result.user) {
    map[value.Name] = value;
  }
  for (const value of articleRecord) {
    articleList.articles.push({ ...map[value.Author], ...value });
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

const isShow = ref(false);
const article = ref({});
const handlerView = (id) => {
  console.log(id);
  for (let i = 0; i < articleList.articles.length; i++) {
    if (id === articleList.articles[i].ID) {
      article.value = articleList.articles[i];
    }
  }
  isShow.value = true;
  // console.log(article.value);
  console.log(isShow);
};

const handlerCancelArticleModal = () => {
  isShow.value = false;
};

const update = (index, liked, disliked) => {
  console.log(liked);
  console.log(articleList.articles);
  articleList.articles[index].Liked = liked;
  articleList.articles[index].Disliked = disliked;
  if (liked === true) {
    articleList.articles[index].Like++;
    articleList.articles[index].Dislike--;
  } else {
    articleList.articles[index].Like--;
    articleList.articles[index].Dislike++;
  }
};
</script>
<template>
  <div class="content">
    <div class="left">
      <Article :list="articleList" @page="page" @view="handlerView" @update="update" />
    </div>
    <div class="right">
      <ArticleHot :list="articleHotList" />
      <UserHot :list="userHotList" class="user" />
      <TeamHot :list="teamHotList" />
    </div>
  </div>
  <n-modal
    :show="isShow"
    preset="card"
    title="文章"
    style="width: 900px"
    @mask-click="handlerCancelArticleModal"
    @close="handlerCancelArticleModal"
  >
    <ShowArticle :article="article" />
  </n-modal>
</template>

<style lang="scss" scoped>
.content {
  display: flex;
  // justify-content: space-between;
  /* border-radius: 8px; */
  /* background-color: pink; */
  margin: 16px 0;
  min-width: 900px;
  // overflow: auto;
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
