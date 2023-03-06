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
import { reqAddTeamDiary } from '@/api/team';
const props = defineProps({
  wModal: {
    type: Boolean,
    required: true,
  },
});
const emit = defineEmits(['close', 'reload']);
const data = reactive({ context: '', level: true });
const level = ref('1');
const handlerCancel = () => {
  data.context = '';
  level.value = '1';
  data.level = true;
  emit('close');
};

// const articleData = reactive({})
const handlerOk = async () => {
  if (data.context === '') {
    window.msg.warning('保存失败！');
    return;
  }
  // data.level = level == "1" ? true : false,
  if (level.value === '1') {
    data.level = true;
  } else {
    data.level = false;
  }
  const result = await reqAddTeamDiary(data);
  // console.log(result);
  window.msg.success('保存成功！');
  handlerCancel();
  emit('reload');
};
</script>
<template>
  <!-- <n-button @click="showModal = true"> 来吧 </n-button> -->
  <n-modal
    :show="props.wModal"
    preset="card"
    title="添加备忘录"
    style="width: 500px"
    @mask-click="handlerCancel"
    @close="handlerCancel"
  >
    <NCard :bordered="false">
      <n-form label-placement="left" label-width="auto" require-mark-placement="right-hanging">
        <div class="card">
          <n-form-item label="内容：">
            <n-input
              placeholder="请描述团队"
              type="textarea"
              :autosize="{
                minRows: 3,
                maxRows: 5,
              }"
              v-model:value="data.context"
            />
          </n-form-item>
          <n-form-item label="级别：">
            <n-radio-group v-model:value="level">
              <n-space>
                <n-radio value="1" checked> 紧急 </n-radio>
                <n-radio value="0 "> 一般</n-radio>
              </n-space>
            </n-radio-group>
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
