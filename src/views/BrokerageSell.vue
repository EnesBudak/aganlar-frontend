<template>
  <Slider />
  <Search />
  <div class="page default travel-list full-width">
    <div class="page_head">
      <div class="wrap_float">
        <div class="wrap">
          <div class="wrap_float">
            <h1 class="title">{{ $t("forsale") }}</h1>
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
                      'background-image': 'url(' + yacht.imageUrl[0] + ')',
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
                     <div class="days" v-show="yacht.price">{{ yacht?.price }} {{yacht?.currency}} </div>
                    <div class="days">{{ yacht.age }} Model</div>
                    <div class="days">{{ yacht.loa }} LOA</div>
                    <div class="cost">
                      {{ yacht.passengerCapacity }} {{ $t("guests") }}
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
import Slider from "../components/Slider.vue";
import { mapGetters } from "vuex";
import Search from "../components/Search.vue";
export default {
  computed: {
    ...mapGetters(["getYachts"]),
  },
  components: {
    Slider,
    Search,
  },
  data() {
    return {
      loading: true,
    };
  },
  created() {
    console.log(this.$route.query, "query param");
    const yachtType = this.$route.query.yachtType || "type=sell";

    this.$store.dispatch("getYachts", yachtType).then((res) => {
      if (res.length > 0) {
        this.loading = false;
      }
    });
  },
};
</script>

<style></style>
