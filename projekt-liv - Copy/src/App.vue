<template>
  <div id="app">
    <!-- <div id="nav"> -->
    <!-- <router-link to="/">Home</router-link> | -->
    <!-- <router-link to="/about">About</router-link> -->
    <!-- </div> -->
    <Header />
    <router-view />
    <Arvsfonden />
    <Footer />
  </div>
</template>

  <script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import Header from "@/components/Header.vue";
import Arvsfonden from "@/components/Arvsfonden.vue";
import Footer from "@/components/Footer.vue";

@Component({
  components: {
    Header,
    Arvsfonden,
    Footer
  }
})
export default class App extends Vue {}
</script>


<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  margin: 0;
}
</style>
