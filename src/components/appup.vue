<template>
  <main class="appup">
    <div class="fisrtitle">
      <i class="min"></i>
      <i class="max"></i>
      <span>应用上架</span>
      <i class="max"></i>
      <i class="min"></i>
    </div>
       <img src="../assets/img/404_bg.png" alt class="wait">
  </main>
</template>

<script>
export default {};
</script>

<style>
.appup {
  width: 100%;
  height: 100%;
}


.appupGroup {
  border-top: #fff 1px solid;
  position: absolute;
  top: 2.15rem;
  width: 7rem;
  height: 11rem;
  /* background-color: rgba(255, 255, 255, 0.3); */
  left: 50%;
  margin-left: -3.5rem;
  padding-top: 0.2rem
}
.appup {
  position: relative;
  width: 7.5rem;
  height: 13.34rem;
  background: url("../assets/img/Rectangle3.png") no-repeat;
  background-size: 7.5rem 13.34rem;
}
.appup .fisrtitle {
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

.appup .fisrtitle i {
  display: inline-block;
  background-color: #fff;
  opacity: 0.5;
}

.appup .fisrtitle .min {
  width: 0.1rem;
  height: 0.1rem;
  border-radius: 0.1rem;
  margin-top: 0.02rem;
}
.appup .fisrtitle .max:nth-child(2) {
  margin-left: 0.1rem;
}
.appup .fisrtitle .max:nth-child(4) {
  margin-right: 0.1rem;
}

.appup .fisrtitle .max {
  width: 0.2rem;
  height: 0.2rem;
  border-radius: 0.2rem;
}
.appup .fisrtitle span {
  display: block;
  color: #fff;
  font-size: 0.32rem;
  font-weight: normal;
  width: 1.8rem;
  height: 0.3rem;
  text-align: center;
}

.wait{
    position: absolute;
    top: 2.3rem;
    width: 100%;
}
</style>
