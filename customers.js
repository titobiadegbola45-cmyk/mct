/* =====================================================
   MOMENT CONTINENTAL
   CUSTOMER DASHBOARD
===================================================== */


/* =====================================================
   CUSTOMER INFORMATION
===================================================== */

const customerName =
    localStorage.getItem("customerName") || "Customer";


const customerDisplayName =
    document.getElementById("customerDisplayName");


const customerAvatar =
    document.getElementById("customerAvatar");


if (customerDisplayName) {

    customerDisplayName.textContent =
        customerName;

}


if (customerAvatar) {

    customerAvatar.textContent =
        customerName
            .charAt(0)
            .toUpperCase();

}


/* =====================================================
   SIDEBAR
===================================================== */

const sidebar =
    document.getElementById("sidebar");


const menuBtn =
    document.getElementById("menuBtn");


if (menuBtn) {

    menuBtn.addEventListener(
        "click",
        function () {

            sidebar.classList.toggle("show");

        }
    );

}


/* =====================================================
   PAGE NAVIGATION
===================================================== */

const navItems =
    document.querySelectorAll(
        ".nav-item[data-page]"
    );


const pages =
    document.querySelectorAll(
        ".page"
    );


const pageTitle =
    document.getElementById(
        "pageTitle"
    );


function showPage(pageName) {


    pages.forEach(function (page) {

        page.classList.remove(
            "active-page"
        );

    });


    const selectedPage =
        document.getElementById(
            pageName
        );


    if (selectedPage) {

        selectedPage.classList.add(
            "active-page"
        );

    }


    navItems.forEach(function (item) {

        item.classList.remove(
            "active"
        );


        if (
            item.dataset.page ===
            pageName
        ) {

            item.classList.add(
                "active"
            );

        }

    });


    const titles = {

        flights: "Flight Ticketing",

        tours: "Tours & Pilgrimage"

    };


    if (pageTitle) {

        pageTitle.textContent =
            titles[pageName];

    }


    if (window.innerWidth <= 850) {

        sidebar.classList.remove(
            "show"
        );

    }

}


navItems.forEach(function (item) {

    item.addEventListener(
        "click",
        function () {

            showPage(
                this.dataset.page
            );

        }
    );

});


/* =====================================================
   AIRPORT DATABASE
===================================================== */

