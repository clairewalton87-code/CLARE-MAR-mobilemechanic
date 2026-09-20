const bookingForm = document.getElementById("bookingForm");
const formNote = document.getElementById("formNote");

if (bookingForm && formNote) {
  bookingForm.addEventListener("submit", async function (event) {
    event.preventDefault();

    const submitButton = bookingForm.querySelector('button[type="submit"]');
    const originalButtonText = submitButton.textContent;

    submitButton.disabled = true;
    submitButton.textContent = "Sending...";
    formNote.textContent = "Sending your booking request...";

    try {
      const response = await fetch(bookingForm.action, {
        method: "POST",
        body: new FormData(bookingForm),
        headers: {
          Accept: "application/json"
        }
      });

      if (response.ok) {
        bookingForm.reset();
        formNote.innerHTML =
          "<strong>Thanks — we've received your booking request.</strong><br>" +
          "CLARE-MAR will contact you to confirm availability, pricing and your appointment.<br>" +
          "Your booking isn't confirmed until we've contacted you.";
      } else {
        formNote.textContent =
          "Sorry, we couldn't send your booking request. Please try again or contact CLARE-MAR by phone or email.";
      }
    } catch (error) {
      formNote.textContent =
        "Sorry, we couldn't send your booking request. Please try again or contact CLARE-MAR by phone or email.";
    } finally {
      submitButton.disabled = false;
      submitButton.textContent = originalButtonText;
    }
  });
}
