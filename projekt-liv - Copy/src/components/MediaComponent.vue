<template>
  <div class="media-component">
    <div class="row">
      <div class="col-1">
        <router-link to="/">
          <div class="home-btn">
            <i class="fas fa-arrow-circle-left"></i>
          </div>
        </router-link>
      </div>
      <div class="col-md-8 col-12 mb-4 mx-auto">
        <!-- <p class="intro-text">Mediasektionen är under utveckling</p> -->
      </div>
    </div>
    <div class="card mb-3">
      <div v-for="(radio, index) in radioTypes" :key="index" class="row no-gutters">
        <div class="col-md-4 col-6">
          <img src="../assets/media/radio-icon2.png" class="card-img" alt />
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">Radio</h5>
            <ul class="list-unstyled">
              <li class="media mb-2">
                <p class="card-text">
                  {{ radio.Description }}
                  <a :href="`${radio.Url}`" target="_blank">
                    <button type="button" class="mt-2 btn radio-btn">Lyssna på inslaget</button>
                  </a>
                </p>
                <hr />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="card mb-3">
      <div class="row no-gutters">
        <div class="col-md-4 col-6">
          <img src="../assets/media/paper-icon2.png" class="card-img" alt />
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">Tidning</h5>
            <ul v-for="(paper, index) in paperTypes" :key="index" class="list-unstyled">
              <li class="media mb-2">
                <p class="card-text">
                  {{ paper.Name }}
                  <a :href="`${paper.Url}`" target="_blank">
                    <button type="button" class="mt-2 btn radio-btn float-right">Läs artikel</button>
                  </a>
                </p>
              </li>
              <hr />
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="card mb-3">
      <div class="row no-gutters">
        <div class="col-md-4 col-6">
          <img src="../assets/media/play-icon2.png" class="card-img" alt />
        </div>
        <div class="col-md-8 col-12">
          <div class="card-body">
            <h5 class="card-title">Film</h5>
            <ul v-for="(film, index) in filmTypes" :key="index" class="list-unstyled">
              <li class="media mb-2">
                <p class="card-text">
                  {{ film.Name }}
                  <a :href="`${film.Url}`" target="_blank">
                    <button type="button" class="mt-2 btn radio-btn">Titta på filmen</button>
                  </a>
                </p>
              </li>
              <hr />
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
import { Component, Vue } from "vue-property-decorator";
import { RadioTypeModel } from "../types/RadioTypeModel";
import { PaperTypeModel } from "../types/PaperTypeModel";
import { FilmTypeModel } from "../types/FilmTypeModel";
import radioTypeData from "@/assets/data/RadioEntity";
import paperTypeData from "@/assets/data/PaperEntity";
import filmTypeData from "@/assets/data/FilmEntity";

@Component({
  components: {}
})
export default class MediaComponent extends Vue {
  private radioTypes: RadioTypeModel[] = radioTypeData;
  private paperTypes: PaperTypeModel[] = paperTypeData;
  private filmTypes: FilmTypeModel[] = filmTypeData;
 
}
</script>
<style scoped lang="scss">
img {
  cursor: pointer;
}
.media-component {
  .home-btn {
    color: rgb(197, 116, 27);
    font-size: 50px;
    :hover {
     color: rgb(155, 88, 17); 
    }
  }
  .card {
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.7);
    .media-body {
      padding: 5px;
    }
    .card-img {
      @media only screen and (max-width: 768px) {
        width: 70%;
      }
      width: 50%;
      border-radius: calc(0.25rem - 1px);
      padding: 16px;
    }
    .card-text {
      width: 90%;
    }
    .card-header {
      background-color: rgb(197, 116, 27);
      color: white;
    }
    #img-styling {
      max-width: 60px;
      padding: 5px;
    }
    .radio-btn {
      background-color: rgb(197, 116, 27);
      border: 1px solid rgb(155, 88, 17);
      border-radius: 5px;
      color: white;
      float: right;
    }
    .radio-btn:hover {
      background-color: rgb(155, 88, 17);
    }
  }
}
</style>