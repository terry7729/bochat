<template>
  <main>
    <section class="noder">
      <img src="../assets/img/node_rbg.png" alt class="node">
      <div class="fisrtitle">
        <i class="min"></i>
        <i class="max"></i>
        <span>节点招募</span>
        <i class="max"></i>
        <i class="min"></i>
      </div>
      <h2>192个名额等你来抢</h2>
      <div class="text">
        <p>BXChain联盟矩阵模型节点</p>
        <p>联盟节点数量：192个，限时招募</p>
        <p>最高可认购3万人名币（0.03%）BoChat主体股权</p>
        <p>获赠稀有BX礼包与5000人社群资格</p>
        <p>可选择180天1.24倍回购权限</p>
      </div>
      <img src="../assets/img/node_code.png" alt class="code">

      <div class="recruit">
        <div class="start">BX Chain联盟矩阵模型节点计划正式启动</div>
        <div class="imgAndText fist">
          <div class="left">
            <img src="../assets/img/bx5.png" alt>
          </div>

          <div
            class="right"
          >BX Chain为BoChat平台联盟矩阵模型公链，全球建立192个联盟节点，构筑千万级TPS环境，运用社交区块、共识算法、应用交互等方式，共同建设自治、共识、交互的区块链社交生态圈。</div>
        </div>
        <div class="imgAndText sec">
          <div class="left">
            <img src="../assets/img/bx6.png" alt>
          </div>

          <div
            class="right"
          >BX Chain是由生活中可以互动的每个人，通过移动端、设备供应商、社区领袖、生态企业等提供的各服务器所代表的社区节点组成。BX节点，依据由BX共识算法POS+PBFT决定。</div>
        </div>
        <div class="imgAndText three">
          <div class="left">
            <img src="../assets/img/bx7.png" alt>
          </div>

          <div
            class="right"
          >BX Chain主网初期，会自主选择192个节点作为联盟矩阵模型的基础。届时这192个联盟节点，将助力BX整个链生态，共同建设BX Chain全球去中心化生态链。</div>
        </div>
        <div class="imgAndText four">
          <div class="left">
            <img src="../assets/img/bx8.png" alt>
          </div>

          <div class="right">BX Chain围绕着N2N VPN构建出全新生态链，可实现千万级别TPS、矩阵化智能托管、数字化资产存储、社区社交、多重资产交互等应用落地。</div>
        </div>
      </div>
      <!-- 招募细则 -->
      <p class="hhhhh">联盟节点招募令细则</p>
      <footer class="recruitDetail">
        <ul>
          <li>
            <span></span> 联盟节点数量：192个，限时招募；
          </li>
          <li>
            <span></span> 最高可认购3万人民币（0.03%）BoChat主体股权；
          </li>
          <li>
            <span></span> 获赠稀有BX礼包与5000人社群资格；
          </li>
          <li>
            <span></span> 可选择180天1.24倍回购权限；
          </li>
        </ul>
        <div class="form">
          <img src="../assets/img/order.png" alt>
          <div class="name">
            <div class="userIcon">
              <img src="../assets/img/node_user.png" alt>
            </div>

            <input type="text" placeholder="请输入姓名" class="username" v-model="sendData.name">
          </div>
          <div class="name phone">
            <div class="userIcon">
              <img src="../assets/img/node_phone.png" alt>
            </div>

            <input type="text" placeholder="手机号" class="phone" v-model="sendData.phone">
          </div>
          <div class="rec_subim" @click="nodeRecruit">报名认购信息</div>
        </div>
      </footer>
    </section>
  </main>
</template>

<script>
export default {
  data() {
    return {
      sendData: {
        name: "",
        phone: ""
      }
    };
  },
  created() {
    window.scrollTo(0, 0);
  },
  methods: {
    async nodeRecruit() {
      if (this.sendData.name == "") {
        this.$message.error("姓名不能为空");
        return;
      }

      if (
        this.sendData.phone == "" ||
        !/^1[34578]\d{9}$/.test(this.sendData.phone)
      ) {
        this.$message.error("请输入正确的手机格式");
        return;
      }
      let res = await this.$http.post(
        "http://api.bochat.net/app/appointment/addAppointmentInfo",
        this.sendData
      );

      if (res.data.retcode === 0) {
        this.$message.success("报名认购资格提交成功");
      }
    }
  }
};
</script>

<style>
.noder {
  position: relative;
  width: 7.5rem;
  height: 37rem;
  background: url("../assets/img/Rectangle3.png") no-repeat;
  background-size: 7.5rem 37rem;
}

.node {
  width: 100%;
}

.noder .fisrtitle {
  position: absolute;
  top: 7.44rem;
  display: flex;
  justify-content: center;
  align-items: center;
  line-height: 0.3rem;
  width: 4.48rem;
  left: 50%;
  margin-left: -2.24rem;
}

.noder .fisrtitle i {
  display: inline-block;
  background-color: #fff;
  opacity: 0.5;
}

