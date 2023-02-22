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
const page = ref(0);
const emit = defineEmits(['addMemory', 'page']);
const clickPage = (page) => {
  console.log(page);
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
          <div class="avatar">
            <div>
              <n-avatar round :size="45" :src="item.Avatar" />
            </div>
            <div style="padding-left: 6px">{{ item.Name }}</div>
          </div>
          <div>{{ item.Context }}</div>
          <div class="level" :class="item.Status ? 'primary' : 'muted'">
            {{ item.Status ? '紧急' : '一般' }}
          </div>
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
    min-height: 378px;
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
  .avatar {
    display: flex;
    align-items: center;
    justify-content: left;
  }
  .level {
    background-color: pink;
    border-radius: 6px;
    padding: 3px 12px;
  }
  .primary {
    background-color: rgb(123, 204, 234);
  }

  .muted {
    background-color: #d2cece;
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
