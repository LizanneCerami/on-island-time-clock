const getCurrentTime = () => {
  const options = {
    timeZone: "America/New_York",
    hour12: true,
    weekday: "long",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric"
  };

  // Get the current time
const currentTime = new Date().toLocaleString("en-US", options);

  // Render
  document.querySelector(".clock").innerHTML = currentTime;


  setTimeout(getCurrentTime, 100);
}

