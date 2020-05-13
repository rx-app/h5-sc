<template>
  <div class="page-cate">
    <router-link tag="div" :to="{name:'main'}" class="back"></router-link>
    <div class="top-title">专业心理测评</div>
    <div class="nav-bar">
      <div class="nav-list">
        <div class="item on">全部</div>
        <div class="item">性格</div>
        <div class="item">情感</div>
        <div class="item">职场</div>
        <div class="item">健康</div>
        <div class="item">人际</div>
        <div class="item">亲子</div>
      </div>
    </div>
    <div class="sort">
      <span>综合排序</span>
      <span class="active">按时间</span>
      <span>按热度</span>
    </div>
    <van-list
      v-model="loading"
      :finished="finished"
      finished-text="没有更多了"
      @load="onLoad"
      class="card-list"
    >
      <van-cell v-for="item in list" :key="item" :title="item" />
    </van-list>

    <mescroll-vue ref="mescroll" :down="mescrollDown" :up="mescrollUp" @init="mescrollInit">
      <div class="card-list">
        <div v-for="(item,index) in list" :key="index" class="item">
          <div class="left">
            <div class="title">{{item.name}}</div>
            <div class="cate">{{item.category_name}}</div>
            <div class="price">
              <span class="new">¥ {{item.present_price}}</span>
              <span class="old">¥{{item.origin_price}}</span>
              <span class="time">{{item.test_number}}已测</span>
            </div>
          </div>
          <div class="right">
            <img :src="require('../assets/img/img1.png')" alt />
          </div>
        </div>
      </div>
    </mescroll-vue>
    <div class="card-list">
      <div v-for="(item,index) in list" :key="index" class="item">
        <div class="left">
          <div class="title">{{item.name}}</div>
          <div class="cate">{{item.category_name}}</div>
          <div class="price">
            <span class="new">¥ {{item.present_price}}</span>
            <span class="old">¥{{item.origin_price}}</span>
            <span class="time">{{item.test_number}}已测</span>
          </div>
        </div>
        <div class="right">
          <img :src="require('../assets/img/img1.png')" alt />
        </div>
      </div>
      <!-- <div class="item">
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
      <div class="item">
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
      <div class="item">
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
      <div class="item">
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
      </div>-->
    </div>
  </div>
</template>

<script>
import MescrollVue from "mescroll.js/mescroll.vue";

export default {
  data() {
    return {
      page_size: 5,
      page_index: 1,
      order_by: 1,
      order_type: "DESC",
      category_id: "",
      keyword: "",
      list: "",
      mescroll: null, // mescroll实例对象
      mescrollDown: {}, //下拉刷新的配置. (如果下拉刷新和上拉加载处理的逻辑是一样的,则mescrollDown可不用写了)
      mescrollUp: {
        // 上拉加载的配置.
        callback: this.upCallback // 上拉回调,此处简写; 相当于 callback: function(page, mescroll) { }
      },
      dataList: [] // 列表数据
    };
  },
  components: {
    MescrollVue // 注册mescroll组件
  },
  methods: {
    async getTestList() {
      let res = await this.$http.get("test/question/page", {
        params: {
          page_index: this.page_index,
          page_size: this.page_size,
          order_by: this.order_by,
          order_type: this.order_type,
          category_id: this.category_id,
          keyword: this.keyword
        }
      });
      this.list = res.data.result;
      console.log(this.list);
    },
    upCallback(page, mescroll) {
      // 联网请求
      axios
        .get("xxxxxx", {
          params: {
            num: page.num, // 页码
            size: page.size // 每页长度
          }
        })
        .then(response => {
          // 请求的列表数据
          let arr = response.data;
          // 如果是第一页需手动置空列表
          if (page.num === 1) this.dataList = [];
          // 把请求到的数据添加到列表
          this.dataList = this.dataList.concat(arr);
          // 数据渲染成功后,隐藏下拉刷新的状态
          this.$nextTick(() => {
            mescroll.endSuccess(arr.length);
          });
        })
        .catch(e => {
          // 联网失败的回调,隐藏下拉刷新和上拉加载的状态;
          mescroll.endErr();
        });
    }
  },
  mounted() {
    this.getTestList();
  }
};
</script>

<style lang="scss" scoped>
.page-cate {
  height: 100vh;

  background: #261a58;
  background-size: cover;
  position: relative;
  padding: 50px 25px 0;
  .back {
    width: 72px;
    height: 68px;
    background: url("../assets/img/search.png") no-repeat;
    background-size: cover;
    position: absolute;
    top: 50px;
    left: 0px;
  }
  .top-title {
    font-size: 48px;
    color: rgba(255, 255, 255, 1);
    line-height: 48px;
    // line-height:44px;
    // text-shadow:0px 2px 5px rgba(0, 0, 0, 0.3);
    margin: 10px 0px 104px 96px;
  }
  .nav-bar {
    width: calc(100vw - 25px);
    overflow-x: scroll;
    height: 60px;
    // display: flex;
    .nav-list {
      width: 200vw; //这个宽度可能需要js重新计算
      height: 60px;
      overflow-y: hidden; //滚动时 ios 上会上下滑动
      .item {
        vertical-align: top;
        width: 116px;
        height: 60px;
        color: #afa0d2;
        line-height: 60px;
        text-align: center;
        display: inline-block;
        font-size: 24px;
        &.on {
          background: linear-gradient(
            90deg,
            rgba(72, 197, 255, 1),
            rgba(144, 77, 255, 1)
          );
          border-radius: 30px;
          color: #fff;
          font-size: 32px;
        }
      }
    }
  }
  .sort {
    font-size: 24px;
    margin: 39px 0 60px 0;
    text-align: center;
    span {
      margin-right: 40px;
      color: #afa0d2;
      &.active {
        color: #7679ff;
      }
    }
  }
  .card-list {
    // display: flex;
    // justify-content: space-between;
    // padding-top: 53px ;
    height: calc(100vh - 50px - 48px - 10px - 104px - 60px - 100px + 100px);
    overflow-y: scroll;
    padding-bottom: 400px;
    .item {
      // flex:1;
      height: 242px;
      width: 696px;
      background: #331473;
      border-radius: 20px;
      padding: 24px 26px;
      display: flex;
      color: #fff;
      margin-bottom: 26px;
      .left {
        width: 363px;
        margin-right: 27px;
        .title {
          font-size: 32px;
          vertical-align: top;
          line-height: 40px;
          height: 80px;
        }
        .cate {
          width: 175px;
          height: 44px;
          background: linear-gradient(
            90deg,
            rgba(133, 10, 223, 1),
            rgba(182, 10, 255, 1)
          );
          border-radius: 15px;
          font-size: 19px;
          line-height: 44px;
          text-align: center;
          color: #fff;
          vertical-align: middle;
          margin: 13px 0 24px;
        }
        .price {
          display: flex;
          font-size: 24px;
          line-height: 24px;
          color: rgba(255, 255, 255, 0.5);
          .new {
            font-size: 32px;
            color: #fff;
            margin-right: 14px;
          }
          .old {
            flex: 1;
          }
          .time {
            // margin-left: 90px;
          }
        }
      }
      .right {
        height: 192px;
        width: 256px;
        border-radius: 13px;
        img {
          width: 100%;
          height: 100%;
          border-radius: 13px;
        }
      }
    }
  }
}
</style>