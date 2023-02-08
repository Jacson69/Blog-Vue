<script setup>
import {  NCard, NList,NListItem,NThing,NSpace,NTag } from 'naive-ui';
</script>

<template>
    <!-- <div class="hot"> -->
        <NCard
          title="文章热"
          :segmented="{
          content: true,
          footer: 'soft'
        }"
        
        >
        <NList hoverable clickable>
   
            <NListItem  
                v-for="item of menu"
                :to="{ name: item.name }"
                class="item"
                activeClass="active"
                :key="item.name"
            >
                Go语言环境的搭建	3200
            </NListItem>
            <NListItem>
                Go语言环境的搭建	3200
            </NListItem>
            <NListItem>
                Go语言环境的搭建	3200
            </NListItem>
            <NListItem>
                Go语言环境的搭建	3200
            </NListItem>


            
        </NList>
        </NCard>
    <!-- </div> -->
</template>
<style lang="scss" scoped>
  .hot {
    width: 900x;
  }
</style>