<template>
  <div class="container">
    <a data-href="#booking" class="link js-popup-open buy-btn">Book now!</a>
    <Header class="" />

    <router-view></router-view>
    <Footer />
  </div>
  <div style="margin-top: 5%" class="popup registration" id="booking">
    <div class="scroll">
      <div class="scroll_wrap">
        <div class="popup-head">
          <div class="title">Rezervasyon Yap</div>
        </div>
        <div class="popup-body">
          <div class="subtitle">
            Fill in the registration form and save your favorite tours,
            synchronize them on all devices
          </div>
          <div class="form">
            <input type="text" class="input" placeholder="Username" />
            <input type="text" class="input" placeholder="Name" />
            <input type="text" class="input" placeholder="Surename" />
            <input type="email" class="input" placeholder="Email" />
            <input type="password" class="input" placeholder="Password" />
            <input
              type="password"
              class="input"
              placeholder="Password Repeat"
            />

            <button class="submit button js-submit">Registration</button>
          </div>
        </div>
        <div class="popup-foot">
          <p>Sign Up via social networks</p>
          <div class="social-links">
            <a href="#" class="link facebook"><span></span></a>
            <a href="#" class="link twitter"><span></span></a>
          </div>
        </div>
      </div>
    </div>
    <div class="close"></div>
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
.buy-btn {
  height: 70px;
  width: 70px;
  font-size: 16px;
  background: #f03800;
  border-radius: 50%;
  display: flex;
  align-items: center;
  text-align: center;
  color: #fff;
  padding: 0 4px;
  font-weight: 700;
  position: fixed;
  bottom: 24px;
  right: 24px;
  z-index: 100;
}
</style>
