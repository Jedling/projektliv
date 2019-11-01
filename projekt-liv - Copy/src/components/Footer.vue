<template>
  <footer class="footer container-fluid">
    <div class="row justify-content-center mt-4 mb-4">
      <div class="col-12">
        <p class="text-center footer-contact">
          © 2019 ProjektLiv - Hosted by
          <a
            target="_blank"
            href="http://benader.com/"
            style="text-decoration:none;color:#fff;"
            >BeNader.com</a
          >
        </p>
        <p class="text-center footer-gdpr" style="color:#fff;margin-top:.8em;">
          <a onclick="Loadgdpr()">GDPR - Dataskyddsförordningen </a>
        </p>
        <!-- <div class="col-12"> -->
        <div class="row justify-content-center text-center mb-4">
          <!-- <div class="col-12"> -->
          <div class="col-4 col-sm-3">
            <a
              href="https://www.facebook.com/Projekt-LIV-1859178424304560/"
              target="_blank"
            >
              <i class="fab icon fa-facebook-square"></i>
            </a>
          </div>
          <div class="col-4 col-sm-3">
            <a href="" target="_blank">
              <i class="fab icon fa-instagram"></i>
            </a>
          </div>
          <div class="col-4 col-sm-3">
            <a href="" target="_blank">
              <i class="fab icon fa-youtube"></i>
            </a>
          </div>
          <!-- </div> -->
        </div>
        <!-- </div> -->
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component({})
export default class Footer extends Vue {
  // @Prop() private msg!: string;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.footer {
  background-image: url("../assets/header/background-img.png");
  background-size: cover;
  // box-shadow: 1px 3px 4px 10px rgba(0, 0, 0, 0.7);
  .footer-contact {
    color: rgb(58, 52, 52);
    margin-top: 0.8em;
  }
  .footer-gdpr {
    text-decoration: none;
    color: #fff;
  }
  .fa-facebook-square,
  .fa-instagram,
  .fa-youtube {
    color: white;
    font-size: 80px;
    // padding: 10px;
    @media (max-width: 320px) {
      font-size: 60px;
    }
  }
}
</style>
