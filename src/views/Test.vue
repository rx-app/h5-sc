<template>
  <div class="page-test">
    <router-link tag="div" :to="{name:'main'}" class="back"></router-link>
    <div class="title">测试大厅</div>
    <div class="process-bar"></div>
    <div class="info">
      <span class="all"><span class="left">第<span class="index">14</span>题</span>/共30题目</span>
    </div>
    
      <div class="question">根据您最近一个星期的实际情况选择 最符合的选项32px加粗</div>
    <div class="box">
      <div class="ans">
        <div class="option on"><span>A</span></div>
        <div class="text">
          如果文字文字太多需要回行的

        </div>
        <div class="button on"><span class="iconfont icon-1"></span></div>
      </div>
      <div class="ans">
        <div class="option"><span>B</span></div>
        <div class="text">
          如果文字文字太多需要回行的
        </div>
        <div class="button"></div>
      </div>
      <div class="ans">
        <div class="option"><span>C</span></div>
        <div class="text">
          如果文字文字太多需要回行的
          如果文字文字太多需要回行的
          如果文字文字太多需要回行的
          如果文字文字太多需要回行的
          如果文字文字太多需要回行的
        </div>
        <div class="button"></div>
      </div>
      <div class="ans">
        <div class="option"><span>D</span></div>
        <div class="text">
          如果文字文字太多需要回行的
          如果文字文字太多需要回行的
        </div>
        <div class="button"></div>
      </div>
      <div class="pre">
        上一题
      </div>
    </div>
    
      
  </div>
</template>

<script>
import md5 from 'js-md5';

export default {
  data() {
    return {
      username: "123456789",
      password: "111111"
    };
  },
  methods: {
  
  }
};
</script>

<style lang="scss" scoped>
.page-test{
  height: 100vh;
  
  background: #261A58;
  background-size: cover;
  position: relative;
  padding: 40px 28px 0;  //ios 6sp和安卓上 title位置偏上 50px -> 40px
  .back{
    width:72px;
    height:68px;
    background: url('../assets/img/return.png') no-repeat;
    background-size: cover;
    position: absolute;
    top:50px;
    left: 0px;
  }
  .title{
    font-size:48px;
    color:rgba(255,255,255,1);
    // line-height:44px;
    text-shadow:0px 2px 5px rgba(0, 0, 0, 0.3);
    margin:20px 0px 75px 96px;
  }
  .process-bar{
    width:696px;
    height:13px;
    background:rgba(51,20,115,1);
    border-radius:7px;
  }
  .info{
    margin:35px 0 80px 0px;
    color:#AFA0D2;
    font-size: 24px;
    text-align: center;
    .left{
      color:#fff;
      .index{color: #FFD02C;}
    }
  }
  .box{// 这里的写法可能有问题，不确定问题的高度
    height: calc( 100vh - 50px - 20px - 48px - 50px - 24px - 230px);
    overflow-y: scroll;
    padding-bottom: 300px;
    overflow-x:hidden;
  }
  .question{
    font-size: 32px;
    color:#fff;
    line-height: 52px;
    width: 515px;
    margin-left: 90px;
    text-align: center;
    margin-bottom: 40px;
  }
  .ans{
    width: 696px;
    // height: 150px;
    padding: 45px 26px;
    background: #400E8D;
    display: flex;
    align-items: center;
    margin-bottom: 26px;
    border-radius:13px;
    
    // justify-content: center;
    .option{
      width:96px;
      height:96px;
      background: #6F5C9D;
      border-radius:50%;
      font-size: 40px;
      font-weight: bold;
      color: #fff;
      text-align: center;
      line-height: 96px;
      margin-right: 25px;
      &.on{
        background:linear-gradient(45deg,rgba(72,197,255,1),rgba(144,77,255,1));
      }
      
      
      // display: table;
      // height: 100%;
      // span{
      //   display: table-cell;
      //   vertical-align: middle;
      //   text-align: center;
      // }
    }
    .text{flex:1;font-size: 32px;line-height: 48px;color: #fff;}
    .button{color:#fff;font-size: 30px;line-height: 54px;text-align: center; width: 54px;height: 54px;border: 3px solid #B5A8D1;border-radius: 50%;margin-left: 50px;}
    .button.on{
      border-color: #fff;
    }
  }
  .pre{
    margin-top: 28px;
    width:690px;
    height:106px;
    line-height: 106px;
    color: #fff;
    font-size: 40px;
    text-align: center;
    background:linear-gradient(90deg,rgba(72,197,255,1),rgba(144,77,255,1));
    border-radius:53px;
  }
}
</style>