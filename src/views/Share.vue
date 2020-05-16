<template>
  <div class="page-tips">
    <div @click="$router.go(-1)" class="back"></div>
    <div class="top-title" ></div>
    <div class="share-button"></div>

      <van-circle class="circle"  v-model="currentRate" :rate="80" :speed="100" :text="res.score.toString()"  layer-color="transparent" :stroke-width="60" />

    <div class="content">
      <div class="title">
        {{res.question_name}}
      </div>
      <div class="avatar"><img :src="avatar" alt=""></div>
      <div class="name">{{nickname}}</div>
      <div class="time">完成时间:{{res.finish_at | dd}}</div>
      <div class="res">
        {{res.result_content}}
      </div>
      <div class="qrcode"></div>
      <div class="text">长按保存图片，分享给他人</div>
    </div>
    
    
      
  </div>
</template>

<script>
import md5 from 'js-md5';

export default {
  props:{id:0,mid:0},
  data() {
    return {
      currentRate:50,
      score:'80',
      res:{},
    };
  },
  computed:{
    avatar(){
      return localStorage.getItem('avatar')
    },
    nickname(){
      return localStorage.getItem('nickname')
    },
    level(){
      return localStorage.getItem('level')
    },
  },
  created(){
    this.getResult();
  },
  methods: {
    async getResult(){
      let res = await this.$http.get(`test/question/result/${this.mid}`)
      if(res.code == 200){
        console.log(res.data)
      }
      this.res = res.data;
    }
  }
};
</script>
<style>
.van-circle__text{color: #fff;font-size: 60px;}
</style>
<style lang="scss" scoped>

.page-tips{
  height: 100vh;
  
  
  background: #261A58;
  background-size: cover;
  position: relative;
  padding: 40px 0 0; // 50px -> 40px
  .back{
    width:72px;
    height:68px;
    background: url('../assets/img/return.png') no-repeat;
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
    margin:20px 0px 75px 96px;
  }
  .share-button{
    width: 34px;
    height: 34px;
    position: absolute;
    background: url('../assets/img/share.png') no-repeat;
    background-size: contain;
    top:67px;
    right: 28px;
  }
  .circle{
    width: 200px;
    height: 200px;
    margin-bottom: -50Px;
    margin-left:calc( 50vw - 50Px ) ;
  }
  .content{
    // margin-top: 270px;
    height: calc(100vh - 50px - 20px - 48px - 270px + 100px + 50pX);
    background: #400E8D;
    // overflow: scroll;
    border-radius:53px 53px 0px 0px;
    padding: 180px 50px;
    font-size: 32px;
    color: #fff;
    line-height: 52px;
    padding: 130px 72px 300px;
    text-align: center;
    .title{font-size: 40px;color: #fff;margin-bottom: 57px;}
    .avatar{
      width:106px;
      height:106px;
      border-radius:50%;
      // background: url('../assets/img/img1.png') no-repeat;
      background-size: cover;
      margin-bottom: 25px;
      margin-left: 250px;
      img{
        width: 100%;
        height: 100%;
        border-radius:50%;
      }
    }
    .name{font-size: 40px;color: #fff;margin-bottom: 34px;}
    .time{font-size: 24px;color:rgba(255,255,255,0.39);margin-bottom: 72px;}
    .res{font-size: 32px;color: #fff;margin-bottom: 100px;line-height: 52px;}
    .qrcode{
      width:234px;
      height:234px;
      background: url('../assets/img/qrcode.png') no-repeat;
      margin-bottom: 25px;
      margin-left: 187px;
    }
    .title{font-size: 40px;color: #fff;margin-bottom: 57px;}
  }
  
  
}
</style>