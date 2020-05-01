<template>
  <div class="login-box">
    <input class="username" type="text" v-model="username" placeholder="用户名" />

    <input class="password" type="text" v-model="password" placeholder="密码" />

    <button @click="login">登录</button>
  </div>
</template>

<script>
import md5 from 'js-md5';

export default {
  data() {
    return {
      username: "小名",
      password: "111111"
    };
  },
  methods: {
    async login() {
      let pwd = md5(this.password);
      const res = await this.$http.post("auth/login", {
        username: this.username,
        password: pwd
      });
      // sessionStorage.token = res.data.token

      if (res.code == 200) {
        // this.$message({
        //   type: "success",
        //   message: "登录成功"
        // });
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("name", this.username);
        let userInfo = await this.$http.get("auth/info")
        localStorage.setItem('info',JSON.stringify(userInfo.data))
        this.$router.push("/");
      } else {
        // this.$message({
        //   type: "error",
        //   message: res.data.msg
        // });
      }
      // this.$router.push('/auth/login')
    }
  }
};
</script>

<style lang="scss" scoped>
.login-box{
    width: 100vw;
    padding: 40px;
    input{display: block;width: 100%;height: 60px;}
    .username{
        
    }
}
</style>