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

<style lang="scss">
body{
  height:100%;
/* overflow: hidden; */
user-select: none;
line-height: 100%;
}
div{line-height: 1em;}
#app{height: 100vh;
/* overflow: hidden; */
background: #261A58;
}
.van-list__finished-text{
  font-size: 32px;
}
.van-dialog{
  background: #261A58;
  color: #fff;
  width: 60vw;
  .van-dialog__message{
    line-height: 100px;
    font-size: 36px;
    text-align: center;
    border-bottom: 1px solid #4F19A2;
  }
  .van-dialog__cancel{
    height: 70px;
    line-height: 70px;
    font-size: 32px;
    text-align: center;
    color: #fff;
    background: #261A58;
  }
  .van-dialog__confirm{
    height: 70px;
    line-height: 70px;
    font-size: 32px;
    text-align: center;
    color: #fff;
    background: #4F19A2;
  }
  .van-button::before {
    content: none;
  }
  .van-hairline--left::after{
    content: none;
  }
  .van-hairline--top::after{
    content: none;
  }
  // 带title
  .van-dialog__message--has-title{
        color: #a4afb9;
  }
  .van-dialog__header{
    height: 100px;
    line-height: 100px;
    padding: 0;
    font-size: 32px;
    text-align: center;
    color: #fff;
    border-bottom: 1px solid #4F19A2;
  }
  
}

</style>
