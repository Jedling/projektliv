<template>
  <div class="findus mt-4 container">
    <h2 class="header text-center mb-4">HITTA OSS</h2>
    <HittaOss />
  </div>
</template>

<script lang='ts'>
import { Component, Vue } from "vue-property-decorator";
import HittaOss from "@/components/HittaOss.vue";

@Component({
  components: {
    HittaOss
  }
})
export default class FindUs extends Vue {}
</script>
<style scoped lang="scss">
.findus {
  .header {
    background-color: rgb(235, 187, 78);
    font-size: 3em;
    color: white;
    line-height: 1.2;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.7);
  }
}
</style>