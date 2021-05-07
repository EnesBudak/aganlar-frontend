<template>
  <div
    class="main_slider js_height"
    :style="
      height != null ? 'height:' + height + 'vh' + '!important' : 'height:100vh'
    "
  >
    <div class="slider_wrap" id="main_slider_wrap">
      <div class="slide">
        <div
          class="bg-img"
          :style="
            imageUrl == null
              ? 'background-image: url(/assets/img/yatreal2.png)'
              : 'background-image: url(' + imageUrl + ');height: ' + height + ''
          "
        ></div>
        <div class="wrap">
          <div class="wrap_float js_height">
            <div class="slide_content">
              <div class="title_wrap">
                <h4 class="slide_title" v-show="headTitle != null">AGANLAR</h4>
              </div>
              <p class="text" v-show="title != null">
                {{
                  title == null
                    ? "Siz hayal edin, biz hayallerinizi gerçeğe dönüştürelim"
                    : title
                }}
              </p>

              <div class="buttons" v-show="url != null">
                <a
                  :href="url == null ? 'contact' : url"
                  class="btn button"
                  tabindex="0"
                  >{{ buttonTitle == null ? "İletişime Geç" : buttonTitle }}</a
                >
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
  props: ["title", "url", "buttonTitle", "imageUrl", "headTitle", "height"],
  // computed: {
  //   ...mapGetters(["getYachts"]),
  // },
  // created() {
  //   this.$store.dispatch("getYachts");
  // },
};
</script>

<style scoped>
.main_slider {
  background-color: #fff;
}
</style>
