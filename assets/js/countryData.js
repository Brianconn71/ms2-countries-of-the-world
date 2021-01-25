//Spent way too long stuck here on an issue with jQuery, a very simple fix to was found here https://stackoverflow.com/questions/18271251/typeerror-ajax-is-not-a-function
$(document).ready(function(){
    $('#search').on('keyup', function(event){
        let searchValue = event.target.value;

        // Make ajax request
        $.ajax({
            url: `https://restcountries.eu/rest/v2/name/${searchValue}`,
        }).done(function(data){
            $('#country-search').html(`
            <div class="card country-card">
                <img src="${data[0].flag}" class="card-img-top" alt="...">
                <div class="card-body">
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
            `)
        });
    })

})


// Had to make a change to my buttons as asynchronous calls wren't working so I switched tothe fetch method
        $('#africa-btn').on("click",function(event){
            
            fetch('https://restcountries.eu/rest/v2/region/africa')
            .then((r) => r.json())
            .then((data) =>  data.forEach(function(m){
                    document.getElementById('africa').innerHTML += `
                        <div class="container" id="row-country">
                            <button class="continent-btn" id="close" onclick="closeBtnAfrica()">Close</button>
                                <div class="row">
                                    <div class="col-3 d-flex align-items-center">
                                        <img src="${m[Object.keys(m)[21]]}" class="img-fluid" alt="flags of africa">
                                    </div>
                                    <div class="col-9">
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
                    `
                }))
            .catch((e) => console.log(e));
        })

$(document).ready(function(){
        $('#asia-btn').on("click",function(event){
            // Make ajax request
           fetch('https://restcountries.eu/rest/v2/region/asia')
            .then((r) => r.json())
            .then((data) =>  data.forEach(function(m){
                    document.getElementById('asia').innerHTML += `
                        <div class="container" id="row-country">
                            <button class="continent-btn" id="close" onclick="closeBtnAsia()">Close</button>
                                <div class="row">
                                    <div class="col-3 d-flex align-items-center">
                                        <img src="${m[Object.keys(m)[21]]}" class="img-fluid" alt="flags of africa">
                                    </div>
                                    <div class="col-9">
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
                    `
                }))
            .catch((e) => console.log(e));
            })
})

$(document).ready(function(){
        $('#europe-btn').on("click",function(event){
            // Make ajax request
           fetch('https://restcountries.eu/rest/v2/region/europe')
            .then((r) => r.json())
            .then((data) =>  data.forEach(function(m){
                    document.getElementById('europe').innerHTML += `
                        <div class="container" id="row-country">
                            <button class="continent-btn" id="close" onclick="closeBtnEurope()">Close</button>
                                <div class="row">
                                    <div class="col-3 d-flex align-items-center">
                                        <img src="${m[Object.keys(m)[21]]}" class="img-fluid" alt="flags of africa">
                                    </div>
                                    <div class="col-9">
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
                    `
                }))
            .catch((e) => console.log(e));
        })
})

$(document).ready(function(){
        $('#america-btn').on("click",function(event){
            // Make ajax request
             fetch('https://restcountries.eu/rest/v2/region/americas')
            .then((r) => r.json())
            .then((data) =>  data.forEach(function(m){
                    document.getElementById('america').innerHTML += `
                        <div class="container" id="row-country">
                            <button class="continent-btn" id="close" onclick="closeBtnAmerica()">Close</button>
                                <div class="row">
                                    <div class="col-3 d-flex align-items-center">
                                        <img src="${m[Object.keys(m)[21]]}" class="img-fluid" alt="flags of africa">
                                    </div>
                                    <div class="col-9">
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
                    `
                }))
            .catch((e) => console.log(e));
        })
})
$(document).ready(function(){
        $('#oceania-btn').on("click",function(event){
            fetch('https://restcountries.eu/rest/v2/region/oceania')
            .then((r) => r.json())
            .then((data) =>  data.forEach(function(m){
                    document.getElementById('oceania').innerHTML += `
                        <div class="container" id="row-country">
                        <button class="continent-btn" id="close" onclick="closeBtnOceania()">Close</button>
                            <div class="row">
                                <div class="col-3 d-flex align-items-center">
                                    <img src="${m[Object.keys(m)[21]]}" class="img-fluid" alt="flags of africa">
                                </div>
                                <div class="col-9">
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
                        `
                }))
  .catch((e) => console.log('Booo'));
        })
})

function closeBtnAfrica(){
     document.getElementById('africa').innerHTML = "";
}
function closeBtnAsia(){
     document.getElementById('asia').innerHTML = "";
}
function closeBtnEurope(){
     document.getElementById('europe').innerHTML = "";
}
function closeBtnAmerica(){
     document.getElementById('america').innerHTML = "";
}
function closeBtnOceania(){
     document.getElementById('oceania').innerHTML = "";
}