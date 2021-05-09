<template>
  <div class="erolagan__page">
    <div class="erolagan__container">
      <div>
        <div class="line"></div>
        <h1 class="title">Erol Agan</h1>
        <p>
          Gulet tasarlamak hiç bir zaman kolay bir iş olmamıştır. İşe kendini
          adamak, çok çalışmak, ve titizlik ister. Çünkü yapılacak tekne
          yenilmezliği ve güzelliği ile ünlenmiş “Bodrum Tipi Gulettir." Tamamen
          ahşaptan yapılan bu tekneler uzun yıllara dayalı çalışmalar ve
          derinlemesine incelemer sonucunda elde edilen meşakkatli bir bilgi
          kümesinin eseridir. Namı meşhur Akdeniz dalgalarının gücüne, sert
          rüzgarlara dayanmalı aynı zamanda insana kendini evinde hissettiren
          bir rahatlık içinde yeterince rahat ve geniş olmalı, işçiliği insanı
          çekerken bir gün batımı bir kuğu misali süzülerek ilerlemelidir.
        </p>
        <p>
          İşte Erol Ağan böylesi dayanıklı, lüks ve konforlu guletlerin mimarı
          ve yaratıcısıdır. Sorsalar Türkiye yat ve tekne imalat sektöründe kim
          kimdir; gerçek bir tekne imalatçısı, yenilikçi ve sektöre kattıkları
          saymakla bitmez Erol Ağan akla ilk gelen isimler arasında olacaktır.
          1936 yılında Bodrum’da doğan Erol Ağan olağan üstü iş geçmişi ve
          uluslararası tanınmışlığıyla hem gulet tasarımı ve hem de yapımı
          konusunda artık bulunması oldukça ender ustalardan birisi olarak
          karşımıza çıkmaktadır.
        </p>

        <p>
          Ağanlar Tersanesinin kurucusu, kökenleri deniz ve gulet olan bir
          aileden gelmektedir. O, atalarının ayak izlerini titizlikle ama daha
          çok çalışarak ve yaratarak izlemiştir. Bu başarısını kimi zaman ustası
          Ziya’ya kimi zaman da işine olan derin sevgisinde ve çalışma
          disiplininde aramak gerekir.
        </p>
        <p>
          Erol Ağan görevlerini ikinci kuşak Ağanlara başarıyla teslim etmekle
          birlikte çocuklarından birisi gördüğü tersanesini ziyaret etmekten hiç
          bir zaman kendisini alamamaktadır. Bugün hala onun her sabah düzenli
          işe gelişini, o çok sevdiği Türk kahvesini çalışanlarla konuşarak
          içişini seyreden bizler, şirkete kattığı vizyonun ne kadar sarsılmaz
          olduğunu bilerek ve hissederek çalışıyoruz.
        </p>
      </div>

      <div class="profile-photo">
        <img
          src="https://www.aganlar.com/Content/Themes/images/erol_agan.png"
          alt=""
          width="100%"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.erolagan__page {
  padding: 3em 0;
  margin-top: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #00184a;
  color: #fff;
}

.erolagan__container {
  max-width: 1024px;
  width: 60%;
  display: grid;
  gap: 70px;
  grid-template-columns: repeat(2, 1fr);
}
.erolagan__page p {
  margin-bottom: 1em;
  line-height: 1.75rem;
}
.profile-photo {
  width: 100%;
  transform: translateY(-90px);
}

.profile-photo img {
  width: 100%;
}

.line {
  width: 150px;
  height: 1px;
  background-color: #fff;
  margin-left: -75px;
  margin-bottom: 3em;
}

@media screen and (max-width: 768px) {
  .line {
    margin-left: -5px;
  }
  .erolagan__container {
    width: 95%;
  }
  .erolagan__container {
    grid-template-columns: 1fr !important;
  }

  .profile-photo {
    transform: translateY(0) !important;
  }
}

@media screen and (max-width: 1024px) {
  .erolagan__container {
    width: 90%;
  }
}
</style>
