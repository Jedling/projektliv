<template>
  <div class="home">
    <!-- <div class="container"> -->
    <Carousell />
    <Main />

    <!-- </div> -->
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Carousell from "@/components/Carousell.vue";
// import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src
import Main from "@/components/Main.vue";

@Component({
  components: {
    Main,
    Carousell
  }
})
export default class Home extends Vue {}
</script>
<style lang="scss">
.home {
  flex: 1;
}
</style>
