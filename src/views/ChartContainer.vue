<template>
  <div class="itemBox">
    <slot/>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.itemBox {
  height: 4.2188rem;
  border: 1px solid rgb(185, 185, 191);
  margin: 0.3125rem;
  background-color: rgba(47, 31, 52, 0.7);
  font-size: 0.3125rem;
  text-align: center;
  color:white
}
</style>
