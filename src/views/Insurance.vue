<template>
  <div style="margin-top: 5%">
    <Slider
      height="100"
      title="insurancecontent"
      url="http://www.aganlarsigorta.com"
      imageUrl="/assets/img/1872019155327-6.yacht_insurance_510.jpg"
      buttonTitle="clickfordetail"
    />
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
          imageUrl: "/assets/img/1872019161804-insurance1.jpg",
        },
      ],
    };
  },
};
</script>

<style></style>
