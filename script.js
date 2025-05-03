const storageContacts = [
  {
    id: 1,
    firstName: "Budi",
    lastName: "Santoso",
    fullName: "Budi Santoso",
    nickname: "Budi",
    photoUrl: "https://img.daisyui.com/images/profile/demo/2@94.webp",
    birthday: new Date("1990-01-15"),
    groups: ["Teman", "Kerja"],
    workProfile: {
      company: "Tokopedia",
      jobTitle: "Software Engineer",
      department: "Teknologi",
      website: "https://tokopedia.com",
    },
    emails: [
      { type: "work", address: "budi.santoso@tokopedia.com" },
      { type: "personal", address: "budisantoso@gmail.com" },
    ],
    phones: [
      { type: "mobile", number: "+6281234567890" },
      { type: "work", number: "+62021-555-1234" },
    ],
    locations: [
      {
        type: "work",
        street: "Jl. Prof. Dr. Satrio Kav. 11",
        addressLines: ["Tokopedia Tower", "Jl. Prof. Dr. Satrio Kav. 11"],
        city: "Jakarta Selatan",
        postalCode: "12940",
        country: "Indonesia",
      },
      {
        type: "home",
        street: "Jl. Cempaka Putih No. 10",
        addressLines: ["RT 05 RW 02"],
        city: "Jakarta Pusat",
        postalCode: "10510",
        country: "Indonesia",
      },
    ],
    socialProfiles: [
      { type: "LinkedIn", url: "https://linkedin.com/in/budisantoso" },
      { type: "Instagram", url: "https://instagram.com/budisans" },
    ],
    notes: "Budi adalah seorang software engineer di Tokopedia, teman kuliah.",
  },
  {
    id: 2,
    firstName: "Siti",
    lastName: "Aminah",
    fullName: "Siti Aminah",
    nickname: "Siti",
    photoUrl: "https://img.daisyui.com/images/profile/demo/3@94.webp",
    birthday: new Date("1988-05-20"),
    groups: ["Kerja"],
    workProfile: {
      company: "Gojek",
      jobTitle: "Product Manager",
      department: "Produk",
      website: "https://gojek.com",
    },
    emails: [
      { type: "work", address: "siti.aminah@gojek.com" },
      { type: "personal", address: "sitiaminah88@yahoo.com" },
    ],
    phones: [
      { type: "mobile", number: "+6285712345678" },
      { type: "work", number: "+62021-2754-3333" },
    ],
    locations: [
      {
        type: "work",
        street: "Pasaraya Blok M Gedung B Lt. 6",
        addressLines: ["Gojek HQ", "Jl. Iskandarsyah II No.7"],
        city: "Jakarta Selatan",
        postalCode: "12160",
        country: "Indonesia",
      },
    ],
    socialProfiles: [
      { type: "LinkedIn", url: "https://linkedin.com/in/sitiaminah" },
    ],
    notes: "Siti, Product Manager di Gojek.",
  },
  {
    id: 3,
    firstName: "Agus",
    lastName: "Wijaya",
    fullName: "Agus Wijaya",
    nickname: "Agus",
    photoUrl: "/images/unknown.jpg",
    birthday: new Date("1985-07-25"),
    groups: ["Kerja", "Komunitas Developer"],
    workProfile: {
      company: "Bank Mandiri",
      jobTitle: "IT Specialist",
      department: "Teknologi Informasi",
      website: "https://bankmandiri.co.id",
    },
    emails: [
      { type: "work", address: "agus.wijaya@bankmandiri.co.id" },
      { type: "personal", address: "agus_wjy@gmail.com" },
    ],
    phones: [{ type: "mobile", number: "+6287898765432" }],
    locations: [
      {
        type: "work",
        street: "Jl. Jenderal Gatot Subroto Kav. 36-38",
        addressLines: ["Plaza Mandiri"],
        city: "Jakarta Selatan",
        postalCode: "12190",
        country: "Indonesia",
      },
      {
        type: "home",
        street: "Perumahan Griya Asri Blok C2 No. 5",
        addressLines: [],
        city: "Bekasi",
        postalCode: "17145",
        country: "Indonesia",
      },
    ],
    socialProfiles: [
      { type: "LinkedIn", url: "https://linkedin.com/in/aguswijaya" },
    ],
    notes: "Agus, Spesialis IT di Bank Mandiri.",
  },
  {
    id: 4,
    firstName: "Dewi",
    lastName: "Lestari",
    fullName: "Dewi Lestari",
    nickname: "Dewi",
    photoUrl: "https://img.daisyui.com/images/profile/demo/4@94.webp",
    birthday: new Date("1992-09-10"),
    groups: ["Teman"],
    workProfile: {
      company: "Unilever Indonesia",
      jobTitle: "Marketing Executive",
      department: "Pemasaran",
      website: "https://www.unilever.co.id",
    },
    emails: [
      { type: "work", address: "dewi.lestari@unilever.com" },
      { type: "personal", address: "dewilestari92@gmail.com" },
    ],
    phones: [{ type: "mobile", number: "+6281311223344" }],
    locations: [
      {
        type: "work",
        street: "Jl. BSD Boulevard Barat Green Office Park Kav. 3",
        addressLines: ["Grha Unilever"],
        city: "Tangerang",
        postalCode: "15345",
        country: "Indonesia",
      },
    ],
    socialProfiles: [
      { type: "LinkedIn", url: "https://linkedin.com/in/dewilestari" },
      { type: "Instagram", url: "https://instagram.com/dewilestar1" },
    ],
    notes: "Dewi, teman SMA, sekarang di Unilever.",
  },
  {
    id: 5,
    firstName: "Eko",
    lastName: "Prasetyo",
    fullName: "Eko Prasetyo",
    nickname: "Eko",
    photoUrl: "/images/unknown.jpg",
    birthday: new Date("1987-11-30"),
    groups: ["Kerja", "Teman Kuliah"],
    workProfile: {
      company: "Telkom Indonesia",
      jobTitle: "Network Engineer",
      department: "Network Operations",
      website: "https://www.telkom.co.id",
    },
    emails: [
      { type: "work", address: "eko.prasetyo@telkom.co.id" },
      { type: "personal", address: "ekopras87@gmail.com" },
    ],
    phones: [
      { type: "mobile", number: "+6281199887766" },
      { type: "work", number: "+62022-452-1510" },
    ],
    locations: [
      {
        type: "work",
        street: "Jl. Japati No. 1",
        addressLines: ["Graha Merah Putih"],
        city: "Bandung",
        postalCode: "40133",
        country: "Indonesia",
      },
      {
        type: "home",
        street: "Jl. Gegerkalong Hilir No. 112",
        addressLines: [],
        city: "Bandung",
        postalCode: "40152",
        country: "Indonesia",
      },
    ],
    socialProfiles: [
      { type: "LinkedIn", url: "https://linkedin.com/in/ekoprasetyo" },
    ],
    notes: "Eko, teman kuliah, sekarang network engineer di Telkom Bandung.",
  },
];

