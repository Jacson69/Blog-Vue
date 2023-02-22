<script setup>
import {
  NAvatar,
  NCard,
  NList,
  NListItem,
  NPagination,
  NRadioButton,
  NRadioGroup,
  NSpace,
  NTag,
  NThing,
} from 'naive-ui';
import SvgIcon from '@/components/SvgIcon.vue';
import { ref } from 'vue';
const props = defineProps({
  list: {
    type: Object,
    required: true,
  },
});

// props.list.map((item) => {
//   item.CreatedAt = item.CreatedAt.toLocaleDateString();
// });
// console.log('list', props.list);

const emit = defineEmits(['view', 'page']);
const handlerPreview = (id) => {
  console.log(id);
  emit('view', id);
};

const page = ref(0);
const clickPage = (page) => {
  console.log(page);
  emit('page', page - 1);
};
clickPage(page);

const editClick = () => {};
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
    :bordered="false"
  >
    <div class="header">
      <div><h2>文章</h2></div>
      <div>
        <n-radio-group name="radiobuttongroup1">
          <n-radio-button value="article" label="文章" @click="editClick" />
          <n-radio-button value="collection" label="收藏" @click="editClick" />
        </n-radio-group>
      </div>
    </div>
    <NList hoverable clickable>
      <NListItem v-for="item of props.list.articles" :item="item" :key="item.ID">
        <div class="articleItem">
          <div>
            <NThing
              title="相见恨晚"
              content-style="margin-top: 10px;"
              @click="handlerPreview(item.ID)"
            >
              <!-- <template #avatar>
              <NAvatar>
                <NImage
                  width="100"
                  :src="'https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg'"
                />
              </NAvatar>
            </template> -->

              <template #header>
                <div>
                  <h3>{{ item.Title }}</h3>
                </div>
              </template>
              <template #description>
                <NSpace size="small" style="margin-top: 4px">
                  <NTag :bordered="false" type="success" size="small"> 后端开发 </NTag>
                  <NTag :bordered="false" type="info" size="small"> 中间件 </NTag>
                </NSpace>
              </template>
              {{ item.CreatedAt }} <br />
              {{ item.Description }}
            </NThing>
            <div class="icon-wrap">
              <SvgIcon name="like" style="cursor: pointer" />
              100
              <SvgIcon name="dislike" style="cursor: pointer" />
              100
            </div>
          </div>

          <!-- <div class="image"><img src="@/assets/bg.jpeg" alt="" /></div> -->
        </div>
      </NListItem>
      <div class="pagination">
        <n-pagination
          v-model:page="page"
          :page-slot="3"
          :item-count="props.list.count"
          @click="clickPage(page)"
          :page-size="5"
        />
      </div>
    </NList>
    <!-- <NList hoverable clickable>
      <NListItem v-for="item of props.list.articles" :item="item" :key="item.ID">
        <div class="articleItem">
          <div>
            <NThing
              title="相见恨晚"
              content-style="margin-top: 10px;"
              @click="handlerPreview(item.ID)"
            >
              <template #header>
                <div>
                  <h3>{{ item.Title }}</h3>
                </div>
              </template>
              <template #description>
                <NSpace size="small" style="margin-top: 4px">
                  <NTag :bordered="false" type="success" size="small"> 后端开发 </NTag>
                  <NTag :bordered="false" type="info" size="small"> 中间件 </NTag>
                </NSpace>
              </template>
              {{ item.CreatedAt }} <br />
              {{ item.Description }}
            </NThing>
            <div class="icon-wrap">
              <SvgIcon name="like" style="cursor: pointer" />
              100
              <SvgIcon name="dislike" style="cursor: pointer" />
              100
            </div>
          </div>
        </div>
      </NListItem>
      <div class="pagination">
        <n-pagination
          v-model:page="page"
          :page-slot="3"
          :item-count="props.list.count"
          @click="clickPage(page)"
          :page-size="5"
        />
      </div>
    </NList> -->
  </NCard>
</template>
<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.pagination {
  display: flex;
  justify-content: flex-end;
  padding-top: 10px;
}
.article {
  border-radius: 8px;
  // box-shadow: 0 5px 8px rgb(0 0 0 / 15%);
  box-shadow: 0 2px 12px 0 rgb(0 0 0 / 10%);
  // margin: 5px;
  .articleItem {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .image {
      width: 50px;
      height: 30px;
    }
  }
}
// .icon-wrap {
//   color: #fff;
// }
</style>
