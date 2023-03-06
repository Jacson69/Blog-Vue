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
  listCollection: {
    type: Object,
    required: true,
  },
});

// props.list.map((item) => {
//   item.CreatedAt = item.CreatedAt.toLocaleDateString();
// });
// console.log('list', props.list);

const emit = defineEmits(['view', 'view2', 'page', 'page2']);
const handlerPreview = (id) => {
  // console.log(id);
  emit('view', id);
};
const handlerPreview2 = (id) => {
  // console.log(id);
  emit('view2', id);
};
const page = ref(0);
const page2 = ref(0);
const clickPage = (page) => {
  console.log(page);
  emit('page', page - 1);
};
clickPage(page);
const clickPage2 = (page) => {
  console.log(page);
  emit('page2', page - 1);
};
const isShow = ref('article');
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
        <n-radio-group name="radiobuttongroup1" v-model:value="isShow">
          <n-radio-button value="article" label="文章" @click="clickPage(0)" />
          <n-radio-button value="collection" label="收藏" @click="clickPage2(0)" />
        </n-radio-group>
      </div>
    </div>
    <div v-show="isShow === 'article'">
      <NList hoverable clickable>
        <div v-show="props.list.count <= 0 ? true : false" class="wzt">
          <div>
            <img src="@/assets/wzt.png" alt="" />
          </div>
          <div>无内容</div>
        </div>
        <div v-show="props.list.count > 0 ? true : false">
          <NListItem v-for="item of props.list.articles" :item="item" :key="item.ID">
            <div class="listItem">
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
                        <!-- <div class="time">{{ item.CreatedAt }}</div> -->
                      </NSpace>
                    </template>
                    {{ item.Description }}
                    <br />
                    <div class="time">{{ item.CreatedAt }}</div>
                  </NThing>
                  <!-- <template #suffix> -->
                  <!-- <img width="272" src="@/assets/bg.jpeg" alt="" /> -->
                  <!-- <template /> -->
                </div>
              </div>
              <img
                width="272"
                src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
                alt=""
              />
            </div>
          </NListItem>
        </div>
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
    </div>
    <div v-show="isShow === 'collection'">
      <NList hoverable clickable>
        <div v-show="props.listCollection.count <= 0 ? true : false" class="wzt">
          <div>
            <img src="@/assets/wzt.png" alt="" />
          </div>
          <div>无内容</div>
        </div>
        <div v-show="props.listCollection.count > 0 ? true : false">
          <NListItem v-for="item of props.listCollection.articles" :item="item" :key="item.ID">
            <div class="articleItem">
              <div>
                <NThing
                  title="相见恨晚"
                  content-style="margin-top: 10px;"
                  @click="handlerPreview2(item.ID)"
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
                  {{ item.Description }}
                  <br />
                  {{ item.CreatedAt }}
                </NThing>
              </div>

              <!-- <div class="image"><img src="@/assets/bg.jpeg" alt="" /></div> -->
            </div>
          </NListItem>
        </div>
        <div class="pagination">
          <n-pagination
            v-model:page="page2"
            :page-slot="3"
            :item-count="props.listCollection.count"
            @click="clickPage2(page2)"
            :page-size="5"
          />
        </div>
      </NList>
    </div>
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
  .listItem {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 15px;
    .articleItem {
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-grow: 1;
      .image {
        width: 50px;
        height: 30px;
      }
    }
  }
}
.wzt {
  min-height: 578px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.time {
  color: gray;
  font-weight: 700;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  padding-top: 10px;
  // padding-left: 40px;
}
</style>
