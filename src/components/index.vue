<template>
     <main>
      <section class="section1">
        <a href="javascript:;"  class="People2">
          <img src="../assets/img/People2.png" alt>
        </a>
        <div class="fisrtitle">
          <i class="min"></i>
          <i class="max"></i>
          <span>寻找志同道合的小伙伴</span>
          <i class="max"></i>
          <i class="min"></i>
        </div>
        <a href="javascript:;"  class="down androidDown">
          <img src="../assets/img/download1.png" alt class>
        </a>
        <a href="javascript:;"  class="down iphoneDown">
          <img src="../assets/img/download2.png" alt class>
        </a>
      </section>
      <section class="section2">
        <h1>Bochat</h1>
        
        <h2>博信,通往去中心化世界的传门</h2>
        <a href="javascript:;" class="ipnoneImg">
          <img src="../assets/img/Phone.png" alt>
          <!-- <video-Player class="video video-player-box"  
                 ref="videoPlayer"
                 :options="playerOptions"
                 :playsinline="true"
          customEventName="customstatechangedeventname"  @play="onPlayerPlay"></video-Player>-->
          <video
            class="video"
            src="../assets/video/BoChat.mp4"
            poster="../assets/img/video_bg.png"
            controls
            loop
            autoplay
          ></video>
        </a>
      </section>
      <section class="section3">
        <h2>闪兑</h2>
        <h3>极致体验，智能合约完成原子交换</h3>
        <h3>操作简单，一键实现币币交换</h3>
        <el-carousel :interval="4000" type="card">
          <el-carousel-item class="zoumadeng">
            <img src="../assets/img/exchange1.png" alt="Image 1">
          </el-carousel-item>
          <el-carousel-item class="zoumadeng">
            <img src="../assets/img/exchange2.png" alt="Image 1">
          </el-carousel-item>
          <el-carousel-item>
            <img src="../assets/img/exchange3.png" alt="Image 1">
          </el-carousel-item>
        </el-carousel>
      </section>
      <section class="section4">
        <h2>动态</h2>
        <h3>存币声息，阶梯增益享不停</h3>
        <h3>万币归一,一个应用通通搞定</h3>
        <h3>多链生态,第一时间关注项目方动态</h3>
        <el-carousel :interval="4000" type="card">
          <el-carousel-item class="zoumadeng">
            <img src="../assets/img/activity1.png" alt="Image 1">
          </el-carousel-item>
          <el-carousel-item class="zoumadeng">
            <img src="../assets/img/activity2.png" alt="Image 1">
          </el-carousel-item>
          <el-carousel-item>
            <img src="../assets/img/activity3.png" alt="Image 1">
          </el-carousel-item>
        </el-carousel>
      </section>
      <section class="section5">
        <img src="../assets/img/Vectorintelligentobject.png" alt>
        <h2>联系我们</h2>
        <h3>博讯软件技术(深圳)有限公司</h3>
        <div>
          <h3>电话:0755-26553848</h3>
          <h3>传真:0755-26559848</h3>
          <h3>邮箱:bd@bochat.io</h3>
          <h3>地址:深圳市南山区高新北五道</h3>
          <h3>博讯大厦</h3>
        </div>
        <div>
          
          <h3>更多联系方式</h3>
          <h3>博信:BoChat2019</h3>
          <h3>微信:BoChat2019</h3>
          <h3>电报圈:BoChat2019</h3>
          <h3>Twitter:BoChat2019</h3>
          <h3>Facebook:BoChat2019</h3>
          <h3>火信:11199436</h3>
          <h3>微博:博信BoChat</h3>
        </div>
      </section>
    </main>
</template>

