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
  <div class="article">
    <NCard title="文章">
      <NList hoverable clickable>
        <NListItem v-for="item of props.list.articles" :item="item" :key="item.id">
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
            <template #description> 描述 </template>
            货币是为了提高交易效率而用于交换的中介商品。货币有多种形式，如贝壳粮食等自然物、金属纸张
          </NThing>
        </NListItem>

        <n-list-item>
          <n-thing title="他在时间门外" content-style="margin-top: 10px;">
            <template #description>
              <n-space size="small" style="margin-top: 4px">
                <n-tag :bordered="false" type="info" size="small"> 环形公路 </n-tag>
                <n-tag :bordered="false" type="info" size="small"> 潜水艇司机 </n-tag>
              </n-space>
            </template>
            最新的打印机<br />
            复制着彩色傀儡<br />
            早上好我的罐头先生<br />
            让他带你去被工厂敲击
          </n-thing>
        </n-list-item>
      </NList>
    </NCard>
  </div>
</template>
<style lang="scss">
.article {
  width: 1200px;
  margin-right: 50px;
  background-color: #b64747;
}
</style>
