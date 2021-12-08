<template>
  <div>
    <button @click="toggleShow" class="anchor">Select a camera</button>
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
  color: #39c2d7;
}
.anchor {
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid transparent;
  font-size: 1rem;
  border-radius: 0.25rem;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  color: #fff;
  background-color: #008ace;
  border-color: #008ace;
}

.anchor::after {
  display: inline-block;
  width: 0;
  height: 0;
  margin-left: 0.5em;
  vertical-align: 0.255em;
  border-top: 0.1em solid;
  border-right: 0.28em solid transparent;
  border-bottom: 0;
  border-left: 0.28em solid transparent;
}

.anchor:hover {
  color: #fff;
  background-color: #008ace;
  border-color: #008ace;
  cursor: pointer;
}

.menu {
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid rgba(0, 0, 0, 0.15);
  border-radius: 0.25rem;
  color: #222222;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  font-size: 1rem;
  list-style: none;
  margin: 0.125rem 0 0;
  padding: 0.2rem 0;
  position: absolute;
  text-align: left;
}

.menu-item {
  color: #222222;
  padding: 0.25rem 1.5rem;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}

.menu-item:hover {
  background-color: #cccccc;
  cursor: pointer;
}

span {
  font-weight: bold;
  color: #008ace;
  font-size: 1.25rem;
}
</style>
