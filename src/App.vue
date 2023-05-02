<script setup></script>

<template>
  <router-view />
  <!-- border-box使padding,border都算在元素width里面 -->
</template>

<style lang="less">
* {
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
}
body {
  background: url("./assets/bg.jpg") top center no-repeat;
  background-size: cover;
  background-attachment: fixed;
}
</style>
