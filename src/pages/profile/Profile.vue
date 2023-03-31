<script setup>
import {
  NAvatar,
  NButton,
  NCard,
  NDescriptions,
  NDescriptionsItem,
  NDivider,
  NForm,
  NFormItem,
  NInput,
  NModal,
  NRadio,
  NRadioGroup,
  NSpace,
  NUpload,
} from 'naive-ui';
import SvgIcon from '@/components/SvgIcon.vue';
import { useUserStore } from '@/stores/user';
import { reactive, ref } from 'vue';
import { reqEditUserInfo, reqUpload } from '@/api/profile';
const props = defineProps({
  userInfo: {
    type: Object,
    required: true,
  },
});
const userStore = useUserStore();
const emit = defineEmits(['updateSex']);

const isEdit = ref(false);
const editClick = () => {
  if (isEdit.value === false) {
    isEdit.value = true;
    return;
  }
  isEdit.value = false;
};

const handlerCancel = () => {
  isEdit.value = false;
};

const handlerOk = async () => {
  const savePicture = {
    picture_name: '',
    picture_data: '',
  };

  // 如果上传了新的电影海报
  if (imageData.url.length != 0) {
    savePicture.picture_name = `${Date.now()}`;
    const words = imageData.name.split('.');
    savePicture.picture_name += `.${words[words.length - 1]}`;
    // 取出base64编码后的数据部分
    const datas = imageData.url.split(',');
    savePicture.picture_data = datas[datas.length - 1];
    const pictureResp = await reqUpload(savePicture);
    console.log(pictureResp.url);
    u.img_url = pictureResp.url;
  }
  // console.log(userStore.user.name);
  await reqEditUserInfo(u);
  window.msg.success('保存成功！');
  userStore.setUserInfo(u);
  handlerCancel();
  emit('updateSex');
};

const u = reactive({ ...userStore.user });
// 用户自己上传的头像文件
const imageData = reactive({
  name: '',
  url: '',
});
const handleUpload = () => {
  const input = document.createElement('input');

  input.type = 'file';
  input.accept = 'image/png, image/jpeg, image/gif, image/jpg';
  input.onchange = (event) => {
    const files = event.target.files;
    if (files) {
      console.log(files); // imageData.url = URL.createObjectURL(files[0]);
      const reader = new FileReader();
      reader.readAsDataURL(files[0]);

      reader.onload = () => {
        imageData.url = reader.result;
        imageData.name = files[0].name;
        console.log(imageData.url);
      };
    }
  };
  input.click();
};
</script>

