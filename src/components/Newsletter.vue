<template>
  <div class="subscribe_section">
    <div class="wrap">
      <div class="wrap_float">
        <div
          style="
            justify-content: center;
            display: flex;
            background-color: white;
          "
          class="subscribe_block"
        >
          <div class="left">
            <p class="text">OHSAS 18001 | ISO 14001:2004 | ISO 9001:2008</p>
            <br />
            <div>
              <ul>
                <li>
                  <img alt="" src="/assets/img/footer-dto.png" />
                </li>
                <li>
                  <img alt="" src="/assets/img/footer-gmo.png" />
                </li>
                <li>
                  <img alt="" src="/assets/img/footer-bodto.png" />
                </li>
                <li>
                  <img alt="" src="/assets/img/footer-dd.png" />
                </li>
              </ul>
            </div>
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
.subscribe_section .subscribe_block:before {
  opacity: 0.1;
  margin-left: 20px;
}
.subscribe_section .subscribe_block ._subtitle {
  font-size: 18px;
  color: #00184a;
  width: auto;
  clear: both;
}
.left ul {
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
}
.left li {
  width: 100%;
}
.left p {
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
}
@media screen and (max-width: 1200px) {
  .subscribe_section .subscribe_block .left {
    display: flex !important;
    flex-direction: column !important;
  }
}

.subscribe_section .subscribe_block .left {
  width: 100%;
}
</style>
