<template>
  <Slider />
  <div class="page travel-list right-sidebar">
    <div class="page_head">
      <div class="wrap_float">
        <div class="wrap">
          <div class="wrap_float">
            <h1 class="title" style="margin-top: 30px">AGANLAR MARİNA</h1>
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
                    :style="[
                      category.imgUrl !== ''
                        ? {
                            'background-image':
                              'url(' + category.imageUrl + ')',
                          }
                        : { background: 'url(img/yat.jpg) center no-repeat' },
                    ]"
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
          name: "Servisler",
          content:
            "450 ton kapasitesiyle Türkiye’nin en yüksek taşıma hacmine sahip travellift’i ile hizmet veren marinamızda tekne ihtiyaçlarınızı karşılıyor, farklı boyutlardaki tekne siparişlerinizde “anahtar teslim” hizmetimizle hayallerinizi gerçeğe dönüştürüyoruz.",
          url: "servisler",
          imageUrl:
            "https://yatvilla.com/hackyfte/2021/03/marina-index-img-1.png",
        },
        {
          name: "Rezervasyon",
          content:
            "Yat rezervasyon işlemleriniz için formu doldurun, size ulaşalım. Ağanlar Marina ile ilgili ihtiyacınız olan konuda rezervasyon yaptırın, konuyla ilgili deneyimli ekibimiz hemen sizinle iletişime geçsin.",
          url: "yacht",
          imageUrl:
            "https://yatvilla.com/hackyfte/2021/03/marina-index-img-4.png",
        },
        {
          name: "İletişim",
          content: "N 37° 00´ 49.10E 27° 27´ 04.44VHF: 72 info@aganlar.com",
          url: "",
          imageUrl: "https://yatvilla.com/hackyfte/2021/03/lokasyon-img.png",
        },
      ],
    };
  },
};
</script>

<style></style>