const airports = [

    /* ================= NIGERIA ================= */

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
        code: "BNI",
        name: "Benin Airport",
        city: "Benin City",
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


    /* ================= UNITED KINGDOM ================= */

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
        code: "STN",
        name: "London Stansted Airport",
        city: "London",
        country: "United Kingdom"
    },

    {
        code: "LTN",
        name: "London Luton Airport",
        city: "London",
        country: "United Kingdom"
    },

    {
        code: "MAN",
        name: "Manchester Airport",
        city: "Manchester",
        country: "United Kingdom"
    },

    {
        code: "BHX",
        name: "Birmingham Airport",
        city: "Birmingham",
        country: "United Kingdom"
    },


    /* ================= UAE ================= */

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

    {
        code: "SHJ",
        name: "Sharjah International Airport",
        city: "Sharjah",
        country: "United Arab Emirates"
    },


    /* ================= TURKEY ================= */

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

    {
        code: "ESB",
        name: "Esenboğa International Airport",
        city: "Ankara",
        country: "Turkey"
    },

    {
        code: "AYT",
        name: "Antalya Airport",
        city: "Antalya",
        country: "Turkey"
    },


    /* ================= USA ================= */

    {
        code: "JFK",
        name: "John F. Kennedy International Airport",
        city: "New York",
        country: "United States"
    },

    {
        code: "EWR",
        name: "Newark Liberty International Airport",
        city: "Newark",
        country: "United States"
    },

    {
        code: "LAX",
        name: "Los Angeles International Airport",
        city: "Los Angeles",
        country: "United States"
    },

    {
        code: "ORD",
        name: "O'Hare International Airport",
        city: "Chicago",
        country: "United States"
    },

    {
        code: "MIA",
        name: "Miami International Airport",
        city: "Miami",
        country: "United States"
    },

    {
        code: "ATL",
        name: "Hartsfield-Jackson Atlanta International Airport",
        city: "Atlanta",
        country: "United States"
    },


    /* ================= CANADA ================= */

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

    {
        code: "YUL",
        name: "Montréal-Pierre Elliott Trudeau International Airport",
        city: "Montreal",
        country: "Canada"
    },


    /* ================= FRANCE ================= */

    {
        code: "CDG",
        name: "Charles de Gaulle Airport",
        city: "Paris",
        country: "France"
    },

    {
        code: "ORY",
        name: "Paris Orly Airport",
        city: "Paris",
        country: "France"
    },


    /* ================= GERMANY ================= */

    {
        code: "FRA",
        name: "Frankfurt Airport",
        city: "Frankfurt",
        country: "Germany"
    },

    {
        code: "MUC",
        name: "Munich Airport",
        city: "Munich",
        country: "Germany"
    },

    {
        code: "BER",
        name: "Berlin Brandenburg Airport",
        city: "Berlin",
        country: "Germany"
    },


    /* ================= SAUDI ARABIA ================= */

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
    },


    /* ================= SOUTH AFRICA ================= */

    {
        code: "JNB",
        name: "O.R. Tambo International Airport",
        city: "Johannesburg",
        country: "South Africa"
    },

    {
        code: "CPT",
        name: "Cape Town International Airport",
        city: "Cape Town",
        country: "South Africa"
    },


    /* ================= GHANA ================= */

    {
        code: "ACC",
        name: "Kotoka International Airport",
        city: "Accra",
        country: "Ghana"
    },


    /* ================= KENYA ================= */

    {
        code: "NBO",
        name: "Jomo Kenyatta International Airport",
        city: "Nairobi",
        country: "Kenya"
    },


    /* ================= EGYPT ================= */

    {
        code: "CAI",
        name: "Cairo International Airport",
        city: "Cairo",
        country: "Egypt"
    },


    /* ================= QATAR ================= */

    {
        code: "DOH",
        name: "Hamad International Airport",
        city: "Doha",
        country: "Qatar"
    },


    /* ================= NETHERLANDS ================= */

    {
        code: "AMS",
        name: "Amsterdam Airport Schiphol",
        city: "Amsterdam",
        country: "Netherlands"
    },


    /* ================= SPAIN ================= */

    {
        code: "MAD",
        name: "Adolfo Suárez Madrid-Barajas Airport",
        city: "Madrid",
        country: "Spain"
    },

    {
        code: "BCN",
        name: "Barcelona-El Prat Airport",
        city: "Barcelona",
        country: "Spain"
    }

];


/* =====================================================
   AIRPORT SEARCH
===================================================== */

function setupAirportSearch(
    inputId,
    resultsId
) {


    const input =
        document.getElementById(
            inputId
        );


    const results =
        document.getElementById(
            resultsId
        );


    if (!input || !results) return;


    input.addEventListener(
        "input",
        function () {


            const search =
                this.value
                    .toLowerCase()
                    .trim();


            results.innerHTML = "";


            if (!search) {

                results.classList.remove(
                    "show"
                );

                return;

            }


            const matches =
                airports.filter(
                    function (airport) {

                        return (

                            airport.code
                                .toLowerCase()
                                .includes(search)

                            ||

                            airport.name
                                .toLowerCase()
                                .includes(search)

                            ||

                            airport.city
                                .toLowerCase()
                                .includes(search)

                            ||

                            airport.country
                                .toLowerCase()
                                .includes(search)

                        );

                    }
                );


            if (!matches.length) {

                results.innerHTML = `

                    <div class="airport-option">

                        <div class="airport-info">

                            <strong>
                                No airport found
                            </strong>

                            <span>
                                Try an airport code, city or airport name.
                            </span>

                        </div>

                    </div>

                `;

                results.classList.add(
                    "show"
                );

                return;

            }


            matches.forEach(
                function (airport) {


                    const option =
                        document.createElement(
                            "div"
                        );


                    option.className =
                        "airport-option";


                    option.innerHTML = `

                        <div class="airport-code">
                            ${airport.code}
                        </div>

                        <div class="airport-info">

                            <strong>
                                ${airport.name}
                            </strong>

                            <span>
                                ${airport.city},
                                ${airport.country}
                            </span>

                        </div>

                    `;


                    option.addEventListener(
                        "click",
                        function () {

                            input.value =
                                `${airport.code} - ${airport.name}, ${airport.city}`;

                            input.dataset.airportCode =
                                airport.code;


                            results.classList.remove(
                                "show"
                            );

                        }
                    );


                    results.appendChild(
                        option
                    );

                }
            );


            results.classList.add(
                "show"
            );

        }
    );


    /* SHOW RESULTS ON FOCUS */

    input.addEventListener(
        "focus",
        function () {

            if (this.value.trim()) {

                this.dispatchEvent(
                    new Event("input")
                );

            }

        }
    );

}


