<template>
  <div class="container">
    <a data-href="#booking" class="link js-popup-open buy-btn">Book now!</a>
    <Header class="" />

    <router-view></router-view>
    <Footer />
  </div>
  <div class="popup registration" id="booking">
    <div class="scroll">
      <div class="scroll_wrap">
        <div class="popup-head">
          <div class="title">Rezervasyon Yap</div>
        </div>
        <div class="popup-body">
          <div class="subtitle">
            Fill in the reservation form.We will contant you as soon as possible
          </div>
          <div class="form">
            <input
              type="text"
              class="input"
              placeholder="Name "
              v-model="name"
              :class="name != '' ? 'border-red' : ''"
            />
            <input
              type="text"
              class="input"
              placeholder="Surname"
              v-model="surname"
              :class="surname != '' ? 'border-red' : ''"
            />
            <input
              type="email"
              class="input"
              placeholder="Email"
              v-model="email"
              :class="email != '' ? 'border-red' : ''"
            />
            <input
              type="text"
              class="input"
              placeholder="Phone"
              v-model="phone"
              :class="phone != '' ? 'border-red' : ''"
            />
            <input
              type="text"
              class="input"
              placeholder="Yacht Name"
              :class="yachtName != '' ? 'border-red' : ''"
              v-model="yachtName"
            />
            <input
              type="date"
              class="input"
              :class="arrivalDate != '' ? 'border-red' : ''"
              placeholder="Arrival Date"
              v-model="arrivalDate"
            />
            <input
              type="date"
              class="input"
              :class="departureDate != '' ? 'border-red' : ''"
              placeholder="Departure Date "
              v-model="departureDate"
            />
            <textarea
              type="text"
              class="input"
              :class="message != '' ? 'border-red' : ''"
              placeholder="Message"
              v-model="message"
            />

            <button class="submit button" @click="submitForm">Book Now</button>
          </div>
        </div>
        <!-- <div class="popup-foot">
          <p>Sign Up via social networks</p>
          <div class="social-links">
            <a href="#" class="link facebook"><span></span></a>
            <a href="#" class="link twitter"><span></span></a>
          </div>
        </div> -->
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
  data() {
    return {
      name: "",
      surname: "",
      email: "",
      phone: "",
      yachtName: "",
      arrivalDate: "",
      departureDate: "",
      message: "",
    };
  },
  methods: {
    submitForm() {
      console.log("selamm");
      if (
        this.name != "" &&
        this.surname != "" &&
        this.email != "" &&
        this.phone != "" &&
        this.yachtName != "" &&
        this.arrivalDate != "" &&
        this.departureDate != "" &&
        this.message != ""
      ) {
        this.$notify({
          title: "Başarılı",
          message:
            "Rezervasyonunuz başarıyla yapıldı, en kısa sürede sizinle iletişime geçilecektir.",
          type: "success",
        });
      } else {
        this.$notify({
          title: "Başarısız",
          message: "Lütfen gerekli alanları doldurunuz!",
          type: "warning",
        });
      }
    },
  },
};
</script>

<style>
.border-red {
  border: 2px solid #00ff00 !important;
}
.popup {
  z-index: 9999;
}
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
