/* =====================================================
   MOMENT CONTINENTAL - ADMIN DASHBOARD
===================================================== */


/* =====================================================
   GET ELEMENTS
===================================================== */

const sidebar = document.getElementById("sidebar");
const menuBtn = document.getElementById("menuBtn");

const navItems = document.querySelectorAll(".nav-item[data-page]");
const pages = document.querySelectorAll(".page");

const pageTitle = document.getElementById("pageTitle");

const logoutBtn = document.getElementById("logoutBtn");


/* =====================================================
   ADMIN INFORMATION
===================================================== */

/*
   This gets the admin name from the login page.

   Your login page should save it like:

   localStorage.setItem("adminName", adminName);
*/

const savedAdminName =
    localStorage.getItem("adminName") || "Admin";

const adminDisplayName =
    document.getElementById("adminDisplayName");

const welcomeAdminName =
    document.getElementById("welcomeAdminName");

const adminAvatar =
    document.getElementById("adminAvatar");

const settingsAdminName =
    document.getElementById("settingsAdminName");


/* DISPLAY ADMIN NAME */

if (adminDisplayName) {
    adminDisplayName.textContent = savedAdminName;
}

if (welcomeAdminName) {
    welcomeAdminName.textContent = savedAdminName;
}

if (settingsAdminName) {
    settingsAdminName.value = savedAdminName;
}


/* ADMIN AVATAR FIRST LETTER */

if (adminAvatar && savedAdminName) {
    adminAvatar.textContent =
        savedAdminName.charAt(0).toUpperCase();
}


/* =====================================================
   SIDEBAR MOBILE MENU
===================================================== */

if (menuBtn) {

    menuBtn.addEventListener("click", function () {

        sidebar.classList.toggle("show");

    });

}


/* =====================================================
   SHOW PAGE FUNCTION
===================================================== */

function showPage(pageName) {


    /* REMOVE ACTIVE PAGE */

    pages.forEach(function (page) {

        page.classList.remove("active-page");

    });


    /* SHOW SELECTED PAGE */

    const selectedPage =
        document.getElementById(pageName);

    if (selectedPage) {

        selectedPage.classList.add("active-page");

    }


    /* UPDATE SIDEBAR */

    navItems.forEach(function (item) {

        item.classList.remove("active");

        if (item.dataset.page === pageName) {

            item.classList.add("active");

        }

    });


    /* UPDATE PAGE TITLE */

    if (pageTitle) {

        const pageTitles = {

            overview: "Overview",

            reservations: "Reservations",

            customers: "Customers",

            settings: "Settings"

        };


        pageTitle.textContent =
            pageTitles[pageName] || "Admin Dashboard";

    }


    /* CLOSE MOBILE SIDEBAR */

    if (window.innerWidth <= 800) {

        sidebar.classList.remove("show");

    }


    /* GO TO TOP */

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

}


/* =====================================================
   SIDEBAR NAVIGATION
===================================================== */

navItems.forEach(function (item) {

    item.addEventListener("click", function () {

        const pageName =
            this.dataset.page;

        showPage(pageName);

    });

});


/* =====================================================
   RESERVATION MODAL
===================================================== */

const reservationModal =
    document.getElementById("reservationModal");


function openReservationModal() {

    if (reservationModal) {

        reservationModal.classList.add("show");

    }

}


function closeReservationModal() {

    if (reservationModal) {

        reservationModal.classList.remove("show");

    }

}


/* CLOSE MODAL WHEN CLICKING OUTSIDE */

if (reservationModal) {

    reservationModal.addEventListener(
        "click",
        function (event) {

            if (event.target === reservationModal) {

                closeReservationModal();

            }

        }
    );

}


/* =====================================================
   CREATE NEW RESERVATION
===================================================== */

const reservationForm =
    document.getElementById("reservationForm");


