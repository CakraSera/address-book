import { storageContacts } from "./storage.js";

let contacts = storageContacts;

function searchContacts(keyword = "Unknown") {
  const foundContacts = contacts.filter((contact) =>
    contact.fullName.toLowerCase().includes(keyword.toLowerCase())
  );
  console.log("🚀 ~ searchContact ~ foundContacts:", foundContacts);

  if (foundContacts.length <= 0) {
    console.log("No contacts found");
  }

  foundContacts.forEach((contact) => {
    console.log("🚀 ~ searchContact ~ contact:", contact);
    console.log("=========================================");
    console.log(`Name: ${contact?.fullName}`);
    console.log(
      `Phone: ${contact?.phones[0].number ?? contact.phones[1].mobile}`
    );
    console.log(`Email: ${contact.emails[0].address}`);
    console.log(`City: ${contact.locations[0].city}`);
    console.log(`Country: ${contact.locations[0].country}`);
    console.log("=========================================");
  });
}

function displayContacts() {
  console.log("Display Contacts");
  contacts.forEach((contact) => {
    console.log("=========================================");
    console.log("ID:" + contact.id);
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
    throw Error("Error: Data contact is required");
  }
  const lastId = contacts.length > 0 ? contacts[contacts.length - 1].id : 1;
  const newId = lastId + 1;
  const newContact = {
    ...contact,
    id: newId,
  };

  console.log(newContact);

  contacts.push(newContact);
}

function deleteDataContact(id) {
  const filteredContacts = contacts.filter((contact) => contact.id !== id);
  console.log("🚀 ~ deleteDataContact ~ filteredContacts:", filteredContacts);

  contacts = filteredContacts;
  console.info("Contact {name} successfully deleted");
}

function editDataContact(id, formData) {
  // const newContacts = contacts.map((contact) => {
  //   if (contact.id === id) {
  //     return formData;
  //   }
  // });

  const contactIndex = contacts.findIndex((contact) => contact.id === id);

  if (contactIndex === -1) {
    throw Error("Contact not found");
  }

  // Get the existing contact
  const existingContact = contacts[contactIndex];

  // Merge the existing contact with the new data
  const updatedContact = {
    ...existingContact,
    ...formData,
    // Preserve the ID
    id: existingContact.id,
    // Handle nested objects
    workProfile: {
      ...existingContact.workProfile,
      ...formData.workProfile,
    },
    // Handle arrays by merging them if they exist in formData
    emails: formData.emails || existingContact.emails,
    phones: formData.phones || existingContact.phones,
    locations: formData.locations || existingContact.locations,
    socialProfiles: formData.socialProfiles || existingContact.socialProfiles,
    groups: formData.groups || existingContact.groups,
  };

  // Update the contact in the array
  contacts[contactIndex] = updatedContact;
  console.log("Contact updated successfully:", updatedContact);
}

// displayContacts();
searchContacts("John");

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

addNewContact({
  firstName: "Sarah",
  lastName: "Johnson",
  fullName: "Sarah Johnson",
  nickname: "SJ",
  photoUrl: "https://example.com/photos/sarah.jpg",
  birthday: new Date("1990-05-15"),
  groups: ["Family", "Friends"],
  workProfile: {
    company: "Google",
    jobTitle: "Product Manager",
    department: "Product Management",
    website: "https://google.com",
  },
  emails: [
    { type: "work", address: "sarah.j@google.com" },
    { type: "personal", address: "sarah.johnson@gmail.com" },
  ],
  phones: [
    { type: "mobile", number: "1234567890" },
    { type: "work", number: "9876543210" },
  ],
  locations: [
    {
      type: "home",
      street: "456 Oak Avenue",
      addressLines: ["456 Oak Avenue"],
      city: "San Francisco",
      postalCode: "94105",
      country: "United States",
    },
  ],
  socialProfiles: [
    { type: "Twitter", url: "https://twitter.com/sarahjohnson" },
    { type: "Instagram", url: "https://instagram.com/sarahjohnson" },
  ],
  notes:
    "Sarah is a Product Manager at Google, passionate about user experience and product design",
});

displayContacts();

deleteDataContact(1);

displayContacts();

addNewContact({
  firstName: "Sarah",
  lastName: "Johnson",
  fullName: "Sarah Johnson",
  nickname: "SJ",
  photoUrl: "https://example.com/photos/sarah.jpg",
  birthday: new Date("1990-05-15"),
  groups: ["Family", "Friends"],
  workProfile: {
    company: "Google",
    jobTitle: "Product Manager",
    department: "Product Management",
    website: "https://google.com",
  },
  emails: [
    { type: "work", address: "sarah.j@google.com" },
    { type: "personal", address: "sarah.johnson@gmail.com" },
  ],
  phones: [
    { type: "mobile", number: "1234567890" },
    { type: "work", number: "9876543210" },
  ],
  locations: [
    {
      type: "home",
      street: "456 Oak Avenue",
      addressLines: ["456 Oak Avenue"],
      city: "San Francisco",
      postalCode: "94105",
      country: "United States",
    },
  ],
  socialProfiles: [
    { type: "Twitter", url: "https://twitter.com/sarahjohnson" },
    { type: "Instagram", url: "https://instagram.com/sarahjohnson" },
  ],
  notes:
    "Sarah is a Product Manager at Google, passionate about user experience and product design",
});

displayContacts();

editDataContact(2, {
  firstName: "Andrew",
  nickname: "Andrew",
  birthday: "2001-06-10",
  emails: [
    {
      type: "work",
      address: "andrew@huberman.com",
    },
  ],
});
