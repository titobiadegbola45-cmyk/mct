/* =====================================================
   MOMENT CONTINENTAL - CUSTOMER JS
===================================================== */


/* =====================================================
   PAGE NAVIGATION
===================================================== */

const navItems = document.querySelectorAll(".nav-item[data-page]");
const pages = document.querySelectorAll(".page");

const pageTitles = {
    tours: "Tours & Pilgrimage",
    flights: "Flight Ticketing",
    messages: "Messages"
};


function showPage(pageName) {

    pages.forEach(page => {
        page.classList.remove("active-page");
    });

    navItems.forEach(item => {
        item.classList.remove("active");
    });

    const selectedPage = document.getElementById(pageName);
    const selectedNav = document.querySelector(
        `.nav-item[data-page="${pageName}"]`
    );

    if (selectedPage) {
        selectedPage.classList.add("active-page");
    }

    if (selectedNav) {
        selectedNav.classList.add("active");
    }

    const pageTitle = document.getElementById("pageTitle");

    if (pageTitle) {
        pageTitle.textContent = pageTitles[pageName] || "Moment Continental";
    }

    /* Close mobile sidebar */

    document.getElementById("sidebar")?.classList.remove("open");
}


navItems.forEach(item => {

    item.addEventListener("click", () => {

        const pageName = item.dataset.page;

        showPage(pageName);

    });

});


/* =====================================================
   MOBILE MENU
===================================================== */

const menuBtn = document.getElementById("menuBtn");
const sidebar = document.getElementById("sidebar");

menuBtn?.addEventListener("click", () => {

    sidebar.classList.toggle("open");

});


/* =====================================================
   CUSTOMER INFORMATION
===================================================== */

function loadCustomerInfo() {

    /*
       Later the backend will provide this information.

       For now we check localStorage so the page
       can already display a customer's name.
    */

    const customer = JSON.parse(
        localStorage.getItem("customer")
    );

    if (!customer) {
        return;
    }

    const nameElement = document.getElementById("customerName");
    const avatarElement = document.getElementById("customerAvatar");

    if (nameElement && customer.name) {
        nameElement.textContent = customer.name;
    }

    if (avatarElement && customer.name) {
        avatarElement.textContent =
            customer.name.charAt(0).toUpperCase();
    }

}

loadCustomerInfo();


/* =====================================================
   LOGOUT
===================================================== */

document.getElementById("logoutBtn")?.addEventListener(
    "click",
    () => {

        const confirmLogout = confirm(
            "Are you sure you want to logout?"
        );

        if (!confirmLogout) {
            return;
        }

        /*
           Remove customer session information.
           Later this will also be handled by the backend.
        */

        localStorage.removeItem("customer");
        localStorage.removeItem("customerToken");

        window.location.href = "login.html";

    }
);


/* =====================================================
   TOUR RESERVATION
===================================================== */

function bookTour(packageName) {

    alert(
        `You selected:\n\n${packageName}\n\n` +
        `Your reservation request will be handled shortly.`
    );

    /*
       BACKEND CONNECTION WILL GO HERE LATER.

       Example:

       fetch("https://your-backend/api/reservations", {
           method: "POST",
           headers: {
               "Content-Type": "application/json"
           },
           body: JSON.stringify({
               package: packageName
           })
       });
    */

}


/* =====================================================
   FLIGHT TRIP TYPE
===================================================== */

const flightTabs = document.querySelectorAll(".flight-tab");

const returnDateGroup =
    document.getElementById("returnDateGroup");

flightTabs.forEach(tab => {

    tab.addEventListener("click", () => {

        flightTabs.forEach(item => {
            item.classList.remove("active");
        });

        tab.classList.add("active");

        const tripType = tab.dataset.trip;

        if (tripType === "one-way") {

            returnDateGroup.style.display = "block";

            document.getElementById("returnDate").required = false;

        }

        else if (tripType === "round-trip") {

            returnDateGroup.style.display = "block";

            document.getElementById("returnDate").required = true;

        }

        else if (tripType === "multi-city") {

            returnDateGroup.style.display = "none";

            document.getElementById("returnDate").required = false;

        }

    });

});


