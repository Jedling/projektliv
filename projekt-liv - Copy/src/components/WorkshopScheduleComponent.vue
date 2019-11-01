<template>
  <div class="schedule-component mt-4">
    <div class="container">
      <!-- <h2 class="header text-center studiecirkel mb-4">SCHEMA FÖR STUDIECIRKEL</h2> -->
      <!-- <div class="row">
        <div class="col-md-8 col-12 mx-auto">
          <p class="intro-text">
            <strong>
              Text om Studiecirkeln som kanske ska läggas kan förslagsvis hamna
              här. För hög interaktion så kan.
            </strong>
            <br />Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio
            corporis accusantium cupiditate minima voluptate cumque voluptates
            ipsum est, atque quisquam reiciendis dignissimos similique autem
            quos architecto. Adipisci harum iste ex?
          </p>
        </div>
      </div> -->
      <div class="row">
        <div class="col-12 mt-3">
          <figure>
            <img class="schedule-img" src="../assets/schedule/schema2.jpg" alt />
          </figure>
        </div>
      </div>
      <!-- <div class="row mt-3">
        <div class="col-12">
          <section class="timetable-wrap">
            <div class="timetable-container flex">
              <div class="days-wrap flex">
                <div class="day flex">
                  <h4 class="weekday">MÅNDAG</h4>
                  <div class="class-container flex color color--scheme1">
                    <span class="time">09:45-10:15</span>
                    <span class="name">Andnings- och fokusövningar</span>
                    <span class="level">
                      Malmö, Hylliekrokens Golfcenter alt. FIFH (vid
                      Mobilia)
                    </span>
                  </div>
                  <div class="class-container flex color color--scheme2">
                    <span class="time">11:30-12:30</span>
                    <span class="name">Mindfulness & Hikari-pass</span>
                    <span class="level">Malmö, Kalendeg. 18, vån 3</span>
                  </div>
                  <div class="class-container flex color color--scheme2">
                    <span class="time">17:00–18:00</span>
                    <span class="name">Mindfulness & Hikari-pass</span>
                    <span class="level">Malmö, Kalendeg. 18, vån 3</span>
                  </div>
                </div>
                <div class="day flex">
                  <h4 class="weekday">TISDAG</h4>
                  <div class="class-container flex color color--scheme3">
                    <span class="time">10:30-11:30</span>
                    <span class="name">Mindfulness & Hikari-pass</span>
                    <span class="level">Malmö, KFUM Betaniaplan 4</span>
                  </div>
                  <div class="class-container flex color color--scheme4">
                    <span class="time">13:30–14:30</span>
                    <span class="name">Mindfulness & Hikari-pass</span>
                    <span class="level">Ystad, Seniorernas hus, Petrigatan 10</span>
                  </div>
                  <div class="class-container flex color color--scheme5">
                    <span class="time">16:30-17:00</span>
                    <span class="name">Andnings- och fokusövningar</span>
                    <span class="level">Malmö, BK Fox Lundavägen 56</span>
                  </div>
                </div>
                <div class="day flex">
                  <h4 class="weekday">ONSDAG</h4>
                  <div class="class-container flex color color--scheme6">
                    <span class="time">11:00-12:00</span>
                    <span class="name">Mindfulness & Hikari-pass</span>
                    <span class="level">Lund, Annegården Skansv. 5</span>
                  </div>
                </div>
                <div class="day flex">
                  <h4 class="weekday">TORSDAG</h4>
                  <div class="class-container flex color color--scheme7">
                    <span class="time">11:00-12:00</span>
                    <span class="name">Mindfulness & Hikari-pass</span>
                    <span class="level">Helsingborg, Kurirgatan 1</span>
                  </div>
                  <div class="class-container flex color color--scheme2">
                    <span class="time">17:00-18:00</span>
                    <span class="name">Mindfulness & Hikari-pass</span>
                    <span class="level">Malmö, Kalendegatan 18, vån 3</span>
                  </div>
                </div>
                <div class="day flex">
                  <h4 class="weekday">FREDAG</h4>
                  <div class="class-container flex color color--scheme3">
                    <span class="time">10:30-11:30</span>
                    <span class="name">Mindfulness & Hikari-pass</span>
                    <span class="level">Malmö, KFUM Betaniaplan 4</span>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div> -->
    </div>
  </div>
</template>

<script lang='ts'>
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {}
})
export default class WorkshopScheduleComponent extends Vue {}
</script>
<style scoped lang="scss">
.studiecirkel {
  font-size: 2.3em;
  color: white;
  background-color: rgb(235, 187, 78);
  // background-color: rgb(89, 121, 73); // original bg-color
  line-height: 1.2;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.7);
  @media only screen and (max-width: 568px) {
    font-size: 2em;
  }
}
.schedule-img {
  width: 100%;
  height: 400px;
  padding: 15px;
  object-position: top;
  object-fit: cover;
  background-color: white;
  box-shadow: 0 1px 3px rgba(34, 25, 25, 0.4);
  -moz-box-shadow: 0 1px 2px rgba(34, 25, 25, 0.4);
  -webkit-box-shadow: 0 1px 3px rgba(34, 25, 25, 0.4);
  @media only screen and (max-width: 568px) {
    height: auto;
    padding: 5px;
  }
}
.home-btn {
  font-size: 50px;
  color: rgb(235, 187, 78);
  padding: 0px;
}
$container-background-color: white;
$cel-background-color: lighten(rgb(230, 230, 230), 10%);
$dark--color: rgba(0, 0, 0, 0.87);
$light--color: rgba(255, 255, 255, 0.87);
html {
  box-sizing: border-box;
}

