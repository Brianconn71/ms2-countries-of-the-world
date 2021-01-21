function countryInfoHTML(country){
    console.log(country.name)
}

function getCountryData(event){
    var countrySearched = $('search').val()
    $.when(
        $.getJSON(`https://restcountries.eu/rest/v2/all`)
    ).then(
        function(response){
            var data = response;
            $("#country-search").html(countryInfoHTML(data));
        }, function(errorResponse){
            if (errorResponse.status ===404){
                $("#country-search").html(`<h2>No Country called ${countrySearched}</h2>`)
            } else{
                console.log(errorResponse);
                $("#country-search").html(`error! ${errorResponse.responseJSON.message}`)
            }
        }
    )
}