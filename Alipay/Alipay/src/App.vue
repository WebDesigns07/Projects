<template>
  <div id="app" class="app">
    <div class="div-items">
      <div class="div-bgm-item1"></div>
      <div class="div-bgm-item2"></div>
      <div class="div-bgm-item3"></div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'App',
  created() {
    setInterval(() => {
      changeBackground();
    }, 4000);
  },
  data() {
    return {
      message: "Hello World!",
      backgroundIndex: 1,
    }
  },
  computed: {
    backgroundItem1Style() {
      return "";
    }
  }
}

function changeBackground() {
  this.backgroundIndex++;
  if (this.backgroundIndex === 4)
    this.backgroundIndex = 1;
}

</script>

<style>
.app {
  width:100%;
  height:100%;
  position: relative;
  /* background-image: url("https://img.alicdn.com/tps/TB1sXGYIFXXXXc5XpXXXXXXXXXX.jpg"); */
}
.div-items{
  width:100%;
  height:100%;
}
.div-bgm-item1{
  width:100%;
  height:100%;
  overflow: visible;
  position:absolute;
  background: #FFF none no-repeat center center;
  background-image: url("https://img.alicdn.com/tps/TB1sXGYIFXXXXc5XpXXXXXXXXXX.jpg");
  background-size: cover;
}
.div-bgm-item2{
  width:100%;
  height:100%;
  overflow: visible;
  position:absolute;
  background: #FFF none no-repeat center center;
  background-image: url("https://img.alicdn.com/tps/TB1pfG4IFXXXXc6XXXXXXXXXXXX.jpg");
  background-size: cover;
}
.div-bgm-item3{
  width:100%;
  height:100%;
  overflow: visible;
  position:absolute;
  background: #FFF none no-repeat center center;
  background-image: url("https://img.alicdn.com/tps/TB1h9xxIFXXXXbKXXXXXXXXXXXX.jpg");
  background-size: cover;
}

.div-bgm-invisible{
  display: none;
}

</style>