/* FROM */

setupAirportSearch(
    "flightFrom",
    "fromResults"
);


/* TO */

setupAirportSearch(
    "flightTo",
    "toResults"
);


/* =====================================================
   CLOSE AIRPORT DROPDOWNS
===================================================== */

document.addEventListener(
    "click",
    function (event) {


        if (
            !event.target.closest(
                ".airport-group"
            )
        ) {

            document
                .querySelectorAll(
                    ".airport-results"
                )
                .forEach(
                    function (box) {

                        box.classList.remove(
                            "show"
                        );

                    }
                );

        }

    }
);


/* =====================================================
   TRIP TYPE
===================================================== */

const flightTabs =
    document.querySelectorAll(
        ".flight-tab"
    );


const returnDateGroup =
    document.getElementById(
        "returnDateGroup"
    );


const multiCityContainer =
    document.getElementById(
        "multiCityContainer"
    );


flightTabs.forEach(
    function (tab) {


        tab.addEventListener(
            "click",
            function () {


                flightTabs.forEach(
                    function (item) {

                        item.classList.remove(
                            "active"
                        );

                    }
                );


                this.classList.add(
                    "active"
                );


                const tripType =
                    this.dataset.trip;


                if (
                    tripType ===
                    "one-way"
                ) {

                    returnDateGroup.style.display =
                        "block";

                    document.getElementById(
                        "returnDate"
                    ).required = false;

                    multiCityContainer.classList.remove(
                        "show"
                    );

                }


                else if (
                    tripType ===
                    "round-trip"
                ) {

                    returnDateGroup.style.display =
                        "block";

                    document.getElementById(
                        "returnDate"
                    ).required = true;

                    multiCityContainer.classList.remove(
                        "show"
                    );

                }


                else if (
                    tripType ===
                    "multi-city"
                ) {

                    returnDateGroup.style.display =
                        "none";

                    document.getElementById(
                        "returnDate"
                    ).required = false;

                    multiCityContainer.classList.add(
                        "show"
                    );

                }

            }
        );

    }
);


/* =====================================================
   DATE MINIMUM
===================================================== */

const today =
    new Date()
        .toISOString()
        .split("T")[0];


const departureDate =
    document.getElementById(
        "departureDate"
    );


const returnDate =
    document.getElementById(
        "returnDate"
    );


if (departureDate) {

    departureDate.min =
        today;

}


if (returnDate) {

    returnDate.min =
        today;

}


if (departureDate) {

    departureDate.addEventListener(
        "change",
        function () {

            returnDate.min =
                this.value;

        }
    );

}


/* =====================================================
   SWAP AIRPORTS
===================================================== */

const swapBtn =
    document.getElementById(
        "swapFlightBtn"
    );


if (swapBtn) {

    swapBtn.addEventListener(
        "click",
        function () {


            const from =
                document.getElementById(
                    "flightFrom"
                );


            const to =
                document.getElementById(
                    "flightTo"
                );


            const temp =
                from.value;


            from.value =
                to.value;


            to.value =
                temp;


            const tempCode =
                from.dataset.airportCode;


            from.dataset.airportCode =
                to.dataset.airportCode;


            to.dataset.airportCode =
                tempCode;

        }
    );

}


/* =====================================================
   TRAVELLER COUNTERS
===================================================== */

