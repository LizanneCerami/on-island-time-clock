const getCurrentTime = () => {
  // Get New Date
  const today = new Date();

  // Extract
  let day = today.getDay();
  let hour = today.getHours();
  let minute = today.getMinutes();
  let second = today.getSeconds();
  let millisecond = today.getMilliseconds();

  // Day Array
  const dayArray = [
    "Sun", "Mon", "Tues", "Wed", "Thur", "Fri", "Sat"
  ];

  // Check Leading Zero
  hour = checkLeadingZero(hour);
  minute = checkLeadingZero(minute);
  second = checkLeadingZero(second);

  // Assemble
  let currentTime = `${dayArray[day]} ${hour} : ${minute} : ${second} : ${millisecond}`;

  // Render
  document.querySelector(".clock").innerHTML = currentTime;

  setTimeout(getCurrentTime, 100);
}

const checkLeadingZero = paramTime => {
  paramTime < 10
  ? paramTime = `0${paramTime}`
  : null

  return paramTime;
}