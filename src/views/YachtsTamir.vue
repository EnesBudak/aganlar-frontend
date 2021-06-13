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
          name: "mechanic",
          content: "mechaniccontent",
          url: "",
          imageUrl:
            "https://www.aganlar.com/Admin/Content/Photos/Marina/2492019123054-untitled_2.jpg",
        },
        {
          name: "painting",
          content: "paintingcontent",
          url: "yacht",
          imageUrl: "/assets/img/1752019120733-repair_boyama.jpg",
        },
        {
          name: "electric",
          content: "electricconttent",
          url: "",
          imageUrl: "/assets/img/1752019120758-repair_elektrik.jpg",
        },
        {
          name: "deck",
          content: "deckcontent",
          url: "",
          imageUrl: "/assets/img/1752019120825-repair_deck.jpg",
        },
        {
          name: "rigging",
          content: "riggingcontent",
          url: "",
          imageUrl: "/assets/img/1752019120846-repair_rigging.jpg",
        },

        {
          name: "joinery",
          content: "joinerycontent",
          url: "",
          imageUrl: "/assets/img//1752019120908-repair_carpentry.jpg",
        },
      ],
    };
  },
};
</script>

<style>
@media screen and (max-width: 1200px) {
  .travel-list .posts .item_left {
    max-width: 100%;
  }
  .travel-list .posts .item_right {
    max-width: 100%;
  }
}
</style>