let travellers = {

    adults: 1,

    children: 0,

    infants: 0

};


const travellerBtn =
    document.getElementById(
        "travellerBtn"
    );


const travellerPopup =
    document.getElementById(
        "travellerPopup"
    );


if (travellerBtn) {

    travellerBtn.addEventListener(
        "click",
        function (event) {

            event.stopPropagation();

            travellerPopup.classList.toggle(
                "show"
            );

        }
    );

}


/* COUNTER BUTTONS */

document
    .querySelectorAll(
        ".counter-btn"
    )
    .forEach(
        function (button) {


            button.addEventListener(
                "click",
                function () {


                    const type =
                        this.dataset.type;


                    const action =
                        this.dataset.action;


                    if (
                        action ===
                        "plus"
                    ) {

                        travellers[type]++;

                    }


                    if (
                        action ===
                        "minus"
                    ) {


                        /*
                           Adults must always
                           have at least one.
                        */

                        if (
                            type ===
                            "adults" &&
                            travellers[type] <= 1
                        ) {

                            return;

                        }


                        if (
                            travellers[type] > 0
                        ) {

                            travellers[type]--;

                        }

                    }


                    updateTravellerDisplay();

                }
            );

        }
    );


function updateTravellerDisplay() {


    document.getElementById(
        "adultsCount"
    ).textContent =
        travellers.adults;


    document.getElementById(
        "childrenCount"
    ).textContent =
        travellers.children;


    document.getElementById(
        "infantsCount"
    ).textContent =
        travellers.infants;


    const total =
        travellers.adults +
        travellers.children +
        travellers.infants;


    let summary =
        `${total} Traveller`;


    if (total !== 1) {

        summary += "s";

    }


    travellerSummary.textContent =
        summary;

}


/* CLOSE TRAVELLER POPUP */

document.addEventListener(
    "click",
    function (event) {


        if (
            !event.target.closest(
                ".traveller-group"
            )
        ) {

            travellerPopup.classList.remove(
                "show"
            );

        }

    }
);


/* =====================================================
   MULTI-CITY ADD
===================================================== */

const addCityBtn =
    document.getElementById(
        "addCityBtn"
    );


const multiCityRows =
    document.getElementById(
        "multiCityRows"
    );


let cityRowCount = 1;


if (addCityBtn) {

    addCityBtn.addEventListener(
        "click",
        function () {


            cityRowCount++;


            const row =
                document.createElement(
                    "div"
                );


            row.className =
                "multi-city-row";


            row.innerHTML = `

                <div class="form-group">

                    <label>
                        From
                    </label>

                    <input
                        type="text"
                        placeholder="City or airport"
                    >

                </div>


                <div class="form-group">

                    <label>
                        To
                    </label>

                    <input
                        type="text"
                        placeholder="City or airport"
                    >

                </div>


                <div class="form-group">

                    <label>
                        Date
                    </label>

                    <input
                        type="date"
                        min="${today}"
                    >

                </div>

            `;


            multiCityRows.appendChild(
                row
            );

        }
    );

}


/* =====================================================
   FLIGHT SEARCH
===================================================== */

const flightSearchForm =
    document.getElementById(
        "flightSearchForm"
    );


if (flightSearchForm) {

    flightSearchForm.addEventListener(
        "submit",
        function (event) {


            event.preventDefault();


            const from =
                document.getElementById(
                    "flightFrom"
                );


            const to =
                document.getElementById(
                    "flightTo"
                );


            const departure =
                departureDate.value;


            const returnValue =
                returnDate.value;


            const cabin =
                document.getElementById(
                    "cabinClass"
                ).value;


            if (
                !from.value ||
                !to.value ||
                !departure
            ) {

                alert(
                    "Please enter your departure, destination and departure date."
                );

                return;

            }


            const activeTrip =
                document.querySelector(
                    ".flight-tab.active"
                ).dataset.trip;


            if (
                activeTrip ===
                "round-trip" &&
                !returnValue
            ) {

                alert(
                    "Please select a return date."
                );

                return;

            }


            showFlightResults(
                from.value,
                to.value,
                departure,
                returnValue,
                cabin
            );

        }
    );

}


