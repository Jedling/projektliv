<template>
  <div class="arvsfonden container">
    <div class="row justify-content-center">
      <div class="col-md-12 text-center">
        <hr />
        <a href="https://www.arvsfonden.se/" target="_blank">
          <img
            alt="Projekt Liv i samarbete med Arvsfonden"
            class="arvsfonden-img img-fluid"
            src="../assets/pre-footer/i-samarbete-med.png"
          />
        </a>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component({})
export default class Arvsfonden extends Vue {
  // @Prop() private msg!: string;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.arvsfonden {
  .arvsfonden-img {
    margin-top: 2.5rem !important;
    margin-bottom: 2.5rem !important;
    max-height: 4rem !important; 
    @media only screen and (max-width: 568px) {
      margin-top: 0.5em !important;
      margin-bottom: 1.5rem !important;
    }
  }
}
</style>
