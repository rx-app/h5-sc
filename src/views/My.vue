<template>
  <div class="page-my">
    <div class="title">个人中心</div>
    <div class="card-list">
      <div class="card">
        <div class="top">疫情期间心理健康自评表</div>
        <div class="main">
          <div class="price">
            <span class="new"> ¥ 99.0 </span><span class="old">¥299</span>
          </div>
          <div class="time">
            完成时间: 2020.3.18 16:20:30 
          </div>
          <div class="number">
            订单标号: 12345678998745632100
          </div>

        </div>
        <div class="bottom">查看报告</div>
      </div>
      <div class="card">
        <div class="top">疫情期间心理健康自评表</div>
        <div class="main">
          <div class="price">
            <span class="new"> ¥ 99.0 </span><span class="old">¥299</span>
          </div>
          <div class="time">
            完成时间: 2020.3.18 16:20:30 
          </div>
          <div class="number">
            订单标号: 12345678998745632100
          </div>

        </div>
        <div class="bottom">查看报告</div>
      </div>
      <div class="card">
        <div class="top">疫情期间心理健康自评表</div>
        <div class="main">
          <div class="price">
            <span class="new"> ¥ 99.0 </span><span class="old">¥299</span>
          </div>
          <div class="time">
            完成时间: 2020.3.18 16:20:30 
          </div>
          <div class="number">
            订单标号: 12345678998745632100
          </div>

        </div>
        <div class="bottom">查看报告</div>
      </div>
      <div class="card">
        <div class="top">疫情期间心理健康自评表</div>
        <div class="main">
          <div class="price">
            <span class="new"> ¥ 99.0 </span><span class="old">¥299</span>
          </div>
          <div class="time">
            完成时间: 2020.3.18 16:20:30 
          </div>
          <div class="number">
            订单标号: 12345678998745632100
          </div>

        </div>
        <div class="bottom">查看报告</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      info:{}
    };
  },
  mounted(){
    
  },
  methods:{
    
  },
};
</script>

<style  lang="scss"  scoped>
.page-my{
  background: #261A58;
  padding: 100px 26px 0;
  
  .title{
    font-size: 48px;
    line-height: 48px;
    color: #fff;
    text-align: center;
    margin-bottom: 78px;
  }
  .card-list{
    height: calc(100vh - 100px - 48px - 78px );
    overflow-y: scroll;
    padding-bottom: 300px;// ios 只设置100px,在iPhone 6p 下不够
    .card{
      width:698px;
      // height:353px;
      background:rgba(64,14,141,0.5);
      border-radius:20px;
      margin-bottom: 26px;
      .top{
        background: #4C2797;
        height: 72px;
        border-radius:20px 20px 0 0;
        line-height: 72px;
        color: #fff;
        font-size: 32px;
        text-align: center;;
      }
      .main{
        // height: 180px;
        padding:33px 0 0 37px;
        font-size: 24px;
        line-height: 24px; // ios 8p x 下卡牌会特别高
        color:rgba(255,255,255,0.5);
        .new{
          color:#fff;
          font-size: 32px;
          margin-right: 15px;
        }
        .time{
          margin: 26px 0;
        }
        .number{
          margin-bottom: 26px;
        }
        border-bottom: 1px solid #4F19A2;
      }
      .bottom{
        width:100%;
        height:100px;
        font-size:32px;
        font-family:PingFang SC;
        font-weight:bold;
        color:rgba(255,255,255,1);
        line-height:100px;
        text-align: center;

        background:linear-gradient(0deg,rgba(72,197,255,1) 0%, rgba(144,77,255,1) 100%);
        -webkit-background-clip:text;
        -webkit-text-fill-color:transparent;
        background-position: center;
        // padding-left: 200px;
      }
    }
  }
}
</style>
