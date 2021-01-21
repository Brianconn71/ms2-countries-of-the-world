// A jQuery function to move the page down to the search section once the user clicks on the header cta button
// I spent some time figuring this out but eventually I got my answer here: https://stackoverflow.com/questions/2238368/how-to-make-a-button-redirect-to-another-page-using-jquery-or-just-javascript
$(document).ready(function(){
    $("#hdr-cta-btn").click(function(){
        window.location="#blah";
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

const headImgs = document.getElementById('header-imgs');
const img = document.querySelectorAll('#header-imgs img');


let idx = 0
let interval = setInterval(run, 10000)

function run(){
    
    idx++

    changeImage()
}
function changeImage(){

    if(idx > img.length -1){
        idx = 0
    } else if(idx < 0){
        idx = img.length -1;
    }
    headImgs.style.transform= `translateX(${-idx * 100}vw)`
}
function resetInterval(){
    clearInterval(interval)
    interval = setInterval(run, 5000)
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

