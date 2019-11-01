<template>
  <div class="media mt-4">
    <div class="container">
    <h2 class="header text-center mb-4">MEDIA</h2>
    <MediaComponent />
    </div>
  </div>
</template>

<script lang='ts'>
import { Component, Vue } from "vue-property-decorator";
import MediaComponent from "@/components/MediaComponent.vue";

@Component({
  components: {
    MediaComponent
  }
})
export default class Media extends Vue {}
</script>
<style scoped lang="scss">
.header {
  background-color: #c5741b;
  font-size: 3em;
  color: white;
  line-height: 1.2;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.7);
}
</style>