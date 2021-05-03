<template>
  <Slider />
  <div class="page travel-list right-sidebar">
    <div class="page_head">
      <div class="wrap_float">
        <div class="wrap">
          <div class="wrap_float">
            <h1 class="title" style="margin-top: 30px">AGANLAR SERVİSLER</h1>
            <!-- <p class="subtitle">
              Latin literature from 45 BC, making it over 2000 years old
            </p> -->
          </div>
        </div>
      </div>
    </div>

    <div class="page_body">
      <div class="wrap">
        <div class="wrap_float">
          <div class="left_content">
            <div class="posts">
              <a
                v-for="(category, index) in yatchsCategories"
                :key="category"
                class="item"
              >
                <div
                  class="item_left"
                  :style="
                    index % 2 == 0
                      ? 'float:left !important;margin-right:20px'
                      : 'float:right !important'
                  "
                >
                  <div
                    class="image"
                    :style="[
                      category.imgUrl !== ''
                        ? {
                            'background-image':
                              'url(' + category.imageUrl + ')',
                          }
                        : { background: 'url(img/yat.jpg) center no-repeat' },
                    ]"
                  ></div>
                </div>
                <div
                  class="item_right"
                  :style="
                    index % 2 !== 0
                      ? 'float:right !important;margin-right:20px'
                      : 'float:left !important'
                  "
                >
                  <!-- <p class="country">North Africa</p> -->

                  <h3 class="item_title">{{ category.name }}</h3>
                  <p class="item_text">
                    {{ category.content }}
                  </p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
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
          name: "Mekanik",
          content:
            "Aganlar Yachts offers a comprehensive array of propulsion and mechanical repair services for your engine room needs. The jobs include installation, maintenance and repair of marine engines & generators, hydraulic stabilizer systems and pump lines, repair of marine propellers and shafts, maintenance of pulps & valves.",
          url: "",
          imageUrl:
            "https://www.aganlar.com/Admin/Content/Photos/Marina/2492019123054-untitled_2.jpg",
        },
        {
          name: "Boyama",
          content:
            "Our mega sheds are one of the largest in the region, in 4 of them we can accommodate yachts up to 62 meters in length . Every year, so many yachts are being painted in these sheds by Aganlar, with high quality level of finish.",
          url: "yacht",
          imageUrl:
            "https://www.aganlar.com/Admin/Content/Photos/Marina/1752019120733-repair_boyama.jpg",
        },
        {
          name: "Elektrik ve Elektronik",
          content:
            "We can design, repair, perform diagnostic, do a Megger test, install and modify all electrical systems AC or DC. This includes battery chargers, instruments, engine gauges, alternators, starter motors, bilge pumps, alarms, propane solenoid shut off systems, panel breakers switches, transfer switches, inverters, batteries and more.",
          url: "",
          imageUrl:
            "https://www.aganlar.com/Admin/Content/Photos/Marina/1752019120758-repair_elektrik.jpg",
        },
        {
          name: "Deck Replacing",
          content:
            "We have qualified craftsmen that can work in wood, steel, aluminium or composite material, all type of structural work can be performed by Aganlar Yachts. Repair of all structural damages include the maintenance of outer hull, plate changing, ribs & frames, rearrangement of tanks, manufacturing of new tanks, upgrading of superstructure, deck extension, etc.",
          url: "",
          imageUrl:
            "https://www.aganlar.com/Admin/Content/Photos/Marina/1752019120825-repair_deck.jpg",
        },
        {
          name: "Rigging",
          content:
            "Aganlar Yachts services a wide range of sailboats, from day sailors to large cruising vessels. Being passionate sailors ourselves, we understand sailboat rigging and can handle all of your vessel's rigging needs. These range from mast and boom servicing to refit and repairs, rigging work and hardware, commissioning and tuning, and project management.",
          url: "",
          imageUrl:
            "https://www.aganlar.com/Admin/Content/Photos/Marina/1752019120846-repair_rigging.jpg",
        },

        {
          name: "Joinery & Carpentry",
          content:
            "Aganlar Yachts has a rich tradition of exceptional woodworking. As custom boat builders, our craftsmen are continually challenged to hone and expand their skills. These skill sets carry over into our repair and refit work. Whether building a custom entertainment center or replanking a traditional wooden boat, our woodworkers excel.",
          url: "",
          imageUrl:
            "https://www.aganlar.com/Admin/Content/Photos/Marina/1752019120908-repair_carpentry.jpg",
        },
      ],
    };
  },
};
</script>

<style></style>
