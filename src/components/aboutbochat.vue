<template>
  <main class="aboutbc">
    <div class="fisrtitle">
      <i class="min"></i>
      <i class="max"></i>
      <span>关于博信</span>
      <i class="max"></i>
      <i class="min"></i>
    </div>
    <img src="../assets/img/aboutbg.png" alt class="about_bg">

    <div class="ab_bot">
      <p
        class="ab_bsize"
      >BoChat，中文名称“博信”。基于区块链底层技术开发的社交应用。具备即时通讯、社交交互、应用商店、数字资产矩阵钱包等功能。实现在交互过程中通过数字资产打赏利是、分发糖果、任务酬劳、理财获益等的APP应用。</p>
      <div class="ab_logo">
        <img src="../assets/img/bochat_logo.png">
      </div>
      <br>
      <p
        class="ab_bsize jieshao"
      >博讯企业总部位于深圳高新技术产园，香港、西雅图等地设有代表处，在区块链应用、高性能公链领域享有领先的地位。和海内外各大学术机构、大学院校展开联合学术、共同研发的合作方式，开设课题研究和联合lab；在大陆和海外均拥有近百人在区块链技术领域顶尖的专家团队。近两年来，团队致力于区块链社交平台BoChat和联盟矩阵模型公链BX Chain的开发和研究。在区块链应用、 DApp落地等领域取得卓著的成就，应用内容涵盖游戏、直播、社交、防伪溯源、公共服务、网络安全等领域。</p>

      <p
        class="ab_s"
      >区块链如同“甲骨文”的文字一样无法篡改，所有的记录犹如太阳永远从东边升起的不可逆转，成为永远最真实、最原始的数据库。我们立志于推动区块链技术的普及和应用，持续推进区块链技术助力实体经济的落地，针对不同的细分领域和应用场景，营造干净、健康的网络环境，构筑去中心化、公开透明、完全信任的区块链去中心化生态。秉承“创新、开拓、执着”的精神，在新技术推动的道路上奋斗拼搏，为区块链技术的普及竭尽全力！</p>
    </div>

    <div class="fisrtitle sec">
      <i class="min"></i>
      <i class="max"></i>
      <span>技术团队</span>
      <i class="max"></i>
      <i class="min"></i>
    </div>

    <div class="team">
      <div class="teamDetail top">
        <div class="first">
          <p
            class="team_word"
          >维克托·麦尔·舍恩伯格，数据科学的技术权威，被誉为“大数据之父”，牛津大学网络学院互联网治理与监管专业教授，曾任哈佛国家电子商务研究中心网络监管项目负责人、新加坡国立大学李光耀学院信息与创新策略研究中心主任</p>
        </div>
        <div class="second">
          <p
            class="team_word"
          >信息安全博士，2012年荣获影响中国科技人才称号，专注区块链产品开发与技术多年，首批提出去中性化应用DApp生态，并且在公链TPS并发量取得突破的科学家。</p>
        </div>
      </div>
      <div class="teamDetail bottom">
        <div class="third">
          <p class="team_word">著名新经济学家、商业策略大师，被誉为“数字经济之父”，加拿大多伦多大学罗特曼管理学院教授，特伦特大学荣誉校长，世界经济论坛特聘顾问。</p>
        </div>
        <div class="fourth">
          <p
            class="team_word"
          >中国人民大学研究员，深耕区块链技术应用近10年，在区块链技术应用落地、公链应用、网络信息安全等领域有较高造诣。国内最早期研发从业者，担任过众多区块链项目架构师，精通Python、Go语言。</p>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
   created() {
    window.scrollTo(0, 0)
  },
};
</script>

<style>

.aboutbc {
  position: relative;
  width: 7.5rem;
  height: 30rem;
  background: url("../assets/img/Rectangle3.png") no-repeat;
  background-size: 7.5rem 30rem;
  overflow: hidden;
}
.aboutbc .fisrtitle {
  position: absolute;
  top: 5.8rem;
  display: flex;
  justify-content: center;
  align-items: center;
  line-height: 0.3rem;
  width: 4.48rem;
  left: 50%;
  margin-left: -2.24rem;
}

.aboutbc .fisrtitle i {
  display: inline-block;
  background-color: #fff;
  opacity: 0.5;
}

.aboutbc .fisrtitle .min {
  width: 0.1rem;
  height: 0.1rem;
  border-radius: 0.1rem;
  margin-top: 0.02rem;
}
.aboutbc .fisrtitle .max:nth-child(2) {
  margin-left: 0.1rem;
}
.aboutbc .fisrtitle .max:nth-child(4) {
  margin-right: 0.1rem;
}

.aboutbc .fisrtitle .max {
  width: 0.2rem;
  height: 0.2rem;
  border-radius: 0.2rem;
}
.aboutbc .fisrtitle span {
  display: block;
  color: #fff;
  font-size: 0.32rem;
  font-weight: normal;
  width: 1.8rem;
  height: 0.3rem;
  text-align: center;
}
.about_bg {
  width: 7.5rem;
  margin-left: 0.3rem;
}
.ab_bot {
  width: 7rem;

  margin: 0 auto;
  background-color: rgba(255, 255, 255, 0.2);
  padding: 0.2rem;
  box-sizing: border-box;
  text-indent: 0.35rem;
  color: #ffffff;
  position: absolute;
  top: 6.4rem;
  left: 50%;
  margin-left: -3.5rem;
}
.ab_bsize {
  width: 4.82rem;
  /* height: 210rem; */
  display: block;
  float: left;
  font-size: 0.2rem;
  line-height: 0.34rem;
  margin-bottom: 0.18rem;
  padding-right: 0.18rem;
}
.ab_logo {
  float: right;
  width: 1.6rem;
  height: 1.7rem;
  background: #ffffff;
  
}

.ab_logo > img {
  width: 0.8rem;
  margin: 0.15rem auto;
  display: block;
}

.ab_s {
  clear: both;
  margin-top: 0.2rem;
  font-size: 0.2rem;
  line-height: 0.34rem;
}
.jieshao {
  width: 100%;
}

.aboutbc .sec {
  top: 16rem;
}

.team {
  width: 7rem;
  position: absolute;
  top: 17rem;
  left: 50%;
  margin-left: -3.5rem;
}

.teamDetail {
  width: 100%;
  display: flex;
  height: 5.5rem;
}
.teamDetail > div {
  flex: 1;
  display: flex;
  justify-content: center;
  padding: 0.1rem;
}

.teamDetail .first {
  background: url("../assets/img/skill.png") no-repeat center;
  background-size: 4rem ;
}
.teamDetail .second {
  background: url("../assets/img/Scientist.png") no-repeat center;
  background-size: 4rem;
}
.teamDetail .third {
  background: url("../assets/img/adviser.png") no-repeat center;
  background-size: 4rem;
}
.teamDetail .fourth {
  background: url("../assets/img/architect.png") no-repeat center;
  background-size: 4rem;
}

.team_word {
  width: 2.6rem;
  max-height: 3.5rem;
  font-size: 0.14rem;
  line-height: 0.3rem;
  text-align: justify;
  margin-top: 1.62rem;

  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical; 
  -webkit-line-clamp: 10;
  /* 让文本一行显示 */
}
</style>
