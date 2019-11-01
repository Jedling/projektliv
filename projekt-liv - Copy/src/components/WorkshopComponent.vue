<template>
  <div class="workshop">
    <!-- <div class="container">
      <div class="row">
      
        <div class="col-md-10 col-12 mb-4 mx-auto">
              <h5 class="card-title">Andningskurs</h5>
              <p class="card-text">
                Andningen är bland det första som reagerar på stress och olika
                känslor. Hur andas du när du är stressad ? Det finns studier som
                visar hur andningen hos försökspersoner ändras beroende på att
                de bara observerar olika sinnestillstånd på t.ex. film. Du
                kanske känner igen att man lätt håller andan om man blir rädd
                eller hur lätt en gäspning kan bli avbruten om någon pratar med
                en just då
              </p>
        </div>
      </div>
      <div class="row">
        <div class="col-12 col-md-8">
          <div class="card mb-3">
            <h5 class="card-header">Program för 10 veckor</h5>
            <div class="card-body">
              <ul class="list-group">
                <li class="list-group-item border-0">1. Cras justo odio</li>
                <li class="list-group-item border-0">
                  2. Dapibus ac facilisis in
                </li>
                <li class="list-group-item border-0">3. Morbi leo risus</li>
                <li class="list-group-item border-0">
                  4 .Porta ac consectetur ac
                </li>
                <li class="list-group-item border-0">5. Vestibulum at eros</li>
              </ul>
              <p class="card-text">
                With supporting text below as a natural lead-in to additional
                content.
              </p>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-4">
          <div class="row">
            <div class="col-12 ">
              <div class="card mb-3">
                <h5 class="card-header">Studiematerial</h5>
                <div class="card-body">
                  <p class="card-text">
                    With supporting text below as a natural lead-in to
                    additional content.
                  </p>
                  <ul class="list-group">
                    <li class="list-group-item border-0">1. Cras justo odio</li>
                    <li class="list-group-item border-0">
                      2. Dapibus ac facilisis in
                    </li>
                    <li class="list-group-item border-0">3. Morbi leo risus</li>
                    <li class="list-group-item border-0">
                      4 .Porta ac consectetur ac
                    </li>
                    <li class="list-group-item border-0">
                      5. Vestibulum at eros
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="col-12">
              <div class="card mb-3">
                <h5 class="card-header">Platser/Hitta oss</h5>
                <div class="card-body">
                  <p class="card-text">
                    Klicka på knappen för att hitta oss.
                  </p>
                  <router-link to="FindUs">
                    <button type="button" class="find-us">
                      Ni hittar oss här
                    </button>
                  </router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <div class="card">
            <h5 class="card-header">Anmälan</h5>
            <div class="card-body">
              <p class="card-text">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque
                nesciunt distinctio autem iusto, eius vitae explicabo ea placeat
                tenetur expedita! Tempore veniam ullam ducimus sunt, sit
                consequuntur porro quibusdam dignissimos!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div> -->
  </div>
</template>

<script lang='ts'>
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {}
})
export default class Contact extends Vue {}
</script>
<style scoped lang="scss">
.workshop {
  .home-btn {
    color: rgb(89, 121, 73);
    // border: 1px solid rgb(64, 119, 121);
    // box-shadow: 0 1px 2px rgba(0, 0, 0, 0.7);
    font-size: 50px;
  }
  .card {
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.7);
    .card-header {
      background-color: rgb(235, 187, 78);
      // background-color: rgb(89, 121, 73); // orignial bg-color
      color: white;
    }
  }
  .find-us {
    background-color: rgb(70, 140, 143);
    border: 1px solid rgb(64, 119, 121);
    border-radius: 5px;
    color: white;
  }
}
</style>