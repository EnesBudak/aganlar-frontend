<template>
  <div class="most_popular">
    <div class="wrap">
      <div class="wrap_float">
        <div class="title_wrap">
          <h2 class="title">Teknelerimiz</h2>
          <p class="subtitle">
            Misafirlerimiz tarafından en çok tercih edilen tekneler
          </p>
          <div class="controls">
            <a href="travel-list-right-sidebar.html" class="link"
              >Tüm Tekneleri Gör</a
            >
            <div class="arrows">
              <div class="arrow prev"></div>
              <div class="arrow next"></div>
            </div>
          </div>
        </div>
        <div class="section_content">
          <div class="tour-slider" id="tour-slider">
            <a
              @click="$router.push(`/detail/${yacht._id}`)"
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
                  <span>{{ yacht.owner }}</span>
                </p>
              </div>
              <div class="tour_item_bottom">
                <h3 class="_title">{{ yacht.age }} Model</h3>
                <div class="_info">
                  <div class="_info_left">
                    <div class="cost">
                      {{ yacht.passengerCapacity }} Kişi Kapasite
                    </div>
                    <div class="days">{{ yacht.cabinArrangement }}</div>
                  </div>
                  <div class="_info_right">
                    <div class="rating-stars">
                      <div class="star filled"></div>
                      <div class="star filled"></div>
                      <div class="star filled"></div>
                      <div class="star filled"></div>
                      <div class="star filled"></div>
                    </div>
                    <p class="rating-text">10 Yorum</p>
                  </div>
                </div>
              </div>
              <div class="shadow js-shadow"></div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["getYachts"]),
  },
};
</script>

<style></style>
