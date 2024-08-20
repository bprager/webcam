<template>
  <video class="video" ref="video" :autoplay="autoplay" />
</template>

<script lang="ts">
import { ref } from "vue";
import { Options, Vue } from "vue-class-component";

@Options({
  props: {
    camera: {
      type: MediaDeviceInfo,
      default: null,
    },
    width: {
      type: [Number, String],
      default: "100%",
    },
    height: {
      type: [Number, String],
      default: 500,
    },
    src: String,
    autoplay: {
      type: Boolean,
      default: true,
    },
    deviceId: {
      type: String,
      default: null,
    },
    playsinline: {
      type: Boolean,
      default: true,
    },
    resolution: {
      type: Object,
      default: null,
      validator: (value: {
        height: number | string;
        width: number | string;
      }) => {
        return value.height && value.width;
      },
    },
  },
})
export default class Video extends Vue {
  camera?: MediaDeviceInfo;
  width?: number | string;
  height?: number | string;
  // source?: MediaStream;
  source?: string;
  src?: string;
  autoplay?: boolean;
  playsinline?: boolean;
  constraints = {
    audio: false,
    video: {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      deviceId: this!.camera?.deviceId,
    },
  };
  video?: HTMLVideoElement;
  startVideo(): void {
    navigator.mediaDevices
      .getUserMedia(this.constraints)
      .then((stream) => {
        // this.autoplay = true;
        /* eslint-disable @typescript-eslint/no-explicit-any */
        if (this.$refs.video && "srcObject" in (this.$refs as any).video) {
          console.log("src object in video");
          (this.$refs as any).video.srcObject = stream;
          (this.$refs as any).video.onloadmetadata = () => {
            (this.$refs as any).video.play();
          };
          /* eslint-enable @typescript-eslint/no-explicit-any */
        } else {
          console.log("no src object found");
        }
        // this.video?.srcObject = stream;
        // this?.video?.onloadedmetadata = (): Promise<void> | undefined => {
        //   return this.video?.play();
        // };
        this.video?.play();
      })
      .catch((e) => {
        console.error(e, e.stack);
      });
  }
  setup(): void {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const video = ref(null);
  }
  updated(): void {
    console.log("updated, trying start video ...");
    console.log("using camera with id: " + this.camera?.deviceId);
    this.startVideo();
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
.video {
  overflow: hidden;
  display: inline-block;
  vertical-align: middle;
  width: 100%;
}
</style>
