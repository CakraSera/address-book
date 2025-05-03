const editForm = document.getElementById("edit-form");
const contactId = new URLSearchParams(window.location.search).get("id");

function renderEditFormContact() {
  const contact = getContactById(Number(contactId));
  editForm.innerHTML = `            
            <div class="mb-4 w-full max-w-xs">
                <label for="fullname" class="label">Fullname</label>
                <div class="input validator">
                  <svg
                    class="h-[1em] opacity-50"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24">
                    <g
                      stroke-linejoin="round"
                      stroke-linecap="round"
                      stroke-width="2.5"
                      fill="none"
                      stroke="currentColor">
                      <path
                        d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                      <circle cx="12" cy="7" r="4"></circle>
                    </g>
                  </svg>
                  <input
                    value="${contact.fullName}"
                    name="fullname"
                    type="text"
                    required
                    placeholder="Input your fullname"
                    minlength="3"
                    maxlength="30" />
                </div>
              </div>
              <div class="mb-4 w-full max-w-xs">
                <label for="company" class="label">Company</label>
                <div class="input validator">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-building h-[1em] opacity-50"
                    viewBox="0 0 16 16">
                    <path
                      d="M4 2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm3.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zM4 5.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zM7.5 5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zm2.5.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zM4.5 8a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zm2.5.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm3.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5z" />
                    <path
                      d="M2 1a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1zm11 0H3v14h3v-2.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5V15h3z" />
                  </svg>
                  <input
                    value="${contact.workProfile.company}"
                    name="company"
                    type="text"
                    placeholder="Input your company"
                    minlength="3"
                    maxlength="30" />
                </div>
              </div>
              <div class="mb-4 w-full max-w-xs">
                <label for="job-title" class="label">Job Title</label>
                <div class="input validator">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-briefcase h-[1em] opacity-50"
                    viewBox="0 0 16 16">
                    <path
                      d="M6.5 1A1.5 1.5 0 0 0 5 2.5V3H1.5A1.5 1.5 0 0 0 0 4.5v8A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-8A1.5 1.5 0 0 0 14.5 3H11v-.5A1.5 1.5 0 0 0 9.5 1zm0 1h3a.5.5 0 0 1 .5.5V3H6v-.5a.5.5 0 0 1 .5-.5m1.886 6.914L15 7.151V12.5a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5V7.15l6.614 1.764a1.5 1.5 0 0 0 .772 0M1.5 4h13a.5.5 0 0 1 .5.5v1.616L8.129 7.948a.5.5 0 0 1-.258 0L1 6.116V4.5a.5.5 0 0 1 .5-.5" />
                  </svg>
                  <input
                    value="${contact.workProfile.jobTitle}"
                    name="job-title"
                    type="text"
                    placeholder="Input you job title"
                    minlength="3"
                    maxlength="30" />
                </div>
              </div>
              <div class="mb-4 w-full max-w-xs">
                <label for="phone-number" class="label">Phone Number</label>
                <div class="input validator">
                  <svg
                    class="h-[1em] opacity-50"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16">
                    <g fill="none">
                      <path
                        d="M7.25 11.5C6.83579 11.5 6.5 11.8358 6.5 12.25C6.5 12.6642 6.83579 13 7.25 13H8.75C9.16421 13 9.5 12.6642 9.5 12.25C9.5 11.8358 9.16421 11.5 8.75 11.5H7.25Z"
                        fill="currentColor"></path>
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M6 1C4.61929 1 3.5 2.11929 3.5 3.5V12.5C3.5 13.8807 4.61929 15 6 15H10C11.3807 15 12.5 13.8807 12.5 12.5V3.5C12.5 2.11929 11.3807 1 10 1H6ZM10 2.5H9.5V3C9.5 3.27614 9.27614 3.5 9 3.5H7C6.72386 3.5 6.5 3.27614 6.5 3V2.5H6C5.44771 2.5 5 2.94772 5 3.5V12.5C5 13.0523 5.44772 13.5 6 13.5H10C10.5523 13.5 11 13.0523 11 12.5V3.5C11 2.94772 10.5523 2.5 10 2.5Z"
                        fill="currentColor"></path>
                    </g>
                  </svg>
                  <span>+</span>
                  <input
                    value="${contact.phones[0].number.replace("+", "")}"
                    name="phone-number"
                    type="tel"
                    class="tabular-nums"
                    required
                    placeholder="Phone" />
                </div>
              </div>

              <div class="mb-4 w-full max-w-xs">
                <label for="email" class="label">Email</label>
                <div class="input validator">
                  <svg
                    class="h-[1em] opacity-50"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24">
                    <g
                      stroke-linejoin="round"
                      stroke-linecap="round"
                      stroke-width="2.5"
                      fill="none"
                      stroke="currentColor">
                      <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                      <path
                        d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                    </g>
                  </svg>
                  <input
                    value="${contact.emails[0].address}"
                    name="email"
                    type="email"
                    placeholder="mail@site.com" />
                </div>
                <div class="validator-hint hidden">
                  Enter valid email address
                </div>
              </div>

              <div class="mb-4 w-full max-w-xs">
                <label class="label">
                  <span class="label-text">Address</span>
                </label>
                <textarea
                  rows="3"
                  name="address"
                  class="textarea"
                  placeholder="Input your address">${
                    contact.locations[0].street
                  }</textarea>
              </div>

              <div class="mb-4 w-full max-w-xs">
                <label class="label">
                  <span class="label-text">Country</span>
                </label>
                <input
                  value="${contact.locations[0].country}"
                  name="country"
                  type="text"
                  class="input"
                  placeholder="Which countries do you live"
                  list="countries" />
                <datalist id="countries">
                  <option value="Indonesia">Indonesia</option>
                  <option value="Japanese">Japanese</option>
                  <option value="India">India</option>
                  <option value="America">America</option>
                  <option value="China">China</option>
                </datalist>
              </div>
            <div class="flex items-center gap-2">
              <div class="form-control">
                <button type="submit" class="btn btn-primary">
                  Save Changes
                </button>
              </div>
              <div class="form-control">
                <a href="/index.html" class="btn btn-outline">Cancel</a>
              </div>
            </div>
            `;
}

editForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(editForm);
  console.log("🚀 ~ editForm.addEventListener ~ formData:", formData);
  const contactForm = {
    fullName: String(formData.get("fullname")),
    emails: [{ type: "work", address: String(formData.get("email")) }],
    workProfile: {
      company: String(formData.get("company")),
      jobTitle: String(formData.get("job-title")),
    },
    phones: [
      { type: "personal", number: `+${Number(formData.get("phone-number"))}` },
    ],
    locations: [
      {
        street: String(formData.get("address")),
        country: String(formData.get("country")),
      },
    ],
  };

  editDataContact(contactId, contactForm);

  Swal.fire({
    title: "Success!",
    text: `Contact with name ${contactForm.fullName} has been edited`,
    icon: "success",
    confirmButtonText: "Ok",
    didClose: () => {
      window.location.href = "/index.html";
    },
  });
});

renderEditFormContact();

getCountriesAPIs();