if (reservationForm) {

    reservationForm.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();


            /* GET FORM VALUES */

            const customerName =
                document.getElementById("customerName").value;

            const customerEmail =
                document.getElementById("customerEmail").value;

            const customerPhone =
                document.getElementById("customerPhone").value;

            const service =
                document.getElementById("service").value;

            const travelDate =
                document.getElementById("travelDate").value;

            const numberOfPeople =
                document.getElementById("numberOfPeople").value;


            /* CHECK REQUIRED VALUES */

            if (
                !customerName ||
                !customerEmail ||
                !customerPhone ||
                !service ||
                !travelDate ||
                !numberOfPeople
            ) {

                alert(
                    "Please fill in all required fields."
                );

                return;

            }


            /* FORMAT DATE */

            const formattedDate =
                new Date(travelDate)
                    .toLocaleDateString(
                        "en-GB",
                        {

                            day: "2-digit",

                            month: "short",

                            year: "numeric"

                        }
                    );


            /* ADD TO RESERVATION TABLE */

            const reservationTable =
                document.getElementById("reservationTable");


            if (reservationTable) {

                const newRow =
                    document.createElement("tr");


                newRow.innerHTML = `

                    <td>
                        ${customerName}
                    </td>

                    <td>
                        ${customerPhone}
                    </td>

                    <td>
                        ${service}
                    </td>

                    <td>
                        ${formattedDate}
                    </td>

                    <td>
                        ${numberOfPeople}
                    </td>

                    <td>

                        <span class="status pending">
                            Pending
                        </span>

                    </td>

                    <td>

                        <button
                            class="action-btn"
                            onclick="viewReservation('${customerName}')"
                        >

                            <i class="fas fa-eye"></i>

                        </button>

                    </td>

                `;


                reservationTable.prepend(newRow);

            }


            /* ADD CUSTOMER IF NOT ALREADY THERE */

            addCustomer(
                customerName,
                customerEmail,
                customerPhone
            );


            /* UPDATE STATISTICS */

            updateDashboardStats();


            /* CLOSE MODAL */

            closeReservationModal();


            /* RESET FORM */

            reservationForm.reset();

            document.getElementById(
                "numberOfPeople"
            ).value = 1;


            alert(
                "Reservation created successfully! 🎉"
            );

        }
    );

}


/* =====================================================
   ADD CUSTOMER
===================================================== */

function addCustomer(
    name,
    email,
    phone
) {

    const customerTable =
        document.getElementById("customerTable");

    if (!customerTable) return;


    /* CHECK IF CUSTOMER ALREADY EXISTS */

    const rows =
        customerTable.querySelectorAll("tr");


    let customerExists = false;


    rows.forEach(function (row) {

        const emailCell =
            row.children[1];

        if (
            emailCell &&
            emailCell.textContent
                .trim()
                .toLowerCase() ===
            email.toLowerCase()
        ) {

            customerExists = true;

        }

    });


    /* STOP IF CUSTOMER EXISTS */

    if (customerExists) return;


    /* CREATE NEW CUSTOMER */

    const newCustomer =
        document.createElement("tr");


    const today =
        new Date();


    const joinedDate =
        today.toLocaleDateString(
            "en-GB",
            {

                month: "short",

                year: "numeric"

            }
        );


    newCustomer.innerHTML = `

        <td>
            <strong>
                ${name}
            </strong>
        </td>

        <td>
            ${email}
        </td>

        <td>
            ${phone}
        </td>

        <td>
            1
        </td>

        <td>
            ${joinedDate}
        </td>

    `;


    customerTable.prepend(newCustomer);

}


/* =====================================================
   UPDATE DASHBOARD STATISTICS
===================================================== */

function updateDashboardStats() {


    const reservationRows =
        document.querySelectorAll(
            "#reservationTable tr"
        );


    const customerRows =
        document.querySelectorAll(
            "#customerTable tr"
        );


    let pendingCount = 0;
    let approvedCount = 0;


    reservationRows.forEach(function (row) {

        const status =
            row.querySelector(".status");


        if (!status) return;


        if (
            status.classList.contains(
                "pending"
            )
        ) {

            pendingCount++;

        }


        if (
            status.classList.contains(
                "approved"
            )
        ) {

            approvedCount++;

        }

    });


    /* UPDATE TOTALS */

    const totalReservations =
        document.getElementById(
            "totalReservations"
        );

    const totalCustomers =
        document.getElementById(
            "totalCustomers"
        );

    const pendingReservations =
        document.getElementById(
            "pendingReservations"
        );

    const approvedReservations =
        document.getElementById(
            "approvedReservations"
        );


    if (totalReservations) {

        totalReservations.textContent =
            reservationRows.length;

    }


    if (totalCustomers) {

        totalCustomers.textContent =
            customerRows.length;

    }


    if (pendingReservations) {

        pendingReservations.textContent =
            pendingCount;

    }


    if (approvedReservations) {

        approvedReservations.textContent =
            approvedCount;

    }

}


/* =====================================================
   RESERVATION SEARCH
===================================================== */

const reservationSearch =
    document.getElementById("reservationSearch");

const reservationFilter =
    document.getElementById("reservationFilter");


