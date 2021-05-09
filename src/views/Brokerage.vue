<template>
  <Slider
    height="50"
    imageUrl="https://www.aganlar.com/Admin/Content/Photos/Slider/1752019113603-brokerage_banner_new.jpg"
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
                <h3 class="_title">{{ category.name }}</h3>
                <div class="_info">
                  <div class="_info_left">
                    <div class="cost">Detaylar için tıklayın!</div>
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
          name: "Satılık Yatlar",
          content:
            "Uzunluk, fiyat, tip, kapasite… Tercihlerinize en uygun yata burada karar verin.",
          url: "/brokerage/sell/?type=sell",
          imageUrl:
            "http://aganlar.com/Content/Themes/images/brokerage-index-img-1-new.jpg",
        },
        {
          name: "Kiralık Yatlar",
          content:
            "İster denemek, ister öğrenmek, isterseniz de uzun soluklu yolculuklarınız için kiralama seçenekleri.",
          url: "/brokerage/rent/?type=rent",
          imageUrl:
            "http://aganlar.com/Content/Themes/images/brokerage-index-img-2.png",
        },
        {
          name: "Rotalar",
          content:
            "Bodrum’un maviliğine doğru atacağınız her adımda ruhunuz yenilenecek.",
          url: "",
          imageUrl:
            "http://aganlar.com/Content/Themes/images/brokerage-index-rotalar-img.png",
        },
        {
          name: "İLETİŞİM",
          content: "N 37° 00´ 49.10E 27° 27´ 04.44VHF: 72 info@aganlar.com",
          imageUrl: "https://yatvilla.com/hackyfte/2021/03/lokasyon-img.png",
          url: "contact",
        },
      ],
    };
  },
};
</script>

<style></style>
