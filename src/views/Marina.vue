<template>
  <Slider
    height="50"
    imageUrl="https://www.aganlar.com/Admin/Content/Photos/Slider/1752019113613-marina_index_banner.png"
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
          name: "Servisler",
          content:
            "450 ton kapasitesiyle Türkiye’nin en yüksek taşıma hacmine sahip travellift’i ile hizmet veren marinamızda tekne ihtiyaçlarınızı karşılıyor, farklı boyutlardaki tekne siparişlerinizde “anahtar teslim” hizmetimizle hayallerinizi gerçeğe dönüştürüyoruz.",
          url: "servisler",
          imageUrl:
            "https://yatvilla.com/hackyfte/2021/03/marina-index-img-1.png",
        },
        {
          name: "Yat Lift",
          content:
            "Ege Bölgesi'nin en büyük travellift'lerinden birini içeren yat lift bölümüzde en uygun çekek hizmetlerimizi bulabilirsiniz.",
          url: "yatlift",
          imageUrl:
            "https://www.aganlar.com/Content/Themes/images/marina-index-img-2.png",
        },
        {
          name: "Rezervasyon",
          content:
            "Yat rezervasyon işlemleriniz için formu doldurun, size ulaşalım. Ağanlar Marina ile ilgili ihtiyacınız olan konuda rezervasyon yaptırın, konuyla ilgili deneyimli ekibimiz hemen sizinle iletişime geçsin.\n İletişim:marina@aganlar.com",
          url: "yacht",
          imageUrl:
            "https://yatvilla.com/hackyfte/2021/03/marina-index-img-4.png",
        },
        {
          name: "İLETİŞİM",
          content: "N 37° 00´ 49.10E 27° 27´ 04.44VHF: 72 marina@aganlar.com",
          imageUrl: "https://yatvilla.com/hackyfte/2021/03/lokasyon-img.png",
          url: "contact",
        },
      ],
    };
  },
};
</script>

<style></style>
