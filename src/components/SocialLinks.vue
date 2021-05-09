<template>
  <Newsletter />
</template>

<script>
import Newsletter from "./Newsletter.vue";
export default {
  components: {
    Newsletter,
  },
};
</script>

<style>
@media screen and (max-width: 1200px) {
  .post {
    width: 50% !important;
  }
}
</style>