/* =====================================================
   AIRPORT DATA
===================================================== */

/*
   Temporary airport data for the frontend.

   IMPORTANT:
   This is NOT meant to contain every airport in the world.

   When we start the backend, we'll replace this with
   a proper airport database/API.
*/

const airports = [

    /* Nigeria */

    {
        code: "LOS",
        name: "Murtala Muhammed International Airport",
        city: "Lagos",
        country: "Nigeria"
    },

    {
        code: "ABV",
        name: "Nnamdi Azikiwe International Airport",
        city: "Abuja",
        country: "Nigeria"
    },

    {
        code: "KAN",
        name: "Mallam Aminu Kano International Airport",
        city: "Kano",
        country: "Nigeria"
    },

    {
        code: "PHC",
        name: "Port Harcourt International Airport",
        city: "Port Harcourt",
        country: "Nigeria"
    },

    {
        code: "ENU",
        name: "Akanu Ibiam International Airport",
        city: "Enugu",
        country: "Nigeria"
    },

    {
        code: "ILR",
        name: "Ilorin International Airport",
        city: "Ilorin",
        country: "Nigeria"
    },

    {
        code: "IBA",
        name: "Ibadan Airport",
        city: "Ibadan",
        country: "Nigeria"
    },

    {
        code: "BEN",
        name: "Benin Airport",
        city: "Benin City",
        country: "Nigeria"
    },


    /* United Kingdom */

    {
        code: "LHR",
        name: "Heathrow Airport",
        city: "London",
        country: "United Kingdom"
    },

    {
        code: "LGW",
        name: "Gatwick Airport",
        city: "London",
        country: "United Kingdom"
    },

    {
        code: "MAN",
        name: "Manchester Airport",
        city: "Manchester",
        country: "United Kingdom"
    },


    /* UAE */

    {
        code: "DXB",
        name: "Dubai International Airport",
        city: "Dubai",
        country: "United Arab Emirates"
    },

    {
        code: "AUH",
        name: "Zayed International Airport",
        city: "Abu Dhabi",
        country: "United Arab Emirates"
    },


    /* Turkey */

    {
        code: "IST",
        name: "Istanbul Airport",
        city: "Istanbul",
        country: "Turkey"
    },

    {
        code: "SAW",
        name: "Sabiha Gökçen International Airport",
        city: "Istanbul",
        country: "Turkey"
    },


    /* USA */

    {
        code: "JFK",
        name: "John F. Kennedy International Airport",
        city: "New York",
        country: "United States"
    },

    {
        code: "LAX",
        name: "Los Angeles International Airport",
        city: "Los Angeles",
        country: "United States"
    },


    /* Canada */

    {
        code: "YYZ",
        name: "Toronto Pearson International Airport",
        city: "Toronto",
        country: "Canada"
    },

    {
        code: "YVR",
        name: "Vancouver International Airport",
        city: "Vancouver",
        country: "Canada"
    },


    /* France */

    {
        code: "CDG",
        name: "Charles de Gaulle Airport",
        city: "Paris",
        country: "France"
    },


    /* Saudi Arabia */

    {
        code: "JED",
        name: "King Abdulaziz International Airport",
        city: "Jeddah",
        country: "Saudi Arabia"
    },

    {
        code: "RUH",
        name: "King Khalid International Airport",
        city: "Riyadh",
        country: "Saudi Arabia"
    },

    {
        code: "MED",
        name: "Prince Mohammad bin Abdulaziz International Airport",
        city: "Medina",
        country: "Saudi Arabia"
    }

];


/* =====================================================
   AIRPORT SEARCH
===================================================== */

