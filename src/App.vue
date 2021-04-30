<template>
  <div class="container">
    <Header class="" />

    <router-view></router-view>
    <Footer />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";

export default {
  components: {
    Header,
    Footer,
  },
  created() {
    this.$store.dispatch("getYachts");
  },
};
</script>

<style>
.bg-img {
  background-image: url("./assets/img/demo-bg.jpg");
  opacity: 0.4;
}
.travel-list .posts .item_right .item_text {
  max-height: 100%;
}
.main_slider .slider_wrap .slide .bg-img {
  height: 100%;
}

.main_slider {
  height: 75vh;
}
</style>
