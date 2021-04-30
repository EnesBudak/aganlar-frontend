<template>
  <div class="search-tour">
    <div class="wrap">
      <div class="wrap_float">
        <div class="w-search-form">
          <div class="w-search-form__grid">
            <div class="w-search-form__group">
              <div class="label">Tip</div>
              <div class="w-search-form__select">
                <select>
                  <option disabled>Bir tip seçiniz</option>
                  <option value="Destination">Yelkenli</option>
                </select>
              </div>
            </div>
            <div class="w-search-form__group">
              <div class="label">Kapasite</div>
              <div class="w-search-form__select">
                <select>
                  <option disabled>Bir kapasite seçiniz</option>
                  <option value="Destination">12 Den Fazla</option>
                </select>
              </div>
            </div>
            <!-- Fiyat -->
            <div class="w-search-form__group">
              <div class="label">İsim</div>
              <div class="center">
                <input placeholder="İsim ile ara" type="text" />
              </div>
            </div>

            <!-- Fiyat -->
            <div class="w-search-form__group">
              <div class="label">Fiyat</div>
              <div class="center">
                <div>
                  <input placeholder="En az" type="number" />
                </div>
                <div class="w-search-form__divider"></div>
                <div>
                  <input placeholder="En fazla" type="number" />
                </div>
              </div>
            </div>

            <!-- Uzunluk -->

            <div class="w-search-form__group">
              <div class="label">Uzunluk</div>
              <div class="center">
                <div>
                  <input placeholder="En az" type="number" />
                </div>
                <div class="w-search-form__divider"></div>
                <div>
                  <input placeholder="En fazla" type="number" />
                </div>
              </div>
            </div>
          </div>

          <div class="w-form-search__button">
            <button><span>Filtrele</span></button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
:root {
  --bg-primary: #0030d0;
  --bg-secondary: #1140de;
  --bg-secondary-hover: #224edd;
  --bg-orange: #ff3b00;
  --bg-orange-light: #fa5d2d;
  --bg-orange-dark: #d13303;

  --c-text-primary: #fff;
  --c-text-secondary: #ffffff78;
}

@media screen and (max-width: 768px) {
  .w-search-form__grid {
    grid-template-columns: 1fr !important;
  }

  .w-search-form__group input,
  .w-search-form__select select {
    margin-bottom: 0 !important;
  }
}

.w-search-form {
  background-color: var(--bg-primary);
  color: var(--c-text-primary);
  padding: 30px 40px;
  border-radius: 13px;

  display: flex;
  flex-direction: column;
}

.w-search-form__grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 30px;
}

.w-search-form__group {
  margin-right: 20px;
}

.w-search-form .label {
  font-weight: 700 !important;
  font-size: 0.875rem;
  margin-bottom: 10px;
  color: var(--c-text-secondary) !important;
}

.w-search-form__select {
  position: relative !important;
  display: flex;
  width: 100%;
  line-height: 3;
  background: var(--bg-secondary);
  overflow: hidden;
  border-radius: 0.25em;
}

/* Arrow */
.w-search-form__select::after {
  content: "\25BC";
  position: absolute;
  top: 0;
  right: 0;
  padding: 0 1em;
  background: var(--bg-secondary);
  color: var(--c-text-secondary);
  cursor: pointer;
  pointer-events: none;
  -webkit-transition: 0.25s all ease;
  -o-transition: 0.25s all ease;
  transition: 0.25s all ease;
}

.w-search-form__select select {
  width: 100%;
  font-weight: 700;
  -webkit-appearance: none;
  -moz-appearance: none;
  -ms-appearance: none;
  appearance: none;
  outline: 0;
  box-shadow: none;
  border: 0 !important;
  background: var(--bg-secondary);
  background-image: none;
  color: inherit;
  padding: 12px 15px;

  font-family: inherit;
  font-size: inherit;
}

.w-search-form__select select option:disabled {
  color: var(--c-text-secondary) !important;
}

.w-search-form__select select option:hover {
  background-color: var(--bg-secondary-hover);
}

.w-search-form__select select::-ms-expand {
  display: none;
}

.w-search-form__select select option {
  color: var(--c-text-primary);
}

.w-search-form input {
  width: 100%;
  font-weight: 700;

  background-color: var(--bg-secondary) !important;
  color: var(--c-text-primary) !important;
  border: none;
  outline: none;
  padding: 12px 15px;
  border-radius: 5px;

  font-family: inherit;
  font-size: inherit;
}

.w-search-form__divider {
  width: 15px;
  height: 3px;
  margin: 0 5px;
  background-color: var(--c-text-secondary);
}

.w-form-search__button {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-top: 20px;
}
.w-form-search__button button {
  border: none;
  outline: none;
  background-color: var(--bg-orange);
  color: var(--c-text-primary);
  padding: 14px 25px;
  border-radius: 9999px;
  font-size: 15px;
  font-weight: 700;
}

.w-form-search__button button:hover {
  background-color: var(--bg-orange-dark);
}

.center {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
