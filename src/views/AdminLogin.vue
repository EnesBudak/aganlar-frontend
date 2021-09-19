<template>
    <div class="ay-page">
      <div class="ay-page__container">
        <div  class="ay-page__form">
          <div class="flex-1">
            <div class="ay-hero">
              <h1 class="ay-hero-title">Giriş Yap</h1>
              <h4 class="ay-subtitle">Aganlar Yönetim Paneli</h4>
            </div>
            <!-- 
                Hata Mesajını kullanabilmek için parent elemente "ay-error" class'ı eklenmelidir.
                
                Örnek olarak =>  <div class="ay-input-control ay-error">    
            -->
            <div class="ay-input-control">
              <label class="ay-label">Email</label>
              <input v-model="user.email" name="email" required class="ay-input" />
              <!--     
                Örnek Hata mesajı => <p class="ay-error__message">password must be at least 8 characters</p> 
               -->
            </div>
            <div class="ay-input-control">
              <label class="ay-label">Şifre</label>
              <input
                v-model="user.password"
                name="password"
                required
                type="password"
                class="ay-input"
              />
            </div>
            <div>
              <button @click="login" type="submit" class="ay-button">Giriş Yap</button>
            </div>
            <!-- <div class="ay-form__others">
              <div class="ay-form__other">
                <span class="ay-form__other--label"
                  >Don't have an account?</span
                >
                <span class="ay-form__other--link">
                  <a href="/signup.html">Sign up!</a>
                </span>
              </div>
              <div class="ay-form__other">
                <span class="ay-form__other--label">Forgot your password</span>
                <span class="ay-form__other--link">
                  <a href="/reset.html">Reset Password</a>
                </span>
              </div>
            </div> -->
          </div>
          <div class="ay-page__banner ay-page__banner-login">
            <img src="/assets/img/header-aganlar.png" alt="" />
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        email: "",
        password: "",
      },
    };
  },
  computed: {},
  methods: {
    login() {
      this.$store
        .dispatch("LOGIN", {
          email: this.user.email,
          password: this.user.password,
        })
        .then((res) => {
          console.log(res.data);
          if (res.status === 400) {
            this.$notify({
              title: "Hata",
              message: "Email ya da şifre hatalı!",
              type: "error",
              offset: 100,
            });
          } else {
            this.$notify({
              title: "Başarılı",
              message: "Başarıyla Giriş Yaptınız !",
              type: "success",
              offset: 100,
            });
            this.$router.push("/admin");
          }
        })
        .catch((err) => {
          this.$notify({
            title: "Hata",
            message: err,
            type: "error",
          });
        });
    },
  },
  created() {},
};
</script>

<style scoped>
.ay-page {
  min-width: 100vw;
  min-height: 100vh;
  background: radial-gradient(
        218.51% 281.09% at 100% 100%,
        rgba(41, 128, 185, 0.5) 0%,
        rgba(109, 213, 250, 0.3) 45.83%,
        rgba(255, 255, 255, 0.2) 100%
      )
      center center / cover,
    url(../public/background.jpg);
  display: flex;
  align-items: center;
  justify-content: center;
}

.ay-page__container {
  width: 100%;
  max-width: 900px;
  animation: 0.7s ease 0s 1 normal forwards running gVazMF;
  backdrop-filter: blur(40px);
  background: rgba(50, 61, 109, 0.5);
  box-shadow: rgb(0 0 0 / 25%) 0px 50px 100px,
    rgb(255 255 255 / 20%) 0px 0px 0px 0.5px inset;
  transition: all 0.3s ease-out 0s;
  display: flex;
  align-items: center;
}

.ay-hero {
  margin-bottom: 1.5em;
}

.ay-page__form {
  width: 100%;
  min-height: 100vh;
  display: grid;
  grid-template-columns: 1fr;
  gap: 40px;
  align-items: center;
  padding: 30px 40px;
  overflow: hidden;
  position: relative;
}

.ay-page__banner {
  display: none;
  /* width: 60%;
  height: 100%;
  position:absolute; */
  right: -100px;
  bottom: 0;
  transition: all 0.3s ease-out 0s;
}

.ay-page__banner.ay-page__banner-login:hover {
  filter: hue-rotate(10deg) brightness(120%) saturate(180%);
  transform: scale(0.98);
}
.ay-page__banner.ay-page__banner-signup:hover {
  filter: hue-rotate(10deg) brightness(120%) saturate(180%);
  transform: translateX(210px) translateY(50px) !important;
}

