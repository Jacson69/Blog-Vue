<script setup>
import { mavonEditor, writeModal } from 'mavon-editor';
// import 'mavon-editor/dist/css/index.css'
</script>
<template>
  <div>
    <p>Tip：每5分钟会自动保存噢</p>
    <mavon-editor :subfield="false" defaultOpen="preview" :editable="false" :toolbarsFlag="false" />
    <write-modal />
  </div>
</template>
