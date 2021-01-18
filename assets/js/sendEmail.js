function sendMail(contactForm){
    emailjs.send("service_9fhvo61", "template_pcsmdnv",{
        "from_name": contactForm.first-name.value,
        "from_email": contactForm.email.value,
        "Message": contactForm.reason.value,
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