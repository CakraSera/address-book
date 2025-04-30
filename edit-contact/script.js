const editForm = document.getElementById("edit-form");
const contactId = new URLSearchParams(window.location.search).get("id");

function renderEditFormContact() {
  const contact = getContactById(Number(contactId));
  editForm.innerHTML = `            
            <div class="form-control">
              <label class="label">
                <span class="label-text">Name</span>
              </label>
              <input
                name="fullName"
                value="${contact.fullName}"
                type="text"
                placeholder="Enter name"
                class="input input-bordered" />
            </div>

            <div class="form-control">
              <label class="label">
                <span class="label-text">Phone</span>
              </label>
              <input
                name="phoneNumber"
                value="${contact.phones[0].number}"
                type="tel"
                placeholder="Enter phone number"
                class="input input-bordered" />
            </div>

            <div class="form-control">
              <label class="label">
                <span class="label-text">Email</span>
              </label>
              <input
                name="email"
                value="${contact.emails[0].address}"
                type="email"
                placeholder="Enter email"
                class="input input-bordered" />
            </div>
            <div class="form-control mt-6">
              <button type="submit" class="btn btn-primary">
                Save Changes
              </button>
            </div>
            <div class="form-control mt-2">
              <a href="../index.html" class="btn btn-outline">Cancel</a>
            </div>`;
}

editForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(editForm);
  const contactForm = {
    fullName: String(formData.get("fullName")),
    phones: [{ type: "personal", number: String(formData.get("phoneNumber")) }],
    emails: [{ type: "work", address: String(formData.get("email")) }],
  };

  editDataContact(contactId, contactForm);

  alert("Succesfully edit contact");
  window.location.href = "../index.html";
});

renderEditFormContact();
