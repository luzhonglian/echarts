<template>
  <div>
    <h1>本周销售</h1>
    <div ref="myStackbar" class="stackbarStyle"></div>
  </div>
</template>

<script setup>
import axios from "axios";
import * as echarts from "echarts";
import { ref, onMounted, reactive ,onUnmounted} from "vue";

let myStackbar = ref();
let data = reactive({});
var t

async function getStackbarData() {
  data = await axios.get("/path/stackbar").then((res) => {
    return res.data.chartData;
  });
}

onMounted(() => {
  getStackbarData().then(() => {
    let stackbarChart = echarts.init(myStackbar.value);
    let option = {
      grid: {
        left: "1%",
        containLabel: true,
        bottom: "2%",
        right: "1%",
      },
      xAxis: {
        type: "category",
        data: data.day,
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
      series: [
        {
          name: "服饰",
          type: "bar",
          data: data.num.Clothes,
          stack: "total",
          label: {
            show: true,

            fontSize: "0.15rem",
          },
          emphasis: {
            focus: "series",
          },
        },
        {
          name: "数码",
          type: "bar",
          data: data.num.digit,
          stack: "total",
          label: {
            show: true,

            fontSize: "0.15rem",
          },
          emphasis: {
            focus: "series",
          },
        },
        {
          name: "家电",
          type: "bar",
          data: data.num.Electrical,
          stack: "total",
          label: {
            show: true,

            fontSize: "0.15rem",
          },
          emphasis: {
            focus: "series",
          },
        },
        {
          name: "家居",
          type: "bar",
          data: data.num.gear,
          stack: "total",
          label: {
            show: true,

            fontSize: "0.15rem",
          },
          emphasis: {
            focus: "series",
          },
        },
        {
          name: "日化",
          type: "bar",
          data: data.num.Chemicals,
          stack: "total",
          label: {
            show: true,

            fontSize: "0.15rem",
          },
          emphasis: {
            focus: "series",
          },
        },
      ],
      tooltip: {
        trigger: "axis",
        axisPointer: {
          type: "shadow",
        },
      },
      legend: {
        top: "1%",
        itemHeight: 10,
        textStyle: {
          fontSize: "0.18rem",
          color: "white",
        },
        icon: "circle",
      },
    };
    window.addEventListener("resize", () => {
      clearTimeout(t)
      t=  setTimeout(() => {
        stackbarChart.resize();
      }, 301);
    });
    stackbarChart.setOption(option);
  });
});

onUnmounted(()=>{
  clearTimeout(t)
})
</script>

<style lang="scss" scoped>
.stackbarStyle {
  height: 3.5rem;
}
</style>
