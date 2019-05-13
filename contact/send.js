console.log("Hello from the beginning");
var submitForm = document.getElementById("submitForm");
var firstNameIn = document.getElementById("firstNameInput");
var firstNameContainer = document.getElementById("firstNameDiv");
var lastName = document.getElementById("lastNameInput");
var email = document.getElementById("emailInput");
var emailContainer = document.getElementById("emailDiv");
var subject = document.getElementById("subjectInput");
var message = document.getElementById("messageInput");
var submitButton = document.getElementById("submitButton");
var successModal = document.getElementById("successModal");
var valid;

var nameRegex = "/^[a-z ,.'-]+$/i";
var emailRegex = "/^(([^<>()\[\]\\.,;:\s@\"]+(\.[^<>()\[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/";
console.log("Hello from the end of the variable declaration");
$(submitButton).click(function() {
	console.log("GET CLICKED");
	if (valid) {
		console.log("Valid");
		ajax();
		console.log("Successfully ajaxed");
	}
});

function regex(regex, input) {
	console.log("Regex Start");
	var pattern = new RegExp(regex);
	return pattern.test(input);
}

function ajax() {
	console.log("About to send");
	var request = $.ajax({
		url: "send.php",
		method: "POST",
		data: $(submitForm).serialize(),
	});
 
	request.done(function() {
		$(successModal).modal('show');
	});
	 
	request.fail(function(jqXHR, textStatus) {
		alert( "Request failed: " + textStatus );
	});
}

function validateInputChange(type){
	console.log("changed");
	
	switch(type) {
		case "firstNameChange":
			console.log("first NAMEYO");
			if (regex(nameRegex, firstNameIn.input)){
				console.log("Regex success");
				$(firstNameContainer).addClass("has-success");
				valid = true;
				console.log("Set valid to true");
			} else {
				console.log("Regex fail");
				$(firstNameContainer).addClass("has-error");
				valid = false;
				console.log("Set valid to false");
			}
		break;
		
		case "lastName":
		
		break;
		
		case "emailChange":
			console.log("Email YO");
			if (regex(emailRegex, emailInput)) {
				console.log("Regex success");
				$(emailContainer).addClass("has-success");
				valid = true;
				console.log("Set valid to true");
			} else {
				console.log("Regex fail");
				$(emailContainer).addClass("has-error");
				$(submitButton).addClass("disabled");
				valid = false;
				console.log("Set valid to false");
			}
		break;
	}
	console.log("validated");
}
