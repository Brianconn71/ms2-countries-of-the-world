// function countryInfoHTML(country){
//     console.log(country.name)
// }

// function getCountryData(event){
//     var countrySearched = $('search').val()
//     $.when(
//         $.getJSON('https://restcountries.eu/rest/v2/all')
//     ).then(
//         function(response){
//             var data = response;
//             $("#country-search").html(countryInfoHTML(data));
//         }, function(errorResponse){
//             if (errorResponse.status ===404){
//                 $("#country-search").html(`<h2>No Country called ${countrySearched}</h2>`)
//             } else{
//                 console.log(errorResponse);
//                 $("#country-search").html(`error! ${errorResponse.responseJSON.message}`)
//             }
//         }
//     )
// }
// const API_URL = 'https://restcountries.eu/rest/v2/all'
// const search_by_name = 'https://restcountries.eu/rest/v2/name/{name}'

// const search_box = document.getElementById('search-box')

// async function getCountryData(){

// }
//Spent way too long stuck here on an issue with jQuery, a very simple fix to was found here https://stackoverflow.com/questions/18271251/typeerror-ajax-is-not-a-function


$(document).ready(function(){
    $('#search').on('keyup', function(event){
        let searchValue = event.target.value;

        // Make ajax request
        $.ajax({
            url: `https://restcountries.eu/rest/v2/name/${searchValue}?fullText=true `,
        }).done(function(name){
            $('#country-search').html(`
                ${name[0].capital}
            `)
        });
    })
})