function setupAirportSearch(inputId, resultsId) {

    const input = document.getElementById(inputId);
    const results = document.getElementById(resultsId);

    if (!input || !results) {
        return;
    }

    input.addEventListener("input", () => {

        const query = input.value
            .trim()
            .toLowerCase();

        results.innerHTML = "";

        if (!query) {

            results.style.display = "none";

            return;
        }


        const matches = airports.filter(airport => {

            return (
                airport.code.toLowerCase().startsWith(query) ||
                airport.name.toLowerCase().includes(query) ||
                airport.city.toLowerCase().includes(query) ||
                airport.country.toLowerCase().includes(query)
            );

        });


        if (matches.length === 0) {

            results.innerHTML = `
                <div class="airport-result">
                    <div class="airport-name">
                        No airport found
                    </div>

                    <span class="airport-location">
                        Try another airport, city or country
                    </span>
                </div>
            `;

            results.style.display = "block";

            return;
        }


        matches.forEach(airport => {

            const item = document.createElement("div");

            item.className = "airport-result";

            item.innerHTML = `
                <div>
                    <span class="airport-code">
                        ${airport.code}
                    </span>

                    <span class="airport-name">
                        ${airport.name}
                    </span>
                </div>

                <span class="airport-location">
                    ${airport.city}, ${airport.country}
                </span>
            `;


            item.addEventListener("click", () => {

                input.value =
                    `${airport.code} - ${airport.name}, ${airport.city}`;

                results.style.display = "none";

            });


            results.appendChild(item);

        });


        results.style.display = "block";

    });


    /* Hide results when clicking elsewhere */

    document.addEventListener("click", event => {

        if (
            !input.contains(event.target) &&
            !results.contains(event.target)
        ) {

            results.style.display = "none";

        }

    });

}


setupAirportSearch(
    "flightFrom",
    "fromAirportResults"
);

setupAirportSearch(
    "flightTo",
    "toAirportResults"
);


/* =====================================================
   SWAP AIRPORTS
===================================================== */

document.getElementById("swapFlightBtn")?.addEventListener(
    "click",
    () => {

        const from =
            document.getElementById("flightFrom");

        const to =
            document.getElementById("flightTo");

        const temporary = from.value;

        from.value = to.value;

        to.value = temporary;

    }
);


/* =====================================================
   TRAVELLERS
===================================================== */

const travellerCounts = {
    adults: 1,
    children: 0,
    infants: 0
};


const travellerSelector =
    document.getElementById("travellerSelector");

const travellerDropdown =
    document.getElementById("travellerDropdown");

const travellerDisplay =
    document.querySelector(".traveller-display");


travellerDisplay?.addEventListener("click", event => {

    event.stopPropagation();

    travellerDropdown.classList.toggle("show");

});


document.addEventListener("click", event => {

    if (
        travellerDropdown &&
        !travellerSelector.contains(event.target)
    ) {

        travellerDropdown.classList.remove("show");

    }

});


function changeTraveller(type, amount) {

    let newValue =
        travellerCounts[type] + amount;


    /* Adults cannot go below 1 */

    if (type === "adults") {

        newValue = Math.max(1, newValue);

    }

    else {

        newValue = Math.max(0, newValue);

    }


    /* Infants cannot exceed adults */

    if (
        type === "infants" &&
        newValue > travellerCounts.adults
    ) {

        newValue = travellerCounts.adults;

    }


    travellerCounts[type] = newValue;


    document.getElementById("adultCount").textContent =
        travellerCounts.adults;

    document.getElementById("childrenCount").textContent =
        travellerCounts.children;

    document.getElementById("infantCount").textContent =
        travellerCounts.infants;


    updateTravellerSummary();

}


function updateTravellerSummary() {

    const adults = travellerCounts.adults;
    const children = travellerCounts.children;
    const infants = travellerCounts.infants;

    let summary = `${adults} Adult${adults !== 1 ? "s" : ""}`;


    if (children > 0) {

        summary +=
            `, ${children} Child${children !== 1 ? "ren" : ""}`;

    }


    if (infants > 0) {

        summary +=
            `, ${infants} Infant${infants !== 1 ? "s" : ""}`;

    }


    document.getElementById("travellerSummary")
        .textContent = summary;

}


/* =====================================================
   DATE VALIDATION
===================================================== */

const today = new Date()
    .toISOString()
    .split("T")[0];


const departureDate =
    document.getElementById("departureDate");

const returnDate =
    document.getElementById("returnDate");


if (departureDate) {

    departureDate.min = today;

}


