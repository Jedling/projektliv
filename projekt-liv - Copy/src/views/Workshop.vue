<template>
  <div class="workshop mt-4 container">
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
    <!-- <h2 class="header text-center mb-4">STUDIECIRKEL</h2> -->
    <WorkshopComponent />
    <WorkshopScheduleComponent/>
  </div>
</template>

<script lang='ts'>
import { Component, Vue } from "vue-property-decorator";
import WorkshopComponent from "@/components/WorkshopComponent.vue";
import WorkshopScheduleComponent from '@/components/WorkshopScheduleComponent.vue'

@Component({
  components: {
    WorkshopComponent,
    WorkshopScheduleComponent
  }
})
export default class Workshop extends Vue {}
</script>
<style scoped lang="scss">
.header {
  background-color: rgb(235, 187, 78);
  // background-color: rgb(89, 121, 73); // original bg-color
  font-size: 2.3em;
  color: white;
  line-height: 1.2;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.7);
}
</style>