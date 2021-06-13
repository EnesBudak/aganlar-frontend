<template>
  <Slider />
  <div class="page travel-list right-sidebar" style="margin-top: 5%">
    <div class="page_body">
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
          <div>
            <div class="posts center">
              <div class="item_right">
                <a
                  v-for="category in yatchsCategories"
                  :key="category"
                  class="item"
                >
                  <!-- <p class="country">North Africa</p> -->
                  <p class="item_text">
                    {{ $t(category.content) }}
                  </p>
                </a>
              </div>
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
          name: "shipyard",
          content: "shipyardlongcontent",
          url: "",
          imageUrl: "/assets/img/2492019123054-untitled_2.jpg",
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
.center {
  float: none !important;
  display: flex !important;

  justify-content: center !important;
}
.travel-list .posts .item_right {
  max-width: 100%;
}
</style>
