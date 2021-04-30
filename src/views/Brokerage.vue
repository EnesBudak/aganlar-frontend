<template>
  <Slider />
  <div class="page travel-list right-sidebar">
    <div class="page_head">
      <div class="wrap_float">
        <div class="wrap">
          <div class="wrap_float">
            <h1 class="title" style="margin-top: 30px">AGANLAR BROKERAGE</h1>
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
                v-for="category in yatchsCategories"
                :key="category"
                class="item"
              >
                <div class="item_left">
                  <div
                    class="image"
                    style="background-image: url('/assets/img/yat1.jpg')"
                  >
                    <div
                      class="shadow js-shadow"
                      style="background-image: url(img/tour-item-1.jpg)"
                    ></div>
                  </div>
                </div>
                <div class="item_right">
                  <!-- <p class="country">North Africa</p> -->

                  <h3 class="item_title">{{ category.name }}</h3>
                  <p class="item_text">
                    {{ category.content }}
                  </p>
                  <div class="pagination">
                    <a :href="category.url" class="arrow next"></a>
                  </div>
                </div>
              </a>
            </div>
            <div class="pagination">
              <a class="arrow prev"></a>
              <ul>
                <li><a href="#" class="active">1</a></li>
                <li><a href="#">2</a></li>
                <li><a href="#">3</a></li>
                <li><a href="#">4</a></li>
              </ul>
              <a class="arrow next"></a>
            </div>
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
          url: "/brokerage/sell",
        },
        {
          name: "Kiralık Yatlar",
          content:
            "İster denemek, ister öğrenmek, isterseniz de uzun soluklu yolculuklarınız için kiralama seçenekleri.",
          url: "/brokerage/rent",
        },
        {
          name: "Rotalar",
          content:
            "Bodrum’un maviliğine doğru atacağınız her adımda ruhunuz yenilenecek.",
          url: "",
        },
        {
          name: "İletişim",
          content:
            "34.000 m2’lik tersanemizde, 80 çalışanımızla, yılda 500’e yakın tamir ve yenileme operasyonunu üstleniyoruz. Yaptığımız tüm çalışmalar üst düzey kalite standartlarını yakalayabilmemiz adına uluslararası klas firmaları ve bayrak devleti sörveyleri tarafından kontrol edilip onaylanıyor",
          url: "",
        },
      ],
    };
  },
};
</script>

<style></style>
