<template>
  <div ref="myMap" class="mapStyle"></div>
</template>

<script setup>
import { map } from "../assets/map.js";
import * as echarts from "echarts";
import { ref, onMounted, reactive, onUnmounted } from "vue";
let myMap = ref();
var t;
onMounted(() => {
  let mapChart = echarts.init(myMap.value);
  echarts.registerMap("chinaMap", map);

  let option = {
    geo: {
      type: "map",
      map: "chinaMap",
      itemStyle: {
        areaColor: "rgba(47, 31, 52, 0.98)",
        borderColor: "#00ffff",
        shadowColor: "rgba(230,130,70,0.5)",
        shadowBlur: 50,
      },
      emphasis: {
        focus: "self",
        itemStyle:{
          areaColor: "rgb(219, 234, 208)",
        }
      },
    },

    series: {
      type: "scatter",
      itemStyle: {
        color: "red",
      },
      data: [
        { name: "北京", value: [116.46, 39.92, 4367] },
        { name: "上海", value: [121.48, 31.22, 8675] },
        { name: "深圳", value: [114.07, 22.62, 2461] },
        { name: "广州", value: [113.23, 23.16, 187] },
        { name: "西安", value: [108.45, 34, 3421] },
      ],
      coordinateSystem: "geo",
    },

    tooltip: {
      show: true,
      trigger: "item",
      formatter(params) {
        return params.name + "市销售总额:" + params.value[2];
      },
    },

    visualMap: {
      type: "continuous",
      min: 100,
      max: 5000,
      calculable: true,
      inRange: {
        color: ["#ffebc7 ", "#c5ff99  ", "#addcff "],
      },
      textStyle: {
        color: "black",
      },
    },

    title: {
      text: "城市销量",
      left: "40%",
      top: "2%",
      textStyle: {
        color: "Black",
        textShadowBlur: 10,
        textShadowColor: "#33ffff",
        fontSize: "0.5rem",
      },
    },
  };
  window.addEventListener("resize", () => {
    clearTimeout(t);
    t = setTimeout(() => {
      mapChart.resize();
    }, 301);
  });
  mapChart.setOption(option);
});
onUnmounted(() => {
  clearTimeout(t);
});
</script>

<style lang="scss" scoped>
.mapStyle {
  width: 100%;
  height: 100%;
}
</style>
