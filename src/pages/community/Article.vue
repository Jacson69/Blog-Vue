<script setup>
import {
  NAvatar,
  NCard,
  NImage,
  NList,
  NListItem,
  NPagination,
  NSpace,
  NTag,
  NThing,
} from 'naive-ui';
import SvgIcon from '@/components/SvgIcon.vue';
import { reactive, ref } from 'vue';
import { useUserStore } from '@/stores/user';
import { reqUpdateArticles } from '@/api/article';
const props = defineProps({
  list: {
    type: Object,
    required: true,
  },
});
console.log(props.list.articles);
let articleRecord = reactive({
  Title: '',
  Author: '',
  Team: '',
  Liked: '',
  Disliked: '',
});
const userStore = useUserStore();
const emit = defineEmits(['page', 'view', 'update']);
const u = reactive({ ...userStore.user });
const Like = (val, index) => {
  if (val.Liked) {
    return;
  }
  articleRecord = reactive({
    Title: val.Title,
    Author: u.name,
    Team: u.team,
    Liked: true,
    Disliked: false,
  });
  reqUpdateArticles(articleRecord);
  emit('update', index, true, false);
};
const disLike = (val, index) => {
  if (val.Disliked) {
    return;
  }
  articleRecord = reactive({
    Title: val.Title,
    Author: u.name,
    Team: u.team,
    Liked: false,
    Disliked: true,
  });
  reqUpdateArticles(articleRecord);
  emit('update', index, false, true);
};

const page = ref(0);
const clickPage = (page) => {
  emit('page', page - 1);
};
clickPage(page);

const handlerPreview = (id) => {
  // console.log(id);
  emit('view', id);
};
</script>

<template>
  <NCard
    class="article"
    :segmented="{
      content: true,
      footer: 'soft',
    }"
    :content-style="{
      paddingTop: 0,
      paddingBottom: '16px',
    }"
  >
    <div class="header">
      <h2>文章</h2>
    </div>
    <NList hoverable clickable>
      <NListItem v-for="(item, index) of props.list.articles" :item="item" :key="item.ID">
        <div class="listItem">
          <div>
            <NThing
              title="相见恨晚"
              content-style="margin-top: 10px;"
              @click="handlerPreview(item.ID)"
            >
              <template #avatar>
                <NAvatar round :src="item.Img_url" size="large">
                  <!-- <NImage  /> -->
                </NAvatar>
              </template>

              <template #header>
                <div class="title">
                  {{ item.Title }}
                </div>
              </template>
              <template #description>
                <NSpace size="small" style="padding-left: 10px; margin-bottom: 15px">
                  <NTag :bordered="false" type="success" size="small"> 环形公路 </NTag>
                  <NTag :bordered="false" type="info" size="small"> 潜水艇司机 </NTag>
                </NSpace>
              </template>
              {{ item.Description }}
              <div class="time">{{ item.CreatedAt }}</div>
              <!-- <template #description> {{ item.CreatedAt }} </template> -->
            </NThing>
          </div>
          <img width="272" src="@/assets/wz.jpg" alt="" />
        </div>
        <div class="svg">
          <div style="padding-right: 20px; display: flex">
            <SvgIcon
              :name="`${item.Liked ? 'like' : 'likek'}`"
              :class="`${item.Liked ? 'active ' : ''}icon-wrap`"
              @click="Like(item, index)"
            />
            <div class="num">{{ item.Like }}</div>
          </div>
          <div class="border">|</div>
          <div style="padding-left: 20px; display: flex">
            <SvgIcon
              :name="`${item.Disliked ? 'dislike' : 'dislikek'}`"
              :class="`${item.Disliked ? 'active ' : ''}icon-wrap`"
              @click="disLike(item, index)"
            />
            <div class="num">{{ item.Dislike }}</div>
          </div>
        </div>
        <!-- <div>
            <NAvatar>
              <NImage
                width="200"
                :src="'https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg'"
              />
            </NAvatar>
          </div> -->
      </NListItem>
      <div class="pagination">
        <n-pagination
          v-model:page="page"
          :page-slot="3"
          :item-count="props.list.count"
          @click="clickPage(page)"
          :page-size="8"
        />
      </div>
    </NList>
  </NCard>
</template>
<style lang="scss" scoped>
.title {
  font-weight: 700;
  font-size: 20px;
  padding-left: 10px;
  padding-bottom: 5px;
}
.article {
  border-radius: 8px;
  box-shadow: 0 5px 8px rgb(0 0 0 / 15%);
}
.pagination {
  display: flex;
  justify-content: flex-end;
  padding-top: 10px;
}
.icon-wrap {
  // color: aqua;
  cursor: pointer;
  padding-right: 5px;
  text-align: center;
  &.active {
    color: rgb(97, 96, 97);
    background-color: aqu;
  }
}

.svg {
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 17px;
  padding-top: 20px;
  .num {
    margin-top: -5px;
  }
  .border {
    margin-top: -5px;
  }
}

.time {
  color: gray;
  font-weight: 700;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  padding-top: 10px;
}

.listItem {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 15px;
}
</style>
