<script setup>
import { async } from '@kangc/v-md-editor';
import { NButton, NCard, NForm, NFormItem, NFormItemGi, NInput, NModal, NSwitch } from 'naive-ui';
import { reactive } from 'vue';

const props = defineProps({
  wModal: {
    type: Boolean,
    required: true,
  },
});
const emit = defineEmits(['close', 'ok']);
const data = reactive({ title: '', description: '', status: false });
const handlerCancel = () => {
  data.title = '';
  data.description = '';
  data.status = '';
  emit('close');
};

// const articleData = reactive({})
const handlerOk = () => {
  emit('ok', data);
  handlerCancel();
};
</script>
<template>
  <!-- <n-button @click="showModal = true"> 来吧 </n-button> -->
  <n-modal
    :show="props.wModal"
    preset="card"
    title="保存文章"
    style="width: 500px"
    @mask-click="handlerCancel"
    @close="handlerCancel"
  >
    <NCard :bordered="false">
      <n-form label-placement="left" label-width="auto" require-mark-placement="right-hanging">
        <div class="card">
          <n-form-item label="标题：" required>
            <n-input placeholder="输入标题" v-model:value="data.title" />
          </n-form-item>

          <n-form-item label="摘要：">
            <n-input
              placeholder="建议填写！！！若无填写摘要，则默认显示文章标题。"
              type="textarea"
              :autosize="{
                minRows: 3,
                maxRows: 5,
              }"
              v-model:value="data.description"
            />
          </n-form-item>
          <n-form-item label="是否公开：">
            <n-switch v-model:value="data.status" />
          </n-form-item>
        </div>
        <div class="footer">
          <NButton type="info" @click="handlerOk">确定</NButton>
          <NButton type="error" @click="handlerCancel">取消</NButton>
        </div>
      </n-form>
    </NCard>
  </n-modal>
</template>

<style lang="scss">
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
