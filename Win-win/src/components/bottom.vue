<template>
  <div id="buttom">
    <ul class="buttom_ul">
      <li>
        <router-link to="/">
        <img src="../assets/home_1.png" width="30%" alt=""> <br>
        <b>首页</b>
        </router-link>
      </li>
      <li>
        <router-link to="/team">
        <img src="../assets/团队.png" width="30%" alt=""> <br>
        <b>我的团队</b>
        </router-link>
      </li>
      <li>
        <router-link to="">
        <img src="../assets/vip.png" width="30%" alt=""> <br>
        <b>成为VIP</b>
        </router-link>
      </li>
      <li>
        <router-link to="/Stars">
        <img src="../assets/college_1.png" width="30%" alt=""> <br>
        <b>众星学院</b>
        </router-link>
      </li>
      <li>
        <router-link to="/homepage">
        <img src="../assets/mine.png" width="30%" alt=""> <br>
        <b>我的</b>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
  import buttom1 from '../assets/home_1.png'
  import buttom2 from '../assets/团队.png'
  import buttom3 from '../assets/vip.png'
  import buttom4 from '../assets/college_1.png'
  import buttom5 from '../assets/mine.png'
  export default {
    data() {
      return {
        buttoms: [{
            img: buttom1,
            font: "首页"
          },
          {
            img: buttom2,
            font: "我的团队"
          },
          {
            img: buttom3,
            font: "成为VIP"
          },
          {
            img: buttom4,
            font: "众星学院"
          },
          {
            img: buttom5,
            font: "我的"
          }
        ]
      }
    }
  }
</script>

<style>
  .buttom_ul {
    
    position: fixed;
    background-color: #FFFFFF;
    bottom: 0;
    text-align: center;
    width: 100%;
  }

  .buttom_ul li {
    float: left;
    width: 75px;
  }

  .buttom_ul b {
    color: #b3b3b3;
    margin-left: -5px;
    font-size: 12px;
  }
</style>
