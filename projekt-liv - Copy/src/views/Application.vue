<template>
  <div class='application mt-4 container'>
    <h2 class="header text-center mb-4">LIV APPEN</h2>
    <ApplicationComponent />
  </div>
</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator';
import ApplicationComponent from '@/components/ApplicationComponent.vue';

@Component({
  components: {
    ApplicationComponent,
  },
})
export default class Application extends Vue {}
</script>
<style scoped lang="scss">
.header {
  background-color: rgb(207, 164, 22);
  font-size: 3em;
  color: white;
  line-height: 1.2;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.7);
}
</style>