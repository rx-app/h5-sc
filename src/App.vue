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
body{
  height:100%;
/* overflow: hidden; */
user-select: none;
line-height: 100%;
}
div{line-height: 1em;}
#app{height: 100vh;
/* overflow: hidden; */
}
.van-list__finished-text{
  font-size: 32px;
}
</style>
