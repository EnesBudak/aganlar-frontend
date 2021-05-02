<template>
  <div>
    <div class="top_header"></div>
    <div class="top_panel">
      <div class="wrap">
        <div class="wrap_float">
          <div class="menu_wrap" id="menu_wrap">
            <div class="scroll">
              <div class="center">
                <div class="menu">
                  <ul>
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
                  <div class="mobile_content">
                    <div class="currency_mob">
                      <select>
                        <option value="tr">TR</option>
                        <option value="en">EN</option>
                      </select>
                      <p>Dil Seçiniz</p>
                    </div>
                    <div class="tel">
                      <a href="tel:+0034411345777">+ 90 543 529 21 17</a>
                    </div>
                    <div class="social">
                      <a href="#" class="link facebook"><span></span></a>
                      <a href="#" class="link instagram"><span></span></a>
                      <a href="#" class="link pinterest"><span></span></a>
                      <a href="#" class="link twitter"><span></span></a>
                      <a href="#" class="link youtube"><span></span></a>
                    </div>
                  </div>
                </div>
                <div class="close" id="menu-close">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>

              <div class="user" id="userblock">
                <div class="currency">
                  <select>
                    <option value="tr">TR</option>
                    <option value="en">EN</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div class="mobile_btn" id="mobile_btn">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
      <div class="popup login" id="login">
        <div class="scroll">
          <div class="scroll_wrap">
            <div class="popup-head">
              <div class="title">Sign In</div>
              <a class="link js-popup-open" data-href="#registration"
                >Sign Up</a
              >
            </div>
            <div class="popup-body">
              <div class="subtitle">
                Use the e-mail and password that you specified when registering
                on the site
              </div>
              <div class="form">
                <input type="text" class="input" placeholder="Login" />
                <input type="text" class="input" placeholder="Password" />
                <button class="submit button">Sign In</button>
                <a href="#" class="link">Forgot password?</a>
              </div>
            </div>
            <div class="popup-foot">
              <p>Login via social networks</p>
              <div class="social-links">
                <a href="#" class="link facebook"><span></span></a>
                <a href="#" class="link twitter"><span></span></a>
              </div>
            </div>
          </div>
        </div>
        <div class="close"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.top_panel {
  background-color: #fff;
}
.top_panel .wrap_float {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}
.top_header {
  width: 100%;
  height: 50px;

  background-color: #0045a0;
}
.top_panel span {
  color: black;
}

@media screen and (max-width: 640px) {
  .top_panel {
    background-color: transparent;
  }
}
@media screen and (max-width: 1200px) {
  .top_panel {
    background-color: transparent;
  }
}
</style>
