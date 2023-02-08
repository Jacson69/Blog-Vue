<script setup>
import {mavonEditor,writeModal} from 'mavon-editor'
// import 'mavon-editor/dist/css/index.css'
</script>
<template>
    <div>
      <p>Tip：每5分钟会自动保存噢</p>
      <mavon-editor
      v-model="value"
      />
      <write-modal></write-modal>
    </div>
</template>