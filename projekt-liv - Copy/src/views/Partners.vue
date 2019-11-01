<template>
  <div class="partners mt-4">
    <div class="container">
      <h2 class="header text-center mb-4">PARTNERS</h2>
      <PartnersComponent />
    </div>
  </div>
</template>

<script lang='ts'>
import { Component, Vue } from "vue-property-decorator";
import PartnersComponent from "@/components/PartnersComponent.vue";

@Component({
  components: {
    PartnersComponent
  }
})
export default class Partners extends Vue {}
</script>
<style scoped lang="scss">
.header {
  background-color: rgb(41, 93, 124);
  font-size: 3em;
  color: white;
  line-height: 1.2;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.7);
}
</style>