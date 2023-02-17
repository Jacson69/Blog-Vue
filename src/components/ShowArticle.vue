<script setup>
import VMdPreview from '@kangc/v-md-editor/lib/preview';
import '@kangc/v-md-editor/lib/style/preview.css';
import githubTheme from '@kangc/v-md-editor/lib/theme/github.js';
import '@kangc/v-md-editor/lib/theme/style/github.css';
// highlightjs
import hljs from 'highlight.js';
VMdPreview.use(githubTheme, {
  Hljs: hljs,
});
const props = defineProps({
  article: {
    type: Object,
    required: true,
  },
});
console.log(props.article);
</script>
<template>
  <VMdPreview :text="props.article.Context" height="600px" />
</template>
