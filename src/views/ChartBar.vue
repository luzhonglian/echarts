<template>
  <div>
    <h1>货物销售总量</h1>
    <div ref="myBar" class="barStyle"></div>
  </div>
</template>

<script setup>
import axios from "axios";
import * as echarts from "echarts";
import { ref, onMounted, reactive,onUnmounted } from "vue";

let myBar = ref(null);
let cate_data = reactive([]); //
let val_data = reactive([]);
var t

var data = ref();

let getBarData = async () => {
  let barData = await axios({ url: "/path/bar" });
  data.value = barData.data.bar;
  // console.log(data.value);
};

function setData() {
  cate_data = data.value.map((v) => v.title);
  val_data = data.value.map((v) => v.num);
}

onMounted(() => {
  let bar = echarts.init(myBar.value);
  let option = {};
  getBarData().then(() => {
    setData();
    option = {
      xAxis: {
        type: "value",
        axisLabel: {
          color: "white",
          fontSize: "0.15rem",
        },
      },
      tooltip: {
        show: true,
      },
      yAxis: {
        type: "category",
        data: cate_data,
        axisLabel: {
          // textStyle: {
          color: "white",
          fontSize: "0.15rem",
        },
      },
      grid: {
        top: "3%",
        left: "1%",
        right: "6%",
        bottom: "3%",
        containLabel: true,
      },
      series: [
        {
          type: "bar",
          data: val_data,
          itemStyle: {
            borderRadius: [0, 20, 20, 0],
            color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
              {
                offset: 0,
                color: "#feac5e",
              },
              {
                offset: 0.5,
                color: "#c779d0",
              },
              {
                offset: 1,
                color: "#4bc0c8",
              },
            ]),
          },
        },
      ],
    };
    window.addEventListener("resize", () => {
      clearTimeout(t)
      t= setTimeout(() => {
        bar.resize();
        console.log('resize')
      }, 301);
      /* 
        这里设置定时器因为flexible默认300ms更新rem，实测缩小浏览器后最大化bar.resize()不生效
      */
    });
    bar.setOption(option);
  });
});
onUnmounted(()=>{
  clearTimeout(t)
})
</script>

<style lang="scss" scoped>
.barStyle {
  height: 3.5rem;
}
</style>