<script>
export default {
 created() {
    window.scrollTo(0, 0)
  },
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
html {
  font-size: 13.33333vw;
}

body {
  font-size: 0.16rem;
}
section {
  position: relative;
  width: 7.5rem;
  height: 13.34rem;
  background: url("../assets/img/Rectangle3.png") no-repeat;
  background-size: 7.5rem;
}

.section1 > img {
  height: 100%;
}
.People2 {
  position: absolute;
  width: 100%;
  top: 0.7rem;
  left: 0;
}

.People2 img {
  width: 100%;
}
.fisrtitle {
  position: absolute;
  top: 7.04rem;
  display: flex;
  justify-content: center;
  align-items: center;
  line-height: 0.3rem;
  width: 4.48rem;
  left: 50%;
  margin-left: -2.24rem;
}

.fisrtitle i {
  display: inline-block;
  background-color: #fff;
  opacity: 0.5;
}

.fisrtitle .min {
  width: 0.1rem;
  height: 0.1rem;
  border-radius: 0.1rem;
  margin-top: 0.02rem;
}
.fisrtitle .max:nth-child(2) {
  margin-left: 0.1rem;
 
}
.fisrtitle .max:nth-child(4) {
 
  margin-right: 0.1rem;
}

.fisrtitle .max {
  width: 0.2rem;
  height: 0.2rem;
  border-radius: 0.2rem;
}
.fisrtitle span {
  display: block;
  color: #fff;
  font-size: 0.32rem;
  font-weight: normal;
  width: 3.64rem;
  height: 0.3rem;
  text-align: center;
}

.down {
  display: block;
  width: 4.38rem;
  height: 1.77rem;
  left: 50%;
  margin-left: -2.19rem;
}

.down > img {
  width: 100%;
}
.androidDown {
  position: absolute;
  top: 9rem;
}

.iphoneDown {
  position: absolute;
  top: 11rem;
}

.section2 {
  overflow: hidden;
}

.section2 h1 {
  color: #fff;
  font-weight: normal;
  font-size: 0.6rem;
  width: 2.6rem;
  position: absolute;
  left: 50%;
  margin-left: -1.3rem;
  top: 0.82rem;
  text-align: center;
}

.section2 h2 {
  color: #fff;
  font-weight: normal;
  font-size: 0.3rem;
  width: 4.46rem;
  position: absolute;
  left: 50%;
  margin-left: -2.23rem;
  top: 2.04rem;
  text-align: center;
}

.section2 .video {
  width: 3.96rem;
  height: 7.06rem;
  position: absolute;
  top: 0.72rem;
  left: 50%;
  margin-left: -1.98rem;
}

.section2 .video .video-js {
  width: 100%;
  height: 100%;
}

.section2 .ipnoneImg {
  position: absolute;
  top: 3.14rem;
  width: 4.57rem;
  height: 8.98rem;
  left: 50%;
  margin-left: -2.28rem;
}
.section2 .ipnoneImg > img {
  width: 100%;
}

.section3 h2 {
  color: #fff;
  font-weight: normal;
  font-size: 0.78rem;
  width: 4.46rem;
  position: absolute;
  left: 50%;
  margin-left: -2.23rem;
  top: 1.54rem;
  text-align: center;
}
.section3 h3 {
  color: #fff;
  font-weight: normal;
  font-size: 0.32rem;
  width: 5rem;
  position: absolute;
  left: 50%;
  margin-left: -2.5rem;

  text-align: center;
}
.section3 h3:nth-of-type(1) {
  top: 3.02rem;
}

.section3 h3:nth-of-type(2) {
  top: 3.5rem;
}

.section4 h2 {
  color: #fff;
  font-weight: normal;
  font-size: 0.78rem;
  width: 4.46rem;
  position: absolute;
  left: 50%;
  margin-left: -2.23rem;
  top: 1.22rem;
  text-align: center;
}
.section4 h3 {
  color: #fff;
  font-weight: normal;
  font-size: 0.32rem;
  width: 5.1rem;
  position: absolute;
  left: 50%;
  margin-left: -2.41rem;

  text-align: center;
}
.section4 h3:nth-of-type(1) {
  top: 2.72rem;
}
.section4 h3:nth-of-type(2) {
  top: 3.2rem;
}
.section4 h3:nth-of-type(3) {
  top: 3.68rem;
}

.section5 {
}

.section5 img {
  position: absolute;
  top: 2.2rem;
  width: 100%;
  height: 68%;
}
.section5 h2 {
  color: #fff;
  font-weight: normal;
  font-size: 0.78rem;
  width: 4.46rem;
  position: absolute;
  left: 50%;
  margin-left: -2.23rem;
  top: 1.78rem;
  text-align: center;
}

.section5 > h3 {
  color: #fff;
  font-weight: normal;
  font-size: 0.32rem;
  width: 5.1rem;
  position: absolute;
  left: 50%;
  margin-left: -2.41rem;
  text-align: center;
}
.section5 > h3 {
  top: 3.3rem;
}
.section5 div {
  width: 4.54rem;
  height: 1.94rem;
  position: absolute;

  left: 50%;
  margin-left: -2.27rem;
  color: #fff;

  text-align: center;
}
.section5 div:nth-of-type(1) {
  top: 4.32rem;
}
.section5 div:nth-of-type(2) {
  top: 6.94rem;
}

.section5 div > h3 {
  font-weight: normal;
  font-size: 0.32rem;
}
.el-carousel .el-carousel__container {
  height: 6.67rem;
}

/* //走马灯 */

.el-carousel__item img {
  width: 100%;
}

.el-carousel {
  top: 5.16rem;
}
</style>
