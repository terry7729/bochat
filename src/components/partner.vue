<template>
  <main class="partner">
    <div class="fisrtitle">
      <i class="min"></i>
      <i class="max"></i>
      <span>合作伙伴</span>
      <i class="max"></i>
      <i class="min"></i>
    </div>

    <el-menu class="el-menu-demo" mode="horizontal">
      <el-menu-item index="1" :class="essfs" @click="allPartner">全部合作伙伴</el-menu-item>
      <el-menu-item index="2" @click="SpeciallyInviteShow">特邀媒体</el-menu-item>
      <el-menu-item index="3" @click="CooperationShow">战略媒体</el-menu-item>
      <el-menu-item index="4" @click="StrategyShow">合作媒体</el-menu-item>
    </el-menu>
    <div class="partnerGroup">
      <div class="allPartner" v-show="isAllPartnerShow">
        <ul>
          <li v-for="it in imglist" :key="it.name">
            <img :src="it.image" alt>
          </li>
        </ul>
      </div>
      <div class="allPartner" v-show="isSpeciallyInviteShow">
        <ul>
          <li v-for="it in imglist" :key="it.name">
            <img :src="it.image" alt>
          </li>
        </ul>
      </div>
      <div class="allPartner" v-show="isCooperationShow">
        <ul>
          <li v-for="it in imglist" :key="it.name">
            <img :src="it.image" alt>
          </li>
        </ul>
      </div>
      <div class="allPartner" v-show="isStrategyShow">
        <ul>
          <li v-for="it in imglist" :key="it.name">
            <img :src="it.image" alt>
          </li>
        </ul>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  data() {
    return {
      isAllPartnerShow: true, //全部合作伙伴显示隐藏
      isSpeciallyInviteShow: false, //特邀媒体合作显示隐藏

      isStrategyShow: false, //战略媒体合显示隐藏
      isCooperationShow: false, //合作媒体显示隐藏
      imglist: [],
      type: "",
      essfs: "is-active"
    };
  },
  created() {
    window.scrollTo(0, 0);
    this.allPartner();
  },
  methods: {
    async allPartner() {
      this.isAllPartnerShow = true;
      this.isSpeciallyInviteShow = false;
      this.isStrategyShow = false;
      this.isCooperationShow = false;

      this.essfs = "is-active";

      // 接口调用
      let res = await this.$http.post(
        "http://api.bochat.net/app/partners/partnersList"
      );
      this.imglist = res.data.data.item;
    },
    async SpeciallyInviteShow() {
      this.isAllPartnerShow = false;
      this.isSpeciallyInviteShow = true;
      this.isStrategyShow = false;
      this.isCooperationShow = false;
      this.essfs = "";
      // 接口调用
      let res = await this.$http.post(
        "http://api.bochat.net/app/partners/partnersList",
        { type: "TY" }
      );
      this.imglist = res.data.data.item;
    },
    async StrategyShow() {
      this.isAllPartnerShow = false;
      this.isSpeciallyInviteShow = false;
      this.isStrategyShow = true;
      this.isCooperationShow = false;

      this.essfs = "";

      // 接口调用
      let res = await this.$http.post(
        "http://api.bochat.net/app/partners/partnersList",
        { type: "HZ" }
      );
      this.imglist = res.data.data.item;
    },
    //战略
    async CooperationShow() {
      this.isAllPartnerShow = false;
      this.isSpeciallyInviteShow = false;
      this.isStrategyShow = false;
      this.isCooperationShow = true;

      this.essfs = "";

      // 接口调用
      let res = await this.$http.post(
        "http://api.bochat.net/app/partners/partnersList",
        { type: "zl" }
      );
      this.imglist = res.data.data.item;

      // //filter 过滤
      // this.imglist = this.imglist.filter(v => {
      //   if (v.type == "ZL") return true;
      // });
    }
  }
};
</script>

<style>
.allPartner {
  width: 100%;
  height: 100%;
}
.allPartner ul > li {
  float: left;
  margin-right: 0.1rem;
  margin-top: 0.1rem;
}
.allPartner img {
  width: 1.3rem;
}
.partnerGroup {
  border-top: #fff 1px solid;
  position: absolute;
  top: 2.15rem;
  width: 7rem;
  height: 11rem;
  /* background-color: rgba(255, 255, 255, 0.3); */
  left: 50%;
  margin-left: -3.5rem;
  padding-top: 0.2rem;
}
.partner {
  position: relative;
  width: 7.5rem;
  height: 16.34rem;
  background: url("../assets/img/Rectangle3.png") no-repeat;
  background-size: 7.5rem 16.34rem;
}
.partner .fisrtitle {
  position: absolute;
  top: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  line-height: 0.3rem;
  width: 4.48rem;
  left: 50%;
  margin-left: -2.24rem;
}

.partner .fisrtitle i {
  display: inline-block;
  background-color: #fff;
  opacity: 0.5;
}

.partner .fisrtitle .min {
  width: 0.1rem;
  height: 0.1rem;
  border-radius: 0.1rem;
  margin-top: 0.02rem;
}
.partner .fisrtitle .max:nth-child(2) {
  margin-left: 0.1rem;
}
.partner .fisrtitle .max:nth-child(4) {
  margin-right: 0.1rem;
}

.partner .fisrtitle .max {
  width: 0.2rem;
  height: 0.2rem;
  border-radius: 0.2rem;
}
.partner .fisrtitle span {
  display: block;
  color: #fff;
  font-size: 0.32rem;
  font-weight: normal;
  width: 1.8rem;
  height: 0.3rem;
  text-align: center;
}

.partner .el-menu {
  top: 1.5rem;
  background-color: transparent;
  border: none !important;
}
.partner .el-menu .el-menu-item:nth-of-type(1) {
  margin-left: 0.2rem;
}
.partner .el-menu .el-menu-item {
  color: #fff !important;
  padding: 0.1rem;
  height: 0.5rem;
  line-height: 0.3rem;
  text-align: center;
  margin-right: 0.2rem;
  font-size: 0.16rem;
}

.partner .el-menu .el-menu-item.is-active {
  border-bottom-color: transparent;
  background-color: rgba(255, 255, 255, 0.2) !important;
  /* color: #fff !important */
  border-radius: 0.15rem;
}
</style>
