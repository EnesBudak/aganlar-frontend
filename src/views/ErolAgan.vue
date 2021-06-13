<template>
  <div class="erolagan__page">
    <div class="erolagan__container">
      <div>
        <div class="line"></div>
        <h1 class="title">Erol Agan</h1>
        <p>
          {{ $t("erolagancontent1") }}
        </p>
        <p>
          {{ $t("erolagancontent2") }}
        </p>

        <p>
          {{ $t("erolagancontent3") }}
        </p>
        <p>
          {{ $t("erolagancontent4") }}
        </p>
      </div>

      <div class="profile-photo">
        <img src="/assets/img/erol_agan.png" alt="" width="100%" />
      </div>
    </div>
  </div>

  <div class="slider_wrap">
    <div class="slider lightgallery" id="tour-head-slider">
      <a v-for="image in images" :key="image" :href="image" class="slide">
        <img :src="image" alt="" />
      </a>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      images: [
        "/assets/img/2642019114530-erol_agan_img_new_2.jpg",
        "/assets/img/2642019114540-erol_agan_img_new_3.jpg",
        "/assets/img/2642019114459-erol_agan_img_1.png",
        "/assets/img/2642019114516-erol_agan_img_new_1.jpg",
        "/assets/img//2642019114530-erol_agan_img_new_2.jpg",
      ],
    };
  },
};
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
