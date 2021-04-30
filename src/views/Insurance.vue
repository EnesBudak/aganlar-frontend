<template>
  <Slider />
  <div class="page travel-list right-sidebar">
    <div class="page_head">
      <div class="wrap_float">
        <div class="wrap">
          <div class="wrap_float">
            <h1 class="title" style="margin-top: 30px">AGANLAR INSURANCE</h1>
            <!-- <p class="subtitle">
              Latin literature from 45 BC, making it over 2000 years old
            </p> -->
          </div>
        </div>
      </div>
    </div>

    <div class="page_body">
      <div class="wrap">
        <div class="wrap_float">
          <div class="left_content">
            <div class="posts">
              <a
                v-for="category in yatchsCategories"
                :key="category"
                class="item"
              >
                <div class="item_left">
                  <div
                    class="image"
                    :style="[
                      category.imgUrl !== ''
                        ? {
                            'background-image':
                              'url(' + category.imageUrl + ')',
                          }
                        : { background: 'url(img/yat.jpg) center no-repeat' },
                    ]"
                  >
                    <div
                      class="shadow js-shadow"
                      style="background-image: url(img/tour-item-1.jpg)"
                    ></div>
                  </div>
                </div>
                <div class="item_right">
                  <!-- <p class="country">North Africa</p> -->

                  <h3 class="item_title">{{ category.name }}</h3>
                  <p class="item_text">
                    {{ category.content }}
                  </p>
                  <div class="pagination">
                    <a
                      target="_blank"
                      :href="category.url"
                      class="arrow next"
                    ></a>
                  </div>
                </div>
              </a>
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
      yatchsCategories: [
        {
          name: "Insurance",
          content:
            "Sigorta alanında müşteri memnuniyetinin önemini biliyor, her başvuruyu şeffaf ve objektif bir anlayışla değerlendiriyoruz.Detaylı bilgi almak için internet sitemizi ziyaret edebilirsiniz.",
          url: "http://www.aganlarsigorta.com",
          imageUrl:
            "https://yatvilla.com/hackyfte/2021/03/1872019161804-insurance1.jpg",
        },
      ],
    };
  },
};
</script>

<style></style>
