
// <================Clock.js====================>
  function updateClock() {
    const now = new Date();

    let hours = now.getHours();
    let minutes = String(now.getMinutes()).padStart(2, '0');
    let seconds = String(now.getSeconds()).padStart(2, '0');
    const ampm = hours >= 12 ? 'PM' : 'AM';

    hours = hours % 12;
    hours = hours ? hours : 12; // 12-hour format

    const timeStr = `${String(hours).padStart(2, '0')}:${minutes}:${seconds} ${ampm}`;
    document.getElementById("digitalClock").textContent = timeStr;

    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const months = [
      "January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];

    const dayName = days[now.getDay()];
    const monthName = months[now.getMonth()];
    const day = now.getDate();
    const year = now.getFullYear();

    document.getElementById("clockDate").textContent = `${dayName}, ${monthName} ${day}, ${year}`;
  }

  // Call every second
  setInterval(updateClock, 1000);
  updateClock(); // Initial call









