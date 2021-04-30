<template>
  <div class="search-tour">
    <div class="wrap">
      <div class="wrap_float">
        <div class="search-form">
          <div class="destination-col">
            <div class="label">Tip Seçiniz</div>
            <div class="select_wrap">
              <select>
                <option value="Destination" disabled="" selected="">Tip</option>
                <option value="Destination" disabled="" selected="">
                  Yelkenli
                </option>
              </select>
            </div>
          </div>
          <div class="destination-col">
            <div class="label">Kapasite Seçiniz</div>
            <div class="select_wrap">
              <select>
                <option value="Destination" disabled="" selected="">
                  Kapasite
                </option>
                <option value="Destination" disabled="" selected="">
                  12 Den Fazla
                </option>
              </select>
            </div>
          </div>
          <!-- <div class="destination-col">
            <div class="label">İsim İle Ara</div>
            <input type="text" class="input" placeholder="Username" />
          </div> -->

          <button class="btn button"><span>Filtrele</span></button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
