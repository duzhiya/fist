<template>
  <!-- 众星学院 -->
  <div class="stars">
    <div class="stars_back">
      <van-col span="24">
        <van-col span="2"></van-col>
        <van-col span="2" class="my_zuo">
          <img src="../assets/zuo1.png" width="80%" alt="">
        </van-col>
        <van-col span="16" style="text-align: center;">
          <p>我的</p>
        </van-col>
      </van-col>
    </div>
    <van-search placeholder="请输入搜索关键词" v-model="value" />
    <van-col span="8">
      <img src="../assets/stars/partners (4).png" @click="tabId=0" class="{tabId=0}" width="95%" alt="">
    </van-col>
    <van-col span="8">
      <img src="../assets/stars/partners (2).png" @click="tabId=1" class="{tabId=1}" width="95%" alt="">
    </van-col>
    <van-col span="8">
      <img src="../assets/stars/partners (1).png" @click="tabId=2" class="{tabId=1}" width="95%" alt="">
    </van-col>
    <van-col span="8">
      <img src="../assets/stars/partners (7).png" @click="tabId=3" class="{tabId=1}" width="95%" alt="">
    </van-col>
    <van-col span="8">
      <img src="../assets/stars/partners (6).png" @click="tabId=4" class="{tabId=1}" width="95%" alt="">
    </van-col>
    <van-col span="8">
      <img src="../assets/stars/partners (2).png" @click="tabId=5" class="{tabId=1}" width="95%" alt="">
    </van-col>
    <van-col span="24" class="huise"></van-col>
    <!-- 选项卡 -->
    <div class="box">
      <div v-show="tabId===0">
        <van-col span="24" class="box_index">
          <van-col span="1"> </van-col>
          <van-col span="8">
            <img src="../assets/stars/partners (5).jpg" alt="">
          </van-col>
          <van-col span="15">
            <van-col span="24">
              <b>众星学院、你应该知道的三件事</b>
            </van-col>
            <van-col span="24" class="box_xx">
              <span> xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
                <br>
                xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
                xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
              </span>
              <p>2019-5-15 16:20 100评论.999+点赞</p>
            </van-col>
          </van-col>
        </van-col>
      </div>
      <div v-show="tabId===1">
        <van-col span="24" class="box_index">
          <van-col span="1"> </van-col>
          <van-col span="8">
            <img src="../assets/stars/partners (1).jpg" alt="">
          </van-col>
          <van-col span="15">
            <van-col span="24">
              <b>众星学院、你应该知道的三件事</b>
            </van-col>
            <van-col span="24" class="box_xx">
              <span> xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
                <br>
                xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
                xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
              </span>
              <p>2019-5-15 16:20 100评论.999+点赞</p>
            </van-col>
          </van-col>
        </van-col>
      </div>
      <div v-show="tabId===2">
        <van-col span="24" class="box_index">
          <van-col span="1"> </van-col>
          <van-col span="8">
            <img src="../assets/stars/partners (2).jpg" alt="">
          </van-col>
          <van-col span="15">
            <van-col span="24">
              <b>众星学院、你应该知道的三件事</b>
            </van-col>
            <van-col span="24" class="box_xx">
              <span> xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
                <br>
                xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
                xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
              </span>
              <p>2019-5-15 16:20 100评论.999+点赞</p>
            </van-col>
          </van-col>
        </van-col>
      </div>
      <div v-show="tabId===3">
        <van-col span="24" class="box_index">
          <van-col span="1"> </van-col>
          <van-col span="8">
            <img src="../assets/stars/partners (2).jpg" alt="">
          </van-col>
          <van-col span="15">
            <van-col span="24">
              <b>众星学院、你应该知道的三件事</b>
            </van-col>
            <van-col span="24" class="box_xx">
              <span> xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
                <br>
                xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
                xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
              </span>
              <p>2019-5-15 16:20 100评论.999+点赞</p>
            </van-col>
          </van-col>
        </van-col>
      </div>
      <div v-show="tabId===4">
        <van-col span="24" class="box_index">
          <van-col span="1"> </van-col>
          <van-col span="8">
            <img src="../assets/stars/partners (3).jpg" alt="">
          </van-col>
          <van-col span="15">
            <van-col span="24">
              <b>众星学院、你应该知道的三件事</b>
            </van-col>
            <van-col span="24" class="box_xx">
              <span> xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
                <br>
                xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
                xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
              </span>
              <p>2019-5-15 16:20 100评论.999+点赞</p>
            </van-col>
          </van-col>
        </van-col>
      </div>
      <div v-show="tabId===5">
        <van-col span="24" class="box_index">
          <van-col span="1"> </van-col>
          <van-col span="8">
            <img src="../assets/stars/partners (4).jpg" alt="">
          </van-col>
          <van-col span="15">
            <van-col span="24">
              <b>众星学院、你应该知道的三件事</b>
            </van-col>
            <van-col span="24" class="box_xx">
              <span> xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
                <br>
                xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
                xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
              </span>
              <p>2019-5-15 16:20 100评论.999+点赞</p>
            </van-col>
          </van-col>
        </van-col>
      </div>
    </div>
  </div>

</template>

<script>
  import stars1 from '../assets/stars/partners (4).jpg'
  export default {
    data() {
      return {
        activeName: 'a',
        tabId: 1,
        stars: [{
          img: stars1,
        }]
      };
    }
  }
</script>

<style>
  .box {
    height: 400px;
  }

  .box img {
    width: 110px;
    height: 90px;
  }

  .box_index {
    font-size: 12px;
    padding-top: 10px;
    padding-bottom: 10px;
    border-bottom: 2px #F5F5F5 solid;
  }

  .box_xx {
    margin-top: 5px;
    text-indent: 1em;
    color: #867E7F;
  }

  .stars_top {
    padding: 0;
    margin: 0;
  }

  .stars_back {
    background-image: url(../assets/my/card01.png);
    height: 55px;
    color: #FFFFFF;
  }

  .huise {
    background-color: #F5F4F4;
    width: 100%;
    height: 10px;
    margin-top: 10px;
  }
</style>
