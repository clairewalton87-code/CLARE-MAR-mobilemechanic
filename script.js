const bookingForm = document.querySelector("#bookingForm");
const formNote = document.querySelector("#formNote");

if (bookingForm && formNote) {
  bookingForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(bookingForm);

    const clean = (field, fallback = "") =>
      formData.get(field)?.toString().trim() || fallback;

    const name = clean("name", "Customer");
    const phone = clean("phone");
    const email = clean("email");
    const location = clean("location");
    const vehicle = clean("vehicle");
    const registration = clean("registration");
    const service = clean("service");
    const preferred = clean("preferred", "No preference given");
    const message = clean("message");

    const subject = encodeURIComponent(
      `CLARE-MAR booking request from ${name} - ${registration}`
    );

    const body = encodeURIComponent(
`CLARE-MAR BOOKING / QUOTE REQUEST

Name: ${name}
Phone: ${phone}
Email: ${email}
Postcode / location: ${location}

Vehicle: ${vehicle}
Registration: ${registration}
Service needed: ${service}
Preferred date / time: ${preferred}

Fault / symptoms / work requested:
${message}

I understand this is a booking/quote request only and is not a confirmed appointment or agreed repair price until CLARE-MAR contacts me and we agree the job.

I have reviewed the Privacy Notice and Customer Terms & Cancellation Information on the CLARE-MAR website.`
    );

    window.location.href =
      `mailto:clarty215@gmail.com?subject=${subject}&body=${body}`;

    formNote.textContent =
      `Thanks, ${name}. Your email app should open with the request ready to send.`;
  });
}
