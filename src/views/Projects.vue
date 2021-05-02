<template>
  <Slider />
  <div class="page default travel-list full-width" style="margin-top: 5%">
    <div class="page_body">
      <div class="wrap">
        <div class="wrap_float">
          <div class="posts">
            <a
              v-for="category in categories"
              :key="category"
              :href="category.url"
              class="tour_item"
              :style="[
                category.imgUrl !== ''
                  ? {
                      'background-image': 'url(' + category.imageUrl + ')',
                    }
                  : { background: 'url(img/yat.jpg) center no-repeat' },
              ]"
            >
              <div class="tour_item_bottom">
                <h3 class="_title">{{ category.name }}</h3>
                <div class="_info">
                  <div class="_info_left">
                    <div class="cost">Detaylar için tıklayın!</div>
                  </div>
                </div>
              </div>
              <div
                class="shadow js-shadow"
                style="background-image: url(img/tour-item-1.jpg)"
              ></div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
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
import Slider from "../components/Slider.vue";
export default {
  computed: {
    ...mapGetters(["getCategories"]),
  },
  components: {
    Slider,
  },

  data() {
    return {
      categories: [
        {
          name: "Devam Edenler",
          url: "continuingprojects/?type=contiuningprojects",
          imageUrl:
            "https://aganlar.com/Content/Themes/images/thumbnail-proje-devam.png",
        },
        {
          name: "Yeni Projeler",
          url: "newprojects/?type=newprojects",
          imageUrl:
            "https://aganlar.com/Content/Themes/images/thumbnail-proje-yeni.png",
        },
      ],
    };
  },
};
</script>

<style></style>
