<template>
  <div class="event">
    <div class="container">
      <div class="row">
        <div class="col-1">
          <router-link to="/">
            <div class="home-btn">
              <i class="fas fa-arrow-circle-left"></i>
            </div>
          </router-link>
        </div>
        <div class="col-md-8 col-12 mb-4 mx-auto">
          <p class="card-text mt-4">Kommande evenemang med projekt LIV.</p>
        </div>
      </div>
      <div class="row">
        <div class="col-12 event-comp">
          <table class="table">
            <thead class="test">
              <tr>
                <th scope="col">Datum</th>
                <th scope="col">Tid</th>
                <th scope="col">Plats</th>
                <th scope="col">Info</th>
              </tr>
            </thead>
            <tbody class="table-text">
              <tr v-for="(event, index) in eventTypes" :key="index" class="table-test">
                <td class="date">{{ event.Date }}</td>
                <td>{{ event.Time }}</td>
                <td>{{ event.Location }}</td>
                <td>{{ event.Info }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
import { Component, Vue } from "vue-property-decorator";
import eventTypeData from "@/assets/data/EventEntity";
import { EventTypeModel } from "../types/EventTypeModel";

@Component({
  components: {
    EventTypeModel
  }
})
export default class EventComponent extends Vue {
  private eventTypes: EventTypeModel[] = eventTypeData;
}
</script>
<style scoped lang="scss">
.event {
  .mt-5 {
    @media only screen and (max-width: 568px) {
      margin-top: 1rem !important;
    }
  }
  .home-btn {
    color: rgb(164, 178, 219);
    font-size: 50px;
  }
  .home-btn:hover {
    color: rgb(110, 136, 216);
  }
  .event-comp {
    border: 1px solid;
    border-radius: 15px;
    .table {
      padding: 0.5rem;
      th {
        border-top: none;
        @media (max-width: 320px) {
        padding: 0;
        }
      }
      .test {
        width: 100%;
      }
      .table-text {
        font-size: 1rem;
        @media (max-width: 500px) {
          padding: 0.25rem;
          font-size: 11px !important;
        }
        .date {
          word-break: break-all;
        }
      }
    }
    td {
      @media (max-width: 375px) {
        padding: 0.2rem;
      }
      padding: 1rem;
    }
  }
}
</style>