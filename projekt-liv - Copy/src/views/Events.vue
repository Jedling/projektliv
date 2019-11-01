<template>
  <div class="events mt-4 container">
    <h2 class="header text-center">EVENEMANG</h2>
    <EventComponent />
  </div>
</template>

<script lang='ts'>
import { Component, Vue } from "vue-property-decorator";
import EventComponent from "@/components/EventComponent.vue";


@Component({
  components: {
    EventComponent,
  }
})
export default class Events extends Vue {}
</script>
<style scoped lang="scss">
.header {
  background-color: rgb(164, 178, 219);
  font-size: 3em;
  color: white;
  line-height: 1.2;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.7);
  @media only screen and (max-width: 568px) {
    font-size: 2em;
    // margin-bottom: 10px;
  }
}
</style>