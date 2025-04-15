import { contacts } from "./storage.js";
function searchContact(name = "Unknown") {
  const foundContacts = contacts.filter((contact) =>
    contact.fullName.toLowerCase().includes(name.toLowerCase())
  );

  if (foundContacts.length > 0) {
    console.log("contact found");
    for (contact in foundContacts) {
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
}

function displayContacts() {
  console.log("Display Contacts");
  contacts.forEach((contact) => {
    console.log("=========================================");
    console.log(`Name: ${contact.fullName}`);
    console.log(`Phone: ${contact.phones[0].number}`);
    console.log(`Email: ${contact.emails[0].address}`);
    console.log(`City: ${contact.locations[0].city}`);
    console.log(`Country: ${contact.locations[0].country}`);
    console.log("=========================================");
  });
}

function addNewContact(contact) {
  if (!contact) {
    console.error("Error: Data contact is required");
    return null;
  }

  // --- Calculate the new ID ---

  // If the array is empty, start with ID 1
  // Find the maximum ID among existing contacts
  // Math.max needs individual arguments, not an array, hence the spread (...) operator
  // Calculate the new ID based on the requirement (maxId + 2)

  // Add new contact

  //push
}

function deleteDataContact(id) {
  
}

function editDataContact(id, formData) {}

// displayContacts();
searchContact("John");

addNewContact({
  firstName: "Rakhel",
  lastName: "Cakra",
  fullName: "Rakhel Cakra",
  nickname: "Dave",
  photoUrl: "https://example.com/photos/david.jpg",
  birthday: new Date("1987-11-30"),
  groups: ["Work"],
  workProfile: {
    company: "Facebook",
    jobTitle: "Software Engineer 4",
    department: "Engineering",
    website: "https://facebook.com",
  },
  emails: [
    { type: "work", address: "david@example.com" },
    { type: "personal", address: "david@gmail.com" },
  ],
  phones: [
    { type: "mobile", number: "5678901234" },
    { type: "work", number: "0987654321" },
  ],
  locations: [
    {
      type: "work",
      street: "123 Main St",
      addressLines: ["123 Main St"],
      city: "Boston",
      postalCode: "02101",
      country: "United States",
    },
  ],
  socialProfiles: [
    { type: "LinkedIn", url: "https://linkedin.com/in/davidbrown" },
  ],
  notes: "David is a software engineer at Facebook",
});
