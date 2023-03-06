<script setup>
import { Chart } from '@antv/g2';
import { onMounted, reactive } from 'vue';
const state = reactive({
  chart: null, // 图表对象
  sourceData: [
    { date: '3.22', dataName: '访客', count: 100 },
    { date: '3.22', dataName: '点赞', count: 50 },
    { date: '3.22', dataName: '关注', count: 7 },
    { date: '3.22', dataName: '收藏', count: 40 },
    { date: '3.23', dataName: '访客', count: 50 },
    { date: '3.23', dataName: '点赞', count: 40 },
    { date: '3.23', dataName: '关注', count: 20 },
    { date: '3.23', dataName: '收藏', count: 45 },
    { date: '3.24', dataName: '访客', count: 60 },
    { date: '3.24', dataName: '点赞', count: 30 },
    { date: '3.24', dataName: '关注', count: 25 },
    { date: '3.24', dataName: '收藏', count: 30 },
    { date: '3.25', dataName: '访客', count: 80 },
    { date: '3.25', dataName: '点赞', count: 60 },
    { date: '3.25', dataName: '关注', count: 5 },
    { date: '3.25', dataName: '收藏', count: 40 },
    { date: '3.26', dataName: '访客', count: 500 },
    { date: '3.26', dataName: '点赞', count: 200 },
    { date: '3.26', dataName: '关注', count: 60 },
    { date: '3.26', dataName: '收藏', count: 195 },
    { date: '3.27', dataName: '访客', count: 400 },
    { date: '3.27', dataName: '点赞', count: 300 },
    { date: '3.27', dataName: '关注', count: 150 },
    { date: '3.27', dataName: '收藏', count: 295 },
    { date: '3.28', dataName: '访客', count: 300 },
    { date: '3.28', dataName: '点赞', count: 130 },
    { date: '3.28', dataName: '关注', count: 10 },
    { date: '3.28', dataName: '收藏', count: 120 },
    { date: '3.29', dataName: '访客', count: 250 },
    { date: '3.29', dataName: '点赞', count: 120 },
    { date: '3.29', dataName: '关注', count: 40 },
    { date: '3.29', dataName: '收藏', count: 110 },
    { date: '3.30', dataName: '访客', count: 220 },
    { date: '3.30', dataName: '点赞', count: 140 },
    { date: '3.30', dataName: '关注', count: 12 },
    { date: '3.30', dataName: '收藏', count: 115 },
    { date: '3.31', dataName: '访客', count: 165 },
    { date: '3.31', dataName: '点赞', count: 123 },
    { date: '3.31', dataName: '关注', count: 14 },
    { date: '3.31', dataName: '收藏', count: 98 },
    { date: '4.1', dataName: '访客', count: 158 },
    { date: '4.1', dataName: '点赞', count: 140 },
    { date: '4.1', dataName: '关注', count: 10 },
    { date: '4.1', dataName: '收藏', count: 46 },
    { date: '4.2', dataName: '访客', count: 120 },
    { date: '4.2', dataName: '点赞', count: 56 },
    { date: '4.2', dataName: '关注', count: 6 },
    { date: '4.2', dataName: '收藏', count: 48 },
    { date: '4.3', dataName: '访客', count: 123 },
    { date: '4.3', dataName: '点赞', count: 52 },
    { date: '4.3', dataName: '关注', count: 4 },
    { date: '4.3', dataName: '收藏', count: 28 },
    { date: '4.4', dataName: '访客', count: 223 },
    { date: '4.4', dataName: '点赞', count: 32 },
    { date: '4.4', dataName: '关注', count: 13 },
    { date: '4.4', dataName: '收藏', count: 38 },
    { date: '4.5', dataName: '访客', count: 213 },
    { date: '4.5', dataName: '点赞', count: 122 },
    { date: '4.5', dataName: '关注', count: 43 },
    { date: '4.5', dataName: '收藏', count: 108 },
    { date: '4.6', dataName: '访客', count: 413 },
    { date: '4.6', dataName: '点赞', count: 222 },
    { date: '4.6', dataName: '关注', count: 123 },
    { date: '4.6', dataName: '收藏', count: 208 },
  ],
});
onMounted(() => {
  initLineChart();
});

const initLineChart = () => {
  state.chart = new Chart({
    container: 'l1',
    autoFit: true,
    height: 500,
  });
  state.chart.data(state.sourceData);
  state.chart.scale({
    date: {
      range: [0, 1],
    },
    count: {
      nice: true,
    },
  });
  state.chart.tooltip({
    showCrosshairs: true, // 展示 Tooltip 辅助线
    shared: true,
  });
  state.chart.axis('count', {
    label: {
      formatter: (val) => val,
    },
  });
  state.chart.line().position('date*count').color('dataName').shape('smooth');
  state.chart.point().position('date*count').color('dataName').shape('circle').style({
    stroke: '#fff',
    lineWidth: 1,
  });

  state.chart.removeInteraction('legend-filter'); // 移除默认的 legend-filter 数据过滤交互
  state.chart.interaction('legend-visible-filter'); // 使用分类图例的图形过滤

  state.chart.render();
};
</script>

<template>
  <div>
    <div id="l1" />
  </div>
</template>
<style scoped></style>
