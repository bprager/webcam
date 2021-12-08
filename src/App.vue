<template>
  <Selector :on-click="changeCamera" :cameras="cameras" />
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
    console.log("mounted ...");
    this.cameras = this.pool.findAll();
    console.log("cameras: " + this.cameras);
    this.activeCamera = this.cameras[0];
    console.log("active camera: " + this.activeCamera);
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
