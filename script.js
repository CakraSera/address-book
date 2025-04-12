import { contacts } from "./storage.js";
function searchContact(name = "Unknown") {
  const userAvailable = contacts.find((contact) =>
    contact.fullName.includes(name)
  );
  if (userAvailable) {
    console.log("contact found");
    console.log("=========================================");
    console.log(`Name: ${userAvailable.fullName}`);
    console.log(
      `Phone: ${
        userAvailable.phones[0].number ?? userAvailable.phones[1].mobile
      }`
    );
    console.log(`Email: ${userAvailable.emails[0].address}`);
    console.log(`City: ${userAvailable.locations[0].city}`);
    console.log(`Country: ${userAvailable.locations[0].country}`);
    console.log("=========================================");
  }
}

function displayContacts() {
  contacts.map((contact) => {
    console.log("=========================================");
    console.log(`Name: ${contact.fullName}`);
    console.log(`Phone: ${contact.phones[0].number}`);
    console.log(`Email: ${contact.emails[0].address}`);
    console.log(`City: ${contact.locations[0].city}`);
    console.log(`Country: ${contact.locations[0].country}`);
    console.log("=========================================");
  });
}

function addNewContact(event) {
  event.preventDefault();

  const form = event.target;
  const name = form.name.value;
  const phone = form.phone.value;
  const email = form.email.value;

  const newContact = {
    fullName: name,
    phones: [{ number: phone }],
    emails: [{ address: email }],
    locations: [{ city: "", country: "" }],
  };

  contacts.push(newContact);
  console.log("Contact added successfully:", newContact);

  // Clear the form
  form.reset();
}

function deleteDataContact(id) {}

function editDataContact(id, formData) {}

// displayContacts();
searchContact("David");
