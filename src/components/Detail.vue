<template>
  <div class="tour_page right-sidebar">
    <div
      class="tour_page_head"
      style="background-image: url('/assets/img/yat1.jpg')"
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
              <div class="tour_title">
                {{ getYacht.name }}
              </div>
              <div class="controls">
                <!-- <div class="add_bookmark fav-button">
                  <i class="is-added bouncy"></i>
                  <i class="not-added bouncy"></i>
                  <span class="fav-overlay"></span>
                </div> -->
                <div class="arrows" id="tour-head-slider-arrows">
                  <div class="arrow prev"></div>
                  <div class="arrow next"></div>
                </div>
              </div>
            </div>
            <div class="slider_wrap">
              <div class="slider lightgallery" id="tour-head-slider">
                <a :href="getYacht.imageUrl" class="slide">
                  <img :src="getYacht.imageUrl" alt="" />
                </a>
              </div>
            </div>
            <!-- <div class="bottom-info">
              <div class="bottom-info-left">
                <div class="search-tour">
                  <div class="search-form">
                    <div class="date-col">
                      <div class="label">Check In</div>
                      <div class="date_div">
                        <input type="text" class="js_calendar desctop-input" />
                        <input type="date" class="mobile-input" />
                        <div class="day">21</div>
                        <div class="date_div_right">
                          <div class="month">December</div>
                          <div class="year">2019</div>
                        </div>
                      </div>
                    </div>
                    <div class="date-col">
                      <div class="label">Check Out</div>
                      <div class="date_div">
                        <input type="text" class="js_calendar desctop-input" />
                        <input type="date" class="mobile-input" />
                        <div class="day">21</div>
                        <div class="date_div_right">
                          <div class="month">December</div>
                          <div class="year">2019</div>
                        </div>
                      </div>
                    </div>
                    <div class="num-col">
                      <div class="label">Aduld</div>
                      <div class="num_wrap">
                        <div class="buttons">
                          <button class="plus"></button>
                          <button class="minus"></button>
                        </div>
                        <input
                          type="number"
                          class="val js_num"
                          value="3"
                          min="0"
                          max="99"
                        />
                      </div>
                    </div>
                    <div class="num-col last">
                      <div class="label">Children</div>
                      <div class="num_wrap">
                        <div class="buttons">
                          <button class="plus"></button>
                          <button class="minus"></button>
                        </div>
                        <input
                          type="number"
                          class="val js_num"
                          value="3"
                          min="0"
                          max="99"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="bottom-info-right">
                <div class="info">
                  <div class="days">5 days |</div>
                  <div class="cost">from $356</div>
                </div>
                <button class="btn button js-popup-open" data-href="#book-now">
                  Book now
                </button>
                <div class="rating">
                  <div class="rating-stars">
                    <div class="star filled"></div>
                    <div class="star filled"></div>
                    <div class="star filled"></div>
                    <div class="star"></div>
                    <div class="star"></div>
                  </div>
                  <div class="rating-text">10 reviews</div>
                </div>
              </div>
            </div> -->
          </div>
        </div>
      </div>
    </div>
    <div class="tour_page_body">
      <div class="wrap">
        <div class="wrap_float">
          <div class="left_content">
            <div class="overview js-section content-block" id="overview">
              <div class="title">Açıklama</div>
              <div class="description">
                Alganlar tersanesi olarak türkiyedeki en kaliteli lüx yat ve
                tekneleri ürettigimizden şüphemiz yoktur.İstediginiz zaman gelip
                araçları inceleyebilirsiniz
              </div>
              <div class="programm" id="genel">
                <div class="day_item">
                  <div class="day_item-head">
                    <div class="preview">
                      <div class="p">Genel</div>
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
                      <div class="p">Temel Boyutlar</div>
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
                      <div class="p">Yaşam Mahali</div>
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
                      <div class="p">Arma Donanımı</div>
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
                      <div class="p">Teknik Bilgiler</div>
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
                      <div class="p">Güverte Elemanları</div>
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
            <div class="included js-section content-block" id="included">
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
            </div>
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
                <li><a href="#overview">Genel</a></li>
                <li><a href="#temelBoyut">Temel Boyutlar</a></li>
                <li><a href="#yasamMahali">Yaşam Mahali</a></li>
                <li><a href="#armaDonanimi">Arma Donanımı</a></li>
                <li><a href="#teknikBilgiler">Teknik Bilgiler</a></li>
                <li><a href="#guverteElemanlari">Güverte Elemanları</a></li>
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
  created() {
    const yachtId = this.$route.params.id;
    console.log(yachtId, "iddddd");
    this.$store.dispatch("getYacht", yachtId);
  },
};
</script>
