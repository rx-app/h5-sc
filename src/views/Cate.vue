<template>
  <div class="page-cate">
    <router-link tag="div" :to="{name:'main'}" class="back"></router-link>
    <div class="top-title">专业心理测评</div>
    <div class="nav-bar">
      <div class="nav-list">
        <div class="item on">全部</div>
        <div class="item">性格</div>
        <div class="item">情感</div>
        <div class="item">职场</div>
        <div class="item">健康</div>
        <div class="item">人际</div>
        <div class="item">亲子</div>
      </div>
    </div>
    <div class="sort">
      <span>综合排序</span>
      <span class="active">按时间</span>
      <span>按热度</span>
    </div>
    <div class="card-list">
      <div class="item">
          <div class="left">
            <div class="title">2020年最流行的测试</div>
            <div class="cate">职业性格测试</div>
            <div class="price">
              <span class="new">¥ 99.0</span>
              <span class="old">¥299</span>
              <span class="time">572已测</span>
            </div>
          </div>
          <div class="right">
            <img :src="require('../assets/img/img1.png')" alt="">
          </div>
      </div>
      <div class="item">
          <div class="left">
            <div class="title">2020年最流行的测试</div>
            <div class="cate">职业性格测试</div>
            <div class="price">
              <span class="new">¥ 99.0</span>
              <span class="old">¥299</span>
              <span class="time">572已测</span>
            </div>
          </div>
          <div class="right">
            <img :src="require('../assets/img/img1.png')" alt="">
          </div>
      </div>
      <div class="item">
          <div class="left">
            <div class="title">2020年最流行的测试</div>
            <div class="cate">职业性格测试</div>
            <div class="price">
              <span class="new">¥ 99.0</span>
              <span class="old">¥299</span>
              <span class="time">572已测</span>
            </div>
          </div>
          <div class="right">
            <img :src="require('../assets/img/img1.png')" alt="">
          </div>
      </div>
    </div>

    
      
  </div>
</template>

<script>
import md5 from 'js-md5';

export default {
  data() {
    return {
     
    };
  },
  methods: {
  
  }
};
</script>

<style lang="scss" scoped>
.page-cate{
  height: 100vh;
  
  background: #261A58;
  background-size: cover;
  position: relative;
  padding: 50px 25px 0;
  .back{
    width:72px;
    height:68px;
    background: url('../assets/img/search.png') no-repeat;
    background-size: cover;
    position: absolute;
    top:50px;
    left: 0px;
  }
  .top-title{
    font-size:48px;
    color:rgba(255,255,255,1);
    // line-height:44px;
    text-shadow:0px 2px 5px rgba(0, 0, 0, 0.3);
    margin:20px 0px 104px 96px;
  }
  .nav-bar{
    width: 700px;
    overflow-x: scroll;
    height: 60px;
    // display: flex;
    .nav-list{
      width: 200vw;
      .item{
        width: 116px;
        height: 60px;
        color: #AFA0D2;
        line-height: 60px;
        text-align: center;
        display: inline-block;
        &.on{
          background:linear-gradient(90deg,rgba(72,197,255,1),rgba(144,77,255,1));
          border-radius:30px;
          color: #fff;
          font-size: 32px;
        }
      }
    }
  }
  .sort{
    font-size: 24px;
    margin: 39px 0 60px 0;
    text-align: center;
    span{
      margin-right: 40px;
      color: #AFA0D2;
      &.active{color: #7679FF;}
    }
    
  }
  .card-list{
          // display: flex;
          // justify-content: space-between;
          // padding-top: 53px ;
          .item{
            // flex:1;
            height: 242px;
            width: 696px;
            background: #331473;
            border-radius:20px;
            padding:24px 26px;
            display: flex;
            color: #fff;
            margin-bottom: 26px;
            .left{
              width: 363px;
              margin-right: 27px;
              .title{
                font-size: 32px;
                vertical-align: top;
                line-height: 40px;
                height: 80px;
              }
              .cate{
                width:175px;
                height:44px;
                background:linear-gradient(90deg,rgba(133,10,223,1),rgba(182,10,255,1));
                border-radius:15px;
                font-size: 19px;
                line-height: 44px;
                text-align: center;
                color: #fff;
                vertical-align: middle;
                margin: 13px 0 24px;
              }
              .price{
                display: flex;
                font-size: 24px;color:rgba(255,255,255,0.5);
                .new{
                  font-size: 32px;
                  color: #fff;
                  margin-right: 14px;
                }
                .old{
                  flex: 1;
                }
                .time{
                  // margin-left: 90px;
                }
              }
            }
            .right{
              height: 192px;
              width: 256px;
              img{width: 100%;height: 100%;}
            }
          }
          
        }


}
</style>