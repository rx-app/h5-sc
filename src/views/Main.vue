<template>
  <div>
    <div class="page-main">
      <div class="header">
        <!-- <div class="title">测试大厅</div> -->
      </div>
      <router-link :to="{name:'tips'}" tag="div" class="banner">
        <div class="img"></div>
      </router-link>
      <div id="main">
        <div class="nav-card section1">
          <div class="title">
            <div class="text">栏目测试</div> 
            <span class="bar"></span>
          </div>
          <div class="more">
            <!-- <span>更多</span> -->
          </div>
          <div class="nav-items nav1">
            <router-link :to="{name:'share'}" tag="div" class="item item1">
              <div class="item-icon">
                <img :src="require('../assets/img/img2.png')" alt />
              </div>
              <div class="title">人格原型测试</div>
              <div class="price">¥99.0</div>
              <div class="button">去看看</div>
            </router-link>
            <router-link :to="{name:'login'}" tag="div" class="item item2">
              <div class="item-icon">
                <img :src="require('../assets/img/img2.png')" alt />
              </div>
              <div class="title">人格原型测试</div>
              <div class="price">¥99.0</div>
              <div class="button">去看看</div>
            </router-link>
            <div class="item item3">
              <div class="item-icon">
                <img :src="require('../assets/img/img2.png')" alt />
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
                <img :src="require('../assets/img/img1.png')" alt="">
              </div>
            </div>
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
                <img :src="require('../assets/img/img1.png')" alt="">
              </div>
            </div>
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
                <img :src="require('../assets/img/img1.png')" alt="">
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
  padding-top: 246px;
  position: relative;
  .header{
    height: 522px;
    width: 100vw;
    background: url('../assets/img/index-top.png') no-repeat;
    background-size: cover;
    position: absolute;
    top:0;
    .title{
      font-size: 48px;
      color: #fff;
      position: absolute;
      margin:0 auto;
      top: 140px;
      width: 100%;
      text-align: center;
    }
  }
  .banner{
    width: 100vw;
    height: 556px;
    background: url('../assets/img/banner.png') no-repeat;
    background-size: cover;
    position: absolute;  //不加会背景重叠
    // margin-top:370px  这里不用margin-top，要给父元素加padding-top，否则背景色会丢失

  }
  #main{
    padding-top: 574px;
    padding-bottom: 1000px;
    
    .nav-card{
      padding: 40px 40px 120px;
      position: relative;
      .title{
        .text{
          font-size: 38px;
          color: #fff;
          margin-bottom: 10px;
        }
        .bar{
          display: block;
          // margin-top: 5px;
          width: 46px;
          height: 8px;
          background:linear-gradient(90deg,rgba(43,235,249,1),rgba(116,135,254,1));
          border-radius:4px;
        }
        
      }
      
      .more{
        width:81px;
        height:50px;
        border:3px solid;
        border-image:linear-gradient(0deg, rgba(44,233,250,1), rgba(119,132,254,1)) 10 10;
        background:linear-gradient(0deg,rgba(44,233,250,1) 0%,rgba(119,132,254,1) 100%);
        border-radius:25px;
        position: absolute;
        right: 40px;
        top:35px;
        span{
          width:38px;
          height:20px;
          font-size:20px;
          font-family:PingFang SC;
          font-weight:bold;
          color:rgba(59,38,161,1);
          line-height:20px;

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
              width:208px;
              height:232px;
              background:linear-gradient(0deg,rgba(28,93,226,1),rgba(104,225,255,1));
              box-shadow:0px 6px 12px 1px rgba(8,4,27,0.5);
              border-radius:13px;
              padding: 68px 26px 21px;
              position: relative;
              .title,.price{
                font-size: 24px;
                color: #fff;
                text-align: center;
                line-height: 24px;
                // margin-top: 20px;
              }
              .price{
                margin:30px 0 22px;
              }
              .button{
                width:156px;
                height:48px;
                background:rgba(255,255,255,1);
                box-shadow:0px 0px 7px 0px rgba(71,24,10,0.7);
                border-radius:24px;
                font-size:20px;
                font-family:PingFang SC;
                font-weight:bold;
                color:rgba(41,115,231,1);
                line-height:48px;
                text-align: center;
              }
              .item-icon{
                position: absolute;
                width:107px;
                height:107px;
                border-radius:20px;
                top:-53px;
                left: 52px;
                img{
                  width: 100%;
                  height: 100%;
                  border-radius:20px;
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
          padding-top:120px;
        }
        
      }
      &.section2{
        .nav-items{
          display: flex;
          justify-content: space-between;
          padding-top: 53px ;
          .item{
            // flex:1;
            height: 200px;
            width: 320px;
          }
          .left{background: url('../assets/img/test2.png') no-repeat;background-size: cover;}
          .right{background: url('../assets/img/test1.png') no-repeat;background-size: cover;}
        }
      }
      &.section3{
        .nav-items{
          // display: flex;
          // justify-content: space-between;
          padding-top: 53px ;
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
                background:linear-gradient(90deg,#2f00ff,#8500fc);
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
                line-height: 1em;
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
              border-radius:13px;
              img{width: 100%;height: 100%;border-radius:13px;}
            }
          }
          
        }
      }
    }

  }

}
</style>
