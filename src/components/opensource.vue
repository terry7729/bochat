<template>
  <main class="opensource">
    <div class="fisrtitle">
      <i class="min"></i>
      <i class="max"></i>
      <span>开源代码</span>
      <i class="max"></i>
      <i class="min"></i>
    </div>
    <div class="source_main">
      <ul>
        <li>
          <p class="source_main_word">
            <span class="title">1.BX开源代码，发行量查询</span>

            <span class="source_main_span">
              <img src="../assets/img/tran_r.png" width="32">
            </span>
          </p>
          <img src="../assets/img/b_bg.png" class="show_produce canter_dis" data-index="0">
        </li>
        <li>
          <p class="source_main_word">
            <span class="title">2.GC开源代码，发行量查询</span>
            <span class="source_main_span">
              <img src="../assets/img/tran_r.png" width="32">
            </span>
          </p>
          <img src="../assets/img/2019_bg.png" class="show_produce canter_dis" data-index="1">
        </li>
      </ul>
    </div>
  </main>
</template>

<script>
export default {};
</script>

<style>
.opensource {
  position: relative;
  width: 7.5rem;
  height: 13.34rem;
  background: url("../assets/img/Rectangle3.png") no-repeat;
  background-size: 7.5rem 13.34rem;
}
.opensource .fisrtitle {
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

.opensource .fisrtitle i {
  display: inline-block;
  background-color: #fff;
  opacity: 0.5;
}

.opensource .fisrtitle .min {
  width: 0.1rem;
  height: 0.1rem;
  border-radius: 0.1rem;
  margin-top: 0.02rem;
}
.opensource .fisrtitle .max:nth-child(2) {
  margin-left: 0.1rem;
}
.opensource .fisrtitle .max:nth-child(4) {
  margin-right: 0.1rem;
}

.opensource .fisrtitle .max {
  width: 0.2rem;
  height: 0.2rem;
  border-radius: 0.2rem;
}
.opensource .fisrtitle span {
  display: block;
  color: #fff;
  font-size: 0.32rem;
  font-weight: normal;
  width: 1.8rem;
  height: 0.3rem;
  text-align: center;
}

.source_main {
  width: 7rem;
  position: absolute;
  left: 50%;
  margin-left: -3.5rem;
  top: 2rem;
}


.source_main ul li {
  background: rgba(255, 255, 255, 0.2);
  padding: 0.2rem;
}

.source_main ul li:nth-of-type(2){
    margin: 0.2rem 0 0.1rem;
}
.source_main li > img {
  width: 6.5rem;
  display: block;
  margin: 0 auto;
}
.source_main_word {
  height: 0.7rem;
  display: flex;
  justify-content: space-between;
  line-height: 0.7rem;
  color: #fff;
  font-size: 0.26rem;
}
.source_main_word  .title{
    margin-left: 0.5rem;
}
.source_main_span {
  margin-right: 0.1rem;
}
.source_main_span img {
  width: 0.3rem;
  margin-right: 0.5rem;
}
</style>
