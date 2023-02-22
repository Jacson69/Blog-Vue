<script setup>
import Profile from './Profile.vue';
import Article from './Article.vue';
import { reqEditUserInfo, reqGetArticlesByUser, reqInfo } from '@/api/profile';
import { reactive, ref } from 'vue';
import ShowArticle from '@/components/ShowArticle.vue';
import { NModal } from 'naive-ui';
const articleList = reactive({ count: 0, articles: [] });

const page = (data) => {
  // console.log(data);
  getArticleByUser(5, data);
};

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

const handlerCancel = () => {
  isShow.value = false;
};
</script>
<template>
  <div class="content">
    <div class="left"><Article :list="articleList" @view="handlerView" @page="page" /></div>
    <div class="right">
      <!-- <ArticleHot :list="articleHotList" /> -->
      <Profile :userInfo="userInfo" />
      <!-- <TeamHot :list="teamHotList" /> -->
    </div>
  </div>
  <div>
    <n-modal
      :show="isShow"
      preset="card"
      title="文章"
      style="width: 900px"
      @mask-click="handlerCancel"
      @close="handlerCancel"
    >
      <ShowArticle :article="article" />
    </n-modal>
  </div>
</template>

<style lang="scss" scoped>
.content {
  position: relative;
  display: flex;
  // justify-content: space-between;
  /* border-radius: 8px; */
  /* background-color: pink; */
  margin: 16px 0;
  // min-width: 900px;

  // overflow: auto;
  .left {
    // flex-grow: 1;
    padding-right: 20px;
    width: 70%;
    box-sizing: border-box;
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
