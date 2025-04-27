const contactDetails = document.getElementById("contact-details");
function renderContacts() {
  const contactId = new URLSearchParams(window.location.search).get("id");

  const contact = getContactById(Number(contactId));

  contactDetails.innerHTML = `<div class="card bg-base-100 shadow-xl">
          <div class="card-body">
            <div class="flex items-center gap-4">
              <div class="avatar">
                <div class="w-24 rounded-full">
                  <img
                    src="${contact.photoUrl}"
                    alt="Profile"
                  />
                </div>
              </div>
              <div>
                <h2 class="card-title text-2xl">${contact.fullName}</h2>
                <p class="text-gray-500">${contact.workProfile.jobTitle}</p>
              </div>
            </div>

            <div class="divider"></div>

            <div class="space-y-4">
              <div class="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <span>${contact.emails[0].address}</span>
              </div>
              <div class="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <span>+62-${contact.phones[0].number}</span>
              </div>
              <div class="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span>${contact.locations[0].street}, ${contact.locations[0].city}, ${contact.locations[0].country}</span>
              </div>
            </div>

            <div class="card-actions justify-end mt-6">
              <button class="btn btn-primary">Edit Contact</button>
              <button class="btn btn-error">Delete</button>
            </div>
          </div>
        </div>`;
}

renderContacts();
