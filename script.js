import { contacts } from "./storage.js";
function searchContact(name = "Unknown") {
  const userAvailable = contacts.find((contact) =>
    contact.fullName.includes(name)
  );
  if (userAvailable) console.log("Contact found");
  console.log(
    `${userAvailable.fullName} (${
      userAvailable.phones[0].number ?? userAvailable.phones[1].mobile
    }) ${
      userAvailable.emails[0].address ?? userAvailable.emails[1].address
    } in ${userAvailable.locations[0].city}, ${
      userAvailable.locations[0].country
    }`
  );
}

function listingContacts() {
  contacts.map((contact) => {
    console.log(
      `${contact.fullName} (${
        contact.phones[0].number ?? contact.phones[1].mobile
      }) ${contact.emails[0].address ?? contact.emails[1].address} in ${
        contact.locations[0].city
      }, ${contact.locations[0].country}`
    );
  });
}

listingContacts();
searchContact("David");
