<template>
  <div class="page-tips">
    <!-- 这个页面不要自动格式化，Px会被转换掉 -->
    <div @click="$router.go(-1)" class="back"></div>
    <div class="top-title"></div>
    <div class="share-button" @click="saveImg"></div>
    <div class="share-content">
      <van-circle
        class="circle"
        v-model="currentRate"
        :rate="res.score"
        :speed="100"
        :text="res.score.toString()"
        layer-color="transparent"
        :stroke-width="60"
      />

      <div class="content">
        <div class="title">{{res.question_name}}</div>
        <div class="avatar">
          <img :src="avatar" alt />
        </div>
        <div class="name">{{nickname}}</div>
        <div class="time">完成时间:{{res.finish_at | dd}}</div>
        <div class="res">{{res.result_content}}</div>
        <div class="qrcode"></div>
        <div class="text">长按保存图片，分享给他人</div>
      </div>
    </div>
    <van-popup position="bottom"  v-model="show">
      <div class="popup">
        <div class="top">
          <!-- <div class="colse">关闭</div> -->
          <!-- <a href=""></a> -->
          <!-- <a href="" class="download">下载</a> -->
          
        </div>
        <span @click="show=false" class="cha iconfont icon-cha"></span>
        <div class="img-box">
          <img class="share-img" src="" alt="">
          
        </div>
      </div>
    </van-popup>
  </div>
</template>

<script>
import md5 from "js-md5";
import html2canvas from "html2canvas";

export default {
  props: { id: 0, mid: 0 },
  data() {
    return {
      currentRate: 50,
      score: "80",
      res: {},
      show:false,
    };
  },
  computed: {
    avatar() {
      return localStorage.getItem("avatar");
    },
    nickname() {
      return localStorage.getItem("nickname");
    },
    level() {
      return localStorage.getItem("level");
    }
  },
  created() {
    this.getResult();
  },
  methods: {
    saveImg() {
      this.show = true
      // 想要保存的图片节点
      const dom = document.querySelector(".content");

      // 创建一个新的canvas
      const Canvas = document.createElement("canvas");
      // const width = document.body.offsetWidth; // 可见屏幕的宽
      // const height = document.body.offsetHeight; // 可见屏幕的高

      const width = dom.offsetWidth; // 可见屏幕的宽
      const height = dom.offsetHeight; // 可见屏幕的高
      const scale =1; window.devicePixelRatio/2; // 设备的devicePixelRatio

      // 将Canvas画布放大scale倍，然后放在小的屏幕里，解决模糊问题
      Canvas.width = width * scale;
      Canvas.height = height * scale;
      Canvas.getContext("2d").scale(scale, scale);

      html2canvas(dom, {
        canvas: Canvas,
        scale,
        useCORS: true,
        logging: true,
        width: width + "px",
        hegiht: height + "px"
      }).then(canvas => {
        const context = canvas.getContext("2d");
        // 关闭抗锯齿形
        context.mozImageSmoothingEnabled = false;
        context.webkitImageSmoothingEnabled = false;
        context.msImageSmoothingEnabled = false;
        context.imageSmoothingEnabled = false;
        // canvas转化为图片
        const img = this.canvas2Image(canvas, canvas.width, canvas.height);
        // document.body.appendChild(img);
        // img.style.cssText =
        //   "width:100%;height:100%;position:absolute;top:0;left:0;right:0;bottom:0;opacity:0;";
      });
    },
    canvas2Image(canvas, width, height) {
      const retCanvas = document.createElement("canvas");
      const retCtx = retCanvas.getContext("2d");
      retCanvas.width = width;
      retCanvas.height = height;
      retCtx.drawImage(canvas, 0, 0, width, height, 0, 0, width, height);
      const img = document.querySelector(".share-img");
      img.src = retCanvas.toDataURL("image/jpeg"); // 可以根据需要更改格式
      // document.querySelector('.download').href=retCanvas.toDataURL("image/jpeg"); 
      return img;
    },

    async getResult() {
      let res = await this.$http.get(`test/question/result/${this.mid}`);
      if (res.code == 200) {
        console.log(res.data);
      }
      this.res = res.data;
    }
  }
};
</script>
<style>
.van-circle__text {
  color: #fff;
  font-size: 60px;
}
</style>
<style lang="scss" scoped>
.popup{
  background:rgba(51,20,115,1);
  .icon-cha{
        color: #ADA7C1;
        font-size: 40px;
        position: absolute;
        top:32px;
        right: 32px;
      }
  .top{
    background: #400e8d;
    display: flex;
    position: relative;
    
    div,a{
      flex:1;
      text-align: center;
      font-size: 32px;
      line-height: 64px;
      color:#fff;
    }
  }
}
.page-tips {
  height: 100vh;

  background: #261a58;
  background-size: cover;
  position: relative;
  padding: 40px 0 0; // 50px -> 40px
  .back {
    width: 72px;
    height: 68px;
    background: url("../assets/img/return.png") no-repeat;
    background-size: cover;
    position: absolute;
    top: 50px;
    left: 0px;
  }
  .top-title {
    font-size: 48px;
    color: rgba(255, 255, 255, 1);
    // line-height:44px;
    text-shadow: 0px 2px 5px rgba(0, 0, 0, 0.3);
    margin: 20px 0px 75px 96px;
  }
  .share-button {
    width: 34px;
    height: 34px;
    position: absolute;
    background: url("../assets/img/share.png") no-repeat;
    background-size: contain;
    top: 67px;
    right: 28px;
  }
  .circle {
    width: 200px;
    height: 200px;
    margin-bottom: -50Px;
    margin-left: calc(50vw - 50Px);
  }
  .content {
    // margin-top: 270px;
    height: calc(100vh - 50px - 20px - 48px - 270px + 100px + 50Px);
    background: #400e8d;
    // overflow: scroll;
    border-radius: 53px 53px 0px 0px;
    padding: 180px 50px;
    font-size: 32px;
    color: #fff;
    line-height: 52px;
    padding: 130px 72px 300px;
    text-align: center;
    .title {
      font-size: 40px;
      color: #fff;
      margin-bottom: 57px;
    }
    .avatar {
      width: 106px;
      height: 106px;
      border-radius: 50%;
      // background: url('../assets/img/img1.png') no-repeat;
      background-size: cover;
      margin-bottom: 25px;
      margin-left: 250px;
      img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
      }
    }
    .name {
      font-size: 40px;
      color: #fff;
      margin-bottom: 34px;
    }
    .time {
      font-size: 24px;
      color: rgba(255, 255, 255, 0.39);
      margin-bottom: 72px;
    }
    .res {
      font-size: 32px;
      color: #fff;
      margin-bottom: 100px;
      line-height: 52px;
    }
    .qrcode {
      width: 234px;
      height: 234px;
      background: url("../assets/img/qrcode.png") no-repeat;
      margin-bottom: 25px;
      margin-left: 187px;
    }
    .title {
      font-size: 40px;
      color: #fff;
      margin-bottom: 57px;
    }
  }
}
</style>