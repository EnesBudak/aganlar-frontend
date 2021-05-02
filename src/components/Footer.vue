<template>
  <div class="footer">
    <div class="wrap">
      <div class="wrap_float">
        <div class="footer_top">
          <div class="left">
            <div class="col">
              <img
                src="https://yatvilla.com/hackyfte/2021/03/footer-logos-1.png"
                alt=""
              />
            </div>
            <div class="col">
              <ul>
                <li>
                  <a href="travel-list-full-width.html">Ağanlar Group</a>
                </li>
                <li>
                  <a href="travel-list-right-sidebar.html">Erol Ağan</a>
                </li>
                <li>
                  <a href="travel-list-left-sidebar.html">Blog</a>
                </li>
                <li>
                  <a href="travel-list-image-header.html">Basında Biz</a>
                </li>
                <li><a href="search-results.html">Logolarımız</a></li>
              </ul>
            </div>
            <div class="col" style="margin-bottom: 10%">
              <div class="_title"></div>
              <div class="contacts_info" style="line-height: 2rem">
                <div class="tel">
                  Telefon
                  <br />
                  <a href="tel:+90252444480">+90 (252) 444 4 808</a>
                </div>
                <div class="tel">
                  Fax
                  <br />
                  <a href="tel:+902523138766">+90 (252) 313 87 66</a>
                </div>
                <div class="email">
                  Email
                  <br />
                  <a href="mailto:info@aganlar.com">info@aganlar.com</a>
                </div>
                <!-- <div class="address">
                1355 Digistrict St, Suite 909 San, Francisco, CA 10001 <br />
                United States
              </div> -->
              </div>
            </div>
          </div>
          <div class="right" style="margin-top: 2rem">
            <div class="col">
              <h2>Aganları Takip Edin!</h2>
            </div>

            <div class="socials social-links" style="margin-top: 10%">
              <a href="#" class="link facebook"><span></span></a>
              <a href="#" class="link instagram"><span></span></a>
              <a href="#" class="link pinterest"><span></span></a>
              <a href="#" class="link youtube"><span></span></a>
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
