import { storageContacts } from "./storage.js";

const allContactList = document.getElementById("all-contact-list");

saveContactsToLocalStorage(storageContacts);
const contacts = getContactsFromLocalStorage();

function renderContacts() {
  allContactList.innerHTML = contacts
    .map((contact) => {
      // return `<li>
      //         <div class="mb-4 card bg-gray-300 w-96 shadow-sm">
      //           <div>
      //             <h3>${contact.fullName}</h3>
      //             <p>Phone: ${contact.phones[0].number}</p>
      //             <p>Email: ${contact.emails[0].address}</p>
      //           </div>
      //           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
      //             <path stroke-linecap="round" stroke-linejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
      //           </svg>
      //         </div>
      //       </li>`;

      return ` <tr>
                <td>
                  <div class="flex items-center gap-3">
                    <div class="avatar">
                      <div class="mask mask-squircle h-12 w-12">
                        <img
                          src=${contact.photoUrl}
                          alt="Avatar Tailwind CSS Component" />
                      </div>
                    </div>
                    <div>
                      <div class="font-bold">${contact.fullName}</div>
                      <div class="text-sm opacity-50">${
                        contact.locations[0].country
                      }</div>
                    </div>
                  </div>
                </td>
                <td>
                  ${contact.workProfile.company}
                  <br />
                  <span class="badge badge-ghost badge-sm"
                    >${contact.workProfile.jobTitle}</span
                  >
                </td>
                <td>+62-${contact.phones[1].number}</td>
                <td>${contact.emails[1].address}</td>
                <td>
                  <ul class="flex gap-2">
                    ${contact.groups.map((group) => {
                      return `<li>
                        <div class="badge badge-success">${group}</div>
                        `;
                    })}
                  </ul>
                </td>
                <th>
                  <button class="btn btn-ghost btn-xs">view</button>
                  <button class="btn btn-ghost btn-xs">edit</button>
                  <button class="btn btn-ghost btn-xs">delete</button>
                </th>
              </tr>`;
    })
    .join("");
}

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
  contacts.forEach((contacts) => {});
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

  saveContactsToLocalStorage(newContacts);
}

renderContacts();
