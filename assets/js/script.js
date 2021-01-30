// A jQuery function to move the page down to the search section once the user clicks on the header cta button
// I spent some time figuring this out but eventually I got my answer here: https://stackoverflow.com/questions/2238368/how-to-make-a-button-redirect-to-another-page-using-jquery-or-just-javascript
$(document).ready(function(){
    $("#hdr-cta-btn").click(function(){
        window.location.href = '#search-for-country'
    });
});   


// This jQuery function adds a thank you message in a hidden div after a user submits their form and hides the form
$(document).ready(function(){
    $("form").submit(function(){
        $(".contact-form").hide();
    });
    $("form").submit(function(){
        $(".submit-form").removeClass("hide");
    })
})


// Creating a function which will slide through the images on my header
const images = document.getElementById('header-imgs')

const image = document.querySelectorAll('header-carosel-image img')

let index = 0;

let interval = setInterval(showNextImage, 5000)

function showNextImage(){
    index++
    changeImage()
}
function changeImage(){
    if(index > image.length -1 ){
        inndex = 0
    } else if(index < 0){
        index = image.length -1
    }

    images.style.transform = `translateX(${-index * 100}vw)`
}

//This function will send a filled out contact form to mail.js
function sendMail(contactForm){
    emailjs.send("service_9fhvo61", "template_pcsmdnv",{
        "from_first_name": contactForm.first-name.value,
        "from_second_name": contactForm.last-name.value,
        "from_email": contactForm.email.value,
        "subject": contactForm.reason.value,
        "message": contactForm.message.value,
    }).then(
        function(response){
            console.log("success", response);
        },
        function(error){
            console.log("Fail", error)
        }
    )
    return false;
}

