/*// ========= Disabled Actions Ctrl+U, Ctrl+Shift+I, F12 ============

  document.addEventListener("contextmenu", e => e.preventDefault());
  document.addEventListener("keydown", function (e) {
    if (
      e.ctrlKey && (e.key === 'u' || e.key === 'U') ||       // Ctrl+U
      e.ctrlKey && e.shiftKey && e.key === 'I' ||            // Ctrl+Shift+I
      e.key === 'F12'                                        // F12
    ) {
      e.preventDefault();
    }
  });
// ========== 1. Hire Us Button ==========
*/

document.getElementById("hire-us-btn").addEventListener("click", function (e) {
  e.preventDefault();

  // Replace this with your actual form URL
  const formURL = "https://docs.google.com/forms/d/e/1FAIpQLSfMGWoG0O6qBgUmGs0y7SvlonePhbkJ39p1VbkZIG5f9UBsew/viewform?usp=sharing&ouid=105234301243898217277";

  // Open form in a new tab/window
  window.open(formURL, "_blank");
});
/*
document.getElementById("hire-us-btn").addEventListener("click", function (e) {
  e.preventDefault();
  const email = "deesqre@outlook.com";
  const mailtoLink = `mailto:${email}`;
  
  // Try to open default mail client
  const newWindow = window.open(mailtoLink, "_blank");

  // If blocked or no client
  setTimeout(() => {
    if (!newWindow || newWindow.closed || typeof newWindow.closed === "undefined") {
      alert("No email service found in your device");
    }
  }, 500);
});
*/
// ========== 2. Download Brochure Button ==========

document.getElementById("download-brochure-btn").addEventListener("click", function (e) {
  e.preventDefault();
  const link = document.createElement("a");
  link.href = "./files/service_brochure.pdf";
  link.download = "Service-Brochure.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
});
// ========== 3. Contact Form Send Button ==========

document.getElementById("contact-form").addEventListener("submit", function (e) {
  e.preventDefault();

  // Collect input values
  const name = document.getElementById("contact-name").value.trim();
  const email = document.getElementById("contact-email").value.trim();
  const subject = document.getElementById("contact-subject").value.trim();
  const message = document.getElementById("contact-message").value.trim();

  if (!name || !email || !subject || !message) {
    alert("Please fill out all fields.");
    return;
  }

  const toEmail = "deesqre@outlook.com";
  const mailBody = `Name: ${name} Email: ${email} Message:${message}`;
  const mailtoLink = `e-mailto:${toEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(mailBody)}`;

  // Try opening user's default email service (PC & Mobile friendly)
  try {
    window.location.href = mailtoLink;
  } catch (error) {
    alert("No email service found in your device.");
  }
});
/*
document.getElementById("contact-form").addEventListener("submit", function (e) {
  e.preventDefault();

  // Collect values
  const name = document.getElementById("contact-name").value.trim();
  const email = document.getElementById("contact-email").value.trim();
  const subject = document.getElementById("contact-subject").value.trim();
  const message = document.getElementById("contact-message").value.trim();

  if (!name || !email || !subject || !message) {
    alert("Please fill out all fields.");
    return;
  }

  const toEmail = "deesqre@outlook.com";
  const body = `Name: ${name}%0AEmail: ${email}%0A%0AMessage:%0A${message}`;
  const mailtoLink = `mailto:${toEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  const newWindow = window.open(mailtoLink, "_blank");

  // If mail client isn't available
  setTimeout(() => {
    if (!newWindow || newWindow.closed || typeof newWindow.closed === "undefined") {
      alert("No email service found in your device");
    }
  }, 500);
});
*/