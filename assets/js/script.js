// function for scrolling back to the top of the page if the user clicks on the return to top button
scrollButton = document.getElementById('pageTop');

window.onscroll = function() {scrollToTop()};

// user scrolls 50px down page then button will appear
function scrollToTop(){
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50){
        scrollButton.style.display = 'block';
    } else {
        scrollButton.style.display = 'none'
    }
}

function topOfPage(){
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
}

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