<template>
  <div>
    <NCard
      :segmented="{
        content: true,
        footer: 'soft',
      }"
      :content-style="{
        paddingTop: 0,
        paddingBottom: '16px',
      }"
      class="top hot"
    >
      <div class="title">
        <n-avatar round :size="90" :src="props.userInfo.img_url" :bordered="true" />
        <h2 class="font-semibold m-0">{{ props.userInfo.name }}</h2>
        <p>CEO / Blog-vue</p>
      </div>
      <!-- <NList hoverable clickable>
      <NListItem v-for="item of props.list" :key="item.ID">
        <div class="item">
          <div class="name left">
            {{ item.Name }}
          </div>
          <div>{{ item.Count }}</div>
        </div>
      </NListItem>
    </NList> -->
    </NCard>

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
      <div class="content">
        <div>
          <div class="personInfo">
            <h3>个人信息</h3>
            <div class="icon-wrap">
              <SvgIcon name="edit" @click="editClick" style="cursor: pointer" />
            </div>
            <!-- <NButton @click="editClick" class="btn">编辑</NButton> -->
          </div>
          <div v-show="!isEdit">
            <p class="introduce">
              {{
                props.userInfo.introduction
                  ? props.userInfo.introduction
                  : "Our dreams, they feel real while we're in them, right? It's only when we wake up that we realize how things are actually strange. Let me ask you a question, you, you never really remember the beginning of a dream do you? You always wind up right in the middle of what's going on。"
              }}
            </p>

            <n-descriptions label-placement="left" title="描述" :column="1" class="info">
              <n-descriptions-item label="名称"> {{ props.userInfo.name }} </n-descriptions-item>
              <n-descriptions-item label="性别">
                <NAvatar
                  round
                  size="small"
                  :src="
                    props.userInfo.sex == 1
                      ? 'https://img1.baidu.com/it/u=3228285249,3700670542&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500'
                      : 'https://img95.699pic.com/xsj/0o/6b/9o.jpg%21/fw/700/watermark/url/L3hzai93YXRlcl9kZXRhaWwyLnBuZw/align/southeast'
                  "
                />
              </n-descriptions-item>
              <n-descriptions-item label="电话">
                {{ props.userInfo.telephone ? props.userInfo.telephone : '00000000000' }}
              </n-descriptions-item>
              <n-descriptions-item label="邮箱">
                {{ props.userInfo.email ? props.userInfo.email : 'xxx@fomail.com' }}
              </n-descriptions-item>
              <n-descriptions-item label="创建时间">
                {{ props.userInfo.created_at ? props.userInfo.created_at : 'xxxx-xx-xx' }}
              </n-descriptions-item>
            </n-descriptions>
          </div>

          <!-- 编辑状态 -->
          <div v-show="isEdit">
            <n-form
              ref="formRef"
              label-placement="left"
              label-width="auto"
              require-mark-placement="right-hanging"
              :style="{
                maxWidth: '640px',
              }"
            >
              <n-form-item label="头像：" path="inputValue">
                <div class="avatar">
                  <div><img :src="imageData.url || u.img_url" width="80" height="80" /></div>
                  <div>
                    <NButton type="info" @click="handleUpload" class="btn">点击上传</NButton>
                  </div>
                </div>
                <!-- <n-upload list-type="image-card" @click="handleUpload" max="1" action="http://127.0.0.1:8081/api/auth/uploadFile"> 点击上传 </n-upload> -->
                <!-- <n-divider /> -->
                <!-- <n-upload
                  action="https://www.mocky.io/v2/5e4bafc63100007100d8b70f"
                  :default-file-list="previewFileList"
                  list-type="image-card"
                  @preview="handlePreview"
                />
                <n-modal
                  v-model:show="showModal"
                  preset="card"
                  style="width: 600px"
                  title="一张很酷的图片"
                >
                  <img :src="previewImageUrl" style="width: 100%" />
                </n-modal> -->
              </n-form-item>
              <n-form-item label="昵称：" path="inputValue">
                <n-input v-model:value="u.name" />
              </n-form-item>

              <n-form-item label="性别：" path="radioGroupValue">
                <n-radio-group name="radiogroup1" v-model:value="u.sex">
                  <n-space>
                    <n-radio value="1"> 男 </n-radio>
                    <n-radio value="0"> 女 </n-radio>
                  </n-space>
                </n-radio-group>
              </n-form-item>
              <n-form-item label="电话：">
                <span>{{ u.telephone }}</span>
              </n-form-item>
              <n-form-item label="邮箱：">
                <span>{{ u.email }}</span>
              </n-form-item>
              <n-form-item label="所属团队：">
                <span>{{ u.team }}</span>
              </n-form-item>
              <n-form-item label="创建时间：">
                <span>{{ u.created_at }}</span>
              </n-form-item>
              <n-form-item label="个性签名：" path="inputValue">
                <n-input v-model:value="u.introduction" />
              </n-form-item>
              <div class="footer">
                <NButton type="info" @click="handlerOk" class="btn">确定</NButton>
                <NButton type="error" @click="handlerCancel" class="btn">取消</NButton>
              </div>
            </n-form>
          </div>
        </div>
      </div>

      <!-- <NList hoverable clickable>
      <NListItem v-for="item of props.list" :key="item.ID">
        <div class="item">
          <div class="name left">
            {{ item.Name }}
          </div>
          <div>{{ item.Count }}</div>
        </div>
      </NListItem>
    </NList> -->
    </NCard>
  </div>
</template>
<style lang="scss" scoped>
.hot {
  // height: auto;
  box-shadow: 0 5px 8px rgb(0 0 0 / 15%);
}
.title {
  // display: flex;
  // align-items: center;
  // justify-content: space-between;
  // border-bottom: 1px solid rgb(239, 239, 245);
  position: relative;

  text-align: center;
  padding-top: 20px;
  top: 20px;
}

.content {
  margin-top: 20px;
  .personInfo {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .introduce {
    border-bottom: 1px solid rgb(239, 239, 245);
    padding-bottom: 10px;
  }
  .info {
    // display: flex;
    // align-items: center;
    // justify-content: space-between;
    // background-color: red;
    // color: #973737;
    // font-weight: 600;
    // font-size: 15px;
  }
}
.footer {
  display: flex;
  justify-content: flex-end;
  gap: 20px;
}
.btn {
  border-radius: 7px;
}

.avatar {
  display: flex;
  flex-direction: column;
}
.top {
  background-image: url('@/assets/bg.png');
  background-size: 100% 100%;
}
</style>