const allContactList = document.getElementById("all-contact-list");
const searchInput = document.getElementById("search-input");
const viewContactButton = document.getElementById("view-contact");
const editContactButton = document.getElementById("edit-contact");

function initializeDataStorage() {
  const data = getContactsFromLocalStorage();
  if (data.length <= 0) {
    saveContactsToLocalStorage(storageContacts);
  }
}

function renderContacts() {
  const query = new URLSearchParams(window.location.search).get("q");

  const filteredContacts = searchContactsByKeyword(query);

  console.table(filteredContacts);
  console.log("cakra");

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
                        contact.locations[0]?.country
                      }</div>
                    </div>
                  </div>
                </td>
                <td>
                ${
                  !contact.workProfile.company && !contact.workProfile.jobTitle
                    ? ``
                    : `
                  ${contact.workProfile?.company}
                  <br />
                  <span class="badge badge-ghost badge-sm"
                    >${contact.workProfile?.jobTitle}</span
                  >
                </td>
                `
                }
                  
                <td>${contact.phones[0].number}</td>
                <td>${contact.emails[0].address}</td>
                <td>
                  <ul class="flex gap-2">
                    ${
                      !contact.groups
                        ? ""
                        : contact.groups
                            .map((group) => {
                              return `<li>
                        <div class="badge badge-success">${group}</div>
                        `;
                            })
                            .join("")
                    }
                  </ul>
                </td>
                <th>
                  <a href="./contact/?id=${
                    contact.id
                  }" id="view-contact" class="btn btn-ghost btn-xs">view</a>
                  <a href="contact/edit-contact/?id=${
                    contact.id
                  }" class="btn btn-ghost btn-xs">edit</a>
                  <button id="delete-contact" onclick="deleteDataContact(${
                    contact.id
                  })" class="btn btn-ghost btn-xs">delete</button>
                </th>
              </tr>`;
    })
    .join("");
}

initializeDataStorage();
renderContacts();