.noder .fisrtitle .min {
  width: 0.1rem;
  height: 0.1rem;
  border-radius: 0.1rem;
  margin-top: 0.02rem;
}
.noder .fisrtitle .max:nth-child(2) {
  margin-left: 0.1rem;
}
.noder .fisrtitle .max:nth-child(4) {
  margin-right: 0.1rem;
}

.noder .fisrtitle .max {
  width: 0.2rem;
  height: 0.2rem;
  border-radius: 0.2rem;
}
.noder .fisrtitle span {
  display: block;
  color: #fff;
  font-size: 0.32rem;
  font-weight: normal;
  width: 1.8rem;
  height: 0.3rem;
  text-align: center;
}

.noder h2 {
  color: #fff;
  font-weight: normal;
  font-size: 0.4rem;
  width: 4.46rem;
  position: absolute;
  left: 50%;
  margin-left: -2.23rem;
  top: 7.94rem;
  text-align: center;
}

.noder .text {
  position: absolute;
  top: 8.9rem;
  left: 50%;
  margin-left: -3.5rem;
  width: 7rem;
  height: 3rem;
  text-align: center;
  color: #fff;
  font-size: 0.3rem;
}
.noder .text > p {
  line-height: 0.7rem;
}
.noder .text > p:nth-of-type(1) {
  font-size: 0.35rem;
}

.code {
  position: absolute;
  top: 13.8rem;
  left: 50%;
  margin-left: -1.28rem;
  width: 2.56rem;
  box-shadow: 0 0 0.1rem 0.2rem #fff;
}

.start {
  width: 7rem;
  height: 1rem;
  position: absolute;
  top: 17rem;
  color: #fff;
  font-weight: bold;
  font-size: 0.32rem;
  text-align: center;
  left: 50%;
  margin-left: -3.5rem;
  border-radius: 0.5rem;
  background-color: rgba(0, 0, 0, 0.2);
  line-height: 1rem;
}

.imgAndText {
  position: absolute;
  top: 18.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  width: 7rem;
  left: 50%;
  margin-left: -3.5rem;
  border-radius: 0.1rem;
  overflow: hidden;
  height: 1.68rem;
}

.imgAndText .left {
  width: 1.5rem;
  padding: 0.2rem;
}

.imgAndText .left img {
  width: 100%;
}

.imgAndText .right {
  flex: 1;
  font-size: 0.2rem;
  padding: 0.2rem;
}

.recruit .sec {
  top: 20.3rem;
}

.recruit .three {
  top: 22.14rem;
}
.recruit .four {
  top: 24rem;
}
.recruitDetail {
  position: absolute;
  width: 7rem;
  top: 27rem;
  left: 50%;
  margin-left: -3.5rem;
  height: 8rem;
  border: 0.02rem dashed #fff;
  border-radius: 0.1rem;
}
.recruitDetail > img {
  width: 100%;
  height: 100%;
}

.hhhhh {
  position: absolute;
  top: 27.2rem;
  left: 2.45rem;
  font-size: 0.28rem;
  color: #eb8772;
  letter-spacing: 0.01rem;
  font-style: italic;
  border: 0.02rem dashed #fff;
  width: 3rem;
  height: 0.5rem;
  text-align: center;
  line-height: 0.5rem;
  border-radius: 0.1rem;
  z-index: 222;
}
.recruitDetail > ul {
  position: absolute;
  top: 0.8rem;
  left: 50%;
  margin-left: -3.5rem;
  color: #fff;
  width: 7rem;
}

.recruitDetail > ul > li {
  font-size: 0.24rem;
  text-align: center;
  line-height: 0.6rem;
  letter-spacing: 0;
}

.recruitDetail .form {
  position: absolute;
  top: 3.5rem;
  background-color: #fff;
  width: 6rem;
  padding: 0.2rem;
  border-radius: 0.2rem;
  left: 50%;
  margin-left: -3.2rem;
}

.form > img {
  margin: 0 auto;
  display: block;
  width: 2.5rem;
  margin-bottom: 0.2rem;
}

.form .name {
  display: flex;
  border: 1px solid #ccc;
  border-radius: 0.1rem;
}

.form .userIcon {
  width: 1rem;
  padding: 0.1rem;
  display: flex;
  justify-content: center;
}
.form .username {
  flex: 1;
}

.phone {
  margin-top: 0.2rem;
}

.rec_subim {
  background: url("../assets/img/sub.png") no-repeat;
  background-size: 6rem;
  width: 6rem;
  text-align: center;
  height: 0.77rem;
  margin: 14px auto;
  line-height: 0.77rem;
  color: white;
  cursor: pointer;
  border-radius: 0.2rem;
  overflow: hidden;
}

.el-message {
  width: 2rem !important;
  min-width: 5rem !important;
  top: 50% !important;
}
.el-message__content {
  font-size: 0.25rem !important;
  font-family: "microsoft yahei" !important;
}
</style>
