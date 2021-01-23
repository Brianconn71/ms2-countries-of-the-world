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

var loadAfrica = function(){
$(document).ready(function(){
    $('#africa-btn').on('click', function(event){
        // Make ajax request
        $.ajax({
            url: `https://restcountries.eu/rest/v2/region/africa`,
        }).done(function(data){
            data.forEach(function(m){
                document.getElementById('africa').innerHTML += `
                <div class="card country-card">
                <img src="${m[Object.keys(m)[21]]}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title country-title">${m[Object.keys(m)[0]]}</h5>
                    <p class="card-text">
                        <ul class="basic-info">
                            <li class="general-info">Capital City: ${m[Object.keys(m)[5]]}</li>
                            <li class="general-info">Sub-Continent: ${m[Object.keys(m)[8]]}</li>
                            <li class="general-info">Population: ${m[Object.keys(m)[9]]}</li>
                        </ul>
                    </p>
                </div>
            </div>               
                `
            
            // $('#africa').text(
            // `${m[Object.keys(m)[0]]}`
            // )
            })
        });
    })

})
}