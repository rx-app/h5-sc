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
        <span @click="show=false" class="cha iconfont icon-cha"></span>
        <div class="pop-price">¥1000.00</div>
        <div class="item">
          <span @click="ali_pay" class="left">
            <!-- <svg t="1589343378771" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2134" width="200" height="200"><path d="M845.87 659.697C991.05 709.256 1024 711.92 1024 711.92V186.187C1024 83.351 940.65 0 837.813 0H186.187C83.351 0 0 83.35 0 186.187v651.64C0 940.65 83.35 1024 186.187 1024h651.64c91.995 0 168.208-66.786 183.282-154.473-28.793-12.258-267.475-114.191-391.8-175.12-88.818 111.406-203.4 178.99-322.335 179.005-201.17 0-269.478-179.456-174.23-297.593 20.766-25.735 56.109-50.341 110.938-64.12 85.745-21.49 222.283 13.387 350.208 56.44a723.576 723.576 0 0 0 56.802-141.462H256.407v-40.75H459.7v-72.96H213.474v-40.749H459.7V168.132s0-17.529 17.438-17.529h99.373v121.615h243.44v40.75H576.498v72.96l198.731 0.015c-19.02 79.405-47.917 152.5-84.148 216.681 60.325 22.242 114.447 43.294 154.79 57.073z" fill="#00A0E9" p-id="2135"></path><path d="M260.819 572.642c-25.209 2.56-72.493 13.914-98.35 37.21-77.537 68.894-31.141 194.846 125.712 194.861 91.166 0 182.287-59.437 253.846-154.563-101.782-50.673-188.024-86.905-281.208-77.508z" fill="#00A0E9" p-id="2136"></path></svg> -->
            <span class="zhifubao"></span><span class="name">支付宝</span></span><span class="arrow iconfont icon-arrowR"></span>
        </div>
        <div @click="weixin_pay" class="item">
          <span class="left"><span class="weixin"></span><span class="name">微信</span></span><span class="arrow iconfont icon-arrowR"></span>
        </div>
      </div>
    </van-popup>
    <!-- <van-overlay :show="pop_show" @click="show = false">
      <div class="wrapper" @click.stop> -->
        <div v-html="this.form" class="hidden" />
      <!-- </div>
    </van-overlay> -->


    <div class="pay">
      <div class="left"> ¥ {{price | cy}}</div>
      <div class="right" @click="show=true">去支付</div>
    </div>
  </div>
</template>

<script>
import md5 from "js-md5";

export default {
  props: {
    id: 0,
  },
  data() {
    return {
      price:0.00,
      VIP_price:99.00,
      res:{},
      index:1,
      show:false,
      timer:null,
      ispay:0,
      form:'',
      pop_show:false,

    };
  },
  created(){
    this.timer = setInterval(() =>{
                //超时处理
                //WeixinJSBridge加载需要1-2秒  WeixinJSBridge is not defined
                if (typeof WeixinJSBridge != "undefined" && this.ispay == 0) {
                    this.ispay = 1
                    this.jsApiCall(this.oqqq)
                    clearInterval(this.timer)
                }
            },500);
  },
  methods: {
    async ali_pay(){
      this.pop_show = true
      this.show = false
      let res = await this.$http.post(
        `pay/alipay/wappay`,{
          
          "number": 1,
          "package_key": "num_1",
          "package_type": 1,
          "platform_id": 0,
          "ref_ids": [this.id],
          "total_fee": 1

        }
      );
      if(res.code == 200){
        this.form = res.data.form
        this.$nextTick(r=>{
          document.querySelector('input[type=submit]').click()
        })
      }
      console.log(res.data)
    },
    async weixin_pay(){
      let res = await this.$http.post(
        `pay/wxpay/jsapi_prepay`,{
          
          "number": 1,
          "package_key": "num_1",
          "package_type": 1,
          "platform_id": 0,
          "ref_ids": [this.id],
          "total_fee": 1

        }
        
      );
      let r = res.data
      WeixinJSBridge.invoke(
        'getBrandWCPayRequest', {
           "appId":r.app_id,     //公众号名称，由商户传入     
         "timeStamp":r.time_stamp,         //时间戳，自1970年以来的秒数     
         "nonceStr":r.nonce_str, //随机串     
         "package":r.packages,     
         "signType":r.sign_type,         //微信签名方式：     
         "paySign":r.pay_sign //微信签名 

        },
        function(res){
          alert(JSON.stringify(res))
        if(res.err_msg == "get_brand_wcpay_request:ok" ){
          alert('支付回调')
        } 
    }); 
      console.log(res)
    },
    buyItem(){
      
      this.price = this.res.present_price;
      
    },
    buyVIP(){
      // this.price = this.VIP_price;
      this.$router.push({name:'buyVIP'})
    },
    async getDetail(){
      if(!this.id){
        return
      }
      let res = await this.$http.get(
        `test/question/no_paid/${this.id}`
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
.hidden{}
.wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
  }

  .block {
    width: 120px;
    height: 120px;
    background-color: #fff;
  }
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
      padding: 140px 0px 0;
      position: relative;
      .pop-price{
        // height: 257px;
        color: #fff;
        font-size: 90px;
        line-height: 90px;
        padding-bottom: 26px;
        text-align: center;
        border-bottom: 1px solid #4F19A2;

      }
      .item{
        padding: 0 34px;
        border-bottom: 1px solid #4F19A2;
        height: 93px;
        line-height: 93px;
        color: #fff;
        font-size: 32px;
        display: flex;
        
        .left{
          flex: 1;
          vertical-align: middle;
          .zhifubao{
            display: inline-block;
            width: 34px;
            height: 34px;
            margin-right: 16px;
            background: url("../assets/img/alipay.png") no-repeat;;
            background-size: contain;
            vertical-align: middle;
          }
          .weixin{
            display: inline-block;
            width: 34px;
            height: 34px;
            margin-right: 16px;
            background: url("../assets/img/weixin.png") no-repeat;;
            background-size: contain;
            vertical-align: middle;
          }
          .name{
            vertical-align: middle;
          }
        }
        .icon-arrowR{
          width: 40px;
          font-size: 40px;
          color: #ADA7C1;
        }
        
      }
      .icon-cha{
        color: #ADA7C1;
        font-size: 40px;
        position: absolute;
        top:32px;
        right: 32px;
      }
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