<template>
  <main class="whitepaper">
    <div class="fisrtitle">
      <i class="min"></i>
      <i class="max"></i>
      <span>白皮书</span>
      <i class="max"></i>
      <i class="min"></i>
    </div>
    <div class="paper_item"></div>
    <div class="paper_type">
      <div class="left">
        <div class="top">
          <div class="type_name paper_bg">
            <img src="../assets/img/polygon.png" class="polygon">
            <span class="paper_word">BX 白皮书</span>
            <img src="../assets/img/be_more.png" class="be_more">
          </div>
          <div class="type_img" @click="downloadPDf">
            <img src="../assets/img/white1.png" class="show_produce" data-index="0">
          </div>
        </div>
        <div>
          <div class="type_name paper_bg">
            <img src="../assets/img/polygon.png" class="polygon">
            <span class="paper_word">BX white book</span>
            <img src="../assets/img/be_more.png" class="be_more">
          </div>
          <div class="type_img">
            <img src="../assets/img/white2.png" class="show_produce" data-index="0">
          </div>
        </div>
      </div>
      <div class="right">
        <div class="top">
          <div class="type_name paper_bg">
            <img src="../assets/img/polygon.png" class="polygon">
            <span class="paper_word">金币白皮书</span>
            <img src="../assets/img/be_more.png" class="be_more">
          </div>
          <div class="type_img">
            <img src="../assets/img/white3.png" class="show_produce" data-index="0">
          </div>
        </div>
        <div>
          <div class="type_name paper_bg">
            <img src="../assets/img/polygon.png" class="polygon">
            <span class="paper_word">GC2019 white book</span>
            <img src="../assets/img/be_more.png" class="be_more">
          </div>
          <div class="type_img">
            <img src="../assets/img/white4.png" class="show_produce" data-index="0">
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
let Base64 = require("js-base64").Base64;
export default {
  methods: {
    data() {
      return {
        url: "@/static/BXwhitebook.pdf"
      };
    },
    downloadPDf() {
      //1 行不通
      // this.$http.post('../assets/pdf/BX white book.pdf', {
      //   responseType: 'blob', //重要
      // }).then(response => {
      //   const url = window.URL.createObjectURL(new Blob([response.data]));
      //   const link = document.createElement('a');
      //   let fname = 'report.pdf';
      //   link.href = url;
      //   link.setAttribute('download', fname);
      //   document.body.appendChild(link);
      //   link.click();
      // })
      //2 //可以 但是是pc端下载
      // let fileName = '../assets/pdf/BX white book.pdf'; // 文件地址
      // let downName = "bx.pdf"; // 文件下载名称
      // const blob = new Blob([fileName]);
      // if (window.navigator.msSaveOrOpenBlob) {
      //   // 兼容IE10
      //   navigator.msSaveBlob(blob, downName);
      // } else {
      //   //  chrome/firefox
      //   let aTag = document.createElement("a");
      //   aTag.download = downName;
      //   aTag.href = URL.createObjectURL(blob);
      //   aTag.click();
      //   URL.revokeObjectURL(aTag.href);
      // }
      //3 报错
      // let url = "../assets/pdf/BX white book.pdf";
      // this.$router.push({ name: "pdf", query: { url: Base64.encode(url) } });
      // this.$router.push('/pdf')

      this.$router.push({
        name: "PDF",
        query: { url: Base64.encode(this.url) }
      });
    }
  }
};
</script>

<style>
.whitepaper {
  position: relative;
  width: 7.5rem;
  height: 13.34rem;
  background: url("../assets/img/Rectangle3.png") no-repeat;
  background-size: 7.5rem 13.34rem;
}
.whitepaper .fisrtitle {
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

.whitepaper .fisrtitle i {
  display: inline-block;
  background-color: #fff;
  opacity: 0.5;
}

.whitepaper .fisrtitle .min {
  width: 0.1rem;
  height: 0.1rem;
  border-radius: 0.1rem;
  margin-top: 0.02rem;
}
.whitepaper .fisrtitle .max:nth-child(2) {
  margin-left: 0.1rem;
}
.whitepaper .fisrtitle .max:nth-child(4) {
  margin-right: 0.1rem;
}

.whitepaper .fisrtitle .max {
  width: 0.2rem;
  height: 0.2rem;
  border-radius: 0.2rem;
}
.whitepaper .fisrtitle span {
  display: block;
  color: #fff;
  font-size: 0.32rem;
  font-weight: normal;
  width: 1.8rem;
  height: 0.3rem;
  text-align: center;
}

.paper_type {
  position: absolute;
  top: 3rem;
  display: flex;
  width: 7rem;
  left: 50%;
  margin-left: -3.45rem;
}

.paper_type > div {
  flex: 1;
}
.type_img {
  display: block;
}
.type_img > img {
  width: 3.4rem;
}

.paper_bg {
  background: url(../assets/img/paper_bg.png) no-repeat;
  background-size: 3.4rem;
  height: 0.7rem;

  padding-bottom: 0;
  /* margin-bottom: 0.2rem; */
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: bold;
  font-size: 0.24rem;
  color: #d00000;
}

.paper_type .top {
  margin-bottom: 0.8rem;
}

.polygon {
  margin-left: 0.1rem;
}

.be_more {
  margin-right: 0.2rem;
}
</style>
