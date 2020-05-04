<template>
  <div class="page-login">
    <div class="back"></div>
    <div class="container">
      <div class="title">
        手机号登录
      </div>
      <div class="input-box">
        <input class="username" type="text" v-model="username" placeholder="用户名" />
        <span class="close"></span>
      </div>
      <div class="input-box">
        <input class="password" type="password" v-model="password" placeholder="密码" />
      </div>
    </div>
    <div class="login">
      同意协议并登陆
    </div>

    <div class="wechat-login">
      <div class="line"></div>
      <div class="text">其它登录</div>
      <div class="line"></div>
    </div>
    <div class="wechat-icon">
      
    </div>
    
      
  </div>
</template>

<script>
import md5 from 'js-md5';

export default {
  data() {
    return {
      username: "123456789",
      password: "111111"
    };
  },
  methods: {
    // async login() {
    //   let pwd = md5(this.password);
    //   const res = await this.$http.post("auth/login", {
    //     username: this.username,
    //     password: pwd
    //   });
    //   // sessionStorage.token = res.data.token

    //   if (res.code == 200) {
    //     // this.$message({
    //     //   type: "success",
    //     //   message: "登录成功"
    //     // });
    //     localStorage.setItem("token", res.data.token);
    //     localStorage.setItem("name", this.username);
    //     let userInfo = await this.$http.get("auth/info")
    //     localStorage.setItem('info',JSON.stringify(userInfo.data))
    //     this.$router.push("/");
    //   } else {
    //     // this.$message({
    //     //   type: "error",
    //     //   message: res.data.msg
    //     // });
    //   }
    //   // this.$router.push('/auth/login')
    // }
  }
};
</script>

<style lang="scss" scoped>
.page-login{
  height: 100vh;
  background: url('../assets/img/login-2x.png') no-repeat;
  background-size: cover;
  position: relative;
  padding: 400px 60px 0;
  .back{
    width:72px;
    height:67px;
    background: url('../assets/img/return.png') no-repeat;
    background-size: cover;
    position: absolute;
    top:50px;
    left: 0px;
  }
  .container{
    // width: 630px;
    .title{
      font-size: 60px;
      color: #fff;
      margin-bottom: 122px;
    }
    .input-box{
      width: 100%;
      position: relative;
      margin-bottom: 88px;
      input{
        width: 100%;
        border: none;background: #261A58;color:#fff;font-size: 28px;line-height: 3em;
        border-bottom: 1px solid #4F19A2;
      }
      .close{
        width:40px;
        height:40px;
        background: url('../assets/img/close.png') no-repeat;
        background-size: contain;
        border-radius:50%;
        position: absolute;
        right: 0px;
        bottom:28px;
      }
    }
  }
  .login{
    width:690px;
    height:96px;
    margin:0 -30px;
    background:linear-gradient(90deg,rgba(72,197,255,1),rgba(144,77,255,1));
    border-radius:0px 48px 48px 72px;
    font-size:36px;
    // font-family:PingFang SC;
    // font-weight:bold;
    color:rgba(255,255,255,1);
    line-height:96px;
    text-align: center;
  }
  .wechat-login{
    position: relative;
    margin:125px 100px 0;
    display: flex;
    .text{
      color:#9C8DBE;
      font-size: 26px;
      width: 170px;
      // flex: 1;
      text-align: center;
      // z-index: 100;
    }
    .line{
      width:145px;
      height:3px;
      background:rgba(79,25,162,1);
      margin-top: 11px;
    }
   
  }
   .wechat-icon{
      height: 60px;
      width: 60px;
      margin-left: 285px;
      margin-top: 50px;
      background: url('../assets/img/wechat.png') no-repeat;
      background-size: contain;
    }
}
</style>