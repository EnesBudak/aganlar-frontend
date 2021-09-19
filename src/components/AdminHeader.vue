<template>
  <div class="footer">
    <div class="wrap">
    <div class="footer_bottom">
    <div >
        <img src="/assets/img/header-aganlar.png" alt="">
    </div>
     
    <el-button type="primary" @click="logout" icon="el-icon-close">Çıkış Yap</el-button>
    </div>
    
  </div>
  </div>
</template>

<script>
import Social from "./SocialLinks.vue";
export default {
  components: {
    Social,
  },
  methods:{
    logout(){
      this.$store.dispatch('LOGOUT').then((response) => {
        if(response.success){
          this.$router.push("/Home");
        }
      })
    }
  }
};
</script>

<style scoped>
.footer_bottom {
  background-color: #0045a0;
  padding: 20px;
  color: #fff;
  top: 0;

  position: relative;
  display: flex;
  justify-content:space-between;
}
@media screen and (max-width: 1000px) {
  .footer {
    padding: 0 !important;
  }
}

.footer {
  background-color: #0045a0;
  color: #0045a0;
  padding: 0 !important;
}
.wrap_float {
  margin: 30px;
}
.footer a {
  color: #0045a0 !important;
}
.footer ._title {
  color: #0045a0 !important;
}
</style>
