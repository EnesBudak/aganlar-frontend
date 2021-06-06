<template>
  <Slider
    imageUrl="/assets/img/1752019113529-yachts_index_banner.png"
    height="65"
  />
  <div class="page travel-list right-sidebar">
    <div class="page_head">
      <div class="wrap_float">
        <div class="wrap">
          <div class="wrap_float">
            <!-- <h1 class="title" style="margin-top: 30px">AGANLAR YACHTS</h1> -->
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
                      :style="
                        'background-image: url(' + category.imageUrl + ')'
                      "
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

                  <h3 class="item_title">{{ $t(category.name) }}</h3>
                  <p class="item_text">
                    {{ $t(category.content) }}
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
          name: "shipyardcontentname",
          content: "shipyardcontent",
          url: "tersanemiz",
          imageUrl: "/assets/img/yachts-index-img-1.png",
        },
        {
          name: "yachtcontentname",
          content: "yachtcontent",
          url: "yacht/?type=normal",
          imageUrl: "/assets/img/yachts-index-img-2.png",
        },
        {
          name: "projectscontentname",
          content: "projectscontent",
          url: "projelerimiz",
          imageUrl: "/assets/img/yachts-index-img-3.png",
        },
        {
          name: "repaircontentname",
          content: "repaircontent",
          url: "yachtstamir",
          imageUrl: "/assets/img/yachts-index-img-5.png",
        },
        {
          name: "refitcontentname",
          content: "refitcontent",
          imageUrl: "/assets/img/ycht-index-refit.png",
          url: "refit/?type=refit",
        },
        {
          name: "contactcontentname",
          content: "contactcontent",
          imageUrl: "/assets/img/yachts-index-banner-new.png",
          url: "contact",
        },
      ],
    };
  },
};
</script>

<style></style>
