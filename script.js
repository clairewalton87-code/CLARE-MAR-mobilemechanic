const bookingForm = document.querySelector("#bookingForm");
const formNote = document.querySelector("#formNote");

bookingForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(bookingForm);
  const name = formData.get("name")?.toString().trim() || "there";
  const phone = formData.get("phone")?.toString().trim() || "";
  const vehicle = formData.get("vehicle")?.toString().trim() || "";
  const service = formData.get("service")?.toString().trim() || "";
  const message = formData.get("message")?.toString().trim() || "";
  const subject = encodeURIComponent(`CLARE-MAR Mobile Mechanic Ltd booking request from ${name}`);
  const body = encodeURIComponent(
    `Name: ${name}\nPhone: ${phone}\nVehicle: ${vehicle}\nService needed: ${service}\n\nIssue:\n${message}`
  );

  window.location.href = `mailto:clarty215@gmail.com?subject=${subject}&body=${body}`;
  formNote.textContent = `Thanks, ${name}. Your email app should open with the request ready to send.`;
  bookingForm.reset();
});
