<script setup>
import { NCard, NList, NListItem, NSpace, NSwitch, NTag, NThing } from 'naive-ui';
import SvgIcon from '@/components/SvgIcon.vue';
import { ref } from 'vue';
const value = ref(true);
const handleChange = (value) => {
  window.msg.success(`Update value: ${value}`);
};
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
      <h2>设置</h2>
    </div>

    <!-- <div>
      <div class="list" v-for="(item,index) in list" >
        <n-switch v-model:value="active" @update:value="handleChange" />
        Email me when someone follows me
      </div>
    </div> -->
    <div class="list">
      <n-switch v-model:value="value" @update:value="handleChange" style="padding-right: 20px" />
      <!-- <span class="title">Email me when someone follows me</span> -->
      是否启用MarkDown编辑器
    </div>
    <div class="list">
      <n-switch v-model:value="active" @update:value="handleChange" style="padding-right: 20px" />
      是否启用富文本编辑器
    </div>
    <div class="list">
      <n-switch v-model:value="active" @update:value="handleChange" style="padding-right: 20px" />
      是否启用夜间浏览模式
    </div>
    <div class="list">
      <n-switch v-model:value="value" @update:value="handleChange" style="padding-right: 20px" />
      是否启用消息订阅提醒功能
    </div>
    <div class="list">
      <n-switch v-model:value="value" @update:value="handleChange" style="padding-right: 20px" />
      是否启用主题变更功能
    </div>
    <div class="list">
      <n-switch v-model:value="active" @update:value="handleChange" style="padding-right: 20px" />
      是否启用关注提醒通知
    </div>
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

    .content {
      padding: 200px;
    }
  }
  .list {
    margin-top: 30px;
    // .title {
    //   margin-left: 10px;
    // }
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
