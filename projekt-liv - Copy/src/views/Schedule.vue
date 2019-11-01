<template>
  <div class="schedule mt-4">
    <div class="container">
      <h2 class="header text-center mb-4">SCHEMA / AKTIVITETER</h2>

    </div>
    <ScheduleComponent />
    <Workshop/>
    <Activities/>
  </div>
</template>

<script lang='ts'>
import { Component, Vue } from "vue-property-decorator";
import Workshop from '@/views/Workshop.vue';
import Activities from '@/views/Activities.vue'
import ScheduleComponent from "@/components/ScheduleComponent.vue";
// import WorkshopScheduleComponent from '@/components/WorkshopScheduleComponent.vue'

@Component({
  components: {
    ScheduleComponent,
    Workshop,
    Activities,
    // WorkshopScheduleComponent,
  }
})
export default class Schedule extends Vue {}
</script>
<style scoped lang="scss">
.header {
  font-size: 2em;
  color: white;
  background-color: rgb(132, 76, 147);
  line-height: 1.2;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.7);
  .intro-text {
    font-size: 1.2em;
  }
  #test {
    font-size: 40px !important;
  }
}
</style>
