import { storageContacts } from "./storage.js";

saveContactsToLocalStorage(storageContacts);
const contacts = getContactsFromLocalStorage();
console.log("🚀 ~ contacts:", contacts);

function saveContactsToLocalStorage(contactsData) {
  try {
    const serializedContacts = JSON.stringify(contactsData);
    localStorage.setItem("contacts", serializedContacts);
  } catch (error) {
    throw Error(error);
  }
}

function getContactsFromLocalStorage() {
  try {
    const storedContacts = localStorage.getItem("contacts");

    if (!storedContacts) {
      return [];
    }

    const parsedUsers = JSON.parse(storedContacts);
    return parsedUsers;
  } catch (error) {
    throw Error(error);
  }
}

function searchContacts(keyword = "Unknown") {
  const foundContacts = contacts.filter((contact) =>
    contact.fullName.toLowerCase().includes(keyword.toLowerCase())
  );

  if (foundContacts.length <= 0) {
    throw Error("No contacts found");
  }

  return foundContacts;
}

function displayContacts(contacts) {
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
  const newId = contacts.length > 0 ? contacts[contacts.length - 1].id + 1 : 1;

  const newContact = {
    ...contact,
    id: newId,
  };

  contacts.push(newContact);
  saveContactsToLocalStorage(contacts);
}

function deleteDataContact(id) {
  const contactToDelete = contacts.find((contact) => contact.id === id);

  if (!contactToDelete) {
    throw Error("Data not found");
  }

  const newContacts = contacts.filter((contact) => contact.id !== id);

  saveContactsToLocalStorage(newContacts);

  console.info(`Contact with name ${contactToDelete.fullName} has been delete`);
}

function editDataContact(id, formData) {
  const newContacts = contacts.map((contact) => {
    if (contact.id === id) {
      return {
        ...contact,
        ...formData,
      };
    }
    return contact;
  });

  console.log("🚀 ~ newContacts ~ newContacts:", newContacts);

  saveContactsToLocalStorage(newContacts);
}

displayContacts(getContactsFromLocalStorage());

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

console.log("after add new contact");

displayContacts(getContactsFromLocalStorage());

deleteDataContact(6);

console.info("after delete");

displayContacts(getContactsFromLocalStorage());

console.log("edit contact id: 2");

editDataContact(2, {
  firstName: "Andrew",
  nickname: "Andrew",
  fullName: "Andre Hub",
  birthday: "2001-06-10",
  emails: [
    {
      type: "work",
      address: "andrew@.com",
    },
  ],
});

displayContacts(getContactsFromLocalStorage());
