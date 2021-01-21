
//Spent way too long stuck here on an issue with jQuery, a very simple fix to was found here https://stackoverflow.com/questions/18271251/typeerror-ajax-is-not-a-function


$(document).ready(function(){
    $('#search').on('keyup', function(event){
        let searchValue = event.target.value;

        // Make ajax request
        $.ajax({
            url: `https://restcountries.eu/rest/v2/name/${searchValue}?fullText=true `,
        }).done(function(name){
            $('#country-search').html(`
            <div class="card" style="width: 18rem;">
                <img src="${name[0].flag}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${name[0].name}</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
            </div>
            `)
        });
    })
})