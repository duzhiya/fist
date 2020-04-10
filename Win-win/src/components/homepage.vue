<template>
  <!-- 我的页面 -->
  <div class="my_top">
    <van-col span="24">
      <van-col span="2"></van-col>
      <van-col span="2" class="my_zuo">
        <img src="../assets/zuo1.png" width="80%" alt="">
      </van-col>
      <van-col span="16" style="text-align: center;">
        <p>我的</p>
      </van-col>
    </van-col>
    <van-col span="24" class="my_tx">
      <van-col span="2"></van-col>
      <van-col span="3">
        <img src="../assets/my/Head-portrait.png" width="100%" alt="">
      </van-col>
      <van-col span="18">
        <van-col span="24">
          <van-col span="2"></van-col>
          <van-col span="8">
            朱广峰
          </van-col>
        </van-col>
        <van-col span="24">
          <van-col span="2"></van-col>
          <van-col span="15">
            <span>邀请码：123456</span>
          </van-col>
        </van-col>
      </van-col>
    </van-col>
    <van-col span="24">
      <van-col span="3"></van-col>
      <van-col span="18">

        <div class="Profit">
        </div>

      </van-col>

    </van-col>
    <van-col span="2"></van-col>
    <van-col span="20">
      <div class="Profit_back">
        <van-col span="24">
          <img src="../assets/my/question.png" alt="">
          <span>累积收益</span>
          <br>
          <h3>0.00</h3>
          <!-- <img src="../assets/my/right.png" alt=""> -->
        </van-col>
        <van-col span="24">
          <ul>
            <li>
              <span>今日</span> <br>
              <span>激活奖励</span> <br>
              <span>0.00</span> <br>
            </li>
            <li>
              <span>当日</span> <br>
              <span>推广奖励</span> <br>
              <span>0.00</span> <br>
            </li>
            <li>
              <span>累计</span> <br>
              <span>育成奖励</span> <br>
              <span>0.00</span> <br>
            </li>
            <li class="myli">
              <span>今月</span> <br>
              <span>分润奖励</span> <br>
              <span>0.00</span> <br>
            </li>
          </ul>
        </van-col>
      </div>
    </van-col>
    <van-col span="3"> </van-col>
    <van-col span="18">
      <ul class="myul">
        <li>
          <img src="../assets/my/order.png" alt="">
          <br>
          <span>订单</span>
        </li>
        <li>
          <img src="../assets/my/mall.png" alt="">
          <br>
          <span>物料商城</span>
        </li>
        <li>
          <img src="../assets/my/attorney.png" alt="">
          <br>
          <span>授权书</span>
        </li>
        <li>
          <img src="../assets/my/service.png" alt="">
          <br>
          <span>客服</span>
        </li>
      </ul>
    </van-col>
    <van-col span="2"></van-col>
    <van-col span="24" class="huise"></van-col>
    <van-col span="24" class="liebiao" v-for="my in mys">
      <van-col span="4"></van-col>
      <van-col span="2">
        <img :src="my.img" width="90%" alt="">
      </van-col>
      <van-col span="1"></van-col>
      <van-col span="9">
        <span>{{my.font}}</span>
      </van-col>
      <van-col span="3">
        <img src="../assets/my/right.png" width="30%" alt="">
      </van-col>
    </van-col>

  </div>
</template>

<script>
  import imgas1 from '../assets/my/specification.png'
  import imgas2 from '../assets/my/tutorial.png'
  import imgas3 from '../assets/my/Teachers.png'
  import imgas4 from '../assets/my/feedback.png'
  import imgas5 from '../assets/my/Set.png'
  export default {
    data() {
      return {
        activeName: 'a',
        mys: [{
            img: imgas1,
            font: "推广规则"
          },
          {
            img: imgas2,
            font: "新手教程"
          },
          {
            img: imgas3,
            font: "创业导师"
          },
          {
            img: imgas4,
            font: "意见反馈"
          },
          {
            img: imgas5,
            font: "设置"
          },
        ]
      };
    }
  }
</script>

<style>
  .huise {
    background-color: #F5F4F4;
    width: 100%;
    height: 10px;
    margin-top: 10px;
  }

  .liebiao {
    padding-top: 15px;
    padding-bottom: 15px;
    color: #000000;
    font-size: 15px;
    border-bottom: 1px #F5F5F5 solid;
  }

  .liebiao img {
    /* width: 90%; */
  }



  .my_top {
    background-image: url(../assets/my/card01.png);
    /* background-color: #000000; */
    width: 100%;
    height: 220px;
    color: #FFFFFF;
    padding-top: 20px;
  }

  .my_zuo {
    margin-top: 15px;
  }

  .my_tx {
    font-size: 14px;
  }

  .my_tx span {
    margin-top: 10px;
  }

  .Profit {
    border: 2px #E0B68C solid;
    border-radius: 10px;
    width: 100%;
    height: 50px;
    margin-top: 20px;
  }

  .Profit_back {
    /* background-image: url(../assets/my/card.png); */
    background-color: #F6DCA6;
    border-radius: 10px;
    width: 100%;
    height: 160px;
    margin-top: -20px;
    padding-top: 20px;
    text-align: center;
    color: #8d480a;
    font-size: 14px;
    margin-bottom: 20px;
  }

  .Profit_back img {
    width: 20px;
    height: 20px;
  }

  .Profit_back li {
    border-right: 1px #8F4F0C solid;
    float: left;
    margin-left: 15px;
  }

  .myul {
    font-size: 14px;
    text-align: center;
    color: #000000;
    width: 100%;
  }

  .myul li {
    float: left;
    width: 25%;
  }

  .myul img {
    width: 60%;
    margin-left: 5px;
  }
</style>
