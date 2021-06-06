<template>
  <div class="header__mobile bg-gray p-container">
    <div class="flex">
      <div class="flex items-center w-auto">
        <nav role="navigation">
          <div id="menuToggle">
            <!--
    A fake / hidden checkbox is used as click reciever,
    so you can use the :checked selector on it.
    -->
            <input type="checkbox" />

            <!--
    Some spans to act as a hamburger.
    
    They are acting like a real hamburger,
    not that McDonalds stuff.
    -->
            <span></span>
            <span></span>
            <span></span>

            <!--
    Too bad the menu has to be inside of the button
    but hey, it's pure CSS magic.
    -->
            <ul id="menu">
              <ul class="grid gap-30 items-center justify-center text-center">
                <li>
                  <a href="/hakkimizda">Hakkımızda</a>
                </li>
                <li>
                  <a href="/hakkimizda">Ağanlar Group</a>
                </li>
                <li>
                  <a href="/erolagan">Erol Ağan</a>
                </li>
                <li>
                  <a href="/basindabiz">{{ $t("press") }}</a>
                </li>
                <li>
                  <a href="/kalite">{{ $t("quality") }}</a>
                </li>
                <li>
                  <a href="/haberler">{{ $t("news") }}</a>
                </li>

                <li>
                  <a href="/iletisim">{{ $t("contact") }}</a>
                </li>
                <li>
                  <a href="/teknelerimiz">
                    <img src="/assets/img/header-yacht.png" alt=""
                  /></a>
                </li>
                <li>
                  <a href="/marina">
                    <img src="/assets/img/header-marina.png" alt="" />
                  </a>
                </li>
                <li>
                  <a href="/">
                    <img src="/assets/img/header-aganlar.png" alt="" />
                  </a>
                </li>
                <li>
                  <a href="/brokerage">
                    <img src="/assets/img/header-brokerage.png" alt=""
                  /></a>
                </li>
                <li>
                  <a href="/insurance"
                    ><img src="/assets/img/header-insurance.png" alt=""
                  /></a>
                </li>
              </ul>
            </ul>
          </div>
        </nav>
      </div>
      <div class="flex justify-center">
        <a href="/">
          <img src="/assets/img/header-aganlar.png" alt="" />
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped>
.text-center {
  text-align: center;
}
.header__mobile {
  display: none;
}

/* Hamburger Menu */

#menuToggle {
  display: block;
  position: relative;

  -webkit-user-select: none;
  user-select: none;
}

#menuToggle a {
  text-decoration: none;
  color: #232323;

  transition: color 0.3s ease;
}

#menuToggle a:hover {
  color: tomato;
}

#menuToggle input {
  display: block;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: 0;
  padding: 0;

  cursor: pointer;

  opacity: 0; /* hide this */
  z-index: 2; /* and place it over the hamburger */

  -webkit-touch-callout: none;
}

/*
 * Just a quick hamburger
 */
#menuToggle span {
  display: block;
  width: 33px;
  height: 4px;
  margin-bottom: 5px;
  position: relative;

  background: #000e29;
  border-radius: 3px;

  z-index: 1;

  transform-origin: 4px 0px;

  transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1),
    background 0.5s cubic-bezier(0.77, 0.2, 0.05, 1), opacity 0.55s ease;
}

#menuToggle span:first-child {
  transform-origin: 0% 0%;
}

#menuToggle span:nth-last-child(2) {
  transform-origin: 0% 100%;
}

/* 
 * Transform all the slices of hamburger
 * into a crossmark.
 */
#menuToggle input:checked ~ span {
  opacity: 1;
  transform: rotate(45deg) translate(-2px, -1px);
  background: #232323;
}

/*
 * But let's hide the middle one.
 */
#menuToggle input:checked ~ span:nth-last-child(3) {
  opacity: 0;
  transform: rotate(0deg) scale(0.2, 0.2);
}

/*
 * Ohyeah and the last one should go the other direction
 */
#menuToggle input:checked ~ span:nth-last-child(2) {
  transform: rotate(-45deg) translate(0, -1px);
}

/*
 * Make this absolute positioned
 * at the top left of the screen
 */
#menu {
  position: fixed;
  width: 100vw;
  height: 100vh;
  /* margin: -100px 0 0 -50px; */
  padding: 50px;
  padding-top: 125px;
  background: #ededed;
  list-style-type: none;
  -webkit-font-smoothing: antialiased;
  transform-origin: 0% 0%;
  transform: translate(-100%, 0);
  transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1);
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: auto;
}

#menu li {
  padding: 10px 0;
  font-size: 22px;
}

/*
 * And let's slide it in from the left
 */
#menuToggle input:checked ~ ul {
  transform: none;
}
</style>
