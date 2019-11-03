<template>
  <div class="ebook-component">
    <div class="container">
      <div class="row">
        <div class="col-1">
          <router-link to="/">
            <div class="home-btn">
              <i class="fas fa-arrow-circle-left"></i>
            </div>
          </router-link>
        </div>
        <div class="col-md-10 col-12 mb-4 mx-auto">
          <p class="intro-text">
            <strong>Lugnt inre välmående – för oss med stroke eller Parkinson</strong>
          </p>
          <br />
          <p>
            I boken intervjuas projektdeltagarna samt ledare. Här beskrivs också nya målgruppsanpassade övningar som kombinerar tekniker från mindfulness, hikari, yoga, boxning och dans. Övningar som kan användas hemma eller i andra vardagssituationer, såväl enskilt som i grupp. Övningarna syftar
            både till att uppnå ett inre, stressbefriat lugn och stimulera rörlighet och balanssinne samt motverka hjärntrötthet.
          </p>
        </div>

        <div class="row mx-auto mb-3">
          <div class="col-12 col-md-6">
            <figure class="rotate-left">
              <img
                class="ebook-img"
                src="../assets/ebook/bok.png"
                alt="Bokomslag till med texten Lugnt inre välmående."
              />
            </figure>
          </div>
          <div class="col-12 col-md-6">
            <p class="intro-text">
              <strong>Vill du beställa den LIV-boken - vänd dig till Strokeföreningen Malmö, epost info@strokemalmo.se, som distribuerar boken.</strong>
            </p>
            <br />
            <p>
              Klicka på länken till e-boken och sprid den gärna till där den behövs.
              <a
                href="https://ebooks.exakta.se/projekt_liv/2019/liv/"
              >Klicka här!</a>
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
  components: {}
})
export default class EbookComponent extends Vue {}
</script>
<style scoped lang="scss">
.ebook-component {
  .home-btn {
    font-size: 50px;
    color: rgb(85, 110, 169);
    padding: 0px;
  }
  .home-btn:hover {
    color: rgb(49, 78, 146)
  }
  .rotate-left {
    @media only screen and (min-width: 768px) {
    padding-left: 4rem;
      -ms-transform: rotate(-8deg); /* IE 9 */
      -webkit-transform: rotate(-8deg); /* Safari */
      transform: rotate(-8deg);
    }
    .ebook-img {
      @media only screen and (min-width: 768px) {
        width: 80%;
      }
      width: 100%;
      background-color: white;
      box-shadow: 10px 10px 5px #aaaaaa;
    }
  }
}
</style>