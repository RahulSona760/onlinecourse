// digital-clock index.html
  function updateClock() {
      const now = new Date();
      let hours = now.getHours();
      const minutes = now.getMinutes();
      const seconds = now.getSeconds();
      const ampm = hours >= 12 ? 'PM' : 'AM';

      hours = hours % 12;
      hours = hours ? hours : 12; // the hour '0' should be '12'

      const format = (num) => num.toString().padStart(2, '0');

      const currentTime = `${format(hours)}:${format(minutes)}:${format(seconds)} ${ampm}`;
      document.getElementById('digitalClock').textContent = currentTime;
    }

    setInterval(updateClock, 1000);
    updateClock();