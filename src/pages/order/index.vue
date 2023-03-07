<script setup>
// import { RouterView } from 'vue-router';
// import * as echarts from 'echarts';

// // 基于准备好的dom，初始化echarts实例
// const myChart = echarts.init(document.getElementById('main'));
// // 绘制图表
// myChart.setOption({
//   title: {
//     text: 'ECharts 入门示例',
//   },
//   tooltip: {},
//   xAxis: {
//     data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子'],
//   },
//   yAxis: {},
//   series: [
//     {
//       name: '销量',
//       type: 'bar',
//       data: [5, 20, 36, 10, 10, 20],
//     },
//   ],
// });
import charData from './charData.vue';
import chartMoney from './chartMoney.vue';
import { NCard } from 'naive-ui';
</script>

<template>
  <!-- <RouterView /> -->
  <div class="card">
    <div class="money">
      <NCard
        :segmented="{
          content: true,
          footer: 'soft',
        }"
        :content-style="{
          paddingTop: 0,
          paddingBottom: '16px',
        }"
        style="box-shadow: 0px 5px 8px rgb(0 0 0 / 15%); border-radius: 8px"
      >
        <div class="header">
          <h2>收益分析</h2>
        </div>
        <chartMoney />
      </NCard>
    </div>
    <div class="line">
      <NCard
        :segmented="{
          content: true,
          footer: 'soft',
        }"
        :content-style="{
          paddingTop: 0,
          paddingBottom: '16px',
        }"
        style="box-shadow: 0px 5px 8px rgb(0 0 0 / 15%); border-radius: 8px"
      >
        <div class="header">
          <h2>文章分析</h2>
        </div>
        <charData />
      </NCard>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.card {
  // padding: 0 10px;
  // margin-top: 20px;
  display: flex;
  justify-content: space-around;
  min-width: 900px;
  margin: 16px 0;
  .money {
    width: 50%;
    margin-right: 20px;
    box-shadow: 0px 5px 8px rgb(0 0 0 / 15%);
    border-radius: 8px;
    flex-grow: 1;
    .header {
      padding-bottom: 20px;
    }
  }
  .line {
    // margin-left: 10px;
    width: 50%;
    box-shadow: 0px 5px 8px rgb(0 0 0 / 15%);
    border-radius: 8px;
    flex-shrink: 0;
    .header {
      padding-bottom: 20px;
    }
  }
}
</style>
