<template>
  <div class="tour_page right-sidebar">
    <div
      class="tour_page_head"
      style="background-image: url('/assets/img/yat2.jpeg')"
    >
      <div class="breadcrumbs">
        <div class="wrap">
          <div class="wrap_float"></div>
        </div>
      </div>
      <div class="header_content" id="head" style="z-index: 20">
        <div class="wrap">
          <div class="wrap_float">
            <div class="top-info">
              <!-- <div class="country">{{ getYacht.age }}</div> -->
              <div
                class="tour_title"
                style="
                  color: #00184a;
                  background-color: #fff;
                  border-radius: 50px;
                  opacity: 0.8;
                  text-align: center;
                "
              >
                {{ getYacht.name }}
              </div>
              <!-- <div class="controls">
                <div class="arrows" id="tour-head-slider-arrows">
                  <div class="arrow prev"></div>
                  <div class="arrow next"></div>
                </div>
              </div> -->
            </div>
            <div class="slider_wrap">
              <!-- <div
                class="slider lightgallery"
                id="tour-head-slider"
                v-if="imageList.length > 0"
              >
                <a
                  v-for="(image, index) in imageList"
                  :key="index"
                  :href="image"
                  class="slide"
                >
                  <img :src="image" alt="" />
                </a>
              </div> -->
              <el-carousel
                v-if="getYacht.imageUrl"
                :indicator-position="'none'"
                :interval="4000"
                type="card"
              >
                <el-carousel-item
                  v-for="image in getYacht.imageUrl"
                  :key="image"
                >
                  <img :src="image" :preview-src-list="getYacht.imageUrl" />
                </el-carousel-item>
              </el-carousel>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="tour_page_body">
      <div class="wrap">
        <div class="wrap_float">
          <div class="left_content">
            <div class="overview js-section content-block" id="overview">
              <div class="title">{{ $t("description") }}</div>
              <div class="description">
                Alganlar tersanesi olarak türkiyedeki en kaliteli lüx yat ve
                tekneleri ürettigimizden şüphemiz yoktur.İstediginiz zaman gelip
                araçları inceleyebilirsiniz
              </div>
              <div class="programm" id="genel">
                <div class="day_item">
                  <div class="day_item-head">
                    <div class="preview">
                      <div class="p">{{ $t("main") }}</div>
                    </div>
                    <div class="_title"></div>
                    <div class="element"></div>
                  </div>
                  <div
                    class="day_item-body"
                    style="
                      display: block;
                      justify-content: center;
                      text-align: left;
                    "
                  >
                    <div class="text">Üretici: {{ getYacht.owner }}</div>
                    <div class="text">
                      {{ getYacht.architect }}
                    </div>
                    <div class="text">Dizayn: {{ getYacht.design }}</div>
                    <div class="text">Mimar: {{ getYacht.interiorDesign }}</div>
                    <div class="text">Sınıf: {{ getYacht.class }}</div>
                    <div class="text">Yıl: {{ getYacht.age }}</div>
                  </div>
                </div>

                <div class="day_item" id="temelBoyut">
                  <div class="day_item-head">
                    <div class="preview">
                      <div class="p">{{ $t("maindimentions") }}</div>
                    </div>
                    <div class="_title"></div>
                    <div class="element"></div>
                  </div>
                  <div
                    class="day_item-body"
                    style="
                      display: block;
                      justify-content: center;
                      text-align: left;
                    "
                  >
                    <div class="text">LOA: {{ getYacht.loa }}</div>
                    <div class="text">LOD: {{ getYacht.lod }}</div>
                    <div class="text">BOA: {{ getYacht.boa }}</div>
                    <div class="text">Draft: {{ getYacht.draft }}</div>
                    <div class="text">Deplasman: {{ getYacht.deplasman }}</div>
                    <div class="text">Hız: {{ getYacht.speed }}</div>
                  </div>
                </div>

                <div class="day_item" id="yasamMahali">
                  <div class="day_item-head">
                    <div class="preview">
                      <div class="p">{{ $t("livingspace") }}</div>
                    </div>
                    <div class="_title"></div>
                    <div class="element"></div>
                  </div>
                  <div
                    class="day_item-body"
                    style="
                      display: block;
                      justify-content: center;
                      text-align: left;
                    "
                  >
                    <div class="text">
                      Kabin Düzenlemesi: {{ getYacht.cabinArrangement }}
                    </div>
                    <div class="text">
                      Yolcu Kapasitesi 10 : {{ getYacht.passengerCapacity }}
                    </div>
                    <div class="text">
                      Mürettebat Kapasitesi: {{ getYacht.crewCapacity }}
                    </div>
                  </div>
                </div>

                <div class="day_item">
                  <div class="day_item-head" id="armaDonanimi">
                    <div class="preview">
                      <div class="p">{{ $t("riggingandhardware") }}</div>
                    </div>
                    <div class="_title"></div>
                    <div class="element"></div>
                  </div>
                  <div
                    class="day_item-body"
                    style="
                      display: block;
                      justify-content: center;
                      text-align: left;
                    "
                  >
                    <div class="text">Mast: {{ getYacht.mast }}</div>
                    <div class="text">Main: {{ getYacht.main }}</div>
                    <div class="text">Genova: {{ getYacht.genova }}</div>
                    <div class="text">Jib: {{ getYacht.jib }}</div>
                    <div class="text">Mizzen: {{ getYacht.mizzen }}</div>
                  </div>
                </div>
                <div class="day_item" id="teknikBilgiler">
                  <div class="day_item-head">
                    <div class="preview">
                      <div class="p">{{ $t("technicalinformations") }}</div>
                    </div>
                    <div class="_title"></div>
                    <div class="element"></div>
                  </div>
                  <div
                    class="day_item-body"
                    style="
                      display: block;
                      justify-content: center;
                      text-align: left;
                    "
                  >
                    <div class="text">
                      İmalat Türü: {{ getYacht.manufacturingType }}
                    </div>
                    <div class="text">Makine: {{ getYacht.machine }}</div>
                    <div class="text">Vites: {{ getYacht.vites }}</div>
                    <div class="text">Jeneratör: {{ getYacht.jeneratör }}</div>
                    <div class="text">A/C: {{ getYacht.ac }}</div>
                    <div class="text">
                      Elektrik Sistemi: {{ getYacht.electricSystem }}
                    </div>
                    <div class="text">
                      Dümen İstasyonu: {{ getYacht.helmStation }}
                    </div>
                    <div class="text">
                      Dümen Sistemi: {{ getYacht.helmSystem }}
                    </div>
                    <div class="text">
                      Navigasyon/Komunikasyon: {{ getYacht.navigation }}
                    </div>
                    <div class="text">
                      Yan Pervane: {{ getYacht.sidePropeller }}
                    </div>
                    <div class="text">Su Tankı: {{ getYacht.waterTank }}</div>
                    <div class="text">
                      Kirli Su Tankı: {{ getYacht.wasteWater }}
                    </div>
                    <div class="text">
                      Su Üretici: {{ getYacht.watermaker }}
                    </div>
                    <div class="text">
                      Yakıt Deposu: {{ getYacht.fuelTank }}
                    </div>
                  </div>
                </div>
                <div class="day_item" id="guverteElemanlari">
                  <div class="day_item-head">
                    <div class="preview">
                      <div class="p">{{ $t("riggingandhardware") }}</div>
                    </div>
                    <div class="_title"></div>
                    <div class="element"></div>
                  </div>
                  <div
                    class="day_item-body"
                    style="
                      display: block;
                      justify-content: center;
                      text-align: left;
                    "
                  >
                    <div class="text">LOA: {{ getYacht.loa }}</div>
                    <div class="text">LOD: {{ getYacht.lod }}</div>
                    <div class="text">BOA: {{ getYacht.boa }}</div>
                    <div class="text">Draft: {{ getYacht.draft }}</div>
                    <div class="text">Deplasman: {{ getYacht.deplasman }}</div>
                    <div class="text">Hız: {{ getYacht.speed }}</div>
                  </div>
                </div>
              </div>
            </div>
            <!-- <div class="included js-section content-block" id="included">
              <div class="title">Dahil Hizmetler</div>
              <ul>
                <li>
                  <span class="li_title">Yiyecek/İçecek</span>
                  <span class="li_subtitle">Alkolsüz içecek</span>
                </li>
                <li>
                  <span class="li_title">Temizlik</span>
                  <span class="li_subtitle">1 Defaya mahsus temizlik</span>
                </li>
                <li>
                  <span class="li_title">1 Depo Benzin</span>
                  <span class="li_subtitle">Benzin avantajı</span>
                </li>
                <li>
                  <span class="li_title">Sigorta</span>
                  <span class="li_subtitle">Olası kötü bir durumda destek</span>
                </li>
              </ul>
            </div> -->
            <div class="location js-section content-block" id="location">
              <div class="title">Location</div>
              <div class="map">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1126.3653215477852!2d27.451612366711874!3d37.01356009996531!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14be69200b70289b%3A0x465968d7d387223c!2sA%C4%9Fanlar%20Shipyard%20%26%20Marina.%20Yacht%20Building%2C%20Refit%2C%20Brokerage%20in%20Turkey!5e0!3m2!1str!2sus!4v1619473992717!5m2!1str!2sus"
                  width="600"
                  height="450"
                  style="border: 0"
                  allowfullscreen=""
                  loading="lazy"
                ></iframe>
              </div>
            </div>
            <!-- <div class="stories js-section content-block" id="stories">
              <div class="title_wrap">
                <div class="title">Stories</div>
                <div class="link">
                  <a href="#">All Stories</a>
                </div>
              </div>
              <div class="stries_slider">
                <div class="scroll">
                  <a
                    href="story.html"
                    class="story_item"
                    style="background-image: url(img/demo-bg.jpg)"
                  >
                    <div class="item_wrap">
                      <div class="_content">
                        <div class="flag_wrap">
                          <div class="flag">
                            <img src="img/demo-bg.jpg" alt="" />
                          </div>
                        </div>
                        <div class="country">Russia</div>
                        <div class="text">Amazing underwater world</div>
                      </div>
                    </div>
                    <div class="shadow js-shadow"></div>
                  </a>

                  <a
                    href="story.html"
                    class="story_item"
                    style="background-image: url(img/demo-bg.jpg)"
                  >
                    <div class="item_wrap">
                      <div class="_content">
                        <div class="flag_wrap">
                          <div class="flag">
                            <img src="img/demo-bg.jpg" alt="" />
                          </div>
                        </div>
                        <div class="country">Maldives</div>
                        <div class="text">Amazing underwater world</div>
                      </div>
                    </div>
                    <div class="shadow js-shadow"></div>
                  </a>

                  <a
                    href="story.html"
                    class="story_item"
                    style="background-image: url(img/demo-bg.jpg)"
                  >
                    <div class="item_wrap">
                      <div class="_content">
                        <div class="flag_wrap">
                          <div class="flag">
                            <img src="img/demo-bg.jpg" alt="" />
                          </div>
                        </div>
                        <div class="country">Australia</div>
                        <div class="text">Amazing underwater world</div>
                      </div>
                    </div>
                    <div class="shadow js-shadow"></div>
                  </a>

                  <a
                    href="story.html"
                    class="story_item"
                    style="background-image: url(img/demo-bg.jpg)"
                  >
                    <div class="item_wrap">
                      <div class="_content">
                        <div class="flag_wrap">
                          <div class="flag">
                            <img src="img/demo-bg.jpg" alt="" />
                          </div>
                        </div>
                        <div class="country">Madagascar</div>
                        <div class="text">Amazing underwater world</div>
                      </div>
                    </div>
                    <div class="shadow js-shadow"></div>
                  </a>
                </div>
              </div>
            </div> -->
          </div>
          <div class="right_content sidebar">
            <div class="navigation" id="sidebar-navigation">
              <ul>
                <li><a href="#head">Resimler</a></li>
                <li>
                  <a href="#overview">{{ $t("main") }}</a>
                </li>
                <li>
                  <a href="#temelBoyut">{{ $t("maindimentions") }}</a>
                </li>
                <li>
                  <a href="#yasamMahali">{{ $t("livingspace") }}</a>
                </li>
                <li>
                  <a href="#armaDonanimi">{{ $t("riggingandhardware") }}</a>
                </li>
                <li>
                  <a href="#teknikBilgiler">{{
                    $t("technicalinformations")
                  }}</a>
                </li>
                <li>
                  <a href="#guverteElemanlari">{{ $t("deckequipment") }}</a>
                </li>
              </ul>
            </div>
            <a class="book-now button js-popup-open" data-href="#book-now">
              <span>Rezervasyon Yap</span>
              <!-- <span class="cost">from $356</span> -->
            </a>
            <!-- <div class="add-to-favorites">
              <div class="add_bookmark fav-button">
                <i class="is-added bouncy"></i>
                <i class="not-added bouncy"></i>
                <span class="fav-overlay"></span>
              </div>
              <div class="fav-text">Add to favourites</div>
            </div> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["getYacht"]),
  },
  components: {},
  data() {
    return {
      imageList: [],
    };
  },
  methods: {},
  created() {
    const yachtId = this.$route.params.id;
    console.log(yachtId, "iddddd");
    this.$store.dispatch("getYacht", yachtId).then((res) => {
      this.imageList = res.imageUrl;
      console.log(this.imageList);
    });
  },
};
</script>
<style scoped>
img {
  width: 100%;
  height: 100%;
}
</style>
