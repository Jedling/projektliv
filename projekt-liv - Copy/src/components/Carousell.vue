<template>
  <div class="arvsfonden container">
    <div class="row justify-content-center">
      <div class="col-md-12 text-center">
        <!-- <div class="bs-example">
          <div id="myCarousel" class="carousel slide" data-interval="1000" data-ride="carousel">
            <ol class="carousel-indicators">
              <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
              <li data-target="#myCarousel" data-slide-to="1"></li>
              <li data-target="#myCarousel" data-slide-to="2"></li>
            </ol>
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img class="carousell-img" src="../assets/carousell/carousell.jpg" alt="First Slide" />
            
              </div>
              <div class="carousel-item">
                <img class="carousell-img" src="../assets/carousell/carousell2.jpg" alt="Second Slide" />
        
              </div>
              <div class="carousel-item">
                <img
                  class="carousell-img"
                  src="../assets/carousell/carousell3.jpg"
                  alt="Third Slide"
                />
             
              </div>
            </div>
            <a class="carousel-control-prev" href="#myCarousel" data-slide="prev">
              <span class="carousel-control-prev-icon"></span>
            </a>
            <a class="carousel-control-next" href="#myCarousel" data-slide="next">
              <span class="carousel-control-next-icon"></span>
            </a>
          </div>
        </div> -->
        
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component({})
export default class Carousell extends Vue {
  // @Prop() private msg!: string;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.carousel {
  background: #2f4357;
  margin-top: 20px;
  .carousel-item {
    text-align: center;
    // min-height: 280px; /* Prevent carousel from being distorted if for some reason image doesn't load */
    .carousell-img {
      width: 100%;
      height: 400px;
      padding: 15px;
      object-position: top;
      object-fit: cover;
      background-color: white;
      box-shadow: 0 1px 3px rgba(34, 25, 25, 0.4);
      -moz-box-shadow: 0 1px 2px rgba(34, 25, 25, 0.4);
      -webkit-box-shadow: 0 1px 3px rgba(34, 25, 25, 0.4);
    }
  }
  .bs-example {
    margin: 20px;
  }
}
</style>
