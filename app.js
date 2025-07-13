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
  



 