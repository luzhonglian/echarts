<template>
  <div>
    <header>
      <h1>产品销售库存可视化</h1>
    </header>
    <section class="container">
      <section class="chartLeft">
        <ChartContainer>
          <ChartBar></ChartBar>
        </ChartContainer>

        <ChartContainer>
          <ChartLine></ChartLine>
        </ChartContainer>
      </section>

      <section class="chartCenter">
        <ChartMap></ChartMap>
      </section>

      <section class="chartRight">
        <ChartContainer>
          <ChartPie></ChartPie>
        </ChartContainer>

        <ChartContainer>
          <ChartStackBar></ChartStackBar>
        </ChartContainer>
      </section>
    </section>
  </div>
</template>

<script setup>
import ChartContainer from "./ChartContainer.vue";
import ChartBar from "./ChartBar.vue";
import ChartStackBar from "./ChartStackBar.vue";
import ChartPie from "./ChartPie.vue";
import ChartLine from "./ChartLine.vue";
import ChartMap from "./ChartMap.vue";
</script>

<style scoped lang="less">
* {
  padding: 0px;
  margin: 0px;
}
header {
  height: 0.8813rem;
  width: 100%;
  background-color: rgba(5, 217, 241, 0.2);
  display: flex;
  align-items: center;
    justify-content: center;
  h1 {   
    font-size: 0.625rem;
    color: black;
    line-height: 0.7813rem;
    text-shadow: 0 0 .1563rem white;
  }

}

.container {
  min-width: 800px;
  // max-width: 2048px;
  width: 100%;
  margin: 0 auto;
  padding: 0rem 0.1563rem 0;
  // border: 1px red solid;
  background-color: rgba(127, 219, 255, 0.2);
  // height: 740px;
  display: flex;
  .chartLeft, .chartRight  {
    flex: 3 3 0px ;
    box-sizing: border-box;
    min-width: 2.3438rem;

    /* 
    非常遗憾，Echarts不能完美支持flex布局
    如果不加min-width会出现非常奇怪的BUG，坑惨我也,我修这个bug修的都看不见那桥牌的谎言了~~
    如果，你也经常改bug改得像我一样，那我觉得这件事情————
    泰裤辣！
    */
  }
 
  .chartCenter {
    flex: 5 5 0px ;
    border: 1px solid rgba(185, 185, 191);
    margin: 0.3125rem;
    padding: 0.1563rem;
    // min-width: 3.9063rem;
    min-width: 3.9063rem;
  }
}
</style>
