document.addEventListener("DOMContentLoaded", () => {
  // 1. HIRE US button
  const hireBtn = document.getElementById("hireBtn");
  if (hireBtn) {
    hireBtn.addEventListener("click", (e) => {
      e.preventDefault(); // prevent default behavior
      window.location.href = "mailto:deesqre@outlook.com";
    });
  }

  // 2. DOWNLOAD BROCHURE button – Already works as per your confirmation
  const downloadBrochureBtn = document.getElementById("downloadBrochureBtn");
  if (downloadBrochureBtn) {
    downloadBrochureBtn.addEventListener("click", () => {
      const link = document.createElement("a");
      link.href = "file/service brochure.pdf"; // adjust if subfolder name is different
      link.download = "service brochure.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    });
  }

  // 3. SEND button (contact form)
  const contactForm = document.getElementById("contactForm");
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const name = document.getElementById("nameInput").value.trim();
      const email = document.getElementById("emailInput").value.trim();
      const subject = document.getElementById("subjectInput").value.trim();
      const message = document.getElementById("messageInput").value.trim();

      // Show confirmation popup to user
      alert("Your message sending is done.");

      // Open mail client with prefilled values
      const mailto = `mailto:deesqre@outlook.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
        `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
      )}`;

      window.location.href = mailto;

      // Reset form (optional)
      contactForm.reset();
    });
  }
});
