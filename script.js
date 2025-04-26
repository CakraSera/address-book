import { storageContacts } from "./storage.js";

const allContactList = document.getElementById("all-contact-list");
const searchInput = document.getElementById("search-input");
const viewContactButton = document.getElementById("view-contact");
const editContactButton = document.getElementById("edit-contact");
const deleteContactButtons = document.querySelectorAll("#delete-contact");

saveContactsToLocalStorage(storageContacts);
const contacts = getContactsFromLocalStorage();

function renderContacts() {
  allContactList.innerHTML = contacts
    .map((contact) => {
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
                  <button id="view-contact" class="btn btn-ghost btn-xs">view</button>
                  <button id="edit-contact" class="btn btn-ghost btn-xs">edit</button>
                  <button id="delete-contact" class="btn btn-ghost btn-xs" data-id=${
                    contact.id
                  }>delete</button>
                </th>
              </tr>`;
    })
    .join("");
}

function renderContactsv2(foundContacts) {
  allContactList.innerHTML = foundContacts
    .map((contact) => {
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
                  <button id="view-contact" class="btn btn-ghost btn-xs">view</button>
                  <button id="edit-contact" class="btn btn-ghost btn-xs">edit</button>
                  <button id="delete-contact" class="btn btn-ghost btn-xs" data-id=${
                    contact.id
                  }>delete</button>
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

function searchContacts(event) {
  console.log("🚀 ~ searchContacts ~ event:", event.key);
  if (event.key === "Enter") {
    const keyword = event.target.value;
    console.log("🚀 ~ searchContacts ~ keyword:", keyword);
    const foundContacts = contacts.filter((contact) =>
      contact.fullName.toLowerCase().includes(keyword.toLowerCase())
    );
    if (foundContacts.length <= 0) {
      throw Error("No contacts found");
    }
    renderContactsv2(foundContacts);
    // return foundContacts;
  }
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

function deleteDataContact(event) {
  console.log("🚀 ~ deleteDataContact ~ event:", event);
  // const contactToDelete = contacts.find((contact) => contact.id === id);

  // if (!contactToDelete) {
  //   throw Error("Data not found");
  // }

  // const newContacts = contacts.filter((contact) => contact.id !== id);

  // saveContactsToLocalStorage(newContacts);
  // alert(`Contact with name ${contactToDelete.fullName} has been delete`);
  // renderContacts();
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

searchInput.addEventListener("keypress", (event) => searchContacts(event));

deleteContactButtons.forEach((button) => {
  button.addEventListener("click", () => {
    console.log("🚀 ~ button:", button);
  });
});
