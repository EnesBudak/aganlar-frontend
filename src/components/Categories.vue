<template>
  <div style="margin: 50px">
    <div class="stories_list" style="display: flex; justify-content: center">
      <a
        @click="$router.push('/teknelerimiz')"
        href="#"
        class="story_item"
        style="
          background-image: url(https://villauploads.s3.amazonaws.com/1619464229412.png);
        "
      >
        <div class="item_wrap">
          <div class="_content">
            <div class="flag_wrap">
              <div class="flag"></div>
            </div>
            <h3 class="country">Yachts</h3>
            <p class="text">Amazing underwater world</p>
          </div>
        </div>
        <div class="shadow js-shadow"></div>
      </a>
      <a
        :href="'marina'"
        class="story_item"
        style="
          background-image: url(https://villauploads.s3.amazonaws.com/1619470430570.png);
        "
      >
        <div class="item_wrap">
          <div class="_content">
            <div class="flag_wrap">
              <div class="flag"></div>
            </div>
            <h3 class="country">Marina</h3>
            <p class="text">Amazing underwater world</p>
          </div>
        </div>
        <div class="shadow js-shadow"></div>
      </a>
      <a
        @click="$router.push('/brokerage')"
        class="story_item"
        style="
          background-image: url(https://villauploads.s3.amazonaws.com/1619470442781.png);
        "
      >
        <div class="item_wrap">
          <div class="_content">
            <div class="flag_wrap">
              <div class="flag"></div>
            </div>
            <h3 class="country">Brokerage</h3>
            <p class="text">Amazing underwater world</p>
          </div>
        </div>
        <div class="shadow js-shadow"></div>
      </a>
      <a
        @click="$router.push('/insurance')"
        class="story_item"
        style="
          background-image: url(https://villauploads.s3.amazonaws.com/1619470454523.png);
        "
      >
        <div class="item_wrap">
          <div class="_content">
            <div class="flag_wrap">
              <div class="flag"></div>
            </div>
            <h3 class="country">Insurance</h3>
            <p class="text">Amazing underwater world</p>
          </div>
        </div>
        <div class="shadow js-shadow"></div>
      </a>
    </div>
  </div>
  <BlogPost />
  <!-- <div class="destinations">
    <div class="wrap">
      <div class="wrap_float">
        <div class="title_wrap">
          <h2 class="title">Bölgeler</h2>

          <p class="subtitle">Bölgelere Göre Tekne Seçin</p>
          <div class="controls">
            <a href="travel-list-image-header.html" class="link"
              >Tüm Bölgeleri Gör</a
            >
          </div>
        </div>
        <div class="section_content">
          <div class="scroll">
            <a
              v-for="category in getCategories"
              :key="category"
              href="travel-list-full-width.html"
              class="destinations_item"
              :style="[
                category.imgUrl !== ''
                  ? {
                      'background-image': 'url(img/demo-bg.jpg)',
                    }
                  : { background: 'url(img/demo-bg.jpg) center no-repeat' },
              ]"
            >
              <div class="sq_parent">
                <div class="sq_wrap">
                  <div class="sq_content">
                    <div class="_content">
                      <h3 class="_title">{{ category }}</h3>
                      <p class="_info">45 Tekne | 62 Yat</p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="shadow js-shadow"></div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div> -->
</template>

<script>
import { mapGetters } from "vuex";
import BlogPost from "./BlogPost.vue";
export default {
  computed: {
    ...mapGetters(["getCategories"]),
  },
  components: {
    BlogPost,
  },

  data() {
    return {};
  },
};
</script>

<style></style>
