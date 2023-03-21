<script setup>
import { NAvatar, NCard, NList, NListItem, NPagination, NTag, NThing } from 'naive-ui';
import SvgIcon from '@/components/SvgIcon.vue';
import { ref } from 'vue';
const props = defineProps({
  list: {
    type: Object,
    required: true,
  },
});

const page = ref(1);
const emit = defineEmits(['pageResource']);
const clickPage = (page) => {
  console.log(page);
  emit('pageResource', page - 1);
};
clickPage(page);
</script>

<template>
  <div v-show="props.list.count > 0 ? true : false">
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
        <h2>团队资源</h2>
      </div>

      <div class="title">
        <div>名称</div>
        <div>用户</div>
        <div>类型</div>
        <div>下载量</div>
      </div>

      <NList hoverable clickable class="list">
        <NListItem v-for="item of props.list.resources" :key="item.ID">
          <div class="item">
            <div class="avatar">
              <div>
                <n-avatar :size="37" :src="item.Url" />
              </div>
              <div style="padding-left: 6px">{{ item.Title }}</div>
            </div>
            <div>{{ item.Author }}</div>
            <div>{{ item.Type }}</div>
            <div>{{ item.Download }}</div>
            <!-- <div class="name left">
            {{ item.Name }}
          </div>
          <div>{{ item.Fans }}</div> -->
          </div>
        </NListItem>
      </NList>
      <div class="pagination">
        <n-pagination
          v-model:page="page"
          :page-slot="3"
          :item-count="props.list.count"
          @click="clickPage(page)"
          :page-size="10"
        />
      </div>
    </NCard>
  </div>
</template>
<style lang="scss" scoped>
.hot {
  // height: auto;
  border-radius: 8px;
  box-shadow: 0 5px 8px rgb(0 0 0 / 15%);
  .list {
    min-height: 730px;
  }
  .pagination {
    display: flex;
    justify-content: flex-end;
    padding-top: 10px;
  }
  .header {
    display: flex;
    align-items: center;
    // padding-top: 10px;

    .add {
      padding-left: 16px;
      font-size: 26px;
      cursor: pointer;
      background-color: #fff;
      color: #000;
    }
  }
}
.title {
  display: flex;
  align-items: center;
  justify-content: space-around;
  border-bottom: 1px solid rgb(239, 239, 245);
  padding: 12px 20px;
  & > div {
    width: 25%;
    text-align: center;
  }
}
.item {
  display: flex;
  align-items: center;
  justify-content: space-around;
  & > div {
    // flex-grow: 1;
    // flex-basis: min-content;
    width: 25%;
    text-align: center;
  }
  .avatar {
    display: flex;
    align-items: center;
    // justify-content: center;
  }
  // text-align: center;
  // :nth-child(1) {
  //   width: 20%;
  // }
  // :nth-child(2) {
  //   width: 30%;
  // }
  // :nth-child(3) {
  //   width: 20%;
  // }
}
</style>
