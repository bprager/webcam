<template>
  <div>
    <button @click="toggleShow" class="anchor">Select an camera</button>
    <div v-if="showMenu" class="menu">
      <div
        class="menu-item"
        v-for="camera in cameras"
        :key="camera.id"
        @click="cameraClicked(camera)"
      >
        {{ camera.label }}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Options } from "vue-class-component";
import { Camera } from "../api/camera";

@Options({
  name: "Selector",
  props: {
    onClick: {
      type: Function,
    },
    cameras: {
      type: Array,
    },
  },
})
export default class Selector extends Vue {
  cameras!: Array<Camera>;
  onClick!: (camera: Camera) => void;
  selectedCamera!: Camera;
  showMenu = false;
  toggleShow(): void {
    this.showMenu = !this.showMenu;
    this.selectedCamera = this.cameras[0];
  }
  cameraClicked(camera: Camera): void {
    this.toggleShow();
    this.onClick(camera);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
