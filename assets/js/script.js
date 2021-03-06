// jshint esversion: 6
// function for scrolling back to the top of the page if the user clicks on the return to top button
// Found advice and guidance on how to best make a return to top page here: https://www.w3schools.com/howto/howto_js_scroll_to_top.asp
const scrollButton = document.getElementById('pageTop');

window.onscroll = function() {scrollToTop();};

// user scrolls 50px down page then button will appear
function scrollToTop(){
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50){
        scrollButton.style.display = 'block';
    } else {
        scrollButton.style.display = 'none';
    }
}

// return to top of page
function topOfPage(){
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
}

// A jQuery function to move the page down to the search section once the user clicks on the header cta button and to move to the quiz section of page too
// I spent some time figuring this out but eventually I got my answer here: https://stackoverflow.com/questions/2238368/how-to-make-a-button-redirect-to-another-page-using-jquery-or-just-javascript
// Wanted to make the buttons scroll smoothly so I found a solution here: https://stackoverflow.com/questions/18071046/smooth-scroll-to-specific-div-on-click
$(document).ready(function(){
    $("#hdr-cta-btn").click(function(){
        $('html,body').animate({
        scrollTop: $("#search-for-country").offset().top},
        'slow');
    });
    $("#take-to-quiz").click(function(){
        $('html,body').animate({
        scrollTop: $("#quiz-game").offset().top},
        'slow');
    });
});

// This jQuery function adds a thank you message in a hidden div after a user submits their form and hides the form
$(document).ready(function(){
    $("form").submit(function(){
        $(".contact-form").hide();
    });
    $("form").submit(function(){
        $(".submit-form").removeClass("hide");
    });
});

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
        },
        function(error){
        }
    );
    return false;
}

// This function will return the user to the homepage if a button is clicked when a 404 error occurs

function returnHome() {
    window.location.href = "index.html";
}