<template>
  <h1>库存</h1>
  <div ref="myPie" class="pieStyle"></div>
</template>

<script setup>
import axios from "axios";
import * as echarts from "echarts";
import { ref, onMounted, reactive,onUnmounted } from "vue";

let myPie = ref();
let data = reactive({});
var t
async function getPieData() {
  data = await axios.get("https://www.fastmock.site/mock/e110368ed1b120b7fc940533513ab460/api/pie").then((res) => {
    return res.data.chartData;
  });
  // console.log(data)
}

onMounted(() => {
  getPieData().then(() => {
    let pieChart = echarts.init(myPie.value);
    let option = {
      series: [
        {
          type: "pie",
          data: data,
          radius: ["10%", "80%"],
          roseType: "radius",
          startAngle:180,
          itemStyle: {
            borderRadius: 10,
          },
          center: ["50%", "40%"],
          label: {
            fontSize: "0.155rem",
          },
          labelLine: {
            length: 5,
            length2: 0,
            maxSurfaceAngle: 80,
          },

        },
      ],
      grid: {
        containLabel: true,
        left: "2%",
        right: "2%",
        bottom: "2%",
        top: "2%",
      },
      tooltip: {
        show: true,
      },
      legend: {
        bottom: "2rem",
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
      t= setTimeout(() => {
        pieChart.resize();
      }, 301);
    });
    pieChart.setOption(option);
  });
});

onUnmounted(()=>{
  clearTimeout(t)
})
</script>

<style lang="scss" scoped>
.pieStyle {
  height: 3.5rem;
}
</style>
