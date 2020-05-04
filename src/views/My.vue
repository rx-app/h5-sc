<template>
  <div class="hello">
    <Header></Header>
    <div class="main">
      <div class="my">
        <div class="avatar2 level-2">
          <i class="icon-hat"></i>
          <img :src="require('../assets/img/main.png')" alt />
        </div>
        <div class="name">
          <span>{{info.nickname}}</span>
        </div>
        <div class="level">
          <span v-if="info.level==3" class="level-4">包年会员</span>
          <span v-if="info.level==2" class="level-3">包月会员</span>
          <span v-if="info.level==1" class="level-2">普通会员</span>
          <span v-if="info.level==0" class="level-1">普通用户</span>
        </div>
      </div>
      <div class="list">
        <router-link tag="div" :to="{name:'history'}" class="item">
          <i class="iconfont icon-lishi1"></i>
          <div class="text">历史记录</div>
          <span class="iconfont icon-arr-right"></span>
        </router-link>
        <div class="item">
          <i class="iconfont icon-duihua"></i>
          <div class="text">在线客服</div>
          <span class="iconfont icon-arr-right"></span>
        </div>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "../components/Header";
import Footer from "../components/Footer";
export default {
  data() {
    return {
      info:{}
    };
  },
  components: {
    Header,
    Footer
  },
  mounted(){
    this.getUserInfo();
  },
  methods:{
    getUserInfo(){
      let info = localStorage.getItem('info')
      info = JSON.parse(info)
      this.info = info
      console.log(this.info)
      // 这里可能需要判断info是否info是否存在
    },
  },
};
</script>

<style  lang="scss"  scoped>
.main {
  background: #270e3b;
  height: calc( 100vh - 84px - 110px );
  padding-top: 80px;
      // background: url('../assets/img/icon-star.png') no-repeat;

  .my {
      // background: url('../assets/img/icon-star.png') no-repeat;
    text-align: center;
    .avatar2{
      position: relative;
      display: inline-block;
      width: 186px;
      height: 186px;
      margin: 0 0 30px;
      border: 6px solid #FFC38E;
      border-radius: 50%;
      // background: chartreuse;
      // background: url('../assets/img/icon-my.png') no-repeat;
      background-size: cover;
      &.level-0{
        border-color:#AE7BEE ;
      }
      &.level-1{
        border-color:#FFC38E ;
      }
      &.level-2{
        
        border-color:#C0C4C7 ;
        
        .icon-hat{
          position: absolute;
          right: -16px;
          top: -16px;
          width: 76px;
          height: 76px;
          background:url('../assets/img/level-2.png') no-repeat;
          transform: rotate(22deg);
          background-size: cover;
          }
      }
      &.level-3{
        border-color:#F9CF7E ;
      }
      img{
        display: block;
        width: 166px;
      height: 166px;
      border-radius: 50%;
      //  background: url('../assets/img/icon-my.png') no-repeat;
      }
    }
    .name {
      height: 50px;
      span {
        font-size: 36px;
        line-height: 50px;
        color: #fff;
      }
    }
    .level {
      margin: 25px 0 115px 0;
      span {
        font-size: 22px;
        color: #3c1d63;
        padding: 8px 30px;

        border-radius: 19px;
        &.level-4 {
          background: linear-gradient(
            90deg,
            rgba(255, 224, 158, 1) 0%,
            rgba(245, 193, 100, 1) 100%
          );
        }
        &.level-3 {
          background:linear-gradient(90deg,rgba(225,228,229,1) 0%,rgba(170,176,181,1) 100%);
        }
        &.level-2 {
          background:linear-gradient(90deg,rgba(255,220,188,1) 0%,rgba(255,195,142,1) 100%);
        }
        &.level-1 {
          background:rgba(174,123,238,1);
          color: #fff;
        }
      }
    }
  }
  .list {
    .item {
      background: #2e1148;
      display: flex;
      padding: 35px 30px;
      border-bottom: 1px solid #321a4c;
      &:last-child{
        border: none;
      }
      i {
        display: inline-block;
        color: #f7c770;
        font-size: 34px;
        line-height: 34px;
        vertical-align: top;
        width: 60px;
        // margin-right: 20px;
        &.icon-lishi{
          font-size: 44px;
          line-height: 44px;
          // margin-right: 8px;
        }
        // width: 35px;
      }
      .text {
        font-size: 34px;
        line-height: 34px;
        color: #fff;
        flex: 1;
      }
      span {
        font-size: 34px;
        color: #BDA6DA;
      }
    }
  }
}
</style>
