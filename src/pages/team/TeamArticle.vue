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
import { ref } from 'vue';
const props = defineProps({
  list: {
    type: Object,
    required: true,
  },
});
console.log(props.list.articles);
const emit = defineEmits(['view', 'page']);
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
  <div v-show="props.list.count > 0 ? true : false">
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
        <h2>团队文章</h2>
      </div>
      <NList hoverable clickable>
        <NListItem v-for="item of props.list.articles" :item="item" :key="item.ID">
          <div class="listItem">
            <div>
              <NThing
                title="相见恨晚"
                content-style="margin-top: 10px;"
                @click="handlerPreview(item.ID)"
              >
                <template #avatar>
                  <NAvatar :src="item.Img_url" size="large">
                    <!-- <NImage
                      width="100"
                      :src="'https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg'"
                    /> -->
                  </NAvatar>
                </template>

                <template #header>
                  <div>{{ item.Title }}</div>
                </template>
                <template #description>
                  <NSpace size="small" style="margin-top: 4px">
                    <NTag :bordered="false" type="success" size="small"> 团队文章 </NTag>
                    <NTag :bordered="false" type="info" size="small"> 新发布 </NTag>
                  </NSpace>
                </template>
                {{ item.Description }}
                <div class="time">{{ item.CreatedAt }}</div>

                <!-- <template #description> {{ item.CreatedAt }} </template> -->
              </NThing>
            </div>
            <img width="272" src="@/assets/bg.jpeg" alt="" />
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
            :page-size="5"
          />
        </div>
      </NList>
    </NCard>
  </div>
</template>
<style lang="scss" scoped>
.article {
  border-radius: 8px;
  box-shadow: 0 5px 8px rgb(0 0 0 / 15%);
}
.pagination {
  display: flex;
  justify-content: flex-end;
  padding-top: 10px;
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
