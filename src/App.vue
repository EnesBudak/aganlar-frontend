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
  transform: none !important;
  opacity: 1 !important;
}

.main_slider {
  height: 100vh;
}
.main_slider .slider_wrap .slide .slide_content .text {
  color: #fff;
  text-shadow: 1px 1px rgba(0, 0, 0, 0.75);
  line-height: 46px;
  font-size: 36px;
  max-width: 565px;
  clear: both;
  transform: none;
}
.travel-list .posts .item_right {
  max-width: 45%;
}
.travel-list .posts .item_left {
  max-width: 50%;
}
.page .left_content {
  max-width: 100%;
}
</style>
