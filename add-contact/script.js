const contactFormElement = document.getElementById("contactForm");

if (contactFormElement) {
  contactFormElement.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(contactFormElement);
    console.log(
      "🚀 ~ contactFormElement.addEventListener ~ formData:",
      formData
    );

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
  });
} else {
  console.error("Form element with ID 'contactForm' not found");
}
