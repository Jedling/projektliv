<template>
  <div class="header px-10">
    <div class="row justify-content-center mt-4 mb-4">
      <div class="col-md-12 text-center">
        <!-- <img src="../assets/header/background-img.png" class="background" alt=""> -->
        <!-- <a href="/">
        <img alt="Projekt liv logo" class="header-img img-fluid" src="../assets/header/top_logo.png" />
        </a> -->
        <router-link class="" to="/"
          ><img
            alt="Projekt liv logo"
            class="header-img img-fluid"
            src="../assets/header/top_logo_white.png"
        /></router-link>
        <!-- <hr /> -->
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component({})
export default class Header extends Vue {
  // @Prop() private msg!: string;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.header {
  padding: 1rem 1rem;
  background-image: url("../assets/header/background-img.png");
  background-size: cover;
  box-shadow: 0 0px 3px rgba(0, 0, 0, 0.7);
  @media (min-width: 768px) {
    font-size: 2em;
  }
  .header-img {
    max-height: 5.1em;
  }
  .grey-line {
    border-bottom: 1px solid #cac8c8;
    margin: 0 auto;
    width: 100%;
    margin-top: 1.75rem !important;
    @media (min-width: 768px) {
      border-bottom: 2px solid #cac8c8;
      margin-top: 2.75rem !important;
      width: 80%;
    }
  }
}
</style>
