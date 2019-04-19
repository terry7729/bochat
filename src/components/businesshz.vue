<template>
  <main class="businesshz">
    <div class="fisrtitle">
      <i class="min"></i>
      <i class="max"></i>
      <span>商务合作</span>
      <i class="max"></i>
      <i class="min"></i>
    </div>
    <div class="form"  v-show="show1">
      <div class="head">
        <a href='javascript:;' class="applyfor appfirst"  @click="applyShow">
          <img src="../assets/img/BoChat1.png" alt>
        </a>
        <a href='javascript:;'  class="join joinsec" @click="joinUsShow">
          <img src="../assets/img/BoChat2.png" alt>
        </a>
      </div>
      <div class="info">
        <el-form ref="form" label-position="right" :model="form">
          <el-form-item label="项目名称">
            <el-input v-model="form.name" placeholder="请填写项目名称"></el-input>
          </el-form-item>
          <el-form-item label="项目官网">
            <el-input v-model="form.name" placeholder="请填写官网地址"></el-input>
          </el-form-item>

          <el-form-item label="代币简称">
            <el-input v-model="form.name" placeholder="以Coinmarketcap或Etherscan可查询到信息为准"></el-input>
          </el-form-item>
          <el-form-item label="总发行量">
            <el-input v-model="form.name" placeholder="请填写代币总发型总量"></el-input>
          </el-form-item>

          <el-form-item label="是否为ERC20代币">
            <el-radio-group v-model="form.resource">
              <el-radio label="是"></el-radio>
              <el-radio label="否"></el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="智能合约地址">
            <el-input v-model="form.name" placeholder="请填写智能合约地址"></el-input>
          </el-form-item>
          <el-form-item label="白皮书链接">
            <el-input v-model="form.name" placeholder="请填写白皮书链接"></el-input>
          </el-form-item>
          <el-form-item label="上传白皮书">
            <el-input type="File" placeholder="请填写白皮书链接"></el-input>
          </el-form-item>
          <el-form-item label="项目负责人姓名">
            <el-input v-model="form.name" placeholder="项目负责人姓名"></el-input>
          </el-form-item>
          <el-form-item label="联系方式">
            <el-input v-model="form.name" placeholder="请填写联系方式"></el-input>
          </el-form-item>
          <el-form-item label="项目简介">
            <el-input type="textarea" v-model="form.desc" placeholder="请填写400字以内的项目简介"></el-input>
          </el-form-item>
        </el-form>
      </div>
      <div class="footer">
        <a href='javascript:;' class="sure" >
          <img src="../assets/img/BoChat6.png" alt>
          <p>提交申请</p>
        </a>
        <a href='javascript:;'  class="cancel">
          <img src="../assets/img/BoChat5.png" alt>
          <p>取消</p>
        </a>
      </div>
    </div>
    <div class="form" v-show="show2" >
      <div class="head">
        <a href='javascript:;' class="applyfor appsec"  @click="applyShow">
          <img src="../assets/img/BoChat3.png" alt>
        </a>
        <a href='javascript:;' class="join joinfirst" @click="joinUsShow">
          <img src="../assets/img/BoChat4.png" alt>
        </a>
      </div>
      <div class="info">
        <el-form ref="form" label-position="right" :model="form">
          <el-form-item label="公司名称">
            <el-input v-model="form.name" placeholder="请填写公司名称"></el-input>
          </el-form-item>
          <el-form-item label="主营产品">
            <el-input v-model="form.name" placeholder="请填写主营产品"></el-input>
          </el-form-item>

          <el-form-item label="营业执照">
            <el-input v-model="form.name" type='File' placeholder="请上传营业执照"></el-input>
          </el-form-item>
          <el-form-item label="身份证复印件">
            <el-input v-model="form.name" placeholder="请上传法人的身份证复印件"></el-input>
          </el-form-item>

          <el-form-item label="品牌授权/代理">
           <el-input v-model="form.name" placeholder="请上传品牌授权书或品牌代理书"></el-input>
          </el-form-item>
          <el-form-item label="商标证书">
            <el-input v-model="form.name" placeholder="请上传商标注册证(必须有商标注册证R)"></el-input>
          </el-form-item>
          <el-form-item label="质检报告">
            <el-input v-model="form.name" placeholder="请上传质检报告"></el-input>
          </el-form-item>
        
          <el-form-item label="联系人">
            <el-input v-model="form.name" placeholder="请填写联系人姓名"></el-input>
          </el-form-item>
          <el-form-item label="联系方式">
            <el-input v-model="form.name" placeholder="请填写联系方式(手机/常用邮箱)"></el-input>
          </el-form-item>
       
        </el-form>
      </div>
      <div class="footer">
        <a href class="sure">
          <img src="../assets/img/BoChat6.png" alt>
          <p>提交申请</p>
        </a>
        <a href class="cancel">
          <img src="../assets/img/BoChat5.png" alt>
          <p>取消</p>
        </a>
      </div>
    </div>

  </main>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: ""
      },
      show1:true,
      show2:false

    }
  },methods: {
     applyShow(){
        this.show1=true,
        this.show2=false
     },
     joinUsShow(){
        this.show1=false,
        this.show2=true;
     }
  },
};
</script>

