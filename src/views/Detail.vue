<template>
  <div class="page-tips">
    <router-link tag="div" :to="{name:'main'}" class="back"></router-link>
    <div class="title">{{res.name}}</div>
    <div class="tips-bar"></div>
    <div class="tips-bottom">
      <div v-html="res.content" class="des">
        <!-- {{res.content}} -->
      </div>
      <div @click="buyItem" class="price">
        <div class="left">测试题</div>
        <div  class="right">¥{{res.present_price | cy}}</div>
      </div>
      <div @click="buyVIP" class="price">
        <div class="left">尊享年会会员会员免费答</div>
        <div class="right">¥99.00</div>
      </div>
    </div>
    <van-popup position="bottom"  v-model="show">
      <div class="popup">
        <div class="item">微信</div>
        <div class="item">支付宝</div>
      </div>
    </van-popup>

    <div class="pay">
      <div class="left">¥ {{price | cy}}</div>
      <div class="right" @click="show=true">去支付</div>
    </div>
  </div>
</template>

<script>
import md5 from "js-md5";

export default {
  props: {
    id: 0
  },
  data() {
    return {
      price:0.00,
      VIP_price:99.00,
      res:{},
      index:1,
      show:false,

    };
  },
  methods: {
    buyItem(){
      
      this.price = this.res.present_price;
      
    },
    buyVIP(){
      this.price = this.VIP_price;
    },
    async getDetail(){
      if(!this.id){
        return
      }
      let res = await this.$http.get(
        `test/question/${this.id}`
      );
      this.res = res.data
      // this.$nextTick(()=>{
        this.price = this.res.present_price
      // })
      
      console.log(this.res)
    }
  },
  mounted(){
    
    this.getDetail();
  },
};
</script>

<style lang="scss" scoped>
.page-tips {
  height: 100vh;

  background: #261a58;
  background-size: cover;
  position: relative;
  padding: 40px 0 0;
  .back {
    width: 72px;
    height: 68px;
    background: url("../assets/img/return.png") no-repeat;
    background-size: cover;
    position: absolute;
    top: 50px;
    left: 0px;
  }
  .title {
    font-size: 48px;
    color: rgba(255, 255, 255, 1);
    // line-height:44px;
    text-shadow: 0px 2px 5px rgba(0, 0, 0, 0.3);
    margin: 20px 96px 75px 96px;
    text-align: center;
  }
  .tips-bar {
    position: absolute;
    top: 220px;
    left: 55px;
    width: 640px;
    height: 128px;
    background: url("../assets/img/tips.png") no-repeat;
    background-size: cover;
  }
  .tips-bottom {
    margin-top: 175px;
    height: calc(100vh - 50px - 20px - 48px - 75px - 100px + 300px);
    background: #400e8d;
    border-radius: 53px 53px 0px 0px;
    padding: 180px 26px;
    font-size: 32px;
    color: #fff;
    line-height: 52px;
    .des{
      padding: 0 24px;
      margin-bottom: 130px;
    }
    .go {
      width: 153px;
      height: 153px;
      background: linear-gradient(
        90deg,
        rgba(72, 197, 255, 1),
        rgba(144, 77, 255, 1)
      );
      border-radius: 50%;
      font-size: 40px;
      line-height: 153px;
      text-align: center;
      position: absolute;
      left: 300px;
      bottom: 15vw;
    }
  }
  .price {
    width: 696px;
    height: 96px;
    background: rgba(111, 92, 157, 1);
    border-radius: 13px;
    font-size: 32px;
    line-height: 96px;
    display: flex;
    padding: 0 33px;
    margin-top: 30px;
    .left {
      flex: 1;
      text-align: left;
      line-height: 96px;
    }
    .right {
      width: 200px;
      text-align: right;
      line-height: 96px;
    }

    &.on {
      border: 4px solid rgba(111, 92, 157, 1);
      background: #400e8d;
    }
  }
  .popup{
    width:750px;
    height:528px;
    background:rgba(51,20,115,1);
    // border-radius:13px 13px 0px 0px;
  }
  .pay{
    display: flex;
    height: 106px;
    width: 100vw;
    position: absolute;
    bottom: 0;
    .left{
      flex: 1;
      background: #261A58;
      font-size: 40px;
      color: #fff;
      line-height: 106px;
      padding-left: 30px;
    }
    .right{
      width:287px;
      line-height: 106px;
      font-size: 40px;
      color: #fff;
      text-align: center;
      background:linear-gradient(90deg,rgba(72,197,255,1),rgba(144,77,255,1));
    }
  }
}
</style>