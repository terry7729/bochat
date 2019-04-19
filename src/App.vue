<template>
  <div id="app">
    <el-popover placement="right" width="400" trigger="click">
      <el-card class="box-card">
       
        <el-row class="tac">
          <el-col >
            <el-menu
              default-active="1"
              class="el-menu-vertical-demo">             
              <el-menu-item index="1">
                
                <span slot="title" @click="goIndex">首页</span>
              </el-menu-item>
            
              <el-menu-item index="2">
                
                <span slot="title" @click="goNoderecruit">节点招募</span>
              </el-menu-item>
              <el-menu-item index="3">
                
                <span slot="title" @click="goAboutBC">关于博信</span>
              </el-menu-item>
              <el-menu-item index="4">
                
                <span slot="title" @click="goWhitepaper">白皮书</span>
              </el-menu-item>
              <el-menu-item index="5">
                
                <span slot="title" @click="goOpensource">开源代码</span>
              </el-menu-item>
              <el-menu-item index="6">
                
                <span slot="title" @click="goPartner">合作伙伴</span>
              </el-menu-item>
              <el-menu-item index="7">
                
                <span slot="title" @click="goAppup">应用上架</span>
              </el-menu-item>
              <el-menu-item index="8" @click="goBusinesshz">
                
                <span slot="title">商务合作</span>
              </el-menu-item>
            </el-menu>
          </el-col>
        </el-row>
      </el-card>
      <el-button slot="reference"></el-button>
    </el-popover>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  methods: {
    goIndex(){
      this.$router.push('/index')
    },
    goNoderecruit(){
      this.$router.push('/NodeRecruit')
    },
    goAboutBC(){
      this.$router.push('/aboutbochat')
    },goWhitepaper(){
      this.$router.push('/whitepaper')
    },goOpensource(){
       this.$router.push('/opensource')
    },goPartner(){
       this.$router.push('/partner')
    },goAppup(){
      this.$router.push('/appup')
    },goBusinesshz(){
      this.$router.push('/businesshz')
    }
  },
};
</script>

<style>
#app .el-button {
  width: 0.8rem;
  height: 0.8rem;
  position: fixed;
  top: 10.6rem;
  right: 0.65rem;
  z-index: 999;
  background: url("./assets/img/list.png") no-repeat;
  background-size: 0.8rem;
  border: none;
}
.el-popover {
  margin: 0 !important;
  width: 1.98rem !important;
  height: 4.65rem !important;
  left: 5.35rem !important;
  top: 5.9rem !important;
  padding: 0 !important;
  opacity: 0.9;
  min-width: auto !important;
}
.el-card__body a {
}

.popper__arrow,
.el-popover .popper__arrow::after {
  display: none !important;
}
.el-popover .el-card,
.el-popover .el-card__body {
  padding: 0;
  width: 100%;
  height: 100%;
}

.el-card__body > a {
  font-size: 0.28rem;
  color: #333333;
  display: block;
  line-height: 0.6rem;
  text-align: center;
}
.el-card__body .el-menu-item{
  line-height: 0.56rem;
  height: 0.56rem;
  text-align: center;
}
</style>
