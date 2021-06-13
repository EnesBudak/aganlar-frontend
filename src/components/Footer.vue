<template>
  <div class="footer">
    <div class="wrap">
      <div class="wrap_float">
        <div class="footer_top">
          <div class="left">
            <div class="col">
              <img src="/assets/img/footer-logos-1.png" alt="" />
            </div>
            <div class="col">
              <ul>
                <li>
                  <a href="/hakkimizda">Ağanlar Group</a>
                </li>
                <li>
                  <a href="/erolagan">Erol Ağan</a>
                </li>
                <li>
                  <a href="/blog">Blog</a>
                </li>
                <li>
                  <a href="/basindabiz">{{ $t("press") }}</a>
                </li>
                <!-- <li><a href="search-results.html">Logolarımız</a></li> -->
              </ul>
            </div>
            <div class="col" style="margin-bottom: 10%; line-height: 1rem">
              <div class="contacts_info">
                <ul>
                  <li>
                    {{ $t("tel") }}

                    <a href="tel:+90252444480">+90 (252) 444 4 808</a>
                  </li>

                  <li>
                    Email

                    <a href="mailto:info@aganlar.com">info@aganlar.com</a>
                  </li>
                </ul>

                <!-- <div class="address">
                1355 Digistrict St, Suite 909 San, Francisco, CA 10001 <br />
                United States
              </div> -->
              </div>
            </div>
          </div>
          <div class="right" style="margin-top: 2rem">
            <div class="col">
              <h2>{{ $t("follow") }}</h2>
            </div>

            <div class="socials social-links" style="margin-top: 10%">
              <a
                href="https://www.facebook.com/Aganlar-Shipyard-Marina-495465727226594/"
                class="link facebook"
                ><span></span
              ></a>
              <a
                href="https://www.instagram.com/aganlar/"
                class="link instagram"
                ><span></span
              ></a>
              <a href="https://twitter.com/aganlar" class="link twitter"
                ><span></span
              ></a>
              <a
                href="https://www.youtube.com/channel/UCtq-tKx_on2xNE5zDL1BV1Q"
                class="link youtube"
                ><span></span
              ></a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="footer_bottom">
      <span>Copyright © 2021 by EB</span>
    </div>
  </div>
</template>

<script>
import Social from "./SocialLinks.vue";
export default {
  components: {
    Social,
  },
};
</script>

<style scoped>
.footer_bottom {
  background-color: #0045a0;
  padding: 30px;
  color: #fff;
  bottom: 0;
  position: relative;
  display: flex;
  justify-content: center;
}
@media screen and (max-width: 1000px) {
  .footer {
    padding: 0 !important;
  }
}

.footer {
  background-color: #fff;
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
