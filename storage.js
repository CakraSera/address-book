const STORAGE_KEY = "contacts";

function saveContactsToLocalStorage(contactsData) {
  try {
    const serializedContacts = JSON.stringify(contactsData);
    localStorage.setItem("contacts", serializedContacts);
  } catch (error) {
    throw Error(error);
  }
}

function getContactsFromLocalStorage() {
  const storedContacts = localStorage.getItem(STORAGE_KEY);
  try {
    const parsedUsers = JSON.parse(storedContacts);
    return Array.isArray(parsedUsers) ? parsedUsers : [];
  } catch (error) {
    throw Error(error);
  }
}

function searchContactsByKeyword(keyword) {
  const originalContactsData = getContactsFromLocalStorage();
  const foundContacts = !keyword
    ? originalContactsData
    : originalContactsData.filter((contact) =>
        contact.fullName.toLowerCase().includes(keyword.toLowerCase())
      );
  if (foundContacts.length <= 0) {
    throw Error("No contacts found");
  }
  return foundContacts;
}

function getContactById(id) {
  const contacts = getContactsFromLocalStorage();
  const foundContact = contacts.find((contact) => contact.id === id);
  if (!foundContact) {
    throw Error("Data not found");
  }
  return foundContact;
}

function addNewContact(contact) {
  const contacts = getContactsFromLocalStorage();

  if (!contact) {
    throw Error("Error: Data contact is required");
  }
  const newId = contacts.length > 0 ? contacts[contacts.length - 1].id + 1 : 1;

  const newContact = {
    ...contact,
    id: newId,
  };

  const newListContact = [...contacts, newContact];
  console.log("🚀 ~ addNewContact ~ newListContact:", newListContact);

  saveContactsToLocalStorage(newListContact);
}

function deleteDataContact(id) {
  const contactData = getContactsFromLocalStorage();
  const contactToDelete = contactData.find(
    (contact) => contact.id === Number(id)
  );
  if (!contactToDelete) {
    throw Error("Data not found");
  }
  const newContacts = contactData.filter((contact) => contact.id !== id);
  saveContactsToLocalStorage(newContacts);
  Swal.fire({
    title: "Success!",
    text: `Contact with name ${contactToDelete.fullName} has been delete`,
    icon: "success",
    confirmButtonText: "Ok",
    didClose: () => {
      window.location.reload();
    },
  });
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
