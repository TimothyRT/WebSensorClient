if (typeof Gyroscope === "undefined") {
  alert("Gyroscope API not supported on this device/browser.")
}
else {
  const gyroscope = new Gyroscope({ frequency: 60 });

  const gyroscopeLabelX = document.querySelector("#gyroscope-x");
  const gyroscopeLabelY = document.querySelector("#gyroscope-y");
  const gyroscopeLabelZ = document.querySelector("#gyroscope-z");

  gyroscope.addEventListener("reading", (e) => {
    gyroscopeLabelX.innerText = `Angular velocity along the X-axis = ${gyroscope.x}`;
    gyroscopeLabelY.innerText = `Angular velocity along the Y-axis = ${gyroscope.y}`;
    gyroscopeLabelZ.innerText = `Angular velocity along the Z-axis = ${gyroscope.z}`;
  });

  gyroscope.start();
}

if (typeof LinearAccelerationSensor === "undefined") {
  alert("LinearAccelerationSensor API not supported on this device/browser.")
}
else {
  const acceleration = new LinearAccelerationSensor({ frequency: 60 });

  const accelerationLabelX = document.querySelector("#acceleration-x");
  const accelerationLabelY = document.querySelector("#acceleration-y");
  const accelerationLabelZ = document.querySelector("#acceleration-z");

  acceleration.addEventListener("reading", (e) => {
    accelerationLabelX.innerText = `Acceleration along the X-axis = ${gyroscope.x}`;
    accelerationLabelY.innerText = `Acceleration along the Y-axis = ${gyroscope.y}`;
    accelerationLabelZ.innerText = `Acceleration along the Z-axis = ${gyroscope.z}`;
  });

  acceleration.start();
}
