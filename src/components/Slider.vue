<template>
  <div class="main_slider js_height">
    <div class="slider_wrap" id="main_slider_wrap">
      <div class="slide" v-for="yacht in getYachts" :key="yacht.id">
        <!-- <div
          class="bg-img"
          :style="[
            yacht.imgUrl !== ''
              ? {
                  'background-image': 'url(' + yacht.imageUrl + ')',
                }
              : { background: 'url(img/yat.jpg) center no-repeat' },
          ]"
        ></div> -->
        <div
          class="bg-img"
          style="background-image: url(/assets/img/yat1.jpg)"
        ></div>
        <div class="wrap">
          <div class="wrap_float js_height">
            <div class="slide_content">
              <div class="title_wrap">
                <h4 class="slide_title">AGANLAR</h4>
              </div>
              <p class="text">
                Siz hayal edin, biz hayallerinizi gerçeğe dönüştürelim
              </p>
              <div class="buttons">
                <a href="#" class="btn button">Daha fazla...</a>
              </div>
              <div class="next_title">AGANLAR</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Search from "./Search.vue";
import { mapGetters } from "vuex";
export default {
  components: {
    Search,
  },
  computed: {
    ...mapGetters(["getYachts"]),
  },
};
</script>

<style scoped>
.main_slider {
  background-color: #fff;
}
</style>
