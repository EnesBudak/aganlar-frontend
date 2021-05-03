<template>
  <Slider />
  <div class="page travel-list right-sidebar">
    <div class="page_head">
      <div class="wrap_float">
        <div class="wrap">
          <div class="wrap_float">
            <h1 class="title" style="margin-top: 30px">AGANLAR SERVİSLER</h1>
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
                  ></div>
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

                  <h3 class="item_title">{{ category.name }}</h3>
                  <p class="item_text">
                    {{ category.content }}
                  </p>
                </div>
              </a>
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
          name: "Çekek Hizmetleri",
          content:
            "Ağanlar Marina, karada 34,000m2 lik kara park ve teknik servis alanı üzerinde hizmet vermektedir. 450 ton Travel-Lift ile Ege Bölgesi’nin en yüksek kapasitesine sahiptir. Maximum genişliği 11,5m olan 3 adet çekek havuzumuzda aynı anda rahatlıkla operasyon yapabilme kabiliyetine sahibiz. İstendiği taktirde yatların ihtiyacına uygun depo kiralamaktayız (g4m x d3m x y2m). Yatlarınız çekildikten sonra basınçlı su sitemi ile güvenli şekilde alt yıkaması yapılır. VHF 72 kanalında bize ulaşabilirsiniz.",
          url: "",
          imageUrl:
            "https://yatvilla.com/hackyfte/2021/03/marina-servisler-3.png",
        },
        {
          name: "Bağlama",
          content:
            "210m’lik baglama alanında 100m’ye kadar yat ağırlayabiliyoruz. Çelik kazıklara bağlı zincir sistemi ile bölgenin en güvenli tonoz sistemine sahibiz. Yatlara dalgıç hizmeti, 720 Amper’e kadar elektrik ve arıtılmış suyun haricinde 24 saat WC/Duş ve güvenlik hizmeti eşliğinde ihtiyaçlarınızı konforlu bir şekilde karşılayabilirsiniz. 100 metre yürüme mesafesinde hıdravat ve yat malzemeleri satan mağazaları, ve birçok markaların yetkili servisleri bulabilirsiniz. Marina’nın hemen yakınında 6 adet restoran ve 4 adet market yaz/kış sürekli hizmet",
          url: "yacht",
          imageUrl:
            "https://yatvilla.com/hackyfte/2021/03/marina-servisler-1.png",
        },
        {
          name: "Vinç ve Treyler",
          content:
            "• 450 t Travel-Lift • 100 t Travel-Lift • 40 t Travel-Lift • 430 t Treyler• 40 t Mobil Vinç• 5 t Forklift (4.5m)",
          url: "",
          imageUrl:
            "https://yatvilla.com/hackyfte/2021/03/marina-servisler-2.png",
        },
      ],
    };
  },
};
</script>

<style></style>
