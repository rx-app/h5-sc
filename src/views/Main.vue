<template>
  <div class="hello">
    <Header></Header>
    <div class="main">
      <div class="rotate-section">
        <div class="text-box"></div>
        <div class="rotate-img">

        </div>
      </div>
      <div class="star-cards">
        <div v-for="(item,index) in cards" :key="index" :class="{on:activeIndex==index}" @click="activeIndex=index" class="card-item">
          <div class="card-icon">
            <img :src="item.icon" alt="">
          </div>
          <div class="card-des">
            <div class="star-name">{{item.title}}</div>
            <!-- <div class="star-des">The lion</div>
            <div class="star-date">JUL 22 - AUG 22</div> -->
          </div>
          <div class="card-button" v-show="activeIndex == index">
            <div class="button-icon"></div>
            <div @click="toDetail(index)" class="button-txt">做测试</div>
          </div>
        </div>
        <!-- <div class="card-item on">
          <div class="card-icon">
            <img src="../assets/img/icon-star.png" alt="">
          </div>
          <div class="card-des">
            <div class="star-name">SUN</div>
            <div class="star-des">The lion</div>
            <div class="star-date">JUL 22 - AUG 22</div>
          </div>
          <div class="card-button">
            <div class="button-icon"></div>
            <div class="button-txt">做测试</div>
          </div>
        </div>
        <div class="card-item">
          <div class="card-icon">
            <img src="../assets/img/icon-star.png" alt="">
          </div>
          <div class="card-des">
            <div class="star-name">SUN</div>
            <div class="star-des">The lion</div>
            <div class="star-date">JUL 22 - AUG 22</div>
          </div>
          <div class="card-button">
            <div class="button-icon"></div>
            <div class="button-txt">做测试</div>
          </div>
        </div> -->
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Header  from "../components/Header";
import Footer  from "../components/Footer";
export default {
  data () {
    return {
      pageIndex:1,
      pageSize:100,
      cards:[],
      activeIndex:null,
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
    async getUserInfo(){
      let res = await this.$http.get("auth/info");
    },
    toDetail(index){
      if(this.activeIndex==index){
        this.$router.push({name:'detail'})
      }
    },
  },
  mounted(){
    this.fetch();
    // this.getUserInfo();
  },
  components:{
    Header,
    Footer,
  },
}
</script>

<style  lang="scss"  scoped>
.main{
  background: #270E3B;
  
  background: url('../assets/img/BG.jpg') no-repeat;
}
.rotate-section{
  height: 545px;
  padding: 40px 0;
  position: relative;
  // background: #270E3B;
  .text-box{
    position: absolute;
    top: 134px;
    left: 106px;
    width: 520px;
    height: 244px;
    background: url('../assets/img/main-title.png') no-repeat;
    background-size: contain;
  }
  .rotate-img{
    position: absolute;
    top: 40px;
    left: 142px;
    width: 465px;
    height: 465px;
    background: url('../assets/img/xinpan.png') no-repeat;
    background-size: contain;
    animation:circle 24s infinite linear;
  }
  @keyframes circle{
    0% { transform:rotate(0deg); }
    100% { transform:rotate(-360deg); }
  }
}

.star-cards{
  padding: 0 30px;
  height: calc(100vh - 84px - 110px - 545px);
  overflow-y: scroll;
  // background: #270E3B;
  .card-item{
    padding: 32px;
    display: flex;
    background:linear-gradient(360deg,rgba(247,218,255,0.04) 0%,rgba(249,229,255,0.17) 100%);
    border-radius:16px;
    opacity:0.8;
    margin-bottom: 30px;
    &.on{
      background:linear-gradient(360deg,rgba(217,80,255,0.09) 0%,rgba(212,75,250,0.5) 100%);
    }
    .card-icon{
      height: 180px;
      width: 180px;
      img{width: 100%;height: 100%;}
    }
    .card-des{
      flex:1;
      height: 180px;
      margin-left: 10px;
      .star-name{font-size: 36px;line-height: 50px;margin-top: 10px;color: #fff}
      .star-des{font-size: 28px;line-height: 40px;margin-top: 0px;color: #9452A3}
      .star-date{font-size: 28px;line-height: 40px;margin-top: 25px;color: #FCDFC9}
    }
    .card-button{
      margin-top: 45px;
      .button-icon{
        width: 48px;
        height: 48px;
        margin: 0px 16px 10px;
        background: url('../assets/img/card-button.png') no-repeat;
        background-size: contain;
      }
      .button-txt{
        font-size: 26px;line-height:38px ;color: #D27AE7;
      }
    }
  }

}
</style>
