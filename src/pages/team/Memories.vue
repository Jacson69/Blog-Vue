<script setup>
import { NCard, NDataTable, NList, NListItem, NSpace, NTag, NThing } from 'naive-ui';
import SvgIcon from '@/components/SvgIcon.vue';

const props = defineProps({
  list: {
    type: Object,
    required: true,
  },
});

const emit = defineEmits(['addMemory']);
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
      <h2>团队备忘录</h2>
      <SvgIcon name="add" class="add" @click="() => emit('addMemory')" />
    </div>

    <div class="title">
      <div>名称</div>
      <div>内容</div>
      <div>级别</div>
      <div>时间</div>
    </div>

    <NList hoverable clickable>
      <NListItem v-for="item of props.list" :key="item.ID">
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
  </NCard>
</template>
<style lang="scss" scoped>
.hot {
  // height: auto;
  box-shadow: 0 5px 8px rgb(0 0 0 / 15%);
  .header {
    display: flex;
    align-items: center;
    padding-top: 10px;

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