departureDate?.addEventListener("change", () => {

    if (returnDate) {

        returnDate.min = departureDate.value;

        if (
            returnDate.value &&
            returnDate.value < departureDate.value
        ) {

            returnDate.value = "";

        }

    }

});


/* =====================================================
   FLIGHT SEARCH
===================================================== */

document.getElementById("flightSearchForm")
    ?.addEventListener("submit", event => {

        event.preventDefault();


        const from =
            document.getElementById("flightFrom").value;

        const to =
            document.getElementById("flightTo").value;

        const departure =
            document.getElementById("departureDate").value;


        if (!from || !to || !departure) {

            alert("Please complete your flight search.");

            return;

        }


        if (
            from.toLowerCase() ===
            to.toLowerCase()
        ) {

            alert(
                "Departure and arrival airports cannot be the same."
            );

            return;

        }


        const results =
            document.getElementById("flightResults");


        results.innerHTML = `

            <div class="results-heading">

                <div>

                    <h2>
                        Flight Search
                    </h2>

                    <p>
                        Searching available flights from
                        <strong>${from}</strong>
                        to
                        <strong>${to}</strong>.
                    </p>

                </div>

            </div>


            <div class="flight-card">

                <div class="airline">

                    <div class="airline-logo">
                        <i class="fas fa-plane"></i>
                    </div>

                    <div>

                        <strong>
                            Moment Continental
                        </strong>

                        <small>
                            MC 101
                        </small>

                    </div>

                </div>


                <div class="flight-time">

                    <strong>
                        08:00
                    </strong>

                    <span>
                        ${extractAirportCode(from)}
                    </span>

                </div>


                <div class="flight-route">

                    <span>
                        Direct
                    </span>

                    <div class="route-line">

                        <i class="fas fa-circle"></i>

                        <span></span>

                        <i class="fas fa-plane"></i>

                        <span></span>

                        <i class="fas fa-circle"></i>

                    </div>

                    <small>
                        Available
                    </small>

                </div>


                <div class="flight-time">

                    <strong>
                        12:30
                    </strong>

                    <span>
                        ${extractAirportCode(to)}
                    </span>

                </div>


                <div class="flight-price">

                    <strong>
                        ₦185,000
                    </strong>

                    <small>
                        per traveller
                    </small>

                    <button
                        onclick="selectFlight()"
                    >
                        Select
                    </button>

                </div>

            </div>
        `;

    });


function extractAirportCode(value) {

    if (value.includes(" - ")) {

        return value
            .split(" - ")[0]
            .trim();

    }

    return value.substring(0, 3).toUpperCase();

}


function selectFlight() {

    alert(
        "Flight selected successfully. " +
        "Booking connection will be added with the backend."
    );

}


/* =====================================================
   CUSTOMER MESSAGE
===================================================== */

document.getElementById("messageForm")
    ?.addEventListener("submit", event => {

        event.preventDefault();


        const name =
            document.getElementById("messageName").value.trim();

        const email =
            document.getElementById("messageEmail").value.trim();

        const subject =
            document.getElementById("messageSubject").value.trim();

        const message =
            document.getElementById("messageText").value.trim();


        if (!name || !email || !subject || !message) {

            alert("Please complete all message fields.");

            return;

        }


        /*
           FOR NOW:

           We only show the success message.

           WHEN WE START BACKEND:

           This exact section will become:

           fetch("/api/messages", {
               method: "POST",
               headers: {
                   "Content-Type": "application/json"
               },
               body: JSON.stringify({
                   name,
                   email,
                   subject,
                   message
               })
           });

           Then MySQL will store it and the
           Admin Messages page will retrieve it.
        */


        document
            .getElementById("messageSuccessModal")
            .classList.add("show");


        document
            .getElementById("messageForm")
            .reset();

    });


/* =====================================================
   CLOSE SUCCESS MODAL
===================================================== */

function closeMessageSuccess() {

    document
        .getElementById("messageSuccessModal")
        .classList.remove("show");

}


/* =====================================================
   INITIAL STATE
===================================================== */

showPage("tours");

updateTravellerSummary();