<style>
.businesshz {
  position: relative;
  width: 7.5rem;
  height: 18.34rem;
  background: url("../assets/img/Rectangle3.png") no-repeat;
  background-size: 7.5rem 18.34rem;
}
.businesshz .fisrtitle {
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

.businesshz .fisrtitle i {
  display: inline-block;
  background-color: #fff;
  opacity: 0.5;
}

.businesshz .fisrtitle .min {
  width: 0.1rem;
  height: 0.1rem;
  border-radius: 0.1rem;
  margin-top: 0.02rem;
}
.businesshz .fisrtitle .max:nth-child(2) {
  margin-left: 0.1rem;
}
.businesshz .fisrtitle .max:nth-child(4) {
  margin-right: 0.1rem;
}

.businesshz .fisrtitle .max {
  width: 0.2rem;
  height: 0.2rem;
  border-radius: 0.2rem;
}
.businesshz .fisrtitle span {
  display: block;
  color: #fff;
  font-size: 0.32rem;
  font-weight: normal;
  width: 1.8rem;
  height: 0.3rem;
  text-align: center;
}

.form {
  position: absolute;
  top: 1.9rem;
  width: 100%;
}
.form .head {
  width: 100%;
  display: flex;
}
.applyfor {
  width: 52%;
}

.join {
  flex: 1;
}
.applyfor > img,
.join > img {
  width: 100%;
}
.applyfor {
  margin-top: -0.15rem;
}
.info {
  width: 100%;

  /* background-color: gold; */
}
.el-form .el-form-item {
  display: flex;
  margin-bottom: 0;
}
.el-form-item .el-form-item__label {
  color: #fff;
  width: 3.5rem;
  font-size: 0.25rem;
}
.el-form-item .el-form-item__content {
  flex: 90%;

  padding: 0.1rem;
  padding-right: 0.3rem;
}

.el-form-item .el-input__inner {
  height: 0.6rem;
  line-height: 0.6rem;
  font-size: 0.12rem;
}

.el-form-item .el-textarea__inner {
  font-size: 0.12rem;
  line-height: 1rem;
}
.el-form-item .el-radio {
  color: #fff;
}
.el-form-item .is-checked .el-radio__inner {
  background-color: #ff3066 !important;
  border-color: #fff !important;
}
.footer {
  margin-top: 0.3rem;
  width: 100%;
  height: 1rem;
  display: flex;
}

.sure {
  position: relative;
  width: 55%;
}
.cancel {
  position: relative;
  flex: 1;
}

.sure p {

  height: 1.15rem;
  position: absolute;
  right: 0.4rem;
  color: #fff;
  top: 0.3rem;
}
.cancel p {

  height: 1.15rem;
  position: absolute;
  right: 1.5rem;
  color: #fff;
  top: 0.3rem;
}
.cancel > img {
  width: 2rem;
  height: 100%;
  position: absolute;
  left: 50%;
  margin-left: -1rem;
}
.sure > img {
  width: 2rem;
  height: 1.15rem;
  position: absolute;
  right: -0.1rem;
  /* top:0.1rem; */
}
.appfirst{
  margin-top: -0.25rem;
}
.appfirst>img {
  height:  110%;
}
.joinfirst{
  margin-left: -0.3rem;;
  margin-top: -0.1rem;
}

.joinfirst>img{
  height: 110%;
  width: 102%;
  margin-top: -0.05rem;
}
.joinsec >img{
  width: 90%;
  height: 70%;
}
.appsec>img{
  height:95% ;
  margin-top: -0.03rem;
}
</style>
