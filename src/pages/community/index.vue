<script setup>
import Article from '@/components/community/index.vue';
import ArticleHot from '@/components/community/ArticleHot.vue';
import UserHot from '@/components/community/UserHot.vue';
import TeamHot from '@/components/community/TeamHot.vue';
</script>
<template>
    <div class="content">
        <Article></Article>
        <div>
            <ArticleHot></ArticleHot>
            <UserHot></UserHot>
            <TeamHot></TeamHot>
        </div>
    </div>
</template>

<style>
    .content {
         display: flex;
         justify-content: space-between;
         border-radius: 8px;
         background-color: pink;
         margin: 16px;
    }
</style>