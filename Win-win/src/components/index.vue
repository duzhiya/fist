<template>
  <!-- 首页 -->
  <div class="index">
    <!-- 头部 -->
    <div class="index-top">
      <van-row>
        <van-col span="1"></van-col>
        <van-col span="6" class="index_top_span">
          <img src="../assets/vip_1.png" width="40%" alt="">
          <span>你好</span>
          <img src="../assets/partner.png" class="index_top_img" width="55%" alt="">
        </van-col>
        <van-col span="12">
          <!-- <input type="text" class="index_ipt"> -->
          <div class="index_top_int">
            <img src="../assets/search.png" alt="">
            <input type="text" class="index_top_int">
          </div>
        </van-col>
        <van-col span="5" class="index_top_Order">
          <img src="../assets/message.png" width="35%" alt="">
          <span>订单</span>
        </van-col>
      </van-row>
      <!-- 轮播 -->
      <van-swipe :autoplay="3000" indicator-color="white">
        <van-swipe-item>
          <img src="../assets/banner01.png" width="100%" alt="">
        </van-swipe-item>
        <van-swipe-item> <img src="../assets/banner01.png" width="100%" alt=""></van-swipe-item>
        <van-swipe-item> <img src="../assets/banner01.png" width="100%" alt=""></van-swipe-item>
        <van-swipe-item> <img src="../assets/banner01.png" width="100%" alt=""></van-swipe-item>
      </van-swipe>
    </div>
    <!-- 图标 -->
    <div class="index_cont">
      <ul class="index_icon">
        <li v-for="cont in imgas1">
          <img :src="cont.img" alt="">
          <br>
          <p>{{cont.font}}</p>
        </li>
      </ul>
      <ul class="index_icon">
        <li v-for="cont in imgas2">
          <img :src="cont.img" alt="">
          <br>
          <p>{{cont.font}}</p>
        </li>
      </ul>
      <!-- 交易量 transaction 交易 -->
      <div class="index_trct">
        <div class="index_trct_top">
          <img src="../assets/money.png" width="13%" alt="">
          <span>本月交易量</span>
        </div>
        <div class="index_trct_cont">
          <h4>商品交易额(元)</h4>
          <H2>XXXXXXXX</H2>
          <ul>
            <li>
              <b>12</b>
              <h4>新增会员(人)</h4>
            </li>
            <li>
              <b>10</b>
              <h4>新增VIP(人)</h4>
            </li>
          </ul>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
  import imgas1 from '../assets/user.png'
  import imgas2 from '../assets/mall.png'
  import imgas3 from '../assets/terminal.png'
  import imgas4 from '../assets/merchants.png'
  import imgas5 from '../assets/Invite-friends.png'
  import imgas6 from '../assets/list.png'
  import imgas7 from '../assets/integral.png'
  import imgas8 from '../assets/Home.png'
  export default {
    name: 'HelloWorld',
    data() {
      return {
        imgas1: [{
            img: imgas1,
            font: "用户扩展"
          },
          {
            img: imgas2,
            font: "商城"
          },
          {
            img: imgas3,
            font: "终端"
          },
          {
            img: imgas4,
            font: "我的商户"
          },

        ],
        imgas2: [{
            img: imgas5,
            font: "邀请好友"
          },
          {
            img: imgas6,
            font: "排行榜"
          },
          {
            img: imgas7,
            font: "积分兑换"
          },
          {
            img: imgas8,
            font: "更多"
          },
        ]
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  /* 头部 */
  .index-top {
    width: 100%;
    height: 220px;
    padding-top: 20px;
    background-color: black;
    border-bottom-left-radius: 120px;
    border-bottom-right-radius: 120px;
    color: #FEDFA9;
  }

  .van-swipe {
    top: 20px;
    width: 95%;
    left: 10px;
  }

  .index_top_int img {
    position: absolute;
    width: 6%;
    top: 25px;
    /* left: 5px; */
  }

  .index_top_int input {
    /* background-color: #515151; */
    width: 100%;
    line-height: 30px;
    border-radius: 8px;
    background-color: #515151;
    border: none;
  }

  .index_top_span span {
    position: absolute;
  }

  .index_top_img {
    position: relative;
  }

  .index_top_Order {
    position: relative;
    left: 10px;
  }

  .index_top_Order span {
    position: relative;
    top: 12px;
    left: -30px;
  }

  .van-cell-group {
    border-radius: 10px;
  }

  /* 内容填充 */
  .index_cont {
    background-color: #F8F8F8;
    width: 100%;
    height: 458px;

  }

  /* 图标 */
  .index_icon {
    margin-left: 40px;
    padding-top: 50px;
    text-align: center;
  }

  .index_icon li {
    float: left;
    padding-left: 20px;
  }

  .index_icon img {
    width: 50px;
    height: 50px;
  }


  .index {
    padding: 0;
    margin: 0;
    font-size: 12px;
  }

  /* 交易 */
  .index_trct {
    width: 80%;
    height: 200px;
    background-color: #FFFFFF;
    margin-top: 150px;
    margin-left: 40px;
    box-shadow: 2px 2px 10px #656B79;
  }

  .index_trct_top {
    border-bottom: 1px #F5F5F5 solid;
  }

  .index_trct_top span {
    font-size: 20px;
    position: relative;
    top: -10px;
  }

  .index_trct_top img {
    margin-top: 10px;
    margin-left: 10px;
  }

  .index_trct_cont {
    text-align: center;
  }

  .index_trct_cont h4 {
    color: #b3b3b3;
  }

  .index_trct_cont h2 {
    color: #f8b602;
  }

  .index_trct_cont b {
    color: #C41406;
  }

  .index_trct_cont li {
    float: left;
    padding-left: 50px;
  }
</style>
