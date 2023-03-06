<script setup>
import { Chart } from '@antv/g2';
import { onMounted, reactive } from 'vue';
const state = reactive({
  chart: null, // 图表对象
  sourceData: [
    { name: '收益', month: 'Jan.', money: 89 },
    { name: '收益', month: 'Feb.', money: 68 },
    { name: '收益', month: 'Mar.', money: 120 },
    { name: '收益', month: 'Apr.', money: 350 },
    { name: '收益', month: 'May', money: 84 },
    { name: '收益', month: 'Jun.', money: 450 },
    { name: '收益', month: 'Jul.', money: 620 },
    { name: '收益', month: 'Aug.', money: 35 },
    { name: '收益', month: 'Step', money: 47.5 },
    { name: '收益', month: 'Oct.', money: 62 },
    { name: '收益', month: 'Nov.', money: 80 },
    { name: '收益', month: 'Dec.', money: 490 },
    { name: '下载', month: 'Jan.', money: 502 },
    { name: '下载', month: 'Feb.', money: 234 },
    { name: '下载', month: 'Mar.', money: 32 },
    { name: '下载', month: 'Apr.', money: 99 },
    { name: '下载', month: 'May', money: 52.6 },
    { name: '下载', month: 'Jun.', money: 48 },
    { name: '下载', month: 'Jul.', money: 374 },
    { name: '下载', month: 'Aug.', money: 44 },
    { name: '下载', month: 'Step', money: 470 },
    { name: '下载', month: 'Oct.', money: 203 },
    { name: '下载', month: 'Nov.', money: 241 },
    { name: '下载', month: 'Dec.', money: 356 },
  ],
});

onMounted(() => {
  initLineChart();
});

const initLineChart = () => {
  state.chart = new Chart({
    container: 'l2',
    autoFit: true,
    height: 500,
  });
  state.chart.data(state.sourceData);
  state.chart.scale('money', {
    nice: true,
  });
  state.chart.tooltip({
    showMarkers: false,
    shared: true,
  });
  state.chart
    .interval()
    .position('month*money')
    .color('name')
    .adjust([
      {
        type: 'dodge',
        marginRatio: 0,
      },
    ]);

  state.chart.interaction('active-region');

  // state.chart.theme({
  //   styleSheet: {
  //     brandColor: '#FF6B3B',
  //     paletteQualitative10: [
  //       '#FF6B3B',
  //       '#626681',
  //       '#FFC100',
  //       '#9FB40F',
  //       '#76523B',
  //       '#DAD5B5',
  //       '#0E8E89',
  //       '#E19348',
  //       '#F383A2',
  //       '#247FEA',
  //     ],
  //     paletteQualitative20: [
  //       '#FF6B3B',
  //       '#626681',
  //       '#FFC100',
  //       '#9FB40F',
  //       '#76523B',
  //       '#DAD5B5',
  //       '#0E8E89',
  //       '#E19348',
  //       '#F383A2',
  //       '#247FEA',
  //       '#2BCB95',
  //       '#B1ABF4',
  //       '#1D42C2',
  //       '#1D9ED1',
  //       '#D64BC0',
  //       '#255634',
  //       '#8C8C47',
  //       '#8CDAE5',
  //       '#8E283B',
  //       '#791DC9',
  //     ],
  //   },
  // });
  state.chart.render();
};
// export default {
//   data() {
//     return {
//       sourceData: [
//         { name: 'reward', month: 'Jan.', money: 89 },
//         { name: 'reward', month: 'Feb.', money: 68 },
//         { name: 'reward', month: 'Mar.', money: 120 },
//         { name: 'reward', month: 'Apr.', money: 350 },
//         { name: 'reward', month: 'May', money: 84 },
//         { name: 'reward', month: 'Jun.', money: 450 },
//         { name: 'reward', month: 'Jul.', money: 620 },
//         { name: 'reward', month: 'Aug.', money: 35 },
//         { name: 'reward', month: 'Step', money: 47.5 },
//         { name: 'reward', month: 'Oct.', money: 62 },
//         { name: 'reward', month: 'Nov.', money: 80 },
//         { name: 'reward', month: 'Dec.', money: 490 },
//         { name: 'download', month: 'Jan.', money: 502 },
//         { name: 'download', month: 'Feb.', money: 234 },
//         { name: 'download', month: 'Mar.', money: 32 },
//         { name: 'download', month: 'Apr.', money: 99 },
//         { name: 'download', month: 'May', money: 52.6 },
//         { name: 'download', month: 'Jun.', money: 48 },
//         { name: 'download', month: 'Jul.', money: 374 },
//         { name: 'download', month: 'Aug.', money: 44 },
//         { name: 'download', month: 'Step', money: 470 },
//         { name: 'download', month: 'Oct.', money: 203 },
//         { name: 'download', month: 'Nov.', money: 241 },
//         { name: 'download', month: 'Dec.', money: 356 },
//       ],
//     };
//   },
//   mounted() {
//     this.initLineChart();
//   },
//   methods: {
//     initLineChart() {
//       const chart = new Chart({
//         container: 'l2',
//         autoFit: true,
//         height: 500,
//       });
//       chart.data(this.sourceData);
//       chart.scale('money', {
//         nice: true,
//       });
//       chart.tooltip({
//         showMarkers: false,
//         shared: true,
//       });
//       chart
//         .interval()
//         .position('month*money')
//         .color('name')
//         .adjust([
//           {
//             type: 'dodge',
//             marginRatio: 0,
//           },
//         ]);

//       chart.interaction('active-region');

//       chart.theme({
//         styleSheet: {
//           brandColor: '#FF6B3B',
//           paletteQualitative10: [
//             '#FF6B3B',
//             '#626681',
//             '#FFC100',
//             '#9FB40F',
//             '#76523B',
//             '#DAD5B5',
//             '#0E8E89',
//             '#E19348',
//             '#F383A2',
//             '#247FEA',
//           ],
//           paletteQualitative20: [
//             '#FF6B3B',
//             '#626681',
//             '#FFC100',
//             '#9FB40F',
//             '#76523B',
//             '#DAD5B5',
//             '#0E8E89',
//             '#E19348',
//             '#F383A2',
//             '#247FEA',
//             '#2BCB95',
//             '#B1ABF4',
//             '#1D42C2',
//             '#1D9ED1',
//             '#D64BC0',
//             '#255634',
//             '#8C8C47',
//             '#8CDAE5',
//             '#8E283B',
//             '#791DC9',
//           ],
//         },
//       });
//       chart.render();
//     },
//   },
// };
</script>

<template>
  <div>
    <div id="l2" />
  </div>
</template>
<style scoped></style>
