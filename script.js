const storageContacts = [
  {
    id: 1,
    firstName: "John",
    lastName: "Doe",
    fullName: "John Doe",
    nickname: "Johnny",
    photoUrl: "https://img.daisyui.com/images/profile/demo/2@94.webp",
    birthday: new Date("1990-01-01"),
    groups: ["Friends", "Work"],
    workProfile: {
      company: "Google",
      jobTitle: "Backend Engineer",
      department: "Engineering",
      website: "https://google.com",
    },
    emails: [
      { type: "work", address: "john@example.com" },
      { type: "personal", address: "john@gmail.com" },
    ],
    phones: [
      { type: "mobile", number: "1234567890" },
      { type: "work", number: "0987654321" },
    ],
    locations: [
      {
        type: "work",
        street: "123 Main St",
        addressLines: ["123 Main St", "Suite 400"],
        city: "New York",
        postalCode: "10001",
        country: "United States",
      },
    ],
    socialProfiles: [
      { type: "LinkedIn", url: "https://linkedin.com/in/johndoe" },
      { type: "Twitter", url: "https://twitter.com/johndoe" },
    ],
    notes: "John is a software engineer at Google",
  },
  {
    id: 2,
    firstName: "Jane",
    lastName: "Smith",
    fullName: "Jane Smith",
    nickname: "Janie",
    photoUrl: "https://img.daisyui.com/images/profile/demo/3@94.webp",
    birthday: new Date("1988-05-15"),
    groups: ["Work"],
    workProfile: {
      company: "Apple",
      jobTitle: "Frontend Engineer",
      department: "Development",
      website: "https://apple.com",
    },
    emails: [
      { type: "work", address: "jane@example.com" },
      { type: "personal", address: "jane@gmail.com" },
    ],
    phones: [
      { type: "mobile", number: "2345678901" },
      { type: "work", number: "0987654321" },
    ],
    locations: [
      {
        type: "work",
        street: "456 Main St",
        addressLines: ["456 Main St"],
        city: "Los Angeles",
        postalCode: "90001",
        country: "United States",
      },
    ],
    socialProfiles: [
      { type: "LinkedIn", url: "https://linkedin.com/in/janesmith" },
    ],
    notes: "Jane is a software engineer at Apple",
  },
  {
    id: 3,
    firstName: "Mike",
    lastName: "Johnson",
    fullName: "Mike Johnson",
    nickname: "MJ",
    photoUrl: "/images/unknown.jpg",
    birthday: new Date("1985-07-20"),
    groups: ["Work"],
    workProfile: {
      company: "Microsoft",
      jobTitle: "Mobile Engineer",
      department: "Product Development",
      website: "https://microsoft.com",
    },
    emails: [
      { type: "work", address: "mike@example.com" },
      { type: "personal", address: "mike@gmail.com" },
    ],
    phones: [
      { type: "mobile", number: "3456789012" },
      { type: "work", number: "0987654321" },
    ],
    locations: [
      {
        type: "work",
        street: "789 Main St",
        addressLines: ["789 Main St"],
        city: "Chicago",
        postalCode: "60001",
        country: "United States",
      },
    ],
    socialProfiles: [
      { type: "LinkedIn", url: "https://linkedin.com/in/mikejohnson" },
    ],
    notes: "Mike is a software engineer at Microsoft",
  },
  {
    id: 4,
    firstName: "Sarah",
    lastName: "Williams",
    fullName: "Sarah Williams",
    nickname: "Sara",
    photoUrl: "https://img.daisyui.com/images/profile/demo/4@94.webp",
    birthday: new Date("1992-09-10"),
    groups: ["Work"],
    workProfile: {
      company: "Amazon",
      jobTitle: "Software Engineer",
      department: "Cloud Services",
      website: "https://amazon.com",
    },
    emails: [
      { type: "work", address: "sarah@example.com" },
      { type: "personal", address: "sarah@gmail.com" },
    ],
    phones: [
      { type: "mobile", number: "4567890123" },
      { type: "work", number: "0987654321" },
    ],
    locations: [
      {
        type: "work",
        street: "101 Main St",
        addressLines: ["101 Main St"],
        city: "Houston",
        postalCode: "77001",
        country: "United States",
      },
    ],
    socialProfiles: [
      { type: "LinkedIn", url: "https://linkedin.com/in/sarahwilliams" },
    ],
    notes: "Sarah is a software engineer at Amazon",
  },
  {
    id: 5,
    firstName: "David",
    lastName: "Brown",
    fullName: "David Brown",
    nickname: "Dave",
    photoUrl: "/images/unknown.jpg",
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
  },
];

const allContactList = document.getElementById("all-contact-list");
const searchInput = document.getElementById("search-input");
const viewContactButton = document.getElementById("view-contact");
const editContactButton = document.getElementById("edit-contact");

function renderContacts(originalContactsData) {
  const query = new URLSearchParams(window.location.search).get("q");

  const filteredContacts = !query
    ? originalContactsData
    : originalContactsData.filter((contact) =>
        contact.fullName.toLowerCase().includes(query.toLowerCase())
      );

  searchInput.value = query || "";
  allContactList.innerHTML = filteredContacts
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
                  <a href="./contact/" id="view-contact" class="btn btn-ghost btn-xs">view</a>
                  <button id="edit-contact" class="btn btn-ghost btn-xs">edit</button>
                  <button id="delete-contact" onclick="deleteDataContact(${
                    contact.id
                  })" class="btn btn-ghost btn-xs">delete</button>
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

    if (storedContacts === null) {
      saveContactsToLocalStorage(storageContacts);
      return storageContacts;
    }

    const parsedUsers = JSON.parse(storedContacts);
    return parsedUsers;
  } catch (error) {
    throw Error(error);
  }
}

function searchContacts(event) {
  event.preventDefault();
  const keyword = event.target.value;
  const foundContacts = contacts.filter((contact) =>
    contact.fullName.toLowerCase().includes(keyword.toLowerCase())
  );
  if (foundContacts.length <= 0) {
    throw Error("No contacts found");
  }
  renderContacts(foundContacts);
  // return foundContacts;
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
  const contactData = getContactsFromLocalStorage();
  const contactToDelete = contactData.find((contact) => contact.id === id);
  if (!contactToDelete) {
    throw Error("Data not found");
  }
  const newContacts = contactData.filter((contact) => contact.id !== id);
  saveContactsToLocalStorage(newContacts);
  alert(`Contact with name ${contactToDelete.fullName} has been delete`);
  renderContacts(getContactsFromLocalStorage());
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

renderContacts(getContactsFromLocalStorage());
