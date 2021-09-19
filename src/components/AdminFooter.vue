<template>
  <div class="footer">
    <div class="wrap">
   
    <div class="footer_bottom">
      <span>Copyright © 2021 by EB</span>
    </div>
  </div>
  </div>
</template>

<script>
import Social from "./SocialLinks.vue";
export default {
  components: {
    Social,
  },
};
</script>

<style scoped>
.footer_bottom {
  background-color: #0045a0;
  padding: 30px;
  color: #fff;
  bottom: 0;
  position: relative;
  display: flex;
  justify-content: center;
}
@media screen and (max-width: 1000px) {
  .footer {
    padding: 0 !important;
  }
}

.footer {
  background-color: #0045a0;
  color: #0045a0;
  padding: 0 !important;
}
.wrap_float {
  margin: 30px;
}
.footer a {
  color: #0045a0 !important;
}
.footer ._title {
  color: #0045a0 !important;
}
</style>
