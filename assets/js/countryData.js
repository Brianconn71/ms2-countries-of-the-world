// jshint esversion: 6
// This page is soley used to retreive country data from the search bar on the index page and to retrieve  in the index.html page
//Spent way too long stuck here on an issue with jQuery, a very simple fix to was found here https://stackoverflow.com/questions/18271251/typeerror-ajax-is-not-a-function

// Some issues were fixed with jQuery here https://stackoverflow.com/questions/34280868/search-bar-with-jquery & https://javascript.info/fetch and https://stackoverflow.com/questions/43797556/jquery-with-button-onclick-functionquestions/43797556/jquery-with-button-onclick-function
// I also got guidance and advice here https://www.youtube.com/watch?v=lIKrfLWNsUI&t=1147s&ab_channel=TraversyMedia
$(document).ready(function() {
    $('#search').on('keyup', function(event) {
        let searchValue = event.target.value;

        // Make ajax request
        $.ajax({
            url: `https://restcountries.eu/rest/v2/name/${searchValue}`,
        }).done(function(data) {
            $('#country-search').html(`
            <div class="card country-card">
                <img src="${data[0].flag}" class="card-img-top" alt="${data[0].name} flag">
                <div class="card-body">
                    <button id="close" onclick="closeBtnSearch()"><i class="fas fa-window-close"></i></button>
                    <h5 class="card-title country-title">${data[0].name}</h5>
                    <p class="card-text">
                        <ul class="basic-info">
                            <li class="general-info">Capital City: ${data[0].capital}</li>
                            <li class="general-info">Continent: ${data[0].region}</li>
                            <li class="general-info">Population: ${data[0].population}</li>
                        </ul>
                    </p>
                </div>
            </div>
            `);
        });
    });
});


// The below functions are used to get information on the countries depending on which continent button that the user clicks

// Had to make a change to my buttons as asynchronous calls wren't working so I switched to the fetch method https://jakearchibald.com/2015/thats-so-fetch/

// had trouble accessing my arrays a solution i found that worked was https://stackoverflow.com/questions/16576457/accessing-a-javascripts-object-property-without-knowing-that-property-name

// also figured out how to place my close button in the right corner here: https://stackoverflow.com/questions/6632340/place-a-button-right-aligned


function returnAfrica() {
    // Make ajax request
    fetch('https://restcountries.eu/rest/v2/region/africa')
        .then((r) => r.json())
        .then((data) => data.forEach(function(m) {
            document.getElementById('africa').innerHTML += `
                        <div class="container" id="row-country">
                                <div class="row">
                                    <div class="col-3 d-flex align-items-center">
                                        <img src="${m[Object.keys(m)[21]]}" class="img-fluid" alt="flags of africa">
                                    </div>
                                    <div class="col-9">
                                        <button id="close" onclick="closeBtnAfrica()"><i class="fas fa-window-close"></i></button>
                                        <h5 class="country-title">${m[Object.keys(m)[0]]}</h5>
                                        <p class="card-text">
                                            <ul class="basic-info">
                                                <li class="general-info">Capital City: ${m[Object.keys(m)[5]]}</li>
                                                <li class="general-info">Sub-Continent: ${m[Object.keys(m)[8]]}</li>
                                                <li class="general-info">Population: ${m[Object.keys(m)[9]]}</li>
                                            </ul>
                                        </p>
                                    </div>
                                </div>
                                
                        </div>              
                    `;
        }));
}

function returnAsia() {
    // Make ajax request
    fetch('https://restcountries.eu/rest/v2/region/asia')
        .then((r) => r.json())
        .then((data) => data.forEach(function(m) {
            document.getElementById('asia').innerHTML += `
                        <div class="container" id="row-country">
                                <div class="row">
                                    <div class="col-3 d-flex align-items-center">
                                        <img src="${m[Object.keys(m)[21]]}" class="img-fluid" alt="flags of africa">
                                    </div>
                                    <div class="col-9">
                                        <button id="close" onclick="closeBtnAsia()"><i class="fas fa-window-close"></i></button>
                                        <h5 class="country-title">${m[Object.keys(m)[0]]}</h5>
                                        <p class="card-text">
                                            <ul class="basic-info">
                                                <li class="general-info">Capital City: ${m[Object.keys(m)[5]]}</li>
                                                <li class="general-info">Sub-Continent: ${m[Object.keys(m)[8]]}</li>
                                                <li class="general-info">Population: ${m[Object.keys(m)[9]]}</li>
                                            </ul>
                                        </p>
                                    </div>
                                </div>
                                
                        </div>              
                    `;
        }));
}

