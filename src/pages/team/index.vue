<script setup>
import Memories from './Memories.vue';
import Team from './Team.vue';
import TeamArticle from './TeamArticle.vue';
import Resource from './Resource.vue';
import AddModal from './Add.vue';
import ShowArticle from '@/components/ShowArticle.vue';
import {
  reqAddTeamMemberByCode,
  reqCreateTeam,
  reqGetArticlesByTeam,
  reqGetDiariesByTeamName,
  reqGetMembersByTeamName,
  reqGetResources,
} from '@/api/team';
import { reactive, ref } from 'vue';
import { NButton, NCard, NForm, NFormItem, NInput, NModal } from 'naive-ui';
import { useRouter } from 'vue-router';
const router = useRouter();
const resourceList = reactive({ count: 0, resources: [] });
const pageResource = (data) => {
  getResources(10, data);
};

const getResources = async (PageSize, PageNo) => {
  const result = await reqGetResources({ PageSize, PageNo });
  resourceList.resources = result.resources;
  resourceList.count = result.count;
};

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
  articleList.articles = [];
  articleList.count = result.count;
  const articleRecord = reactive([]);
  const map = {};
  for (const value of result.records) {
    map[value.Title] = value;
  }
  // for (const value of result.articles) {
  //   articleList.articles.push({ ...map[value.Title], ...value });
  // }
  for (const value of result.articles) {
    articleRecord.push({ ...map[value.Title], ...value });
  }
  // console.log(articleRecord);
  for (const value of result.user) {
    map[value.Name] = value;
  }
  for (const value of articleRecord) {
    articleList.articles.push({ ...map[value.Author], ...value });
  }
  console.log(articleList);
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

const modalJoin = ref(false);
const modalCreate = ref(false);
const handlerCancelModalJoin = () => {
  modalJoin.value = false;
  location.reload();
};

const handlerCancelModalCreate = () => {
  modalCreate.value = false;
  location.reload();
};

const code = ref('');
const teamName = ref('');
const descript = ref('');
const handlerOkJoin = async (code) => {
  await reqAddTeamMemberByCode({ code });
  window.msg.success('加入成功！');
  handlerCancelModalJoin();
};
const handlerOkCreate = async (name) => {
  if (name === '') {
    window.msg.error('输入错误，请重新输入！');
    return;
  }
  await reqCreateTeam({ name });
  window.msg.success('创建成功！');
  handlerCancelModalCreate();
};

const reload = () => {
  getDiaries(5, 0);
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
  <div v-show="isTeam">
    <div class="content">
      <div class="top">
        <Memories :list="diariesList" @addMemory="add" @page="page" />
      </div>
      <div class="right"><Team :list="menberList" @pageMember="pageMember" /></div>
    </div>

    <div class="content">
      <div class="left">
        <TeamArticle :list="articleList" @page="pageArticle" @view="handlerView" />
      </div>
      <div class="bottom">
        <Resource :list="resourceList" @pageResource="pageResource" />
      </div>
    </div>
    <AddModal :wModal="showModal" @close="handlerCancel" @reload="reload" />
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
  <div v-show="!isTeam">
    <NCard
      :segmented="{
        content: true,
        footer: 'soft',
      }"
      :content-style="{
        paddingTop: 0,
        paddingBottom: '16px',
      }"
      class="NoCard"
    >
      <div class="box">
        <div style="color: gray"><h1>暂无团队</h1></div>
        <!-- <br /> -->
        <div class="buttonGroup">
          <div>
            <div class="btn">
              <n-button
                strong
                secondary
                round
                type="info"
                @click="() => (modalJoin = true)"
                style="width: 120px; height: 45px"
              >
                加入团队
              </n-button>
              <n-modal
                v-model:show="modalJoin"
                preset="card"
                title="加入团队"
                style="width: 500px"
                @mask-click="handlerCancelModalJoin"
                @close="handlerCancelModalJoin"
              >
                <n-form label-placement="left" label-width="auto">
                  <n-form-item label="团队ID：">
                    <n-input placeholder="请输入六位数的团队ID" v-model:value="code" />
                  </n-form-item>
                  <div class="footer">
                    <NButton type="info" @click="handlerOkJoin(code)" class="btn1">确定</NButton>
                    <NButton type="error" @click="handlerCancelModalJoin" class="btn1"
                      >取消</NButton
                    >
                  </div>
                </n-form>
              </n-modal>
            </div>
          </div>

          <div>
            <n-button
              strong
              secondary
              round
              type="info"
              @click="() => (modalCreate = true)"
              style="width: 120px; height: 45px"
            >
              创建团队
            </n-button>
            <n-modal
              v-model:show="modalCreate"
              preset="card"
              title="创建团队"
              style="width: 500px"
              @mask-click="handlerCancelModalCreate"
              @close="handlerCancelModalCreate"
            >
              <n-form label-placement="left" label-width="auto">
                <n-form-item label="团队名称：">
                  <n-input placeholder="请输入团队名称" v-model:value="teamName" />
                </n-form-item>
                <n-form-item label="团队简介：">
                  <n-input
                    placeholder="请描述团队"
                    type="textarea"
                    :autosize="{
                      minRows: 3,
                      maxRows: 5,
                    }"
                    v-model:value="descript"
                  />
                </n-form-item>
                <div class="footer">
                  <NButton type="info" @click="handlerOkCreate(teamName)" class="btn1"
                    >确定</NButton
                  >
                  <NButton type="error" @click="handlerCancelModalCreate" class="btn1"
                    >取消</NButton
                  >
                </div>
              </n-form>
            </n-modal>
          </div>
        </div>
      </div>
    </NCard>
  </div>
  <!-- <div>
    <div></div>
    <div></div>
  </div> -->
</template>
<style lang="scss" scoped>
.content {
  display: flex;
  margin: 16px 0 30px 0;
  min-width: 900px;
  // overflow: auto;
}
.top {
  flex-grow: 1;
  padding-right: 30px;
}
.right {
  width: 30%;
  flex-shrink: 0;
}
.bottom {
  width: 46%;
  flex-shrink: 0;
}

.left {
  flex-grow: 1;
  padding-right: 30px;
}
.box {
  // box-sizing: border-box;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.btn {
  padding-bottom: 20px;
}
.NoCard {
  border-radius: 8px;
  box-shadow: 0px 5px 8px rgb(0 0 0 / 15%);
  height: calc(100vh - 150px);
}

.footer {
  display: flex;
  justify-content: flex-end;
  gap: 20px;
  border-radius: 20px;
  .btn1 {
    border-radius: 7px;
  }
}
</style>
