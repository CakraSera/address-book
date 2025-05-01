const contactFormElement = document.getElementById("contactForm");

contactFormElement.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(contactFormElement);
  console.log("🚀 ~ contactFormElement.addEventListener ~ formData:", formData);

  const newContact = {
    fullName: String(formData.get("fullName")),
    emails: [{ type: "work", address: String(formData.get("email")) }],
    phones: [
      { type: "personal", number: Number(formData.get("phone-number")) },
    ],
    locations: [
      {
        street: String(formData.get("address")),
      },
    ],
  };

  addNewContact(newContact);

  alert("successfully");
  window.location.href = "../index.html";
});

async function getCountryAPI() {
  const headers = { "X-Api-Key": "H7fv3DvCJWdXHN7U5oMApA==NesX3ejx4qXZbudT" };
  console.log("🚀 ~ getCountryAPI ~ headers:", headers);
  const response = await fetch("https://api.api-ninjas.com/v1/allcountries", {
    headers: headers,
  });
  const data = await response.json();
  console.log("🚀 ~ getCountryAPI ~ data:", data);
}
getCountryAPI();
