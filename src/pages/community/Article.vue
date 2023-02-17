<script setup>
import { NAvatar, NCard, NImage, NList, NListItem, NSpace, NTag, NThing } from 'naive-ui';
const props = defineProps({
  list: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <NCard title="文章" class="article">
    <NList hoverable clickable>
      <NListItem v-for="item of props.list.articles" :item="item" :key="item.id">
        <div>
          <NThing title="相见恨晚" content-style="margin-top: 10px;">
            <template #avatar>
              <NAvatar>
                <NImage
                  width="100"
                  :src="'https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg'"
                />
              </NAvatar>
            </template>

            <template #header>
              <div>{{ item.Title }}</div>
            </template>
            <template #description>
              <NSpace size="small" style="margin-top: 4px">
                <NTag :bordered="false" type="success" size="small"> 环形公路 </NTag>
                <NTag :bordered="false" type="info" size="small"> 潜水艇司机 </NTag>
              </NSpace>
            </template>
            <!-- <template #description> {{ item.CreatedAt }} </template> -->
          </NThing>
        </div>
        {{ item.CreatedAt }} <br />
        {{ item.Description }}
        <!-- <div>
            <NAvatar>
              <NImage
                width="200"
                :src="'https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg'"
              />
            </NAvatar>
          </div> -->
      </NListItem>
    </NList>
  </NCard>
</template>
<style lang="scss" scoped>
.article {
  border-radius: 8px;
  box-shadow: 0 5px 8px rgb(0 0 0 / 15%);
}
</style>