/* =====================================================
   FLIGHT RESULTS
===================================================== */

function showFlightResults(
    from,
    to,
    departure,
    returnDate,
    cabin
) {


    const results =
        document.getElementById(
            "flightResultsList"
        );


    results.innerHTML = `

        <div class="flight-card">


            <div class="airline">

                <div class="airline-logo">

                    <i class="fas fa-plane"></i>

                </div>


                <div>

                    <strong>
                        Moment Continental Airways
                    </strong>

                    <small>
                        MC 102
                    </small>

                </div>

            </div>



            <div class="flight-time">

                <strong>
                    08:00
                </strong>

                <span>
                    ${getAirportCode(from)}
                </span>

            </div>



            <div class="flight-route">

                <span>
                    1h 10m
                </span>


                <div class="route-line">

                    <i class="fas fa-circle"></i>

                    <span></span>

                    <i class="fas fa-plane"></i>

                    <span></span>

                    <i class="fas fa-circle"></i>

                </div>


                <small>
                    Direct
                </small>

            </div>



            <div class="flight-time">

                <strong>
                    09:10
                </strong>

                <span>
                    ${getAirportCode(to)}
                </span>

            </div>



            <div class="flight-price">

                <strong>
                    ₦185,000
                </strong>

                <small>
                    ${cabin}
                </small>


                <button
                    onclick="selectFlight(
                        'Moment Continental Airways',
                        'MC 102',
                        '₦185,000'
                    )"
                >

                    Select

                </button>

            </div>


        </div>


        <div class="flight-card">


            <div class="airline">

                <div class="airline-logo">

                    <i class="fas fa-plane"></i>

                </div>


                <div>

                    <strong>
                        Continental Air
                    </strong>

                    <small>
                        CA 405
                    </small>

                </div>

            </div>



            <div class="flight-time">

                <strong>
                    12:30
                </strong>

                <span>
                    ${getAirportCode(from)}
                </span>

            </div>



            <div class="flight-route">

                <span>
                    1h 05m
                </span>


                <div class="route-line">

                    <i class="fas fa-circle"></i>

                    <span></span>

                    <i class="fas fa-plane"></i>

                    <span></span>

                    <i class="fas fa-circle"></i>

                </div>


                <small>
                    Direct
                </small>

            </div>



            <div class="flight-time">

                <strong>
                    13:35
                </strong>

                <span>
                    ${getAirportCode(to)}
                </span>

            </div>



            <div class="flight-price">

                <strong>
                    ₦210,000
                </strong>

                <small>
                    ${cabin}
                </small>


                <button
                    onclick="selectFlight(
                        'Continental Air',
                        'CA 405',
                        '₦210,000'
                    )"
                >

                    Select

                </button>

            </div>


        </div>

    `;


}


/* GET AIRPORT CODE */

function getAirportCode(
    value
) {


    const match =
        airports.find(
            function (airport) {

                return value
                    .startsWith(
                        airport.code
                    );

            }
        );


    if (match) {

        return match.code;

    }


    return value
        .substring(0, 3)
        .toUpperCase();

}


/* =====================================================
   SELECT FLIGHT
===================================================== */

function selectFlight(
    airline,
    flightNumber,
    price
) {


    alert(

        `Flight Selected ✈️

Airline:
${airline}

Flight:
${flightNumber}

Price:
${price}

Your booking can now continue to passenger details.`

    );

}


/* =====================================================
   PACKAGE BOOKING
===================================================== */

function bookPackage(
    packageName
) {


    alert(

        `Package Selected 🕋

${packageName}

Your booking process will continue to the reservation details.`

    );

}


/* =====================================================
   LOGOUT
===================================================== */

const logoutBtn =
    document.getElementById(
        "logoutBtn"
    );


if (logoutBtn) {

    logoutBtn.addEventListener(
        "click",
        function () {


            const confirmLogout =
                confirm(
                    "Are you sure you want to log out?"
                );


            if (!confirmLogout) {

                return;

            }


            localStorage.removeItem(
                "customerName"
            );


            window.location.href =
                "login.html";

        }
    );

}