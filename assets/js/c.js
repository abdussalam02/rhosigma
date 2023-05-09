
function SendMail(event) {
    event.preventDefault();
    
    var params = {
        name: document.getElementById("fname").value,
        email: document.getElementById("femail").value,
        phone: document.getElementById("phone").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("fmessage").value
    }

    const serviceId = "service_nxxxtyi";
    const templateId = "template_yzjlwa8"


    emailjs.send(serviceId, templateId, params).then(
        res => {
            document.getElementById("fname").value = "";
            document.getElementById("femail").value = "";
            document.getElementById("phone").value = "";
            document.getElementById("subject").value = "";
            document.getElementById("fmessage").value = "";
            console.log(res);
            alert("Your Message Sent Successfull")
        }
    ).catch(err => console.log(err));

    document.getElementById('contact-forms').reset();

}






// const contactForm = document.getElementById("contact-form");
// contactForm.addEventListener("submit", function(event) {
//     event.preventDefault();
//     send(contactForm);
// });

