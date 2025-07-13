// contact-form functionality
  document.getElementById("messageForm").addEventListener("submit", function (e) {
    e.preventDefault();

    // Show success message
    const successMsg = document.getElementById("successMsg");
    successMsg.style.display = "block";

    // Reset form
    e.target.reset();

    // Hide the message after 4 seconds
    setTimeout(() => {
      successMsg.style.display = "none";
    }, 4000);
  });


  // index.html
 



   


  // index.html
    window.sr = ScrollReveal();
        $('#menu-btn').click(function(){
            $('nav .navigation ul') .addClass('active')
        });
        $('#menu-close').click(function(){
            $('nav .navigation ul') .removeClass('active')
        });

        const sr = ScrollReveal({
    distance :'40px',
    duration:2050,
    delay:200,
    reset:true

});
sr.reveal('.hero-text',{origin:'top'});
sr.reveal('.about-img,.service-item,.about-text',{origin:'bottom'});
sr.reveal(' div h1 ,.about-text h2,.text-center,.right-contact h2,.row',{origin:'top'});
sr.reveal('.left-contact',{origin:'left'});
sr.reveal('.right-contact',{origin:'right'});
sr.reveal('.end-section',{origin:'top'});

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

 