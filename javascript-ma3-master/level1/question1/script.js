//Use RegEx to validate form
function validate() {
	var name = document.getElementById("name")
	var namePattern = /^[a-zA-Z ]/; //Characters and whitespace
	if (namePattern.test(name.value) == false) {
		return alert("Name is not filled out!")
	}
	var lastName = document.getElementById("lastname")
	var LastnamePattern = /^[a-zA-Z ]/; // Only characters
	if (LastnamePattern.test(lastname.value) == false) {
		return alert("Last name is not filled out!")
	}
	var telephone = document.getElementById("telephone")
	var telephonePattern = /^\d{8}$/; // Only digits, and length must be equal to eight
	if (telephonePattern.test(telephone.value) == false) {
		return alert("Telephone is not valid!")
	}
	var email = document.getElementById("email")
	var emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; // Matches email pattern. (Text/numbers and some special characters + @ + text/numbers + . + text/numbers with length between 2 and 3)
	if (emailPattern.test(email.value) == false) {
		return alert("Email is not valid!")
	}
}