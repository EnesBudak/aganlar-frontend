<template>
  <div class="page blog-list-page full-width" style="margin-top: 10%">
    <div class="wrap">
      <div class="wrap_float">
        <div class="page_body">
          <div class="blog-list">
            <a
              v-for="news in newsList"
              :key="news"
              :href="news.newsUrl"
              class="blog_item"
            >
              <div
                class="blog_item_top"
                :style="'background-image: url(' + news.newsImage + ')'"
              >
                <div class="sq_parent">
                  <div class="sq_wrap">
                    <div class="sq_content">
                      <div class="tags">
                        <div class="tag green">{{ news.date }}</div>
                      </div>
                      <h3 class="_title">
                        {{ news.name }}
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
              <div class="blog_item_bottom">
                <p class="text">
                  {{ news.name }}
                </p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newsList: [
        {
          name: "YACHTS TURKIYE",
          date: "Kasım 2018",
          newsUrl:
            "https://www.aganlar.com/Admin/Content/Photos/Gallery/3042019174201-jpg2pdf.pdf",
          newsImage:
            "https://www.aganlar.com/Admin/Content/Photos/Gallery/3042019174201-yacht-turkiye-_-elpenor-_-1_kapak.jpg",
        },
        {
          name: "YACHTING WORLD",
          date: "Hazıran 2012",
          newsUrl:
            "https://www.aganlar.com/Admin/Content/Photos/Gallery/3042019174201-jpg2pdf.pdf",
          newsImage:
            "https://www.aganlar.com/Admin/Content/Photos/Gallery/3042019174119-1_kapak-2.jpg",
        },
        {
          name: "BOAT INTERNATIONAL",
          date: "Ağustos 2012",
          newsUrl:
            "https://www.aganlar.com/Admin/Content/Photos/Gallery/3042019173901-bi_kestrel_106_august_2012.pdf",
          newsImage:
            "https://www.aganlar.com/Admin/Content/Photos/Gallery/3042019173901-240-x-328.jpg",
        },
        {
          name: "BOAT BUILDER TURKEY",
          date: "Mart-Nisan 2012",
          newsUrl:
            "https://www.aganlar.com/Admin/Content/Photos/Gallery/3042019173803-jpg2pdf.pdf",
          newsImage:
            "https://www.aganlar.com/Admin/Content/Photos/Gallery/3042019173803-240x328.jpg",
        },
      ],
    };
  },
};
</script>

<style>
.blog_item_top {
  background-repeat: center !important;
  background-size: auto;
}
</style>
