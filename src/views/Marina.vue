<template>
  <Slider
    height="50"
    imageUrl="/assets/img/1752019113613-marina_index_banner.png"
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
          name: "services",
          content: "servicescontent",
          url: "servisler",
          imageUrl: "/assets/img/marina-index-img-1.png",
        },
        {
          name: "travellift",
          content: "travelliftcontent",
          url: "yatlift",
          imageUrl: "/assets/img/marina-index-img-2.png",
        },
        {
          name: "reservation",
          content: "reservationcontent",
          url: "",
          imageUrl: "/assets/img/marina-index-img-4.png",
        },
        {
          name: "contact",
          content: "contactcontent",
          imageUrl: "/assets/img/lokasyon-img.png",
          url: "contact",
        },
      ],
    };
  },
};
</script>

<style></style>
