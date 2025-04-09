import { contacts } from "./storage.js";

console.log(contacts);

console.log("Hello, World!");

function getContanct(name = "Unknown") {
  const userAvailable = contacts.find((contact) =>
    contact.fullName.includes(name)
  );
  if (userAvailable)
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

getContanct(" Williams");
