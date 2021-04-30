<template>
  <Newsletter />
  <div class="instagram_posts">
    <div class="posts">
      <a class="post">
        <div class="sq_parent">
          <div class="sq_wrap">
            <div class="sq_content">
              <img src="../assets/img/insta.jpg" alt="" />
            </div>
          </div>
        </div>
      </a>
      <a class="post">
        <div class="sq_parent">
          <div class="sq_wrap">
            <div class="sq_content">
              <img src="../assets/img/youtube.jpg" alt="" />
            </div>
          </div>
        </div>
      </a>
      <a class="post">
        <div class="sq_parent">
          <div class="sq_wrap">
            <div class="sq_content">
              <img src="../assets/img/face.jpg" alt="" />
            </div>
          </div>
        </div>
      </a>
      <a class="post">
        <div class="sq_parent">
          <div class="sq_wrap">
            <div class="sq_content">
              <img src="../assets/img/pinterest.jpg" alt="" />
            </div>
          </div>
        </div>
      </a>
    </div>
  </div>
</template>

<script>
import Newsletter from "./Newsletter.vue";
export default {
  components: {
    Newsletter,
  },
};
</script>

<style></style>
