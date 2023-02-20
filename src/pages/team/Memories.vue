<script setup>
import { NCard, NList, NListItem, NPagination, NSpace, NTag, NThing } from 'naive-ui';
import SvgIcon from '@/components/SvgIcon.vue';
import { ref } from 'vue';

const props = defineProps({
  list: {
    type: Object,
    required: true,
  },
});
const page = ref(0);
const emit = defineEmits(['addMemory', 'page']);
const clickPage = (page) => {
  // console.log(page);
  emit('page', page - 1);
};
clickPage(page);
</script>

<template>
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
      <SvgIcon name="add" class="add" @click="() => emit('addMemory')" />
    </div>

    <div class="title">
      <div>名称</div>
      <div>内容</div>
      <div>级别</div>
      <div>时间</div>
    </div>

    <NList hoverable clickable class="list">
      <NListItem v-for="item of props.list.diaries" :key="item.ID">
        <div class="item">
          <div>{{ item.Name }}</div>
          <div>{{ item.Context }}</div>
          <div>{{ item.Position }}</div>
          <div>{{ item.Employed }}</div>
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
        :page-size="5"
      />
    </div>
  </NCard>
</template>
<style lang="scss" scoped>
.hot {
  // height: auto;
  border-radius: 8px;
  // margin-left: 10px;
  box-shadow: 0px 5px 8px rgb(0 0 0 / 15%);
  .list {
    min-height: 233px;
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
}
.item {
  display: flex;
  align-items: center;
  justify-content: space-around;
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
