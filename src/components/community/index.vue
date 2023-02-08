<script setup>
import {  NCard, NList,NListItem,NThing,NSpace,NTag } from 'naive-ui';
</script>

<template>
    <div class="article">
        <NCard title="文章">
        <NList hoverable clickable>
            <NListItem>
            <NThing title="相见恨晚" content-style="margin-top: 10px;">
                <template #description>
                <NSpace size="small" style="margin-top: 4px">
                    <NTag :bordered="false" type="info" size="small">
                    暑夜
                    </NTag>
                    <NTag :bordered="false" type="info" size="small">
                    晚春
                    </NTag>
                </NSpace>
                </template>
                奋勇呀然后休息呀<br>
                完成你伟大的人生
            </NThing>
            </NListItem>
            <n-list-item>
            <n-thing title="他在时间门外" content-style="margin-top: 10px;">
                <template #description>
                <n-space size="small" style="margin-top: 4px">
                    <n-tag :bordered="false" type="info" size="small">
                    环形公路
                    </n-tag>
                    <n-tag :bordered="false" type="info" size="small">
                    潜水艇司机
                    </n-tag>
                </n-space>
                </template>
                最新的打印机<br>
                复制着彩色傀儡<br>
                早上好我的罐头先生<br>
                让他带你去被工厂敲击
            </n-thing>
            </n-list-item>
        </NList>
    </NCard>
    </div>
</template>
<style lang="scss">
  .article {
    width: 1200px;
    margin-right: 50px;
    background-color: #b64747;
  }
</style>