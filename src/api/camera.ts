export class Pool {
  cameras: Camera[] | null;

  constructor() {
    this.cameras = [];
  }

  findAll(): Array<Camera> {
    this.cameras = [];
    navigator.mediaDevices
      .enumerateDevices()
      .then((devices) => {
        devices.forEach((device) => {
          if (device.kind === "videoinput") {
            const cam = new Camera(device.label, device.deviceId);
            if (this && this.cameras) {
              this.cameras.push(cam);
            }
            console.log("label : " + cam.label + ", id = " + cam.id);
          }
        });
      })
      .catch(function (err) {
        console.log(err.name + ": " + err.message);
      });
    return this.cameras;
  }
}

export class Camera {
  label: string;
  id: string;

  constructor(label: string, id: string) {
    this.label = label;
    this.id = id;
  }

  hello(): string {
    return "Hello world!";
  }
}

export default {};
