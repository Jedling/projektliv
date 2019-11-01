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
      <div class="col-md-10 col-12 mx-auto">
        <div class="card border-0 mb-3">
          <div class="card-body">
            <h5 class="card-title">Övningar är under utveckling</h5>
            <p class="card-text">
              <!-- En övningar är snart här -->
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {
  }
})
export default class ExcercisesComponent extends Vue {}
</script>
<style scoped lang="scss">
.excercises {
  .home-btn {
    color: rgb(197, 168, 205);
    font-size: 50px;
  }
  .home-btn:hover {
    color: rgb(176, 104, 196)
  }
  .card-header {
    font-weight: 800;
    color: white;
    background-color: rgb(197, 168, 205);
  }
}

</style>