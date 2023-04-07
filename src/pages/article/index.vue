<script setup>
// import { mavonEditor, writeModal } from 'mavon-editor';
// import 'mavon-editor/dist/css/index.css'
import { reactive, ref } from 'vue';
import VMdEditor from '@kangc/v-md-editor';
import '@kangc/v-md-editor/lib/style/base-editor.css';
import githubTheme from '@kangc/v-md-editor/lib/theme/github.js';
import '@kangc/v-md-editor/lib/theme/style/github.css';

// highlightjs
import hljs from 'highlight.js';

import WirteModal from './WriteArticle.vue';
import { reqSaveArticle } from '@/api/article';

VMdEditor.use(githubTheme, {
  Hljs: hljs,
});

function handleUploadImage(event, insertImage, files) {
  // 拿到 files 之后上传到文件服务器，然后向编辑框中插入对应的内容
  console.log(files);

  // 此处只做示例
  insertImage({
    url: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1269952892,3525182336&fm=26&gp=0.jpg',
    desc: '七龙珠',
    // width: 'auto',
    // height: 'auto',
  });
}

const showModal = ref(false);
function save() {
  showModal.value = true;
  console.log(showModal.value);
}

const handlerCancel = () => {
  showModal.value = false;
};
const data = reactive({ title: '', description: '', context: '', status: false });
const handlerOk = async (obj) => {
  if (data.context === '') {
    window.msg.warning('保存失败！');
    return;
  }
  for (const key in obj) {
    data[key] = obj[key];
  }
  const result = await reqSaveArticle(data);
  data.context = '';
  // console.log(result);
  window.msg.success('保存成功！');
};
</script>
<!-- <p>Tip：每5分钟会自动保存噢</p> -->
<template>
  <div>
    <v-md-editor
      v-model="data.context"
      :disabled-menus="[]"
      @upload-image="handleUploadImage"
      @save="save"
      height="600px"
      placeholder="请输入文章的内容。。。"
    />
    <WirteModal :wModal="showModal" @close="handlerCancel" @ok="handlerOk" />
  </div>
</template>
