<template>
  <div id="error" class="error">
    404
  </div>
</template>

<script>
    export default {
        name: "error"
    }
</script>

<style scoped>
  .error{
    position: fixed;
    left: 50%;
    top:50%;
    transform: translate(-50%,-50%);
    font-size: 66px;
  }
</style>
