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
import { NCard, NNumberAnimation, NStatistic } from 'naive-ui';
</script>

<template>
  <!-- <RouterView /> -->
  <div>
    <div class="ydl">
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
        <div class="title">
          <div>
            <div class="header">
              <h2>浏览量</h2>
            </div>
            <div style="text-align: center">
              <n-statistic label="" tabular-nums>
                <n-number-animation
                  ref="numberAnimationInstRef"
                  :from="0"
                  :to="6428"
                  :duration="1500"
                />
                <!-- <template #suffix> 条群消息 </template> -->
              </n-statistic>
            </div>
          </div>
          <div>
            <div class="header">
              <h2>累计收益</h2>
            </div>
            <div style="text-align: center">
              <n-statistic label="" tabular-nums>
                <n-number-animation
                  ref="numberAnimationInstRef"
                  :from="0"
                  :to="654"
                  :duration="1500"
                />
                <!-- <template #suffix> 条群消息 </template> -->
              </n-statistic>
            </div>
          </div>
          <div>
            <div class="header">
              <h2>粉丝数</h2>
            </div>
            <div style="text-align: center">
              <n-statistic label="" tabular-nums>
                <n-number-animation
                  ref="numberAnimationInstRef"
                  :from="0"
                  :to="49701"
                  :duration="1500"
                />
                <!-- <template #suffix> 条群消息 </template> -->
              </n-statistic>
            </div>
          </div>
          <div>
            <div class="header">
              <h2>收藏数</h2>
            </div>
            <div style="text-align: center">
              <n-statistic label="" tabular-nums>
                <n-number-animation
                  ref="numberAnimationInstRef"
                  :from="0"
                  :to="6995"
                  :duration="1500"
                />
                <!-- <template #suffix> 条群消息 </template> -->
              </n-statistic>
            </div>
          </div>
        </div>
      </NCard>
    </div>
    <!-- <div class="ljsy">
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
          <h2>累计收益</h2>
        </div>
        6999
      </NCard>
    </div>
    <div class="fss">
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
          <h2>粉丝数</h2>
        </div>
        6999
      </NCard>
    </div>
    <div class="scs">
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
          <h2>收藏数</h2>
        </div>
        6999
      </NCard>
    </div> -->
  </div>
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
.title {
  display: flex;

  justify-content: space-around;
}
</style>
