<template>
  <!-- <Selector :on-click="changeCamera" :cameras="cameras" class="center" /> -->
  <Video :camera="activeCamera" />
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { Pool } from "./api/camera";
import Selector from "./components/Selector.vue";
import Video from "./components/Video.vue";

@Options({
  components: {
    Selector,
    Video,
  },
})
export default class App extends Vue {
  cameras: MediaDeviceInfo[] = [];
  pool: Pool = new Pool();
  activeCamera: MediaDeviceInfo | null = null;

  changeCamera(camera: MediaDeviceInfo): void {
    this.activeCamera = camera;
  }
  mounted(): void {
    this.cameras = this.pool.loadCameras();
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
