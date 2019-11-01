<template>
  <div class="excercises">
    <div class="row">
      <div class="col-1">
        <router-link to="/">
          <div class="home-btn">
            <i class="fas fa-arrow-circle-left"></i>
          </div>
        </router-link>
      </div>
      <div class="col-md-10 col-12 mt-3 mx-auto">
        <p class="intro-text">
          <strong>LIV instruktionsfilmer</strong>
          syftar till att påminna dig om hur övningarna fungerar samt till nya ledare som vill lära sig övningarna. Dessa är inte övningsvideos som ska göras i realtid. För detta ändamål hänvisar vi till audio övningarna längre upp.
        </p>
      </div>
    </div>
    <div  class="row mb-3 justify-content-center">
      <div v-for="(item, index) in excerciseType" :key="index"  class="col-12 col-md-6">
        <div class="card">
          <div class="card-header mb-3"> {{ item.Name }} </div>
          <div class="card-body">
            <div class="videoWrapper">
              <iframe :src="`${item.Src}`" allowfullscreen></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
import { Component, Vue } from "vue-property-decorator";
import { ExcerciseTypeModel } from "../types/ExcerciseTypeModel";
import excerciseTypeData from "@/assets/data/ExcerciseEntity";

@Component({
  components: {}
})
export default class ExcercisesComponent extends Vue {
private excerciseType: ExcerciseTypeModel[] = excerciseTypeData;
}
</script>
<style scoped lang="scss">
.excercises {
  .home-btn {
    color: rgb(197, 168, 205);
    font-size: 50px;
  }
  .home-btn:hover {
    color: rgb(176, 104, 196);
  }
  .card-header {
    // font-weight: 800;
    color: white;
    background-color: rgb(197, 168, 205);
  }
  .card-img {
    @media only screen and (max-width: 768px) {
      width: 70%;
    }
    width: 50%;
    border-radius: calc(0.25rem - 1px);
    padding: 16px;
  }
  .videoWrapper {
    position: relative;
    padding-bottom: 56.25%; /* 16:9 */
    padding-top: 25px;
    height: 0;
  }
  .videoWrapper iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
}
</style>