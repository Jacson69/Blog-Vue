<script setup>
import {
  NButton,
  NCard,
  NForm,
  NFormItem,
  NInput,
  NModal,
  NRadio,
  NRadioGroup,
  NSpace,
} from 'naive-ui';
import { reactive, ref } from 'vue';
import { reqSendMessage } from '@/api/team';
const props = defineProps({
  wModal: {
    type: Boolean,
    required: true,
  },
  UserId: {
    type: Number,
    required: true,
  },
});
const emit = defineEmits(['close']);
const data = reactive({ UserId: 0, context: '' });
const handlerCancel = () => {
  data.context = '';
  emit('close');
};

// const articleData = reactive({})
const handlerOk = async () => {
  data.UserId = props.UserId;
  // console.log(data.UserId);
  if (data.context === '') {
    window.msg.warning('发送失败！');
    return;
  }
  // data.level = level == "1" ? true : false,
  // if (level.value === '1') {
  //   data.level = true;
  // } else {
  //   data.level = false;
  // }
  const result = await reqSendMessage(data);
  // console.log(result);
  window.msg.success('发送成功！');
  handlerCancel();
  // emit('reload');
};
</script>
<template>
  <!-- <n-button @click="showModal = true"> 来吧 </n-button> -->
  <n-modal
    :show="props.wModal"
    preset="card"
    title="发送消息"
    style="width: 500px"
    @mask-click="handlerCancel"
    @close="handlerCancel"
  >
    <NCard :bordered="false">
      <n-form label-placement="left" label-width="auto" require-mark-placement="right-hanging">
        <div class="card">
          <n-form-item label="内容：">
            <n-input
              placeholder="请输入信息"
              type="textarea"
              :autosize="{
                minRows: 3,
                maxRows: 5,
              }"
              v-model:value="data.context"
            />
          </n-form-item>
          <!-- <n-form-item label="级别：">
            <n-radio-group v-model:value="level">
              <n-space>
                <n-radio value="1" checked> 紧急 </n-radio>
                <n-radio value="0 "> 一般</n-radio>
              </n-space>
            </n-radio-group>
          </n-form-item> -->
        </div>
        <div class="footer">
          <NButton type="info" @click="handlerOk">发送</NButton>
          <NButton type="error" @click="handlerCancel">取消</NButton>
        </div>
      </n-form>
    </NCard>
  </n-modal>
</template>

<style lang="scss" scoped>
// .card {
//   display: flex;
//   flex-direction: column;
//   background-color: bisque;
// }
.footer {
  display: flex;
  justify-content: flex-end;
  gap: 20px;
}
</style>
