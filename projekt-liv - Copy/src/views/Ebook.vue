<template>
  <div class="ebook mt-4">
    <div class="container">
      <h2 class="header text-center mb-4">E-BOKEN</h2>
    <EbookComponent />
    </div>
  </div>
</template>

<script lang='ts'>
import { Component, Vue } from "vue-property-decorator";
import EbookComponent from "@/components/EbookComponent.vue";

@Component({
  components: {
    EbookComponent
  }
})
export default class Ebook extends Vue {}
</script>
<style scoped lang="scss">
.ebook {
   .header {
    background-color: rgb(85, 110, 169);
    font-size: 3em;
    color: white;
    line-height: 1.2;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.7);
  }
  .intro-text {
    font-size: 1.2em;
  }
}
</style>
