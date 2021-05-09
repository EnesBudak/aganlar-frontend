<template>
  <div class="page blog-list-page full-width" style="margin-top: 5%">
    <div class="description-block">
      <div class="wrap">
        <div class="wrap_float" style="margin-top: 5%">
          <div class="title"></div>
          <div class="text">
            Çevreye vereceği zararların en az seviyeye indirilmesi ve çevre
            kirliliği risklerinin kaynağında önlenmesi konusunda başarılı
            olabilmek için ISO 9001 Kalite Yönetim Sistemi standardını
            uygulanıyoruz. Tersanemizde ve marinada kalite yönetimi yanında ISO
            14001 Çevre Yönetim Sistemi ve OHSAS 18001 İş Sağlığı ve Güvenliği
            Yönetim Sistemi standartlarını uygulamaktadır.
          </div>
        </div>
      </div>
    </div>

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
              <div class="blog_item_top">
                <img style="width: 100%" :src="news.newsImage" alt="" />
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
            "https://www.aganlar.com/Content/Themes/images/kalite-18001.jpg",
          newsImage:
            "https://www.aganlar.com/Content/Themes/images/kalite-18001.jpg",
        },
        {
          name: "YACHTING WORLD",
          date: "Hazıran 2012",
          newsUrl:
            "https://www.aganlar.com/Content/Themes/images/kalite-9001.jpg",
          newsImage:
            "https://www.aganlar.com/Content/Themes/images/kalite-9001.jpg",
        },
        {
          name: "BOAT INTERNATIONAL",
          date: "Ağustos 2012",
          newsUrl:
            "https://www.aganlar.com//Content/Themes/images/kalite-14001.jpg",
          newsImage:
            "https://www.aganlar.com//Content/Themes/images/kalite-14001.jpg",
        },
      ],
    };
  },
};
</script>

<style scoped>
.blog_item_top {
  background-repeat: center !important;
  background-size: cover;

  height: 100% !important;
}
.blog-list-page .page_head {
  padding-right: 0 !important;
}

.subtitle {
  font-size: 18px;
  color: #000 !important;
  margin-bottom: 5%;
  text-align: center;
}
</style>
