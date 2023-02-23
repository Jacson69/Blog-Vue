<script setup>
import Memories from './Memories.vue';
import Team from './Team.vue';
import TeamArticle from './TeamArticle.vue';
import Resource from './Resource.vue';
import AddModal from './Add.vue';
import ShowArticle from '@/components/ShowArticle.vue';
import { reqGetArticlesByTeam, reqGetDiariesByTeamName, reqGetMembersByTeamName } from '@/api/team';
import { NCard, NModal } from 'naive-ui';
import { reactive, ref } from 'vue';

const diariesList = reactive({ count: 0, diaries: [] });
const page = (data) => {
  // console.log(data);
  getDiaries(5, data);
};

async function getDiaries(PageSize, PageNo) {
  const result = await reqGetDiariesByTeamName({ PageSize, PageNo });
  diariesList.diaries = result.diaries;
  diariesList.count = result.count;
  // console.log(diariesList.value);
}
const pageMember = (data) => {
  // console.log(data);
  getMembers(5, data);
};
const menberList = reactive({ count: 0, members: [] });
const isTeam = ref(true);
async function getMembers(PageSize, PageNo) {
  const result = await reqGetMembersByTeamName({ PageSize, PageNo });
  menberList.members = result.members;
  menberList.count = result.count;
  // console.log(menberList.value);
  if (menberList.count === 0) {
    isTeam.value = false;
  }
}

const articleList = reactive({ count: 0, articles: [] });

const pageArticle = (data) => {
  // console.log(data);
  // getArticle(8, data);
  getArticles({ PageSize: 5, PageNo: data });
};
async function getArticles(obj) {
  const result = await reqGetArticlesByTeam(obj);
  articleList.articles = result.articles;
  articleList.count = result.count;
  // console.log(articleList.value);
}

const showModal = ref(false);
function add() {
  showModal.value = true;
  console.log(showModal.value);
}

const handlerCancel = () => {
  showModal.value = false;
};

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

// const data = reactive({ title: '', description: '', context: '', status: false });
// const handlerOk = async (obj) => {
//   if (data.context === '') {
//     window.msg.warning('保存失败！');
//     return;
//   }
//   for (const key in obj) {
//     data[key] = obj[key];
//   }
//   const result = await reqSaveArticle(data);
//   data.context = '';
//   console.log(result);
//   window.msg.success('保存成功！');
// };
</script>
<template>
  <div>
    <div class="content" v-show="!isTeam">
      <div class="top"><Memories :list="diariesList" @addMemory="add" @page="page" /></div>
      <div class="right"><Team :list="menberList" @pageMember="pageMember" /></div>
    </div>
    <div v-show="isTeam">
      <NCard
        :segmented="{
          content: true,
          footer: 'soft',
        }"
        :content-style="{
          paddingTop: 0,
          paddingBottom: '16px',
        }"
        class="hot"
      >
        <div class="header">
          <h2>团队留言</h2>
        </div>
      </NCard>
    </div>
    <div>
      <div class="left">
        <TeamArticle :list="articleList" @page="pageArticle" @view="handlerView" />
      </div>
      <div class="bottom"><Resource /></div>
    </div>
    <AddModal :wModal="showModal" @close="handlerCancel" />
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
  </div>

  <!-- <div>
    <div></div>
    <div></div>
  </div> -->
</template>
<style lang="scss" scoped>
.content {
  display: flex;
  margin: 16px 0;
  min-width: 900px;
  // overflow: auto;
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
