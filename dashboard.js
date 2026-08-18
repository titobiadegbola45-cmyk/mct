// ===============================
// MOBILE SIDEBAR
// ===============================

const menuBtn = document.getElementById("menuBtn");
const sidebar = document.getElementById("sidebar");

menuBtn.addEventListener("click", () => {
  sidebar.classList.toggle("open");
});


// ===============================
// NAVIGATION
// ===============================

const navItems = document.querySelectorAll(".nav-item[data-page]");

navItems.forEach(item => {

  item.addEventListener("click", () => {

    const page = item.dataset.page;

    showPage(page);

    navItems.forEach(nav => {
      nav.classList.remove("active");
    });

    item.classList.add("active");

    sidebar.classList.remove("open");

  });

});


// ===============================
// SHOW PAGE
// ===============================

function showPage(pageName) {

  const pages = document.querySelectorAll(".page");

  pages.forEach(page => {
    page.classList.remove("active-page");
  });

  const selectedPage = document.getElementById(pageName);

  if (selectedPage) {
    selectedPage.classList.add("active-page");
  }

  const pageTitle = document.getElementById("pageTitle");

  const titles = {
    overview: "Dashboard",
    reservations: "Reservations",
    customers: "Customers",
    packages: "Tour Packages",
    pilgrimage: "Pilgrimage",
    messages: "Messages",
    settings: "Settings"
  };

  pageTitle.textContent = titles[pageName] || "Dashboard";
}


// ===============================
// RESERVATION MODAL
// ===============================

const reservationModal =
  document.getElementById("reservationModal");


function openReservationModal() {

  reservationModal.classList.add("show");

}


function closeReservationModal() {

  reservationModal.classList.remove("show");

}


// Close modal when clicking outside

reservationModal.addEventListener("click", event => {

  if (event.target === reservationModal) {

    closeReservationModal();

  }

});


// ===============================
// RESERVATION FORM
// ===============================

const reservationForm =
  document.getElementById("reservationForm");


reservationForm.addEventListener("submit", event => {

  event.preventDefault();

  const name =
    document.getElementById("customerName").value.trim();

  const email =
    document.getElementById("customerEmail").value.trim();

  const phone =
    document.getElementById("customerPhone").value.trim();

  const service =
    document.getElementById("service").value;

  const travelDate =
    document.getElementById("travelDate").value;

  const people =
    document.getElementById("numberOfPeople").value;

  const message =
    document.getElementById("reservationMessage").value.trim();


  if (
    !name ||
    !email ||
    !phone ||
    !service ||
    !travelDate ||
    !people
  ) {

    alert("Please complete all required fields.");

    return;

  }


  const emailPattern =
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


  if (!emailPattern.test(email)) {

    alert("Please enter a valid email address.");

    return;

  }


  // Temporary frontend storage

  const reservation = {

    name,
    email,
    phone,
    service,
    travelDate,
    people,
    message,
    status: "Pending",
    createdAt: new Date().toISOString()

  };


  console.log("Reservation:", reservation);


  alert(
    "Reservation created successfully!"
  );


  reservationForm.reset();

  closeReservationModal();

});


// ===============================
// VIEW RESERVATION
// ===============================

function viewReservation(customerName) {

  alert(
    "Viewing reservation for " +
    customerName
  );

}


// ===============================
// PACKAGE FUNCTIONS
// ===============================

function addPackage() {

  alert(
    "Package creation will be connected to the backend."
  );

}


function editPackage(packageName) {

  alert(
    "Edit package: " +
    packageName
  );

}


function deletePackage(packageName) {

  const confirmDelete =
    confirm(
      "Are you sure you want to delete " +
      packageName +
      "?"
    );


  if (confirmDelete) {

    alert(
      packageName +
      " would be deleted from the database."
    );

  }

}


// ===============================
// LOGOUT
// ===============================

const logoutBtn =
  document.getElementById("logoutBtn");


logoutBtn.addEventListener("click", () => {

  const confirmLogout =
    confirm(
      "Are you sure you want to logout?"
    );


  if (confirmLogout) {

    // Later we'll connect this
    // to your authentication system.

    window.location.href = "login.html";

  }

});


// ===============================
// SEARCH RESERVATIONS
// ===============================

const reservationSearch =
  document.getElementById("reservationSearch");


if (reservationSearch) {

  reservationSearch.addEventListener("input", () => {

    const search =
      reservationSearch.value.toLowerCase();

    const rows =
      document.querySelectorAll(
        "#reservationTable tr"
      );


    rows.forEach(row => {

      const text =
        row.textContent.toLowerCase();

      row.style.display =
        text.includes(search)
          ? ""
          : "none";

    });

  });

}


// ===============================
// SEARCH CUSTOMERS
// ===============================

const customerSearch =
  document.getElementById("customerSearch");


if (customerSearch) {

  customerSearch.addEventListener("input", () => {

    const search =
      customerSearch.value.toLowerCase();

    const rows =
      document.querySelectorAll(
        "#customerTable tr"
      );


    rows.forEach(row => {

      const text =
        row.textContent.toLowerCase();

      row.style.display =
        text.includes(search)
          ? ""
          : "none";

    });

  });

}


// ===============================
// RESERVATION FILTER
// ===============================

const reservationFilter =
  document.getElementById("reservationFilter");


if (reservationFilter) {

  reservationFilter.addEventListener("change", () => {

    const selected =
      reservationFilter.value.toLowerCase();

    const rows =
      document.querySelectorAll(
        "#reservationTable tr"
      );


    rows.forEach(row => {

      const status =
        row.querySelector(".status");


      if (!status) return;


      const currentStatus =
        status.textContent.trim().toLowerCase();


      if (
        selected === "all" ||
        currentStatus === selected
      ) {

        row.style.display = "";

      } else {

        row.style.display = "none";

      }

    });

  });

}


// ===============================
// INITIAL PAGE
// ===============================

showPage("overview");