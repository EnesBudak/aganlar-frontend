<template>
  <Slider height="90" imageUrl="/assets/img/logolarimiz-banner.jpg" />
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
          content: "travelliftcontent2",
          url: "",
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
.travel-list .posts .item_right {
  max-width: 100%;
}
.center {
  float: none;
  display: flex;

  justify-content: center;
}
</style>
