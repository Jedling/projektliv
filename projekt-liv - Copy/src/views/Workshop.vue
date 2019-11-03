<template>
  <div class="workshop mt-4 container">
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