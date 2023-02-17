<script setup>
import VMdPreview from '@kangc/v-md-editor';
import '@kangc/v-md-editor/lib/style/preview.css';
import githubTheme from '@kangc/v-md-editor/lib/theme/github.js';
import '@kangc/v-md-editor/lib/theme/style/github.css';

// highlightjs
import hljs from 'highlight.js';

const props = defineProps({
  article: {
    type: Object,
    required: true,
  },
});
</script>
<template>
  dd
  <!-- <v-md-preview :text="props.article.Context" height="600px" /> -->
</template>
