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
  var headers = new Headers();
  headers.append("X-CSCAPI-KEY", "API_KEY");

  var requestOptions = {
    method: "GET",
    headers: headers,
    redirect: "follow",
  };

  fetch("https://api.countrystatecity.in/v1/countries/IN", requestOptions)
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.log("error", error));
}

getCountryAPI();