.ay-page__banner img {
  width: 100%;
  height: 100%;
}

.ay-form__others {
  display: grid;
  grid-gap: 0.5;
  margin-top: 1em;
}

.ay-form__other--label {
  font-weight: 600;
  font-size: 13px;
  line-height: 130%;
  color: rgba(255, 255, 255, 0.7);
}
.ay-form__other--link a {
  margin-left: 5px;
  color: rgb(32, 227, 178);
  cursor: pointer;
  font-size: 13px;

  font-weight: bold;
  transition: all 0.8s cubic-bezier(0.075, 0.82, 0.165, 1) 0s;
  outline: none;
  border-bottom: 3px solid transparent;
}
.ay-form__other--link a:hover {
  filter: hue-rotate(10deg) brightness(120%) saturate(180%);
}

/* ------ <FLEX> -------- */

.flex {
  display: flex;
}

.flex-1 {
  flex: 1 1 0%;
}

/* ------ </FLEX> -------- */

/* ------ <FORM ELEMENTS> -------- */

.ay-input-control {
  margin-bottom: 1em;
}

.ay-input {
  border: none;
  background-color: rgba(255, 255, 255, 0.3);
  border-radius: 5px;
  color: white;
  outline: none;
  padding: 0.5em 0.6em;
  transition: all 1s cubic-bezier(0.075, 0.82, 0.165, 1) 0s;
  width: 100%;
}

.ay-input-control.ay-error .ay-input {
  background-color: rgba(255, 145, 145, 0.3);
  border-radius: 5px;
  box-shadow: rgb(235 12 12 / 30%) 0px 10px 40px,
    rgb(227 32 32) 0px 0px 0px 1px inset;
  color: white;
  outline: none;
  padding: 0.5em 0.6em;
  transition: all 1s cubic-bezier(0.075, 0.82, 0.165, 1) 0s;
  width: 100%;
}
.ay-input:focus {
  background-color: rgba(0, 0, 0, 0.3) !important;
  box-shadow: rgb(12 235 235 / 30%) 0px 10px 40px,
    rgb(32 227 178) 0px 0px 0px 1px inset;
}
.ay-input-control.ay-error .ay-input:focus {
  background-color: rgba(255, 145, 145, 0.3);
  border-radius: 5px;
  box-shadow: rgb(235 12 12 / 30%) 0px 10px 40px,
    rgb(227 32 32) 0px 0px 0px 1px inset;
  color: white;
  outline: none;
  padding: 0.5em 0.6em;
  transition: all 1s cubic-bezier(0.075, 0.82, 0.165, 1) 0s;
  width: 100%;
}

.ay-error__message {
  font-size: 10px;
  text-transform: capitalize;
  font-weight: 600;
  line-height: 130%;
  color: rgba(255, 255, 255, 0.7);
  padding-top: 0.8em;
}

.ay-label {
  display: block;
  font-weight: 600;
  font-size: 13px;
  line-height: 130%;
  color: rgba(255, 255, 255, 0.7);
  padding-bottom: 0.4em;
}

.ay-button {
  background: linear-gradient(
    to right bottom,
    rgb(12, 235, 235) 0%,
    rgb(32, 227, 178) 100%
  );
  border: none;
  border-radius: 5px;
  box-shadow: rgb(0 0 0 / 5%) 1px 1px 8px;
  cursor: pointer;
  height: 30px;
  outline: none;
  padding: 0.5em 0.6em;
  transition: all 0.8s cubic-bezier(0.075, 0.82, 0.165, 1) 0s;
  width: 170px;
  font-weight: 600;
  font-size: 13px;
  line-height: 130%;
}

/* ------ </FORM ELEMENTS> -------- */

/* ------ <TYPOGRAPHY>  -------- */

.ay-hero-title {
  font-weight: bold;
  font-size: 40px;
  color: white;
}

.ay-subtitle {
  font-weight: normal;
  font-size: 20px;
  line-height: 140%;
  color: rgba(255, 255, 255, 0.7);
}
@media (min-width: 640px) {
}
@media (min-width: 768px) {
  .ay-page__container {
    max-width: 900px;
    border-radius: 20px;
  }
  .ay-page__form {
    grid-template-columns: 1fr 1fr;
    min-height: 500px;
  }
  .ay-page__banner {
    display: block;
  }
}
</style>
