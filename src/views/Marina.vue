<template>
  <Slider
    height="50"
    imageUrl="/assets/img/1752019113613-marina_index_banner.png"
  />
  <div class="page travel-list right-sidebar">
    <div class="page_head">
      <div class="wrap_float">
        <div class="wrap">
          <div class="wrap_float">
            <!-- <h1 class="title" style="margin-top: 30px">AGANLAR MARİNA</h1> -->
            <!-- <p class="subtitle">
              Latin literature from 45 BC, making it over 2000 years old
            </p> -->
          </div>
        </div>
      </div>
    </div>

    <div class="page_body">
      <div class="wrap">
        <div class="wrap_float">
          <div class="left_content">
            <div class="posts">
              <a
                v-for="(category, index) in yatchsCategories"
                :key="category"
                class="item"
              >
                <div
                  class="item_left"
                  :style="
                    index % 2 == 0
                      ? 'float:left !important;margin-right:20px'
                      : 'float:right !important'
                  "
                >
                  <a :href="category.url" class="arrow next">
                    <div
                      class="image"
                      :style="[
                        category.imgUrl !== ''
                          ? {
                              'background-image':
                                'url(' + category.imageUrl + ')',
                            }
                          : 'background-image:url(/asset/img/yat.jpg) center no-repeat',
                      ]"
                    ></div>
                  </a>
                </div>
                <div
                  class="item_right"
                  :style="
                    index % 2 !== 0
                      ? 'float:right !important;margin-right:20px'
                      : 'float:left !important'
                  "
                >
                  <!-- <p class="country">North Africa</p> -->

                  <h3 class="item_title">{{ $t(category.name) }}</h3>
                  <p class="item_text">
                    {{ $t(category.content) }}
                  </p>

                  <el-button
                    v-if="category.button"
                    data-href="#marinabooking"
                    style="margin-top: 30px"
                    class="js-popup-open"
                    type="success"
                    round
                    >{{ $t("reservation") }}</el-button
                  >
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="popup registration" id="marinabooking">
      <div class="scroll">
        <div class="scroll_wrap">
          <div class="popup-head">
            <div class="title">Marina Rezervasyon</div>
          </div>
          <div class="popup-body">
            <div class="subtitle">
              Fill in the reservation form.We will contant you as soon as
              possible
            </div>
            <div class="form">
              <input
                type="text"
                class="input"
                placeholder="İsim "
                v-model="name"
                :class="name != '' ? 'border-red' : ''"
              />
              <input
                type="text"
                class="input"
                placeholder="Soyad"
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
                placeholder="Telefon"
                v-model="phone"
                :class="phone != '' ? 'border-red' : ''"
              />
              <input
                type="text"
                class="input"
                placeholder="Yat Adı"
                :class="yachtName != '' ? 'border-red' : ''"
                v-model="yachtName"
              />

              <input
                type="text"
                class="input"
                placeholder="En"
                :class="width != '' ? 'border-red' : ''"
                v-model="width"
              />
              <input
                type="text"
                class="input"
                placeholder="Uzunluk"
                :class="height != '' ? 'border-red' : ''"
                v-model="height"
              />
              <input
                type="text"
                class="input"
                placeholder="Derinlik"
                :class="depth != '' ? 'border-red' : ''"
                v-model="depth"
              />
              <input
                type="text"
                class="input"
                placeholder="Deplasman"
                :class="deplasman != '' ? 'border-red' : ''"
                v-model="deplasman"
              />
              <input
                type="date"
                class="input"
                :class="arrivalDate != '' ? 'border-red' : ''"
                placeholder="Varış Tarihi"
                v-model="arrivalDate"
              />
              <input
                type="date"
                class="input"
                :class="departureDate != '' ? 'border-red' : ''"
                placeholder="Ayrılış Tarihi "
                v-model="departureDate"
              />
              <input
                type="text"
                class="input"
                :class="flag != '' ? 'border-red' : ''"
                placeholder="Bayrak "
                v-model="flag"
              />
              <textarea
                type="text"
                class="input"
                :class="message != '' ? 'border-red' : ''"
                placeholder="Mesaj"
                v-model="message"
              />

              <button class="submit button" @click="submitForm">
                Book Now
              </button>
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
  </div>
</template>

<script>
import Slider from "../components/Slider.vue";
export default {
  components: {
    Slider,
  },
  data() {
    return {
      yatchsCategories: [
        {
          name: "services",
          content: "servicescontent",
          url: "servisler",
          imageUrl: "/assets/img/marina-index-img-1.png",
        },
        {
          name: "travellift",
          content: "travelliftcontent",
          url: "yatlift",
          imageUrl: "/assets/img/marina-index-img-2.png",
        },
        {
          name: "reservation",
          content: "reservationcontent",
          url: "",
          imageUrl: "/assets/img/marina-index-img-4.png",
          button: true,
        },
        {
          name: "contact",
          content: "contactcontent",
          imageUrl: "/assets/img/lokasyon-img.png",
          url: "contact",
        },
      ],
      name: "",
      surname: "",
      email: "",
      phone: "",
      yachtName: "",
      arrivalDate: "",
      departureDate: "",
      width: "",
      height: "",
      deplasman: "",
      depth: "",
      flag: "",
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

<style scoped>
.load_more {
  border-radius: 0;
}
</style>
