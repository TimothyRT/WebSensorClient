if (typeof Gyroscope === "undefined") {
  alert("Gyroscope API not supported on this device/browser.")
}
else {
  const gyroscope = new Gyroscope({ frequency: 60 });

  const gyroscopeLabelX = document.querySelector("#gyroscope-x");
  const gyroscopeLabelY = document.querySelector("#gyroscope-y");
  const gyroscopeLabelZ = document.querySelector("#gyroscope-z");

  gyroscope.addEventListener("reading", (e) => {
    gyroscopeLabelX.innerText = `Angular velocity along the X-axis ${gyroscope.x}`;
    gyroscopeLabelY.innerText = `Angular velocity along the Y-axis ${gyroscope.y}`;
    gyroscopeLabelZ.innerText = `Angular velocity along the Z-axis ${gyroscope.z}`;
  });

  gyroscope.start();
}
