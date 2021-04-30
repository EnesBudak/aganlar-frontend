<template>
  <Slider />
  <Search />
  <div class="page default travel-list full-width">
    <div class="page_head">
      <div class="wrap_float">
        <div class="wrap">
          <div class="wrap_float">
            <h1 class="title">Kiralık Yatlar</h1>
            <p class="subtitle"></p>
          </div>
        </div>
      </div>
    </div>

    <div class="page_body">
      <div class="wrap">
        <div class="wrap_float">
          <div class="posts">
            <a
              :href="'/yacht/' + yacht._id"
              v-for="yacht in getYachts"
              :key="yacht._id"
              class="tour_item"
              :style="[
                yacht.imgUrl !== ''
                  ? {
                      'background-image': 'url(' + yacht.imageUrl + ')',
                    }
                  : { background: 'url(img/yat.jpg) center no-repeat' },
              ]"
            >
              <div class="tour_item_top">
                <p class="country">
                  <!-- <span>{{ yacht.owner }}</span> -->
                </p>
              </div>
              <div class="tour_item_bottom">
                <h3 class="_title">{{ yacht.name }}</h3>
                <div class="_info">
                  <div class="_info_left">
                    <div class="days">{{ yacht.age }} Model</div>
                    <div class="days">{{ yacht.loa }} LOA</div>
                    <div class="cost">
                      {{ yacht.passengerCapacity }} Kişi Kapasite
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="shadow js-shadow"
                style="background-image: url(img/demo-bg.jpg)"
              ></div>
            </a>
          </div>
          <div class="pagination">
            <a class="arrow prev"></a>
            <ul>
              <li><a href="#" class="active">1</a></li>
              <li><a href="#">2</a></li>
              <li><a href="#">3</a></li>
              <li><a href="#">4</a></li>
            </ul>
            <a class="arrow next"></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Slider from "../components/Slider.vue";
import Search from "../components/Search.vue";
export default {
  computed: {
    ...mapGetters(["getYachts"]),
  },
  components: {
    Slider,
    Search,
  },

  created() {
    console.log(this.$route.query, "query param");
    const yachtType = this.$route.query.yachtType || "type=rent";

    this.$store.dispatch("getYachts", yachtType);
  },
};
</script>

<style></style>
