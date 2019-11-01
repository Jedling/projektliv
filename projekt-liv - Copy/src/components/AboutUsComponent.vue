<template>
  <section class="about-us-comp">
    <div class="row mt-5">
      <div class="col-1">
        <router-link to="/">
          <div class="home-btn">
            <i class="fas fa-arrow-circle-left"></i>
          </div>
        </router-link>
      </div>
      <div class="col-sm-5">
        <div class="card mb-3">
          <div class="card-body text-center">
            <p class="card-text">
              Projekt LIV – Lugnt inre välmående vänder sig till dig som
              drabbats av stroke eller Parkinsons sjukdom. I projektet har nya
              målgruppsanpassade övningar utvecklats som kombinerar mindfulness,
              hikari, yoga, boxning och dans.
            </p>

            <p class="card-text">
              Övningarna syftar till att uppnå
              ett inre, stressbefriat lugn, att stimulera rörlighet och
              balanssinne samt att motverka hjärntrötthet.
            </p>
          </div>
        </div>
      </div>
      <div class="col-sm-6">
        <figure class="figure">
          <img
            src="../assets/aboutus/ela.jpg"
            class="figure-img img-fluid img-style"
            alt="Människor sittandes i cirkelformation i en föreläsningssal"
          />
        </figure>
      </div>
    </div>
    <div class="row flex-column-reverse flex-md-row mt-3">
      <div class="col-sm-6">
        <figure class="figure">
          <img
            src="../assets/aboutus/collage3.jpg"
            class="figure-img img-fluid img-style"
            alt="Närbild av glasögonprydd äldre man med slutna ögon"
          />
        </figure>
      </div>
      <div class="col-sm-6">
        <div class="card mb-3">
          <div class="card-body text-center">
            <p class="card-text">
              Våra LIV-pass heter Hikari & Mindfulness. Aktiviteterna är
              kostnadsfria för medlemmar i partnerföreningar.
            </p>
            <!-- <p class="card-text">
              Under projektets gång ska ledare och instruktörer utbildas, som
              kan fortsätta att erbjuda aktiviteterna i olika föreningar.
            </p>
            <p class="card-text">
              LIV-projektet genomförs med stöd från Allmänna arvsfonden.
            </p>-->
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang='ts'>
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {}
})
export default class AboutUsComponent extends Vue {}
</script>
<style scoped lang="scss">
.about-us-comp {
  .home-btn {
    color: rgb(70, 140, 143);
    font-size: 50px;
    :hover {
      color: rgb(24, 121, 124);
    }
  }
  .card {
    border-radius: 5px;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.7);
  }
  .no-border {
    border: 0px !important;
  }
  .img-style {
    border-radius: 5px;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.7);
    // width: 200px;
    // height: 200px;
    // margin: 0 auto;
  }
  .mt-5 {
    @media only screen and (max-width: 568px) {
      margin-top: 1rem !important;
    }
  }
}
</style>