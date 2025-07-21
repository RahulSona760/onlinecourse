 function showNotification(message, type) {
    const successMessage = document.getElementById('successMessage');
    successMessage.textContent = message;
    successMessage.style.color = type === 'success' ? 'green' : 'red';
    successMessage.style.display = 'block';
  }

  // Initialize form handling for EmailJS
  function initializeFormHandling() {
    const contactForm = document.getElementById('messageForm');

    if (contactForm) {
      contactForm.addEventListener('submit', function(e) {
        e.preventDefault();

        const submitBtn = this.querySelector('.submit-btn');
        const originalText = submitBtn.textContent;

        // Show loading state
        submitBtn.textContent = 'Sending...';
        submitBtn.disabled = true;

        // Initialize EmailJS
        if (window.emailjs) {
          emailjs.init('fyJCsJKO47hJDArDl'); // Replace with your actual Public Key

          emailjs.sendForm('000677', 'template_iffqm6g', this) // Replace with your Service ID & Template ID
            .then(() => {
              showNotification('✅ Your request has been sent!', 'success');
              this.reset();
              submitBtn.textContent = originalText;
              submitBtn.disabled = false;
            }, (error) => {
              console.error('EmailJS error:', error);
              showNotification('❌ Failed to send. Please try again later.', 'error');
              submitBtn.textContent = originalText;
              submitBtn.disabled = false;
            });
        } else {
          showNotification('❌ Email service not loaded.', 'error');
          submitBtn.textContent = originalText;
          submitBtn.disabled = false;
        }
      });
    }
  }

  // Initialize when DOM is ready
  document.addEventListener('DOMContentLoaded', initializeFormHandling);
