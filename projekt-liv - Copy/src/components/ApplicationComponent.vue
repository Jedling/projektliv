<template>
  <div class="application">
    <div class="row">
      <div class="col-1">
        <router-link to="/">
          <div class="home-btn">
            <i class="fas fa-arrow-circle-left"></i>
          </div>
        </router-link>
      </div>
      <div class="col-md-10 col-12 mx-auto">
        <div class="card border-0 mb-3">
          <div class="card-body">
            <h5 class="card-title">Applikationen är under utveckling</h5>
            <p class="card-text">
              En applikation är snart här
              Applikationen är under utveckling. Den lanseras mot sommaren 2020. I denna kommer du kunna ta del av material, filmer, e-bok, tidningsartiklar med mera.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {}
})
export default class ApplicationComponent extends Vue {}
</script>
<style scoped lang="scss">
.application {
  .home-btn {
    color: rgb(207, 164, 22);
    font-size: 50px;
  }
  .home-btn:hover {
    color: rgb(158, 125, 14)
  }
  .card-header {
    font-weight: 800;
    color: white;
    background-color: rgb(207, 164, 22);
  }
}
</style>