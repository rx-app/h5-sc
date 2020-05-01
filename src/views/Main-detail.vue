<template>
  <div class>
    <Header></Header>
    <div class="main">
      <div class="star">
        <div class="top-box">
          <div class="left"></div>
          <div class="right"></div>
        </div>
        <div class="name">白羊座</div>
        <div class="img">
          <img src="" alt="">
        </div>
        <div class="info">
          <div class="left">
            <div class="deg">黄道维度</div>
            <div class="degVal">360º<span>2^12</span></div>
          </div>
          <div class="right">
            <div class="date">日期</div>
            <div class="dateVal">03.21 - 04.20</div>
          </div>
          
        </div>
        <div class="des">
            Buying the right telescope to take your love of astronomy to the next level is a big next step in the development of your passion for the stars. In many ways, it is a big step from someone who is just fooling around with astronomy to a serious student of the science. But you and I both know that there is still another big step after buying a telescope before you really know how to use it.
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
    return {};
  },
  components: {
    Header,
    Footer
  }
};
</script>

<style  lang="scss"  scoped>
.main {
  background: #270e3b;
  .star {
    width: 630px;
    height: 1162px;
    background: linear-gradient(
      360deg,
      rgba(239, 222, 252, 0.04) 0%,
      rgba(251, 235, 255, 0.24) 100%
    );
    border-radius: 20px;
    // opacity: 0.76;  写上这个好像name这里有模糊感
    position: relative;
    padding: 60px 30px;
    .top-box {
      width: 68px;
      height: 84px;
      background: rgba(254, 168, 111, 1);
      position: absolute;
      right: 80px;
      top:0px;
      .left {
        width: 0;
        height: 0;
        border-top: 68px solid rgba(254, 168, 111, 1);
        border-right: 68px solid transparent;
        position: absolute;
        bottom: -34px;
      }
      .right {
        width: 0;
        height: 0;
        border-top: 68px solid rgba(254, 168, 111, 1);
        border-left: 68px solid transparent;
        position: absolute;
        bottom: -34px;
      }
    }
    .name {
      width: 216px;
      height: 60px;
      text-align: center;
      font-size: 36px;
      font-weight: 400;
      color: rgba(255, 255, 255, 1);
      line-height: 60px;
      background: linear-gradient(
        270deg,
        rgba(250, 217, 97, 1) 0%,
        rgba(247, 107, 28, 1) 100%
      );
      border-radius: 30px;
    }
    .info{
      display: flex;
      justify-content: space-between;
      .left{
        .deg{color:#B571C4;font-size: 30px;}
        .degVal{
          span{color:#B571C4;margin-left: 10px;}
          margin:19px 0 48px 0;font-size: 30px;color:#fff;}
      }
      .right{
        .date{color:#B571C4;font-size: 30px;}
        .dateVal{margin:19px 0 48px 0;font-size: 30px;color:#fff;}
      }
    }
    .des{font-size: 28px;color: #fff;line-height: 160%;}
    .img{width:300px;height: 300px;background: chartreuse;margin:46px 0 70px 130px;}
  }
}
.rotate-section {
  height: 545px;
  padding: 40px 0;
  // background: #270E3B;
  .rotate-img {
    margin-left: calc(50vw - 232.5px);
    width: 465px;
    height: 465px;
    background: cornflowerblue;
  }
}
.star-cards {
  padding: 0 30px;
  height: calc(100vh - 84px - 110px - 545px);
  overflow-y: scroll;
  // background: #270E3B;
  .card-item {
    padding: 32px;
    display: flex;
    background: linear-gradient(
      360deg,
      rgba(247, 218, 255, 0.04) 0%,
      rgba(249, 229, 255, 0.17) 100%
    );
    border-radius: 16px;
    opacity: 0.8;
    margin-bottom: 30px;
    &.on {
      background: linear-gradient(
        360deg,
        rgba(217, 80, 255, 0.09) 0%,
        rgba(212, 75, 250, 0.5) 100%
      );
    }
    .card-icon {
      height: 180px;
      width: 180px;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .card-des {
      flex: 1;
      height: 180px;
      margin-left: 10px;
      .star-name {
        font-size: 36px;
        line-height: 50px;
        margin-top: 10px;
        color: #fff;
      }
      .star-des {
        font-size: 28px;
        line-height: 40px;
        margin-top: 0px;
        color: #9452a3;
      }
      .star-date {
        font-size: 28px;
        line-height: 40px;
        margin-top: 25px;
        color: #fcdfc9;
      }
    }
    .card-button {
      margin-top: 45px;
      .button-icon {
        width: 48px;
        height: 48px;
        margin: 0px 16px 10px;
        background: url("../assets/img/card-button.png") no-repeat;
        background-size: contain;
      }
      .button-txt {
        font-size: 26px;
        line-height: 38px;
        color: #d27ae7;
      }
    }
  }
}
</style>