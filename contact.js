var firstNameField = document.querySelector("#fname");
var lastNameField = document.querySelector("#lname");
var mailField = document.querySelector("#mail");
var messageField = document.querySelector(".message--field");
var enquiryRadio = document.querySelector("#enquiry");
var supportRadio = document.querySelector("#support");
var enquiryContainer = document.querySelector("#enquiry--container");
var requestContainer = document.querySelector("#request--container");
var consentCheckBox = document.querySelector("#consent");
var fnameError = document.querySelector("#fname--error");
var lnameError = document.querySelector("#lname--error");
var mailError = document.querySelector("#mail--error");
var queryError = document.querySelector("#query--error");
var messageFieldError = document.querySelector("#message--fielderror");
var consentError = document.querySelector("#consent--error");
var successNotice = document.querySelector(".success--notice--wrapper")
var submitBtn =  document.querySelector("#submit__btn");




submitBtn.addEventListener("click", function(){
    if(firstNameField.checkValidity() === false) {
        fnameError.classList.remove("hide--error");
        firstNameField.classList.add("error--border");
        firstNameField.classList.remove("noerror--border");
    } else if(firstNameField.checkValidity() === true) {
        fnameError.classList.add("hide--error");
        firstNameField.classList.remove("error--border");
        firstNameField.classList.add("noerror--border");
    } 
})

submitBtn.addEventListener("click", function(){
    if(lastNameField.checkValidity() === false) {
        lnameError.classList.remove("hide--error");
        lastNameField.classList.add("error--border");
        lastNameField.classList.remove("noerror--border");
    } else if(lastNameField.checkValidity() === true ) {
        lnameError.classList.add("hide--error");
        lastNameField.classList.remove("error--border");
        lastNameField.classList.add("noerror--border");
    } 
})

submitBtn.addEventListener("click", function(){
    if(mailField.checkValidity() === false) {
        mailError.classList.remove("hide--error");
        mailField.classList.add("error--border");
        mailField.classList.remove("noerror--border");
    } else if(mailField.checkValidity() === true) {
        mailError.classList.add("hide--error");
        mailField.classList.remove("error--border");
        mailField.classList.add("noerror--border");
    }
})

submitBtn.addEventListener("click", function(){
    if(enquiryRadio.checked === true) {
        queryError.classList.add("hide--error");
    } else if(supportRadio.checked === true) {
        queryError.classList.add("hide--error");
    } else if (enquiryRadio.checked || supportRadio.checked === false) {
        queryError.classList.remove("hide--error");
    }
})

submitBtn.addEventListener("click", function(){
    if(messageField.checkValidity() === false) {
        messageFieldError.classList.remove("hide--error");
        messageField.classList.add("error--border");
        messageField.classList.remove("noerror--border");
    } else if(messageField.checkValidity() === true) {
        messageFieldError.classList.add("hide--error");
        messageField.classList.remove("error--border");
        messageField.classList.add("noerror--border");
    }
})

submitBtn.addEventListener("click", function(){
    if(consentCheckBox.checked === true) {
        consentError.classList.add("hide--error");
    } else if(consentCheckBox.checked === false) {
        consentError.classList.remove("hide--error");
    }
})


// success message
submitBtn.addEventListener("click", function(){
if(firstNameField.checkValidity() === true && lastNameField.checkValidity() === true && mailField.checkValidity() === true && messageField.checkValidity() === true && consentCheckBox.checked === true && (enquiryRadio.checked || supportRadio.checked === true)) {
    successNotice.classList.remove("hide--successnotice");
    firstNameField.value = "";
    lastNameField.value = "";
    mailField.value = "";
    messageField.value = "";
    enquiryRadio.checked = false;
    supportRadio.checked = false;
    consentCheckBox.checked = false;
} else if (firstNameField.checkValidity() === false || lastNameField.checkValidity() === false || mailField.checkValidity() === false || messageField.checkValidity() === false || consentCheckBox.checked === false || enquiryRadio.checked === false || supportRadio.checked === false) {
    successNotice.classList.add("hide--successnotice");
}
})


// keyboardEvent

// Radio and Checkbox
document.addEventListener("keydown", function(event) {
    if(event.key === " " && enquiryContainer === document.activeElement && enquiryRadio.checked === true) {
        enquiryRadio.checked = false;
    } else if(event.key === " " && enquiryContainer === document.activeElement && enquiryRadio.checked === false) {
        enquiryRadio.checked = true;
    } else if(event.key === " " && requestContainer === document.activeElement && supportRadio.checked === false) {
        supportRadio.checked = true;
    } else if(event.key === " " && requestContainer === document.activeElement && supportRadio.checked === true) {
        supportRadio.checked = false;
    }
})

// Navigation
document.addEventListener("keydown", function(event) {
    if(event.key === "Enter" && messageField !== document.activeElement) {
        submitBtn.focus()
    }
})

// document.addEventListener("keydown", function(event) {
//     if(event.key === "ArrowDown" && firstNameField !== document.activeElement && lastNameField !== document.activeElement && mailField !== document.activeElement && messageField !== document.activeElement && enquiryContainer !== document.activeElement && requestContainer !== document.activeElement && consentCheckBox !== document.activeElement) {
//         firstNameField.focus()
//     } else if(event.key === "Enter" && firstNameField === document.activeElement && lastNameField !== document.activeElement && mailField !== document.activeElement && messageField !== document.activeElement && enquiryContainer !== document.activeElement && requestContainer !== document.activeElement && consentCheckBox !== document.activeElement) {
//         lastNameField.focus()
//     } else if(event.key === "Enter" && firstNameField !== document.activeElement && lastNameField === document.activeElement && mailField !== document.activeElement && messageField !== document.activeElement && enquiryContainer !== document.activeElement && requestContainer !== document.activeElement && consentCheckBox !== document.activeElement) {
//         mailField.focus()
//     } else if(event.key === "Enter" && firstNameField !== document.activeElement && lastNameField !== document.activeElement && mailField === document.activeElement && messageField !== document.activeElement && enquiryContainer !== document.activeElement && requestContainer !== document.activeElement && consentCheckBox !== document.activeElement) {
//         enquiryContainer.focus()
//     } else if(event.key === "Enter" && firstNameField !== document.activeElement && lastNameField !== document.activeElement && mailField !== document.activeElement && messageField !== document.activeElement && enquiryContainer === document.activeElement && requestContainer !== document.activeElement && consentCheckBox !== document.activeElement) {
//         requestContainer.focus()
//     } else if(event.key === "Enter" && firstNameField !== document.activeElement && lastNameField !== document.activeElement && mailField !== document.activeElement && messageField !== document.activeElement && enquiryContainer !== document.activeElement && requestContainer === document.activeElement && consentCheckBox !== document.activeElement) {
//         messageField.focus();
//         event.preventDefault();
//     }  else if(event.key === "Enter" && firstNameField !== document.activeElement && lastNameField !== document.activeElement && mailField !== document.activeElement && messageField === document.activeElement && enquiryContainer !== document.activeElement && requestContainer !== document.activeElement && consentCheckBox !== document.activeElement) {
//         consentCheckBox.focus()  
//     }  else if(event.key === "Enter" && firstNameField !== document.activeElement && lastNameField !== document.activeElement && mailField !== document.activeElement && messageField !== document.activeElement && enquiryContainer !== document.activeElement && requestContainer !== document.activeElement && consentCheckBox === document.activeElement) {
//         submitBtn.focus();
//         event.preventDefault(); 
//     } 
// })
