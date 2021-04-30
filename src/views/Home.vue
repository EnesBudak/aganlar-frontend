<template>
  <div>
    <!-- <MostPopular /> -->
    <Slider />
    <Categories />
    <Social />
  </div>
</template>

<script>
import Slider from "../components/Slider.vue";
import MostPopular from "../components/MostPopular.vue";
import Categories from "../components/Categories.vue";
import Social from "../components/SocialLinks.vue";

export default {
  components: {
    Slider,
    MostPopular,
    Categories,
    Social,
  },
};
</script>

<style></style>
