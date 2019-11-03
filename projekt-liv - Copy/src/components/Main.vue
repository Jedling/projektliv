<template>
  <div class="main mt-3">
    <div class="container">
      <div class="row justify-content-center mx-auto">
        <div class="row mt-3">
          <div class="col-4 col-md-4">
            <router-link class="glyphicon glyphicon-list" to="om-projekt-liv">
              <button type="button" class="btn background4 btn-circle btn-xl">
                OM PROJEKT LIV
              </button></router-link
            >
          </div>
          <div class="col-4 col-md-4">
            <router-link class="glyphicon glyphicon-list" to="schema-aktiviteter">
              <button type="button" class="btn background btn-circle btn-xl">
                SCHEMAN /<br> AKTIVITETER
              </button></router-link
            >
          </div>
          <div class="col-4 col-md-4">
            <!-- <i class="glyphicon glyphicon-ok">Schema</i> -->
            <router-link class="glyphicon glyphicon-list" to="hitta-oss">
              <button type="button" class="btn background2 btn-circle btn-xl">
                HITTA OSS
              </button></router-link
            >
          </div>
        </div>
        <div class="row mt-3">
          <div class="col-4 col-md-4">
            <router-link class="glyphicon glyphicon-list" to="e-boken">
              <button type="button" class="btn background3 btn-circle btn-xl">
                <!-- <router-link class="glyphicon glyphicon-list" to="Partners" -->
                E-BOK
              </button></router-link
            >
          </div>
          <div class="col-4 col-md-4">
            <router-link class="glyphicon glyphicon-list" to="övningar">
              <button type="button" class="btn background5 btn-circle btn-xl">
                ÖVNINGAR
              </button></router-link
            >
          </div>
          <div class="col-4 col-md-4">
            <router-link class="glyphicon glyphicon-list" to="appen">
              <button type="button" class="btn background6 btn-circle btn-xl">
                APP
              </button></router-link
            >
          </div>
        </div>
        <div class="row mt-3">
          <div class="col-4 col-md-4">
            <router-link class="glyphicon glyphicon-list" to="partners">
              <button type="button" class="btn background7 btn-circle btn-xl">
                PARTNERS
              </button></router-link
            >
          </div>
          <div class="col-4 col-md-4">
            <router-link class="glyphicon glyphicon-list" to="evenemang">
              <button type="button" class="btn background8 btn-circle btn-xl">
                EVENEMANG
              </button></router-link
            >
          </div>
          <div class="col-4 col-md-4">
            <router-link class="glyphicon glyphicon-list" to="media">
              <button type="button" class="btn background9 btn-circle btn-xl">
                MEDIA
              </button></router-link
            >
          </div>
        </div>
         <!-- <div class="row">
          <div class="col-6 col-md-6">
            <router-link class="glyphicon glyphicon-list" to="Ebook">
              <button type="button" class="btn background10 btn-circle btn-xl">
                E-BOK
              </button></router-link
            >
          </div>
          <div class="col-6 col-md-6">
            <router-link class="glyphicon glyphicon-list" to="Workshop">
              <button type="button" class="btn background11 btn-circle btn-xl">
                STUDIECIRKEL
              </button></router-link
            >
          </div>
        </div> -->
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

// import navTypeData from "@/assets/data/NavEntity";
// import { NavTypeModel } from "../types/NavTypeModel";


@Component({
})
export default class Main extends Vue {
  // @Prop() private msg!: string;
  // private navTypes: NavTypeModel[] = navTypeData;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.main {
  background-color: white;
  // max-width: 1200px;
  a {
    color: white;
  }
  .background {
    background-color: rgb(132, 76, 147);
  }
  .background2 {
    background-color: rgb(235, 187, 78);
  }
  .background3 {
    background-color: rgb( 85, 110, 169);
  }
  .background4 {
    background-color: rgb(70, 140, 143);
  }
  .background5 {
    background-color: rgb(197, 168, 205);
  }
  .background6 {
    background-color: rgb(207, 164, 22);
  }
  .background7 {
    background-color: rgb(41, 93, 124);
  }
  .background8 {
    background-color: rgb(164, 178, 219);
  }
  .background9 {
    background-color: rgb(197, 116, 27);
  }
   .background10 {
    background-color: rgb(18, 140, 113);
  }
   .background11 {
    background-color: rgb(99, 78, 105);
  }
  .btn-circle:hover {
    -webkit-transform: scale(0.9);
    -ms-transform: scale(0.9);
    transform: scale(0.9);
  }
  .btn-circle {
    width: 30px;
    height: 30px;
    text-align: center;
    padding: 6px 0;
    font-size: 0.8em;
    line-height: 1.428571429;
    font-weight: 700;
    border-radius: 15px;
    color: white;
  }
  .btn-circle.btn-xl {
    width: 200px;
    height: 200px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.7);
    @media only screen and (max-width: 568px) {
      font-weight: 100;
      width: 80px;
      height: 80px;
      font-size: 0.6em;
      padding: 0px;
      margin: 5px;
    }
    @media only screen and (max-width: 320px) {
      width: 70px;
      height: 70px;
      font-size: 0.6em;
      padding: 10px !important;
      margin: 5px;
      word-break: break-word;
    }
    padding: 10px 16px;
    margin: 10px;
    font-size: 24px;
    line-height: 1.33;
    border-radius: 100%;
  }
  //   [type="radio"] {
  //   position: absolute;
  //   opacity: 0;
  //   width: 0;
  //   height: 0;
  // }

  // /* IMAGE STYLES */
  // [type="radio"] + .btn-circle {
  //   cursor: pointer;
  //   width: 100%;
  //   &:hover {
  //     background-color: #cec9c0;
  //     transition: 0.5s ease;
  //     color: white;
  //   }
  // }

  // /* CHECKED STYLES */
  // [type="radio"]:checked + .btn-circle {
  //   background-color: red;
  //   color: white;
  //   border-radius: 15px;
  // }
}
</style>