html,
body {
  min-height: 100vh;
}

body {
  background: white;
  line-height: 1.414;
  font-family: "Open Sans", sans-serif;
  font-size: 16px;
  color: black;
  text-rendering: optimizelegibility;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  -webkit-text-size-adjust: none;
  -webkit-font-smoothing: antialiased;
  -moz-tap-highlight-color: rgba(0, 0, 0, 0);
  -moz-text-size-adjust: none;
  -moz-font-smoothing: antialiased;
  -ms-tap-highlight-color: rgba(0, 0, 0, 0);
  -ms-text-size-adjust: none;
  -ms-font-smoothing: antialiased;
}

h1,
h2,
h3,
h4 {
  font-family: "Roboto", sans-serif;
  font-weight: inherit;
  line-height: 1.2;
}

h1 {
  font-size: 3.998em;
}

h2 {
  font-size: 2.827em;
}

h3 {
  font-size: 1.999em;
}

h4 {
  font-size: 1.414em;
}

a {
  text-decoration: none;
  color: rgb(0, 188, 163);
  outline: 0;
  &:hover,
  &:focus {
    color: lighten(rgb(0, 188, 163), 20%);
  }
}

strong {
  font-weight: 700;
}

p {
  margin-bottom: 0.618em;
  &:last-child {
    margin-bottom: 0;
  }
}

.flex {
  display: flex;
}

.flex--space-between {
  justify-content: space-between;
}

// .timetable-wrap {
//   // width: 100vw;
// }

.timetable-container {
  margin-top: 1em;
  flex-grow: 1;
  flex-direction: column;
  background-color: $container-background-color;
  &:first-child {
    margin-top: 0;
  }
  h3 {
    width: 100%;
  }
}

// .days-wrap {
// }

.day {
  flex-direction: column;
  h4 {
    border-bottom: 1px solid rgba(0, 0, 0, 0.12);
    background-color: darken(white, 2%);
  }
}

.class-container {
  background-color: darken(white, 5%);
  border-bottom: 1px solid rgba(0, 0, 0, 0.12);
  .time {
    font-weight: bold;
  }
  .name {
    font-weight: bold;
  }
}

@media only screen and (max-width: 768px) {
  .timetable-container {
    h3 {
      padding-left: 10px;
    }
    h3.is_stuck {
      background-color: white;
    }
  }
  .days-wrap {
    flex-direction: column;
  }
  .day {
    margin-top: 0.5em;
    h4 {
      padding-left: 10px;
    }
    &:first-child {
      margin-top: 0;
    }
  }
  .class-container {
    flex-direction: row;
    padding: 1em 0;
    .time {
      padding-left: 5px;
      flex: 1 0 0;
    }
    .name {
      flex: 2 0 0;
      font-size: 12px;
      word-break: break-word;
    }
    .level {
      // display: none;
      font-size: 12px;
      padding-right: 5px;
      flex: 0 0 0;
    }
  }
}

@media only screen and (min-width: 568px) and (max-width: 767px) {
  .class-container {
    .time {
      flex: 1 0 0;
    }
    .name {
      flex: 2 0 0;
    }
    .level {
      display: flex;
      flex: 2 0 0;
    }
  }
}

@media only screen and (min-width: 768px) {
  // .timetable-wrap {
  //   // padding: 10px;
  // }
  .timetable-container {
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14),
      0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12);
    h3 {
      padding-left: 10px;
    }
  }
  .days-wrap {
    border-top: 1px solid rgba(0, 0, 0, 0.12);
    flex-grow: 1;
    justify-content: space-between;
  }
  .day {
    width: 100%;
    border-right: 1px solid rgba(0, 0, 0, 0.12);
    &:last-child {
      border-right: none;
    }
    h4 {
      text-align: center;
    }
  }
  .class-container {
    flex-direction: column;
    padding-bottom: 1em;
    .time {
      text-align: center;
      padding: 5px 0;
    }
    .name {
      padding: 0 10px;
    }
    .level {
      padding: 0 10px;
    }
    &:last-child {
      border-bottom: none;
    }
  }
  // .color--scheme1 {
  //   color: $light--color;
  //   background-color: #009688;
  //   .time {
  //     background-color: #00695c;
  //   }
  // }
  // .color--scheme2 {
  //   color: $dark--color;
  //   background-color: #a7c6c5;
  //   .time {
  //     color: $light--color;
  //     background-color: #468c8f;
  //   }
  // }
  // .color--scheme3 {
  //   color: $dark--color;
  //   background-color: #9e9e9e;
  //   .time {
  //     color: $light--color;
  //     background-color: #424242;
  //   }
  // }
  // .color--scheme4 {
  //   color: $dark--color;
  //   background-color: #ffc107;
  //   .time {
  //     background-color: #ff8f00;
  //   }
  // }
  // .color--scheme5 {
  //   color: $light--color;
  //   background-color: #9c27b0;
  //   .time {
  //     background-color: #6a1b9a;
  //   }
  // }
  // .color--scheme6 {
  //   color: $light--color;
  //   background-color: #f44336;
  //   .time {
  //     background-color: #c62828;
  //   }
  // }
  // .color--scheme7 {
  //   color: $light--color;
  //   background-color: #796330;
  //   .time {
  //     background-color: #646646;
  //   }
  // }
  // .color--scheme8 {
  //   color: $dark--color;
  //   background-color: #03a9f4;
  //   .time {
  //     color: $light--color;
  //     background-color: #0277bd;
  //   }
  // }
}
</style>