function returnEurope() {
    fetch('https://restcountries.eu/rest/v2/region/europe')
        .then((r) => r.json())
        .then((data) => data.forEach(function(m) {
            document.getElementById('europe').innerHTML += `
                        <div class="container" id="row-country">
                                <div class="row">
                                    <div class="col-3 d-flex align-items-center">
                                        <img src="${m[Object.keys(m)[21]]}" class="img-fluid" alt="flags of africa">
                                    </div>
                                    <div class="col-9">
                                        <button id="close" onclick="closeBtnEurope()"><i class="fas fa-window-close"></i></button>
                                        <h5 class="country-title">${m[Object.keys(m)[0]]}</h5>
                                        <p class="card-text">
                                            <ul class="basic-info">
                                                <li class="general-info">Capital City: ${m[Object.keys(m)[5]]}</li>
                                                <li class="general-info">Sub-Continent: ${m[Object.keys(m)[8]]}</li>
                                                <li class="general-info">Population: ${m[Object.keys(m)[9]]}</li>
                                            </ul>
                                        </p>
                                    </div>
                                </div>
                                
                        </div>              
                    `;
        }));
}

function returnAmericas() {
    // Make ajax request
    fetch('https://restcountries.eu/rest/v2/region/americas')
        .then((r) => r.json())
        .then((data) => data.forEach(function(m) {
            document.getElementById('america').innerHTML += `
                        <div class="container" id="row-country">
                                <div class="row">
                                    <div class="col-3 d-flex align-items-center">
                                        <img src="${m[Object.keys(m)[21]]}" class="img-fluid" alt="flags of africa">
                                    </div>
                                    <div class="col-9">
                                        <button id="close" onclick="closeBtnAmerica()"><i class="fas fa-window-close"></i></button>
                                        <h5 class="country-title">${m[Object.keys(m)[0]]}</h5>
                                        <p class="card-text">
                                            <ul class="basic-info">
                                                <li class="general-info">Capital City: ${m[Object.keys(m)[5]]}</li>
                                                <li class="general-info">Sub-Continent: ${m[Object.keys(m)[8]]}</li>
                                                <li class="general-info">Population: ${m[Object.keys(m)[9]]}</li>
                                            </ul>
                                        </p>
                                    </div>
                                </div>
                                
                        </div>              
                    `;
        }));
}

function returnOceania() {
    fetch('https://restcountries.eu/rest/v2/region/oceania')
        .then((r) => r.json())
        .then((data) => data.forEach(function(m) {
            document.getElementById('oceania').innerHTML += `
                        <div class="container" id="row-country">
                            <div class="row">
                                <div class="col-3 d-flex align-items-center">
                                    <img src="${m[Object.keys(m)[21]]}" class="img-fluid" alt="flags of africa">
                                </div>
                                <div class="col-9">
                                   <button id="close" onclick="closeBtnOceania()"><i class="fas fa-window-close"></i></button> 
                                 <h5 class="country-title">${m[Object.keys(m)[0]]}</h5>
                                    <p class="card-text">
                                        <ul class="basic-info">
                                            <li class="general-info">Capital City: ${m[Object.keys(m)[5]]}</li>
                                            <li class="general-info">Sub-Continent: ${m[Object.keys(m)[8]]}</li>
                                            <li class="general-info">Population: ${m[Object.keys(m)[9]]}</li>
                                        </ul>
                                    </p>
                                </div>
                            </div>
                        
                        </div>              
                        `;
        }));

}
//functions to close the div containing the conitinent country data upon clicking the close button on the top right corner of the elements
function closeBtnSearch() {
    document.getElementById('country-search').innerHTML = "";
}

function closeBtnAfrica() {
    document.getElementById('africa').innerHTML = "";
}

function closeBtnAsia() {
    document.getElementById('asia').innerHTML = "";
}

function closeBtnEurope() {
    document.getElementById('europe').innerHTML = "";
}

function closeBtnAmerica() {
    document.getElementById('america').innerHTML = "";
}

function closeBtnOceania() {
    document.getElementById('oceania').innerHTML = "";
}