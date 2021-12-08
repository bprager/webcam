<template>
  <Selector :on-click="changeCamera" :cameras="cameras" class="center" />
  <p>Camera selected: {{ activeCamera?.label }}</p>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { Camera, Pool } from "./api/camera";
import Selector from "./components/Selector.vue";

@Options({
  components: {
    Selector,
  },
})
export default class App extends Vue {
  cameras: Camera[] = [];
  pool: Pool = new Pool();
  activeCamera: Camera | null = null;
  changeCamera(camera: Camera): void {
    this.activeCamera = camera;
  }
  mounted(): void {
    this.cameras = this.pool.findAll();
    this.activeCamera = this.cameras[0];
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #263852;
}
.center {
  margin: auto;
  width: 60%;
  padding: 10px;
}
</style>
