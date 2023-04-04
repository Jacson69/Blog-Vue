<script setup>
import { NAvatar, NCard, NList, NListItem, NSpace, NTag, NThing } from 'naive-ui';
import SvgIcon from '@/components/SvgIcon.vue';

const props = defineProps({
  list: {
    type: Object,
    required: true,
  },
});
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
    <div class="item">
      <div class="left">
        <h3>博主热度榜单</h3>
      </div>
      <div>
        <p>
          <SvgIcon name="date" />
          <span>2022-03-20</span>
        </p>
      </div>
    </div>

    <div class="title">
      <div class="left">博主</div>
      <div>粉丝量</div>
    </div>

    <NList hoverable clickable>
      <NListItem v-for="item of props.list" :key="item.ID">
        <div class="item">
          <div class="avatar left name">
            <div>
              <n-avatar round :size="25" :src="item.Img" />
            </div>
            <div style="padding-left: 6px">{{ item.Name }}</div>
          </div>
          <div>{{ item.Fans }}</div>
        </div>
      </NListItem>
    </NList>
  </NCard>
</template>
<style lang="scss" scoped>
.hot {
  // height: auto;
  box-shadow: 0 5px 8px rgb(0 0 0 / 15%);
}
.title {
  display: flex;
  align-items: center;
  // justify-content: space-between;
  border-bottom: 1px solid rgb(239, 239, 245);
  padding: 12px 20px;
}
.item {
  display: flex;
  align-items: center;
  // justify-content: space-between;
  .name {
    // color: #2080f0;
    color: #fc5531;
  }
}
.left {
  width: 70%;
}
.avatar {
  display: flex;
  align-items: center;
  justify-content: left;
}
</style>
