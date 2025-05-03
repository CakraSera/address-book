const contactFormElement = document.getElementById("contactForm");
const countriesElement = document.getElementById("countries");
const phoneNumberCodesElement = document.getElementById("phone-number-codes");

contactFormElement.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(contactFormElement);
  console.log("🚀 ~ contactFormElement.addEventListener ~ formData:", formData);

  const newContact = {
    photoUrl: `https://api.dicebear.com/9.x/pixel-art/png?seed=${String(
      formData.get("email")
    )}`,
    fullName: String(formData.get("fullname")),
    emails: [{ type: "work", address: String(formData.get("email")) }],
    workProfile: {
      company: String(formData.get("company")),
      jobTitle: String(formData.get("job-title")),
    },
    phones: [
      { type: "personal", number: `+${Number(formData.get("phone-number"))}` },
    ],
    locations: [
      {
        street: String(formData.get("address")),
        country: String(formData.get("country")),
      },
    ],
  };

  addNewContact(newContact);

  Swal.fire({
    title: "Success!",
    text: `Contact with name ${newContact.fullName} has been added`,
    icon: "success",
    confirmButtonText: "Ok",
    didClose: () => {
      window.location.href = "../index.html";
    },
  });
});

getCountriesAPIs();
