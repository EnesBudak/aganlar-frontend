<template>
  <Slider
    imageUrl="https://aganlar.com/Content/Themes/images/about-banner.png"
  />
  <div class="page travel-list right-sidebar" style="margin-top: 5%">
    <div class="page_body">
      <div class="wrap">
        <div class="wrap_float">
          <div>
            <div class="posts center">
              <div class="item_right">
                <!-- <p class="country">North Africa</p> -->

                <p class="item_text">
                  {{ $t("aganlargroupcontent") }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="page default travel-list full-width" style="margin-top: 5%">
    <div class="page_body">
      <div class="wrap_float">
        <div class="wrap">
          <div class="posts">
            <a
              v-for="owner in ownerCategories"
              :key="owner"
              href="#"
              class="tour_item"
              :style="[
                owner.imgUrl !== ''
                  ? {
                      'background-image': 'url(' + owner.imageUrl + ')',
                    }
                  : { background: 'url(img/yat.jpg) center no-repeat' },
              ]"
            >
              <div class="tour_item_bottom">
                <h3 class="_title">{{ owner.name }}</h3>
                <div class="_info">
                  <div class="_info_left">
                    <div class="cost">{{ owner.position }}</div>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="gallery-page gallery-single-page">
    <div class="wrap">
      <div class="wrap_float">
        <div class="gallery-page-body">
          <div class="image-list lightgallery">
            <a
              v-for="image in stuffImages"
              :key="image"
              :href="image"
              class="image-item"
            >
              <img :src="image" alt="" />
            </a>
          </div>

          <div class="other_gallery">
            <h2 class="title">See also gallery</h2>
            <div class="gallery-list">
              <!-- 
              <a href="gallery-single.html" class="gallery-item">
                <div class="top">
                  <p class="country">Rome</p>
                  <p class="title">Stunning architecture of Rome</p>
                </div>
                <div class="images">
                  <div class="scroll">
                    <div class="img">
                      <img src="img/gal-2-2.jpg" alt="" />
                    </div>
                    <div class="img">
                      <img src="img/gal-2-1.jpg" alt="" />
                    </div>
                    <div class="img">
                      <img src="img/gal-2-2.jpg" alt="" />
                    </div>
                    <div class="img">
                      <img src="img/gal-2-1.jpg" alt="" />
                    </div>
                    <div class="img">
                      <img src="img/gal-2-2.jpg" alt="" />
                    </div>
                  </div>
                </div>
              </a> -->
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
      ownerCategories: [
        {
          name: "Mazlum Ağan",
          position: "President",

          imageUrl: "",
        },
        {
          name: "Erdem Ağan",
          position: "Chief Executive Officer",

          imageUrl: "",
        },
        {
          name: "Cem Ağan",
          position: "",
          url: "",
          imageUrl: "",
        },
        {
          name: "Fatih Ağan",
          position: "",
          imageUrl: "",
        },
      ],
      stuffImages: [
        "/assets/img/3042019164335-img_4753.png",
        "/assets/img/3042019170013-img_8756.png",
        "/assets/img/3042019164537-img_4790.png",
        "/assets/img/3042019170025-img_8757.png",
        "/assets/img/3042019164607-img_4811.png",
        "/assets/img/3042019164628-img_4851.png",
        "/assets/img/3042019164817-img_4871.png",
        "/assets/img/3042019165913-img_8505.png",
      ],
    };
  },
};
</script>

<style scoped>
.travel-list .posts .item_right {
  max-width: 100%;
}
.travel-list .posts .item_right {
  float: none;
  display: flex;

  align-items: center;
  justify-content: center;
  position: relative;
}
.gallery-page:before {
  background: none !important;
}
.gallery-page {
  background: none !important;
}
.center {
  float: none;
  display: flex;

  justify-content: center;
}
</style>
