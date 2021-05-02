<template>
  <Slider
    title="Sigorta İçin Doğru Yerdesiniz!"
    url="http://www.aganlarsigorta.com"
    buttonTitle="Aganlar Insurance İçin Tıklayın!"
  />
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
