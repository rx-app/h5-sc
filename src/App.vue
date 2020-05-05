<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
body{height:100%;overflow: hidden;user-select: none;
line-height: 100%;
}
#app{height: 100vh;overflow: hidden;}
</style>
