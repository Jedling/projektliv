<template>
  <div class="events mt-4 container">
    <h2 class="header text-center mb-4">ÖVNINGAR</h2>
    <ExcercisesComponent />
  </div>
</template>

<script lang='ts'>
import { Component, Vue } from "vue-property-decorator";
import ExcercisesComponent from "@/components/ExcercisesComponent.vue";


@Component({
  components: {
    ExcercisesComponent,
  }
})
export default class Exercises extends Vue {}
</script>
<style scoped lang="scss">
.header {
  background-color: rgb(197, 168, 205);
  font-size: 3em;
  color: white;
  line-height: 1.2;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.7);
  @media only screen and (max-width: 568px) {
    font-size: 2em;
  }
}
</style>