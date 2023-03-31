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
      <div v-show="props.list.count <= 0 ? true : false" class="wzt">
        <div>
          <img src="@/assets/wzt.png" alt="" />
        </div>
        <div>无内容</div>
      </div>
      <div v-show="props.list.count > 0 ? true : false">
        <NListItem v-for="item of props.list.diaries" :key="item.ID">
          <div class="item">
            <div class="avatar">
              <div>
                <n-avatar round :size="37" :src="item.Avatar" />
              </div>
              <div style="padding-left: 6px">{{ item.Name }}</div>
            </div>
            <div style="width: 40%">{{ item.Context }}</div>
            <div>
              <div class="level" :class="item.Status ? 'primary' : 'muted'">
                {{ item.Status ? '紧急' : '一般' }}
              </div>
            </div>
            <div>{{ item.Employed }}</div>
          </div>
        </NListItem>
      </div>
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
    justify-content: center;
  }
  .level {
    background-color: pink;
    border-radius: 6px;
    padding: 3px 12px;
    width: 30px;
    margin: 0 auto;
    color: #fff;
  }
  .primary {
    // background-color: #2080f0;
    background-color: #fc5531;
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

.wzt {
  min-height: 378px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
