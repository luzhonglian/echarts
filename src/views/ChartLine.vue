<template>
  <div>
    <h1>上周销售</h1>
    <div ref="myLine" class="lineStyle"></div>
  </div>
</template>

<script setup>
import axios from "axios";
import * as echarts from "echarts";
import { ref, onMounted, reactive,onUnmounted } from "vue";

let myLine = ref();
let data = reactive({});
let num = reactive({});
var t

function setData() {
  num = data.num;
}

async function getLineData() {
  data = await axios.get("https://www.fastmock.site/mock/e110368ed1b120b7fc940533513ab460/api/line").then((res) => {
    return res.data.chartData;
  });
  //   console.log(data)
}

onMounted(() => {
  getLineData().then(() => {
    let lineChart = echarts.init(myLine.value);
    setData();
    let option = {
      xAxis: {
        type: "category",
        data: data.day,
        boundaryGap: false,
        axisLabel: {
          fontSize: "0.12rem",
          color: "white",
        },
      },
      yAxis: {
        type: "value",
        axisLabel: {
          color: "white",
          fontSize: "0.16rem",
        },
      },
      grid: {
        left: "4%",
        containLabel: true,
        bottom:'2%'
      },
      series: [
        {
          type: "line",
          name: "服饰",
          data: num.Clothes,
          smooth: true,
          showSymbol: false,
          stack: "total",
          lineStyle: {
            width: 0,
          },
          emphasis: {
            focus: "series",
          },

          areaStyle: {
            opacity: 0.8,
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              {
                offset: 0,
                color: "rgb(128, 255, 165)",
              },
              {
                offset: 1,
                color: "rgb(1, 191, 236)",
              },
            ]),
          },
        },
        {
          type: "line",
          name: "数码",
          data: num.digit,
          smooth: true,
          showSymbol: false,
          stack: "total",
          lineStyle: {
            width: 0,
          },
          emphasis: {
            focus: "series",
          },
          areaStyle: {
            opacity: 0.8,
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              {
                offset: 0,
                color: "rgb(0, 221, 255)",
              },
              {
                offset: 1,
                color: "rgb(77, 119, 255)",
              },
            ]),
          },
        },
        {
          type: "line",
          name: "家电",
          data: num.Electrical,
          smooth: true,
          showSymbol: false,
          stack: "total",
          lineStyle: {
            width: 0,
          },
          emphasis: {
            focus: "series",
          },
          areaStyle: {
            opacity: 0.8,
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              {
                offset: 0,
                color: "rgb(55, 162, 255)",
              },
              {
                offset: 1,
                color: "rgb(116, 21, 219)",
              },
            ]),
          },
        },
        {
          type: "line",
          name: "家居",
          data: num.gear,
          smooth: true,
          showSymbol: false,
          stack: "total",
          lineStyle: {
            width: 0,
          },
          emphasis: {
            focus: "series",
          },
          areaStyle: {
            opacity: 0.8,
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              {
                offset: 0,
                color: "rgb(255, 0, 135)",
              },
              {
                offset: 1,
                color: "rgb(135, 0, 157)",
              },
            ]),
          },
        },
        {
          type: "line",
          name: "日化",
          data: num.Chemicals,
          smooth: true,
          showSymbol: false,
          stack: "total",
          lineStyle: {
            width: 0,
          },
          emphasis: {
            focus: "series",
          },
          areaStyle: {
            opacity: 0.8,
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              {
                offset: 0,
                color: "rgb(255, 191, 0)",
              },
              {
                offset: 1,
                color: "rgb(224, 62, 76)",
              },
            ]),
          },
        },
      ],
      tooltip: {
        show: true,
        trigger: "axis",
        axisPointer: {
          type: "cross",

        },
      },
      legend: {
        data: ["服饰", "数码", "家电", "家居", "日化"],
        textStyle:{
          color:"white",
          fontSize: "0.18rem",
        }
      },
    };
    window.addEventListener("resize", () => {
   
      clearTimeout(t)
      t= setTimeout(() => {
        lineChart.resize();
      }, 301);
    });
    lineChart.setOption(option);
  });
});

onUnmounted(()=>{
  clearTimeout(t)
})
</script>

<style lang="scss" scoped>
.lineStyle {
  height: 3.5rem;
}
</style>
