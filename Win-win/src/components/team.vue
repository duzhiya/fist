<template>
  <!-- 我的团队页 -->
  <div id="team">
    <div class="team-top">
      <van-row>
        <van-col span="1"></van-col>
        <van-col span="3" class="team_top_img">
          <router-link to="/">
            <img src="../assets/多啦A梦.png" width="100%" alt="">
          </router-link>
        </van-col>
        <van-col span="15">
          <div class="team_top_int">
            <b>我的团队</b>
          </div>
        </van-col>
      </van-row>
      <!-- 轮播 -->
      <van-col span="1"></van-col>
      <van-col span="20" class="team_month">
        <van-col span="1"></van-col>
        <van-col span="9">
          <b>本月团队交易量</b>
          <br>
          <br>
        </van-col>
        <van-col span="24">
          <span>￥</span>
          <span>xxxxxxxx</span>
        </van-col>
      </van-col>
      <!-- <van-col span="2"></van-col> -->
    </div>
    <!-- transaction交易 -->
    <van-col span="24" class="team_month_transaction">
      <van-tabs v-model="activeName">
        <van-tab title="一级" name="a">
          <van-col span="24" class="team_text">
            <van-col span="8">本月累积</van-col>
            <van-col span="8">会员数</van-col>
            <van-col span="8">会员</van-col>
          </van-col>
          <van-col span="24" class="team_cont" v-for="team in teams">
            <van-col span="4">
              <img :src="team.img" width="100%" alt="">
            </van-col>
            <van-col span="20">
              <van-col span="1"></van-col>
              <van-col span="15">
                <p>王翠花</p>
              </van-col>
              <van-col span="8">
                <p> 交易额：500.65 </p>
              </van-col>
              <van-col span="1"></van-col>
              <van-col span="15">
                <span>高级合伙人</span>
              </van-col>
              <van-col span="8">
                <span>邀请人：朱广峰</span>
              </van-col>
            </van-col>
          </van-col>
        </van-tab>
        <van-tab title="二级" name="b">
          <van-col span="24" class="team_text">
            <van-col span="8">本月累积</van-col>
            <van-col span="8">会员数</van-col>
            <van-col span="8">会员</van-col>
          </van-col>
          <van-col span="24" class="team_cont" v-for="team in teams">
            <van-col span="4">
              <img :src="team.img" width="100%" alt="">
            </van-col>
            <van-col span="20">
              <van-col span="1"></van-col>
              <van-col span="15">
                <p>王翠花</p>
              </van-col>
              <van-col span="8">
                <p> 交易额：500.65 </p>
              </van-col>
              <van-col span="1"></van-col>
              <van-col span="15">
                <span>高级合伙人</span>
              </van-col>
              <van-col span="8">
                <span>邀请人：朱广峰</span>
              </van-col>
            </van-col>
          </van-col>
        </van-tab>
        <van-tab title="三级" name="c">
          <div class="dome">
            <van-col span="24" class="team_text">
              <van-col span="8">本月累积</van-col>
              <van-col span="8">会员数</van-col>
              <van-col span="8">会员</van-col>
            </van-col>
            <van-col span="24" class="team_cont" v-for="team in teams">
              <van-col span="4">
                <img :src="team.img" width="100%" alt="">
              </van-col>
              <!-- <van-col span="2"></van-col> -->
              <van-col span="20">
                <van-col span="1"></van-col>
                <van-col span="15">
                  <p>王翠花</p>
                </van-col>
                <van-col span="8">
                  <p> 交易额：500.65 </p>
                </van-col>
                <van-col span="1"></van-col>
                <van-col span="15">
                  <span>高级合伙人</span>
                </van-col>
                <van-col span="8">
                  <span>邀请人：朱广峰</span>
                </van-col>
              </van-col>
            </van-col>
          </div>
        </van-tab>
      </van-tabs>
    </van-col>
  </div>
</template>

<script>
  import imgas1 from '../assets/team/头像3.png'
  import imgas2 from '../assets/team/头像4.png'
  import imgas3 from '../assets/team/头像5.png'
  import imgas4 from '../assets/team/头像6.png'

  export default {
    data() {
      return {
        activeName: 'a',
        teams: [{
            img: imgas1,
          },
          {
            img: imgas2,
          },
          {
            img: imgas3,
          },
          {
            img: imgas4,
          }
        ]
      };
    }
  }
</script>

<style>
  /* 交易 */
  .team_month_transaction {
    /* height: 100px; */
    margin-top: 20px;
    margin-bottom: 50px;
  }

  .team_text {
    text-align: center;
    line-height: 40px;
  }

  .team_cont {
    width: 100%;
    height: 80px;
    border: 1px #B3B3B3 solid;
    font-size: 14px;
  }

  .team_cont img {
    margin-top: 8px;
  }

  /* 头部 */
  .team-top {
    width: 100%;
    height: 220px;
    padding-top: 20px;
    background-color: #2C2C2C;
    border-bottom-left-radius: 120px;
    border-bottom-right-radius: 120px;
    color: #FAFAFA;
  }

  .team_top_int {
    text-align: center;
  }

  .team_top_img img {
    position: relative;
    top: -10px;
  }

  .team_month {
    margin-top: 20px;
    width: 90%;
    padding-top: 10px;
    padding-left: 10px;
    background-color: #EDD299;
    height: 150px;
    color: #610A0A;
    text-align: center;
    border-radius: 10px;
  }

  .team_month span {
    font-size: 30px;
  }
</style>
