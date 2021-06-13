<template>
  <Slider
    height="50"
    imageUrl="/assets/img/1752019113603-brokerage_banner_new.jpg"
  />
  <div class="page default travel-list full-width" style="margin-top: 5%">
    <div class="page_body">
      <div class="wrap_float">
        <div class="wrap">
          <div class="posts">
            <a
              v-for="category in yatchsCategories"
              :key="category"
              :href="category.url"
              class="tour_item"
              :style="[
                category.imgUrl !== ''
                  ? {
                      'background-image': 'url(' + category.imageUrl + ')',
                    }
                  : { background: 'url(img/yat.jpg) center no-repeat' },
              ]"
            >
              <div class="tour_item_bottom">
                <h3 class="_title">{{ $t(category.name) }}</h3>
                <div class="_info">
                  <div class="_info_left">
                    <div class="cost">{{ $t("clickfordetail") }}</div>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
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
          name: "forsale",
          content:
            "Uzunluk, fiyat, tip, kapasite… Tercihlerinize en uygun yata burada karar verin.",
          url: "/brokerage/sell/?type=sell",
          imageUrl: "/assets/img/brokerage-index-img-1-new.jpg",
        },
        {
          name: "forrent",
          content:
            "İster denemek, ister öğrenmek, isterseniz de uzun soluklu yolculuklarınız için kiralama seçenekleri.",
          url: "/brokerage/rent/?type=rent",
          imageUrl: "/assets/img/brokerage-index-img-2.png",
        },
        {
          name: "routes",
          content:
            "Bodrum’un maviliğine doğru atacağınız her adımda ruhunuz yenilenecek.",
          url: "",
          imageUrl: "/assets/img/brokerage-index-rotalar-img.png",
        },
        {
          name: "contact",
          content: "N 37° 00´ 49.10E 27° 27´ 04.44VHF: 72 info@aganlar.com",
          imageUrl: "/assets/img/lokasyon-img.png",
          url: "contact",
        },
      ],
    };
  },
};
</script>

<style></style>
