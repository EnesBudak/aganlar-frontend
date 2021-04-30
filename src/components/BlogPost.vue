<template>
  <div class="blog">
    <div class="wrap">
      <div class="wrap_float">
        <div class="title_wrap">
          <h2 class="title">Haberler</h2>
          <!-- <p class="subtitle">Watch and be inspired</p> -->
          <div class="controls">
            <a href="blog-right-sidebar.html" class="link">Tüm Haberler</a>
          </div>
        </div>
        <div class="section_content">
          <a
            v-for="i in 3"
            :key="i"
            href="blog-single-right-sidebar.html"
            class="blog_item"
          >
            <div
              class="blog_item_top"
              style="background-image: url(img/demo-bg.jpg)"
            >
              <div class="sq_parent">
                <div class="sq_wrap">
                  <div class="sq_content">
                    <div class="tags">
                      <div class="tag red">Haber</div>
                      <!-- <div class="tag green">Countries</div> -->
                    </div>
                    <h3 class="_title">
                      Gulet Aganippe Mavi Yolculuk İçin Hazır!
                    </h3>
                  </div>
                </div>
              </div>
              <div class="shadow js-shadow"></div>
            </div>
            <div class="blog_item_bottom">
              <div class="author">
                <div class="date">30 Nisan 2019</div>
              </div>
              <p class="text">
                {{ content.substring(0, 200) }}... Devamını Oku
              </p>
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["content", "imageUrl"],
  data() {
    return {
      content:
        "AGANİPPE yatımız; lüks standartlarda, 30m boyunda, Türkiye ile      yakın coğrafyadaki adaların huzur verici denizlerinde en unutulmaz deniz yolculuğu ve deneyimini yaşatmak üzeretasarlanmıştır. AGANİPPE, geleneksel yat imalat tekniklerinin hala yaşatıldığı Bodrum’da inşaa edilmiş ve 2010 yılında denizeindirilmiştir. 2019 ve 2020 yıllarında ağırlayacağı misafirlerinin konforu için kapsamlı ve yüksek standartlarda  bakım ve onarımları yapılmıştır. Yatımız, 12 kişiye kadar aile ya da grup misafirlerini konuk etmek için hazır durumdadır. AGANİPPE’nın profesyonel 4 kişilik mürettebatı, sizi güvertede karşılamak, konuk etmek ve hayatınızın en unutulmaz, emsalsiz tatil deneyimini yaşamanız üzere heyecanla beklemektedir.",
    };
  },
};
</script>

<style></style>
