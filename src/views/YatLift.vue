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
            <div class="posts center">
              <div class="item_right">
                <a
                  v-for="category in yatchsCategories"
                  :key="category"
                  class="item"
                >
                  <!-- <p class="country">North Africa</p> -->

                  <p class="item_text">
                    {{ category.content }}
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
          content:
            "Kasım 2010' da hizmete giren; 450 tonluk, Türkiye' nin ve Doğu Akdeniz' in en büyük TraveLiftimizle Türkiye' de çekek hizmetinde yeni bir dönemin kapısını araladık. 450 ton TraveLiftin yanında 100 ton ve 40 ton liftlerimizle 11,5 m genişliğe kadar olan tüm yatlara en uygun çekek hizmeti veriyoruz.",
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
.center {
  float: none;
  display: flex;

  justify-content: center;
}
</style>
