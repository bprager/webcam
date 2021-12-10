export class Pool {
  loadCameras(): MediaDeviceInfo[] {
    const cameras: MediaDeviceInfo[] = [];
    navigator.mediaDevices.enumerateDevices().then((deviceInfos) => {
      for (let i = 0; i !== deviceInfos.length; ++i) {
        const deviceInfo = deviceInfos[i];
        if (deviceInfo.kind === "videoinput") {
          // console.log("camera added: " + deviceInfo.label);
          cameras.push(deviceInfo);
        }
      }
    });
    return cameras;
  }
}

export default {};
