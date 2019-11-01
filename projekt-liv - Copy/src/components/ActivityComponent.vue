<template>
  <div class="activity-component">
    <div class="row">
      <div class="col-md-10 col-12 mb-4 mx-auto">
        <p class="intro-text">
          Varmt välkommen att delta i sköna, avslappnande ro- och
          stillhetsövningar, medvetna rörelser till musik och olika
          balansövningar. Vi brukar vara 10–15 deltagare per grupp och vi
          anpassar övningarna för sittande, liggande och stående. Övningarna
          har under två år utvecklats, testats och valts ut av fler än 200
          deltagare med stroke eller Parkinson. Alla kan delta – var och en
          utifrån sin egen förmåga. Aktiviteterna är kostnadsfria för
          medlemmar i partnerföreningar. Schemat gäller grupperna i Malmö,
          Lund, Helsingborg, Ystad och i Lomma. Övrig information finner du på
          Facebook Projekt LIV.
        </p>
      </div>
    </div>
    <div class="row">
      <div
        v-for="(ref, index) in references"
        :key="index"
        class="col-12 col-sm-6 col-lg-4 mb-3 d-flex align-items-stretch"
      >
        <div class="card booking-card">
          <figure>
            <img class="card-img-top" v-bind:src="ref.Image" alt="Bild på Erik, har är glad" />
          </figure>
          <div class="card-body">
            <h4 class="card-title font-weight-bold"></h4>
            <h3>{{ ref.Name }}</h3>
            <p class="card-text">{{ ref.Description }}</p>
            <hr class="my-4" />
            <a :href="`${ref.Url}`" target="_blank">
              <button
                type="button"
                id="btn-to-schedule"
                class="mt-2 btn bt-to-schedule"
              >Läs mer om {{ ref.Name }}</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
import { Component, Vue } from "vue-property-decorator";
import { ReferenceTypeModel } from "../types/ReferenceTypeModel";
import referenceTypeData from "@/assets/data/ReferenceEntity";

@Component({
  components: {}
})
export default class ActivityComponent extends Vue {
  private references: ReferenceTypeModel[] = referenceTypeData;
}
</script>
<style scoped lang="scss">
.activity-component {
  .card {
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.7);
  }
  .card-body {
    padding: 0rem 1.25rem 1rem;
    display: flex;
    flex-direction: column;
  }
  .tex-styling {
    font-size: 0.7em;
    font-weight: 600;
  }
  .card-img-top {
    padding: 9px;
    height: 230px;
    object-fit: cover;
  }
  #btn-to-schedule {
    background-color: rgb(132, 76, 147);
    border: 1px solid rgb(119, 26, 145);
    border-radius: 5px;
    color: white;
  }
    #btn-to-schedule:hover {
      background-color: rgb(119, 26, 145);
    }
}
</style>