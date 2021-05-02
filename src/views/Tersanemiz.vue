<template>
  <Slider />
  <div class="page travel-list right-sidebar">
    <div class="page_head">
      <div class="wrap_float">
        <div class="wrap">
          <div class="wrap_float">
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
                <div class="item_right">
                  <!-- <p class="country">North Africa</p> -->

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
          name: "Mekanik",
          content:
            "Ağanlar Yachts, 34.000 m2'lık şirkete ait alanda her türlü yat inşası, bakım ve onarım hizmeti vermektedir.62 m'ye kadar 4 adet yatı aynı zamanda 4 farklı kapalı hangarda konaklatabilmekte ve her sene açık alanda 500'e yakın yat operasyonu yapmaktadır. Tüm yeni imalat veya bakım/onarım operasyonlarımız uluslararası klas firmaları ve bayrak devleti sörveyleri (Lloyds Register, ABS, RINA, BV, DNC, GL, USCG, MCA, vb.) tarafından kontrol edilip onay görür. Dizayn ofisimizde deneyimli gemi inşa mühendisleri, iç mimarlar, yat tasarımcıları ve proje yöneticileri tam zamanlı hizmet vermektedirler.Yatınızın gerek duyabileceği tüm tecrübeyi projeye akıtmakla kalmaz, aynı zamanda dünyanın lider üretici, yedek parça temin eden firmaları, danışmanlık, tasarım ve planlama şirketleri ile birlikte gerektiğinde onlarında yakın işbirliğini alarak, 120 kişilik uzman ekibiyle müşterilerine hizmet verir. Kendi bünyesinde olan yedek parça marketi, mobilya, makina ve paslanmaz atölyeleri, uzman mekanik ve elektrik ekipleriye küçük büyük her projeye aynı önemi veren şirketimiz, bu alanda yörenin en büyük noktalarından birisidir. Ağanlar Tersanesi A.Ş. yat endüstrisine devamlı yatırım yaparak yeni teknikler ve hizmetler gelişmesine katkıda bulunmaktadır.Gücümüz yat endüstrisinde 50 yılı devirmiş sağlam tecrübemizden geliyor. Yatınızın imalatına veya bakımına başlandığı günden teslimata kadar Ağanlar Tecrübesi' nin hep yanınızda olacağını temin ediyoruz ve yatınızın yüksek güvenlik ve kalite standartlarında size teslim edileceğinin garantisini veriyoruz.",
          url: "",
          imageUrl:
            "https://www.aganlar.com/Admin/Content/Photos/Marina/2492019123054-untitled_2.jpg",
        },
      ],
    };
  },
};
</script>

<style scoped>
.travel-list .posts .item_right {
  line-height: 2rem;
}
</style>