function filterReservations() {


    const searchValue =
        reservationSearch
            ? reservationSearch.value
                .toLowerCase()
                .trim()
            : "";


    const filterValue =
        reservationFilter
            ? reservationFilter.value
            : "all";


    const rows =
        document.querySelectorAll(
            "#reservationTable tr"
        );


    rows.forEach(function (row) {


        const rowText =
            row.textContent
                .toLowerCase();


        const status =
            row.querySelector(".status");


        let statusName =
            status
                ? status.textContent
                    .trim()
                    .toLowerCase()
                : "";


        const matchesSearch =
            rowText.includes(searchValue);


        const matchesFilter =
            filterValue === "all" ||
            statusName === filterValue;


        if (
            matchesSearch &&
            matchesFilter
        ) {

            row.style.display = "";

        } else {

            row.style.display = "none";

        }

    });

}


if (reservationSearch) {

    reservationSearch.addEventListener(
        "input",
        filterReservations
    );

}


if (reservationFilter) {

    reservationFilter.addEventListener(
        "change",
        filterReservations
    );

}


/* =====================================================
   CUSTOMER SEARCH
===================================================== */

const customerSearch =
    document.getElementById("customerSearch");


if (customerSearch) {

    customerSearch.addEventListener(
        "input",
        function () {


            const searchValue =
                this.value
                    .toLowerCase()
                    .trim();


            const rows =
                document.querySelectorAll(
                    "#customerTable tr"
                );


            rows.forEach(function (row) {


                const rowText =
                    row.textContent
                        .toLowerCase();


                if (
                    rowText.includes(
                        searchValue
                    )
                ) {

                    row.style.display = "";

                } else {

                    row.style.display = "none";

                }

            });

        }
    );

}


/* =====================================================
   VIEW RESERVATION
===================================================== */

function viewReservation(customerName) {

    const rows =
        document.querySelectorAll(
            "#reservationTable tr"
        );


    let reservationInfo = "";


    rows.forEach(function (row) {

        const firstCell =
            row.children[0];


        if (
            firstCell &&
            firstCell.textContent
                .trim() === customerName
        ) {

            reservationInfo = `

Customer: ${row.children[0].textContent.trim()}
Phone: ${row.children[1].textContent.trim()}
Service: ${row.children[2].textContent.trim()}
Travel Date: ${row.children[3].textContent.trim()}
Number of People: ${row.children[4].textContent.trim()}
Status: ${row.children[5].textContent.trim()}

            `;

        }

    });


    if (reservationInfo) {

        alert(
            "RESERVATION DETAILS\n" +
            reservationInfo
        );

    } else {

        alert(
            "Reservation not found."
        );

    }

}


/* =====================================================
   SAVE SETTINGS
===================================================== */

const saveSettingsBtn =
    document.getElementById("saveSettingsBtn");


if (saveSettingsBtn) {

    saveSettingsBtn.addEventListener(
        "click",
        function () {


            const newAdminName =
                document
                    .getElementById(
                        "settingsAdminName"
                    )
                    .value
                    .trim();


            if (!newAdminName) {

                alert(
                    "Admin name cannot be empty."
                );

                return;

            }


            /* SAVE NEW ADMIN NAME */

            localStorage.setItem(
                "adminName",
                newAdminName
            );


            /* UPDATE DASHBOARD */

            if (adminDisplayName) {

                adminDisplayName.textContent =
                    newAdminName;

            }


            if (welcomeAdminName) {

                welcomeAdminName.textContent =
                    newAdminName;

            }


            if (adminAvatar) {

                adminAvatar.textContent =
                    newAdminName
                        .charAt(0)
                        .toUpperCase();

            }


            alert(
                "Settings saved successfully! ✅"
            );

        }
    );

}


/* =====================================================
   LOGOUT
===================================================== */

if (logoutBtn) {

    logoutBtn.addEventListener(
        "click",
        function () {


            const confirmLogout =
                confirm(
                    "Are you sure you want to log out?"
                );


            if (confirmLogout) {


                /*
                   Remove admin session.
                */

                localStorage.removeItem(
                    "adminName"
                );


                /*
                   Redirect to login page.
                */

                window.location.href =
                    "login.html";

            }

        }
    );

}


/* =====================================================
   INITIALIZE DASHBOARD
===================================================== */

document.addEventListener(
    "DOMContentLoaded",
    function () {


        updateDashboardStats();


        /*
           Protect admin page.

           If you save admin login status
           in your login page later,
           you can activate this section.
        */

    }
);