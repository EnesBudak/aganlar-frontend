<template>
  <header class="header">
    <div class="header__top flex items-center space-between p-container">
      <nav class="header__top--socials">
        <a
          href="https://www.facebook.com/Aganlar-Shipyard-Marina-495465727226594/"
          class="header__top--social-icon"
          ><facebook-icon
        /></a>
        <a href="https://twitter.com/aganlar" class="header__top--social-icon"
          ><twitter-icon
        /></a>
        <a
          href="https://www.instagram.com/aganlar/"
          class="header__top--social-icon"
          ><instagram-icon
        /></a>
        <a
          href="https://www.youtube.com/channel/UCtq-tKx_on2xNE5zDL1BV1Q"
          class="header__top--social-icon"
          ><youtube-icon
        /></a>
      </nav>
      <div class="w-auto">
        <select class="lang-select">
          <option>TR</option>
          <option>EN</option>
        </select>
      </div>
    </div>
    <div class="header__desktop">
      <div class="p-container flex items-center bg-gray">
        <div class="header__collapsible w-auto">
          <div
            class="header__collapsible--action cursor-pointer"
            @click="showInfo = !showInfo"
          >
            Hakkımızda
          </div>
        </div>
        <div class="flex justify-center">
          <div class="w-auto">
            <ul class="grid grid-cols-5 gap-30 items-center">
              <li>
                <a href="/teknelerimiz">
                  <img
                    src="https://yatvilla.com/hackyfte/2021/03/header-yacht.png"
                    alt=""
                /></a>
              </li>
              <li>
                <a href="/marina">
                  <img
                    src="https://yatvilla.com/hackyfte/2021/03/header-marina.png"
                    alt=""
                  />
                </a>
              </li>
              <li>
                <a href="/">
                  <img
                    src="https://yatvilla.com/hackyfte/2021/03/header-aganlar.png"
                    alt=""
                  />
                </a>
              </li>
              <li>
                <a href="/brokerage">
                  <img
                    src="https://yatvilla.com/hackyfte/2021/03/header-brokerage.png"
                    alt=""
                /></a>
              </li>
              <li>
                <a href="/insurance"
                  ><img
                    src="https://yatvilla.com/hackyfte/2021/03/header-insurance.png"
                    alt=""
                /></a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="header__collapsible--menu" :class="{ visible: showInfo }">
        <ul class="flex items-center">
          <a href="/hakkimizda" class="nav-item subMenu">Ağanlar Group</a>
          <a href="/erolagan" class="nav-item subMenu">Erol Ağan</a>
          <a href="/basindabiz" class="nav-item subMenu">Basında Biz</a>

          <a href="/kalite" class="nav-item subMenu">Kalite</a>
          <a href="/haberler" class="nav-item subMenu">Haberler</a>
          <a href="/blog" class="nav-item subMenu">Blog</a>

          <a href="/contact" class="nav-item subMenu">İletişim</a>
        </ul>
      </div>
    </div>
    <mobile-header />
  </header>
</template>

<script>
import FacebookIcon from "./icons/Facebook.vue";
import TwitterIcon from "./icons/Twitter.vue";
import InstagramIcon from "./icons/Instagram.vue";
import YoutubeIcon from "./icons/Youtube.vue";

import MobileHeader from "./MobileHeader.vue";

export default {
  name: "Header",
  components: {
    FacebookIcon,
    TwitterIcon,
    YoutubeIcon,
    InstagramIcon,
    MobileHeader,
  },
  data() {
    return {
      showInfo: false,
    };
  },
};
</script>

<style>
.lang-select {
  background-color: transparent;
  border: none;
  outline: none;
  font-size: 14px;
  color: #fff;
  padding: 4px 10px;
}
.p-container {
  padding: 10px 36px;
}

.cursor-pointer {
  cursor: pointer;
}

.bg-gray {
  background-color: rgba(235, 235, 236, 0.85);
}
.header {
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
}

.w-auto {
  width: auto !important;
}
.grid {
  display: grid;
}

.grid-cols-5 {
  grid-template-columns: repeat(5, auto);
}

.gap-30 {
  grid-gap: 30px;
}

.flex {
  display: flex;
}
.items-center {
  align-items: center;
}

.justify-center {
  justify-content: center;
}

.space-between {
  justify-content: space-between;
}

.header {
}

.header__top {
  width: 100%;
  background-color: #00184a;
}

.header__top--socials {
  width: auto !important;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 10px;
  align-items: center;
}

.header__top--social-icon {
  width: 16px;
  height: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.header__top--social-icon svg {
  width: 100%;
  height: 100%;
}

.header__collapsible {
}

.header__collapsible--menu {
  background-color: #ebebeb;

  width: 100vw;
  visibility: hidden;
  opacity: 0;
  transition: all 200ms;
}

.visible {
  visibility: visible;
  opacity: 1;
}

.nav-item {
  padding: 18px 30px;
  color: #00184a;
}

.nav-item:hover {
  background-color: #00184a;
  color: #fff !important;
}

.header__desktop {
  display: block;
}

/* for tablet */
@media only screen and (max-width: 768px) {
  .p-container {
    padding: 10px 12px !important;
  }
}
@media only screen and (max-width: 985px) {
  .header__desktop {
    display: none;
  }

  .header a,
  .header select,
  .header nav,
  .header svg,
  .header img {
    margin-bottom: 0 !important;
  }

  .header__mobile {
    display: block !important;
  }
}
</style>
