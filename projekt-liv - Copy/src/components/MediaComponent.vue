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
        <p class="intro-text">Mediasektionen är under utveckling</p>
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
    <!-- </div> -->
    <!-- <div class="row mt-4">
      <div class="col-12">
        <div class="card">
          <div class="card-header mb-3">öVNING 2</div>
          <ul class="list-unstyled">
            <li class="media mb-2">
              <img
                class="mr-3"
                id="img-styling"
                src="../assets/media/radio-icon.png"
                alt="Generic placeholder image"
              />
              <div class="media-body">
                <h5 class="mt-0 mb-1">LJUDINSPELNING</h5>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
                scelerisque ante sollicitudin. Cras purus odio, vestibulum in
                vulputate at, tempus viverra turpis. Fusce condimentum nunc ac
                nisi vulputate fringilla. Donec lacinia congue felis in
                faucibus.
              </div>
            </li>
            <li class="media mb-2">
              <img
                class="mr-3"
                id="img-styling"
                src="../assets/media/reading-icon.jpg"
                alt="Generic placeholder image"
              />
              <div class="media-body">
                <h5 class="mt-0 mb-1">LÄSNING</h5>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
                scelerisque ante sollicitudin. Cras purus odio, vestibulum in
                vulputate at, tempus viverra turpis. Fusce condimentum nunc ac
                nisi vulputate fringilla. Donec lacinia congue felis in
                faucibus.
              </div>
            </li>
            <li class="media mb-2">
              <img
                @click="showModal()"
                class="mr-3"
                id="img-styling"
                src="../assets/media/movie-icon.jpg"
                alt="Generic placeholder image"
              />
              <div class="media-body">
                <h5 class="mt-0 mb-1">FILMKLIPP</h5>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
                scelerisque ante sollicitudin. Cras purus odio, vestibulum in
                vulputate at, tempus viverra turpis. Fusce condimentum nunc ac
                nisi vulputate fringilla. Donec lacinia congue felis in
                faucibus.
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>-->
    <!-- <transition name="fade">
      <div v-show="modal" class="modal-filter">
        <div class="dc-modal scrollbar" id="scrollbar" ref="modal">
          <div class="modal-body">
            <div class="embed-responsive embed-responsive-16by9">
            <div id="player"></div>
           
            </div>
            <button
              @click="closeModal()"
              type="button"
              class="close-btn btn btn-danger"
              data-dismiss="modal"
            >STÄNG</button>
          </div>
        </div>
      </div>
    </transition> -->
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
  private modal: boolean = false;
  private player: any;

  created() {
    let tag = document.createElement("script");
    tag.src = "https://www.youtube.com/iframe_api";
    let firstScriptTag = document.getElementsByTagName("script")[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
  }

  private showModal() {
    document.documentElement.style.overflow = "hidden";
    this.modal = true;
    this.onYouTubeIframeAPIReady();
  }
  private closeModal() {
    document.documentElement.style.overflow = "scroll";
    // const modalEl = this.$refs.modal as HTMLDivElement;
    this.player.stopVideo();
    this.modal = false;
  }
  private onPlayerReady(event) {
    event.target.playVideo();
  }

  private onYouTubeIframeAPIReady() {
    this.player = new YT.Player("player", {
      height: "390",
      width: "640",
      videoId: "M7lc1UVf-VE"
      // events: {
      //   onReady: onPlayerReady,
      // onStateChange: onPlayerStateChange
      // }
    });
  }

  // private onPlayerStateChange(event) {
  //   if (event.data == YT.PlayerState.PLAYING && !done) {
  //     setTimeout(stopVideo, 6000);
  //     done = true;
  //   }
  // }
  private playVideo() {
    this.player.playVideo();
  }
  private stopVideo() {
    this.player.stopVideo();
  }
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
  .modal-filter {
    position: fixed;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.7);
    top: 0;
    left: 0;
    z-index: 1;
  }
  .dc-modal {
    top: 50% !important;
    left: 50% !important;
    float: left;
    transform: translate(-50%, -50%);
    position: fixed !important;
    width: 70% !important;
    z-index: 9999 !important;
    // background-color: #e92547;
    box-shadow: 0 1px 5px rgba(0, 0, 0, 0.7);
    color: #fff;
    border-radius: 2px;
    @media (max-width: 768px) {
      width: 90% !important;
    }
    .modal-body {
      background-color: black;
    }
    .button {
      cursor: pointer;
      background-color: red;
      border: 1px solid dimgray;
    }
    .btn {
      margin-top: 1rem;
      width: 100%;
    }
  }
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.5s;
  }
  .fade-enter,
  .fade-leave-to {
    opacity: 0;
  }
}
</style>