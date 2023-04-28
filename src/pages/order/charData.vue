<script setup>
import { Chart } from '@antv/g2';
import { onMounted, reactive } from 'vue';
const state = reactive({
  chart: null, // 图表对象
  sourceData: [
    { date: '4.13', dataName: '访客', count: 200 },
    { date: '4.13', dataName: '点赞', count: 100 },
    { date: '4.13', dataName: '关注', count: 5 },
    { date: '4.13', dataName: '收藏', count: 66 },
    { date: '4.14', dataName: '访客', count: 150 },
    { date: '4.14', dataName: '点赞', count: 60 },
    { date: '4.14', dataName: '关注', count: 20 },
    { date: '4.14', dataName: '收藏', count: 70 },
    { date: '4.15', dataName: '访客', count: 60 },
    { date: '4.15', dataName: '点赞', count: 30 },
    { date: '4.15', dataName: '关注', count: 25 },
    { date: '4.15', dataName: '收藏', count: 30 },
    { date: '4.16', dataName: '访客', count: 150 },
    { date: '4.16', dataName: '点赞', count: 60 },
    { date: '4.16', dataName: '关注', count: 5 },
    { date: '4.16', dataName: '收藏', count: 40 },
    { date: '4.17', dataName: '访客', count: 250 },
    { date: '4.17', dataName: '点赞', count: 200 },
    { date: '4.17', dataName: '关注', count: 60 },
    { date: '4.17', dataName: '收藏', count: 195 },
    { date: '4.18', dataName: '访客', count: 394 },
    { date: '4.18', dataName: '点赞', count: 300 },
    { date: '4.18', dataName: '关注', count: 150 },
    { date: '4.18', dataName: '收藏', count: 295 },
    { date: '4.19', dataName: '访客', count: 300 },
    { date: '4.19', dataName: '点赞', count: 350 },
    { date: '4.19', dataName: '关注', count: 10 },
    { date: '4.19', dataName: '收藏', count: 120 },
    { date: '4.20', dataName: '访客', count: 280 },
    { date: '4.20', dataName: '点赞', count: 120 },
    { date: '4.20', dataName: '关注', count: 40 },
    { date: '4.20', dataName: '收藏', count: 110 },
    { date: '4.21', dataName: '访客', count: 220 },
    { date: '4.21', dataName: '点赞', count: 140 },
    { date: '4.21', dataName: '关注', count: 12 },
    { date: '4.21', dataName: '收藏', count: 115 },
    { date: '4.22', dataName: '访客', count: 165 },
    { date: '4.22', dataName: '点赞', count: 123 },
    { date: '4.22', dataName: '关注', count: 14 },
    { date: '4.22', dataName: '收藏', count: 98 },
    { date: '4.23', dataName: '访客', count: 158 },
    { date: '4.23', dataName: '点赞', count: 140 },
    { date: '4.23', dataName: '关注', count: 10 },
    { date: '4.23', dataName: '收藏', count: 46 },
    { date: '4.24', dataName: '访客', count: 100 },
    { date: '4.24', dataName: '点赞', count: 86 },
    { date: '4.24', dataName: '关注', count: 36 },
    { date: '4.24', dataName: '收藏', count: 8 },
    { date: '4.25', dataName: '访客', count: 160 },
    { date: '4.25', dataName: '点赞', count: 82 },
    { date: '4.25', dataName: '关注', count: 34 },
    { date: '4.25', dataName: '收藏', count: 58 },
    { date: '4.26', dataName: '访客', count: 260 },
    { date: '4.26', dataName: '点赞', count: 60 },
    { date: '4.26', dataName: '关注', count: 45 },
    { date: '4.26', dataName: '收藏', count: 68 },
    { date: '4.27', dataName: '访客', count: 213 },
    { date: '4.27', dataName: '点赞', count: 122 },
    { date: '4.27', dataName: '关注', count: 43 },
    { date: '4.27', dataName: '收藏', count: 108 },
    { date: '4.28', dataName: '访客', count: 413 },
    { date: '4.28', dataName: '点赞', count: 222 },
    { date: '4.28', dataName: '关注', count: 123 },
    { date: '4.28', dataName: '收藏', count: 208 },
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
