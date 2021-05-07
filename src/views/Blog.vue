<template>
  <Slider
    imageUrl="https://www.aganlar.com/Admin/Content/Photos/Slider/2392019162305-blog_banner.jpg"
    height="50"
  />
  <div class="page blog-list-page full-width" style="margin-top: 5%">
    <div class="wrap">
      <div class="wrap_float">
        <div class="page_body">
          <div class="blog-list">
            <a
              href="https://mailchi.mp/cb50f24b0380/newsletter-december-2018?e=[UNIQID]"
              class="blog_item"
            >
              <div class="blog_item_top">
                <div class="sq_parent" style="background-color: #00184a">
                  <div class="sq_wrap">
                    <div class="sq_content">
                      <div class="tags">
                        <div class="tag green">December, 2018</div>
                      </div>
                      <h3 class="_title">Görüntüle</h3>
                    </div>
                  </div>
                </div>
              </div>
              <div class="blog_item_bottom">
                <p class="text"></p>
              </div>
            </a>
          </div>
          <div class="btn_wrap load_btn_wrap">
            <a class="load_more button"><span>Daha Fazla</span></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Slider from "../components/Slider.vue";
import BlogPost from "../components/BlogPost.vue";
export default {
  components: {
    Slider,
    BlogPost,
  },
};
</script>

<style></style>
