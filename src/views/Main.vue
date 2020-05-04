<template>
  <div>
    <div class="page-main">
      <div class="header">
        <div class="title">测试大厅</div>
      </div>
      <div class="banner">
        <div class="img"></div>
      </div>
      <div id="main">
        <div class="nav-card section1">
          <div class="title">
            <div class="text">栏目测试</div> 
            <span class="bar"></span>
          </div>
          <div class="more"><span>更多</span></div>
          <div class="nav-items nav1">
            <div class="item item1">
              <div class="item-icon">
                <img :src="require('../assets/img/return.png')" alt />
              </div>
              <div class="title">人格原型测试</div>
              <div class="price">¥99.0</div>
              <div class="button">去看看</div>
            </div>
            <div class="item item2">
              <div class="item-icon">
                <img :src="require('../assets/img/return.png')" alt />
              </div>
              <div class="title">人格原型测试</div>
              <div class="price">¥99.0</div>
              <div class="button">去看看</div>
            </div>
            <div class="item item3">
              <div class="item-icon">
                <img :src="require('../assets/img/return.png')" alt />
              </div>
              <div class="title">人格原型测试</div>
              <div class="price">¥99.0</div>
              <div class="button">去看看</div>
            </div>
          </div>
        </div>
        
        <div class="nav-card section2">
          <div class="title">
            <div class="text">精彩测评</div> 
            <span class="bar"></span>
          </div>
          <div class="more"><span>更多</span></div>
          <div class="nav-items nav2">
            <div class="item left"></div>
            <div class="item right"></div>
          </div>
        </div>
        <div class="nav-card section3">
          <div class="title">
            <div class="text">精彩测评</div> 
            <span class="bar"></span>
          </div>
          <div class="more"><span>更多</span></div>
          <div class="nav-items nav3">
            <div class="item ">
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
                <img :src="require('../assets/img/return.png')" alt="">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
// import Header  from "../components/Header";
import Footer  from "../components/Footer";
export default {
  data () {
    return {
      
    }
  },
  methods:{
    async fetch() {
      const res = await this.$http.get("card/page",{params:{page_index:this.pageIndex,page_size:this.pageSize}});
      console.log(res.data)
      if(res.code==200){
        this.cards=res.data.result
      }
      
    },
  },
  mounted(){
    // this.fetch();
    // this.getUserInfo();
  },
  components:{
    // Header,
    Footer,
  },
}
</script>

<style  lang="scss"  scoped>
.page-main{
  background: #261A58;
  height: 100vh;
  overflow: scroll;
  padding-top: 370px;
  position: relative;
  .header{
    height: 783px;
    width: 100vw;
    background: url('../assets/img/index-top.png') no-repeat;
    background-size: cover;
    position: absolute;
    top:0;
    .title{
      font-size: 72px;
      color: #fff;
      position: absolute;
      margin:0 auto;
      top: 210px;
      width: 100%;
      text-align: center;
    }
  }
  .banner{
    width: 100vw;
    height: 834px;
    background: url('../assets/img/banner.png') no-repeat;
    background-size: cover;
    position: absolute;  //不加会背景重叠
    // margin-top:370px  这里不用margin-top，要给父元素加padding-top，否则背景色会丢失

  }
  #main{
    padding-top: 862px;
    padding-bottom: 1000px;
    
    .nav-card{
      padding: 60px 60px 160px;
      position: relative;
      .title{
        font-size: 56px;
        color: #fff;
        margin-bottom: 10px;
      }
      .bar{
        display: block;
        margin-top: 8px;
        width: 70px;
        height: 12px;
        background:linear-gradient(90deg,rgba(43,235,249,1),rgba(116,135,254,1));
        border-radius:6px;
      }
      .more{
        width:122px;
        height:74px;
        border:4px solid;
        border-image:linear-gradient(0deg, rgba(44,233,250,1), rgba(119,132,254,1)) 10 10;
        background:linear-gradient(0deg,rgba(44,233,250,1) 0%,rgba(119,132,254,1) 100%);
        border-radius:33px;
        position: absolute;
        right: 60px;
        top:20px;
        span{
          width:58px;
          height:29px;
          font-size:30px;
          font-family:PingFang SC;
          font-weight:bold;
          color:rgba(59,38,161,1);
          line-height:30px;

          background:linear-gradient(0deg,rgba(35,245,249,1) 0%, rgba(130,116,255,1) 100%);
          -webkit-background-clip:text;
          -webkit-text-fill-color:transparent;
        }

      }
      &.section1{
        .nav-items{
          display: flex;
          justify-content: space-between;
          .item{
              width:312px;
              height:348px;
              background:linear-gradient(0deg,rgba(28,93,226,1),rgba(104,225,255,1));
              box-shadow:0px 9px 17px 1px rgba(8,4,27,0.5);
              border-radius:20px;
              padding: 100px 40px 32px;
              position: relative;
              .title,.price{
                font-size: 36px;
                color: #fff;
                text-align: center;
                line-height: 36px;
              }
              .price{
                margin:45px 0 36px;
              }
              .button{
                width:234px;
                height:72px;
                background:rgba(255,255,255,1);
                box-shadow:0px 0px 7px 0px rgba(71,24,10,0.7);
                border-radius:36px;
                font-size:30px;
                font-family:PingFang SC;
                font-weight:bold;
                color:rgba(41,115,231,1);
                line-height:72px;
                text-align: center;
              }
              .item-icon{
                position: absolute;
                width:160px;
                height:160px;
                border-radius:30px;
                top:-80px;
                left: 76px;
                img{
                  width: 100%;
                  height: 100%;
                }
                // background: chartreuse;
              }

          }
          .item2{background:linear-gradient(0deg,rgba(133,10,223,1),rgba(61,184,255,1));
              box-shadow:0px 9px 17px 1px rgba(8,4,27,0.5);}
          .item3{background:linear-gradient(0deg,rgba(56,33,155,1),rgba(91,96,231,1));
              box-shadow:0px 9px 17px 1px rgba(8,4,27,0.5);}
          
        }
        .nav1{
          padding-top:180px;
        }
        
      }
      &.section2{
        .nav-items{
          display: flex;
          justify-content: space-between;
          padding-top: 80px ;
          .item{
            // flex:1;
            height: 300px;
            width: 480px;
          }
          .left{background: url('../assets/img/test2.png') no-repeat;background-size: cover;}
          .right{background: url('../assets/img/test1.png') no-repeat;background-size: cover;}
        }
      }
      &.section3{
        .nav-items{
          display: flex;
          justify-content: space-between;
          padding-top: 80px ;
          .item{
            // flex:1;
            height: 364px;
            width: 1045px;
            background: #331473;
            border-radius:30px;
            padding:36px 40px;
            display: flex;
            .left{
              width: 545px;
              .title{
                font-size: 48px;
                vertical-align: top;
                line-height: 60px;
                height: 120px;
              }
              .cate{
                width:263px;
                height:66px;
                background:linear-gradient(90deg,rgba(133,10,223,1),rgba(182,10,255,1));
                border-radius:23px;
                font-size: 28px;
                line-height: 66px;
                text-align: center;
                color: #fff;
                vertical-align: middle;
                margin: 20px 0 35px;
              }
              .price{
                font-size: 36px;color: #fff;
                .new{
                  font-size: 48px;
                }
              }
            }
            .right{
              height: 288px;
              width: 384px;
              img{width: 100%;height: 100%;}
            }
          }
          
        }
      }
    }

  }

}
</style>
