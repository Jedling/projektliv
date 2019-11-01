<template>
  <div class="about-us mt-4 container mb-4">
    <h2 class="header text-center">OM PROJEKT LIV</h2>
    <AboutUsComponent />
  </div>
</template>

<script lang='ts'>
import { Component, Vue } from "vue-property-decorator";
import AboutUsComponent from "@/components/AboutUsComponent.vue";

@Component({
  components: {
    AboutUsComponent
  }
})
export default class Activities extends Vue {}
</script>
<style scoped lang="scss">
.about-us {
  display: block;
  .header {
    background-color: rgb(70, 140, 143);
    font-size: 3em;
    color: white;
    line-height: 1.2;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.7);
    @media only screen and (max-width: 568px) {
      font-size: 2em;
      // margin-bottom: 10px;
    }
  }

}
</style>