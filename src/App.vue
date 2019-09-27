<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
  export default {
    name: 'app'
  }
</script>

<style lang="scss">
  @import "assets/scss/global.scss";
</style>

<style scoped>
  @media only screen and (min-width: 550px) {
    #app {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100vh;
    }
  }
</style>
