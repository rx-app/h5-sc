<template>
  <div>
    <div class="page-my">
      <div class="title">
        <div class="avatar">
          <img :src="avatar" alt="">
        </div>
        <div class="right">
          <div class="nickname">{{nickname}} <span @click="logout">[注销]</span> </div>
          <div class="level">{{level | lv}}</div>
          
        </div>
      </div>

      <div class="card-list">
        <van-list
          v-model="loading"
          :finished="finished"
          finished-text="没有更多了"
          @load="getList"
          class="card-list"
          v-if="(list.length>0 || firstLoad)"
        >
          <div v-for="(item,index) in list" :key="index" class="card">
            <div class="top">{{item.name}}</div>
            <div class="main">
              <div class="price">
                <span class="new">¥ {{item.paid_price | cy}}</span>
                <span class="old">¥{{item.origin_price | cy}}</span>
              </div>
              <div class="time">完成时间: {{item.name}}</div>
              <div class="number">订单标号: {{item.out_trade_no}}</div>
            </div>
            <div v-if="item.evaluation_status==2" class="bottom">查看报告</div>
            <div v-if="item.evaluation_status==0" class="bottom">去测试</div>
          </div>
        </van-list>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Footer from "../components/Footer";
export default {
  data() {
    return {
      info: {},
      list: [],
      page_index: 1,
      page_size: 5,
      loading: false,
      finished: false,
      firstLoad: true,
      count: 0
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
  components: {
    // Header,
    Footer
  },
  mounted() {
    this.getList();
    this.firstLoad =false
  },
  methods: {
    logout(){
      localStorage.setItem('nickname','')
      localStorage.setItem('gender','')
      localStorage.setItem('mobile','')
      localStorage.setItem('email','')
      localStorage.setItem('avatar','')
      localStorage.setItem('level','')
      localStorage.setItem('token','')
    },
    async getList() {
      let res = await this.$http.get(`test/question/paid/page`, {
        params: {
          page_index: this.page_index,
          page_size: this.page_size,
          evaluation_status: 0
        }
      });
      this.page_index++
      this.list = [...this.list, ...res.data.result];
      this.count = res.data.total_count;
      this.loading = false;
      if (this.list.length >= this.count) {
        this.finished = true;
      }
      console.log(res.data);
    }
  }
};
</script>

<style  lang="scss"  scoped>
.page-my {
  background: #261a58;
  padding: 20px 26px 0;

  .title {
    font-size: 48px;
    line-height: 48px;
    color: #fff;
    text-align: center;
    padding: 20px 30px 60px;
    // margin-bottom: 78px;
    display: flex;
    justify-content: center;
    align-items: center;
    .avatar{
      width: 120px;
      height: 120px;
      border-radius: 50%;
      img{
        width: 120px;
        height: 120px;
        border-radius: 50%;
      }
      
    }
    .right{
      margin-left: 40px;
      .nickname{font-size: 40px;line-height: 40px;color: #fff;
      span{margin-left: 5px;}
      margin-bottom: 10px;
      }
      .level{font-size: 32px;line-height: 32px;color: #fff;
      background-color:rgb(30,21,70);
      padding: 10px 30px;
      border-radius: 26px;
      }
    }
  }
  .card-list {
    height: calc(100vh - 100px - 48px - 78px);
    overflow-y: scroll;
    padding-bottom: 300px; // ios 只设置100px,在iPhone 6p 下不够
    .card {
      width: 698px;
      // height:353px;
      background: rgba(64, 14, 141, 0.5);
      border-radius: 20px;
      margin-bottom: 26px;
      .top {
        background: #4c2797;
        height: 72px;
        border-radius: 20px 20px 0 0;
        line-height: 72px;
        color: #fff;
        font-size: 32px;
        text-align: center;
      }
      .main {
        // height: 180px;
        padding: 33px 0 0 37px;
        font-size: 24px;
        line-height: 24px; // ios 8p x 下卡牌会特别高
        color: rgba(255, 255, 255, 0.5);
        .new {
          color: #fff;
          font-size: 32px;
          margin-right: 15px;
        }
        .old{
          text-decoration:line-through;
        }
        .time {
          margin: 26px 0;
        }
        .number {
          margin-bottom: 26px;
        }
        border-bottom: 1px solid #4f19a2;
      }
      .bottom {
        width: 100%;
        height: 100px;
        font-size: 32px;
        font-family: PingFang SC;
        font-weight: bold;
        color: rgba(255, 255, 255, 1);
        line-height: 100px;
        text-align: center;

        background: linear-gradient(
          0deg,
          rgba(72, 197, 255, 1) 0%,
          rgba(144, 77, 255, 1) 100%
        );
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-position: center;
        // padding-left: 200px;
      }
    }
  }
}
</style>
