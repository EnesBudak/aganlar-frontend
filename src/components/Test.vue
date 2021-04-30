<template>
  <div class="search-tour">
    <div class="wrap">
      <div class="wrap_float">
        <div class="search-form">
          <div class="destination-col">
            <div class="label">Destination</div>
            <div class="select_wrap">
              <select>
                <option value="Destination" disabled selected>
                  Destination
                </option>
                <option value="United States">United States</option>
                <option value="United Kingdom">United Kingdom</option>
                <option value="Afghanistan">Afghanistan</option>
                <option value="Albania">Albania</option>
                <option value="Algeria">Algeria</option>
                <option value="American Samoa">American Samoa</option>
                <option value="Andorra">Andorra</option>
                <option value="Angola">Angola</option>
                <option value="Anguilla">Anguilla</option>
                <option value="Antarctica">Antarctica</option>
                <option value="Antigua and Barbuda">Antigua and Barbuda</option>
                <option value="Argentina">Argentina</option>
                <option value="Armenia">Armenia</option>
                <option value="Aruba">Aruba</option>
                <option value="Australia">Australia</option>
                <option value="Austria">Austria</option>
                <option value="Azerbaijan">Azerbaijan</option>
                <option value="Bahamas">Bahamas</option>
                <option value="Bahrain">Bahrain</option>
                <option value="Bangladesh">Bangladesh</option>
                <option value="Barbados">Barbados</option>
                <option value="Belarus">Belarus</option>
                <option value="Belgium">Belgium</option>
                <option value="Belize">Belize</option>
                <option value="Benin">Benin</option>
                <option value="Bermuda">Bermuda</option>
                <option value="Bhutan">Bhutan</option>
                <option value="Bolivia">Bolivia</option>
                <option value="Bosnia and Herzegovina">
                  Bosnia and Herzegovina
                </option>
                <option value="Botswana">Botswana</option>
                <option value="Bouvet Island">Bouvet Island</option>
                <option value="Brazil">Brazil</option>
                <option value="British Indian Ocean Territory">
                  British Indian Ocean Territory
                </option>
                <option value="Brunei Darussalam">Brunei Darussalam</option>
                <option value="Bulgaria">Bulgaria</option>
              </select>
            </div>
          </div>
          <div class="date-col">
            <div class="label">Check In</div>
            <div class="date_div">
              <input
                type="text"
                v-model="date"
                class="js_calendar desctop-input"
              />
              <input type="date" v-model="date" class="mobile-input" />
              <div class="day">21</div>
              <div class="date_div_right">
                <div class="month">December</div>
                <div class="year">2019</div>
              </div>
            </div>
          </div>
          <div class="date-col">
            <div class="label">Check Out</div>
            <div class="date_div">
              <input type="text" class="js_calendar desctop-input" />
              <input type="date" class="mobile-input" />
              <div class="day">21</div>
              <div class="date_div_right">
                <div class="month">December</div>
                <div class="year">2019</div>
              </div>
            </div>
          </div>
          <div class="num-col">
            <div class="label">Aduld</div>
            <div class="num_wrap">
              <div class="buttons">
                <button class="plus"></button>
                <button class="minus"></button>
              </div>
              <input
                type="number"
                class="val js_num"
                value="3"
                min="0"
                max="99"
              />
            </div>
          </div>
          <div class="num-col last">
            <div class="label">Children</div>
            <div class="num_wrap">
              <div class="buttons">
                <button class="plus"></button>
                <button class="minus"></button>
              </div>
              <input
                type="number"
                class="val js_num"
                value="3"
                min="0"
                max="99"
              />
            </div>
          </div>
          <button class="btn button"><span>Search</span></button>
        </div>
      </div>
    </div>
  </div>
  <div class="footer">
    <div class="wrap">
      <div class="wrap_float">
        <div class="footer_top">
          <div class="left">
            <div class="col">
              <div class="_title m_title">Travel list</div>
              <ul>
                <li>
                  <a href="travel-list-full-width.html"
                    >Travel list Full With</a
                  >
                </li>
                <li>
                  <a href="travel-list-right-sidebar.html"
                    >Travel list Right Sidebar</a
                  >
                </li>
                <li>
                  <a href="travel-list-left-sidebar.html"
                    >Travel list Left Sidebar</a
                  >
                </li>
                <li>
                  <a href="travel-list-image-header.html"
                    >Travel list Full With Image Header</a
                  >
                </li>
                <li><a href="search-results.html">Search Result</a></li>
                <li>
                  <a href="search-results-not-found.html"
                    >Search Nothing Found</a
                  >
                </li>
                <li>
                  <a href="tour-page-right-sidebar.html"
                    >Tour page Right Sidebar</a
                  >
                </li>
                <li>
                  <a href="tour-page-left-sidebar.html"
                    >Tour page Left Sidebar</a
                  >
                </li>
                <li>
                  <a href="tour-page-right-sidebar-width-reply.html"
                    >Tour page with reply form</a
                  >
                </li>
              </ul>
            </div>
            <div class="col">
              <div class="_title m_title">Page</div>
              <ul>
                <li><a href="stories-full-width.html">Stories Full With</a></li>
                <li><a href="story.html">Stories Single</a></li>
                <li>
                  <a href="stories-right-sidebar.html">Stories Right Sidebar</a>
                </li>
                <li>
                  <a href="stories-left-sidebar.html">Stories Left Sidebar</a>
                </li>
                <li><a href="gallery.html">Gallery</a></li>
                <li><a href="gallery-single.html">Gallery Single</a></li>
                <li><a href="404.html">404 page</a></li>
                <li>
                  <a href="static-page-right-sidebar.html"
                    >Static Page Right Sidebar</a
                  >
                </li>
                <li>
                  <a href="static-page-left-sidebar.html"
                    >Static Page Left Sidebar</a
                  >
                </li>
                <li><a href="about-us.html">About Us</a></li>
              </ul>
            </div>
            <div class="col">
              <div class="_title m_title">Blog</div>
              <ul>
                <li><a href="blog-full-width.html">Blog Full With</a></li>
                <li>
                  <a href="blog-right-sidebar.html">Blog Right Sidebar</a>
                </li>
                <li><a href="blog-left-sidebar.html">Blog Left Sidebar</a></li>
                <li><a href="blog-search-results.html">Search Result</a></li>
                <li>
                  <a href="blog-search-results-not-found.html"
                    >Search Nothing Found</a
                  >
                </li>
                <li>
                  <a href="blog-single-right-sidebar.html"
                    >Blog Single Right Sidebar</a
                  >
                </li>
                <li>
                  <a href="blog-single-left-sidebar.html"
                    >Blog Single Left Sidebar</a
                  >
                </li>
              </ul>
            </div>
          </div>
          <div class="right">
            <div class="_title">Contacts</div>
            <div class="contacts_info">
              <div class="tel">
                <a href="tel:+19092020119">+ 1909 202 0119</a>
                <p>Round the clock support</p>
              </div>
              <div class="email">
                <a href="mailto:info@hellodigi.ru">info@hellodigi.ru</a>
                <p>For any questions</p>
              </div>
              <div class="address">
                1355 Digistrict St, Suite 909 San, Francisco, CA 10001 <br />
                United States
              </div>
            </div>
            <div class="socials social-links">
              <a href="#" class="link facebook"><span></span></a>
              <a href="#" class="link instagram"><span></span></a>
              <a href="#" class="link pinterest"><span></span></a>
              <a href="#" class="link twitter"><span></span></a>
              <a href="#" class="link youtube"><span></span></a>
            </div>
          </div>
        </div>
        <div class="footer_bottom">
          <div class="left">
            <a href="#">Privacy Policy</a>
          </div>
          <div class="right">Copyright © 2019 by Digistrict</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      date: "123",
    };
  },
};
</script>

<style scoped>
a {
  color: #42b983;
}
</style>
