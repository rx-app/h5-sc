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
  .van-dialog__content {
    background: #261a58;
  }
  .van-dialog__message {
    background: #261a58;
    line-height: 100px;
    font-size: 36px;
    text-align: center;
    border-bottom: 1px solid #4f19a2;
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
  .van-hairline--top::after{
  border:none!important;
}
.no-centent-dialog {
  color: #fff;
  background: #2e1148!important;
  width: 60vw;
  border: 6px solid rgba(0, 0, 0, 0.2);
  /* box-shadow: 0px 0px 10px 5px rgba(199, 199, 199, 0.5) */
}
.no-centent-dialog .van-dialog__message {
  height: 22vw!important;
  line-height: 28vw!important;
  padding: 0px;
  font-size: 0.48rem!important;
  overflow: hidden;
}
.no-centent-dialog .van-dialog__footer {
  text-align: center;
}
.no-centent-dialog .van-button--default {
  color: #fff;
  width: 28vw!important;
  background: #250e3a;
  border-radius: 100px;
  margin-bottom: 8vw!important;
}
  
}

</style>
