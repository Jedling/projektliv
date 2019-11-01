<template>
  <div class="activities mt-4 container">
    <h2 class="header text-center mb-4">AKTIVITETER</h2>
    <ActivityComponent />
  </div>
</template>

<script lang='ts'>
import { Component, Vue } from "vue-property-decorator";
import ActivityComponent from "@/components/ActivityComponent.vue";

@Component({
  components: {
    ActivityComponent
  }
})
export default class Activities extends Vue {}
</script>
<style scoped lang="scss">
.header {
  background-color: rgb(132, 76, 147);
  // background-color: rgb(70, 140, 143); //original bg-color
  font-size: 2.5em;
  color: white;
  line-height: 1.2;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.7);
}
</style>