<template>
  <Slider height="50" imageUrl="/assets/img/repair-banner.png" />
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
          name: "Mekanik",
          content:
            "Ağanlar Yatçılık olarak; bakım, onarım ve mekanik başta olmak üzere, müşterilerimizin tüm makine dairesi ihtiyaçlarını tam kapsamlı bir şekilde karşılamaktayız. Yaptığımız işler arasında deniz motorları ve jeneratörlerin; kurulumu, bakım ve onarımı yer almaktadır. Buna ek olarak; hidrolik stabilizatör sistemleri ve pompa hatları uygulamaları, deniz pervaneleri ve şaft onarımı, genel pompa ve vanaların (valflerin?) de tüm bakımlarını gerçekleştirmekteyiz. Kendi bünyemizdeki, deneyimli mekanik ekibimizle; bir yatta ihtiyaç duyabileceğiniz tüm mekanik uygulamalarını üstleniyoruz.",
          url: "",
          imageUrl:
            "https://www.aganlar.com/Admin/Content/Photos/Marina/2492019123054-untitled_2.jpg",
        },
        {
          name: "Boyama",
          content:
            "Mega hangarlarımız; Ege Bölgesi’ndeki en büyük hangarlardır. Bünyemizdeki 4 adet hangarda 62 metre uzunluğa kadar tüm yatları ağırlayabiliyoruz. Her yıl, bu hangarlarda çok sayıda yat; yüksek kalitede işçilik ve finiş işlemlerinden geçip boyanmaktadır. Ağanlar Yatçılık, bu 4 büyük kapalı hangara ek olarak; yat türü ve boyama işlemindeki ısı, rüzgâr gibi faktörlere bağlı olarak seyyar hangarlar kurabilmektedir. Bu sayede çeşitli boyut ve türdeki çok sayıda yat; eş zamanlı olarak yenilenmekte ve boyanmaktadır.",
          url: "yacht",
          imageUrl: "/assets/img/1752019120733-repair_boyama.jpg",
        },
        {
          name: "Elektrik ve Elektronik",
          content:
            "AC veya DC farketmeksizin; tüm elektrik sistemlerini tasarlayabilir, teşhis yapabilir veya onarabiliriz. Megger testi yapabilir ve tüm bu sistemlerin kurulum ve değişimini sağlayabiliriz. Elektrik ve Elektronik hizmetlerimize; akü şarj cihazları, gerekli aletler, motor göstergeleri, alternatörler, marş motorları, sintine pompaları, alarmlar, propan solenoid kapatma sistemleri, panel kesici anahtarları, transfer anahtarları, invertörler, piller ve daha fazlası da dahildir.",
          url: "",
          imageUrl: "/assets/img/1752019120758-repair_elektrik.jpg",
        },
        {
          name: "Güverte Değiştirme (Değişim)",
          content:
            "Ağanlar Yatçılık olarak; ahşap, çelik, alüminyum veya kompozit malzemeler de dahil olmak üzere geniş bir yelpazede çalışabilen kalifiye ustalarımız ve ekibimizle, her türlü yapı işlemini gerçekleştirmekteyiz. Onarım sürecinde tüm yapısal ve donanımsal hasarların giderilmesini sağlıyoruz. Teknenin dış cephe bakımı, plaka değişimi, nervürler ve çerçeveler, tankların yeniden düzenlenmesi, yeni tankların üretilmesi, (güvertenin iyileştirilmesi, güverte uzatması gibi birçok hizmet ve servis; portföyümüzde yer almaktadır.",
          url: "",
          imageUrl: "/assets/img/1752019120825-repair_deck.jpg",
        },
        {
          name: "Arma",
          content:
            "Ağanlar Yatçılık; günü birlik mavi yolculuk teknelerinden büyük seyir gemilerine kadar, geniş bir yelpazede yelkenli teknelere hizmet vermektedir. Tutkulu denizciler olarak; yelkenli teknelerdeki arma işlemlerinizi en iyi şekilde anlıyor ve teknenizin tüm donanım ihtiyaçlarını karşılıyoruz. Arma hizmetlerimiz; direk ve bom direği servisinden tutun, yeniden montaj ve onarımlar, donanım işleri, tüm donanımın kapsamına ve devreye alınmasına, ayarlanmasına ve proje yönetimine kadar gerekli olabilecek tüm adımları içeriyor.Ağanlar Yatçılık Arma hizmetleri sayesinde tek bir noktada tüm işlemlerinizi kolayca gerçekleştirebilirsiniz.",
          url: "",
          imageUrl: "/assets/img/1752019120846-repair_rigging.jpg",
        },

        {
          name: "İnce Ahşap İşlemecliği ve Marangozluk",
          content:
            "Ağanlar Yatçılık Marangozluk Hizmetlerinde; zengin ve en üst seviyede, ahşap işleme geleneği ile öne çıkmaktadır. Ustalarımız; becerilerini sürekli olarak geliştirmekte ve özel tekne yapımında kaliteyi her geçen gün biraz daha yükselterek, sektöre meydan okumaktadırlar. Doğal olarak bu beceriler; tamir ve yenileme çalışmalarımıza da yansıyor.İster özel bir yattaki ince ahşap işlemeciliği işleminiz olsun, isterse geleneksel bir ahşap teknenin baştan sona tasarlanması olsun; son derece estetik ve kaliteli bir işçilik sergilemektedirler. En minimalist ahşap işlemelerinden; en büyük tekne inşasına kadar ihtiyaç duyduğunuz tüm marangozluk hizmetlerini sunuyoruz.",
          url: "",
          imageUrl: "/assets/img//1752019120908-repair_carpentry.jpg",
        },
      ],
    };
  },
};
</script>

<style></style>
