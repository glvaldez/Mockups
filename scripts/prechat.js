$(document).ready(function() {

	var phonePattern = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;

	$('input:text').focus(
    function(){
        $(this).css({'background-color' : 'rgb(234,250,213)'});
    });

    $('input:text').blur(
    function(){
        $(this).css({'background-color' : 'rgb(255,255,255)'});
    });

    $('textarea').focus(
    function(){
        $(this).css({'background-color' : 'rgb(234,250,213)'});
    });

    $('textarea').blur(
    function(){
        $(this).css({'background-color' : 'rgb(255,255,255)'});
    });

	// the handler for the submit event of the form
	// executed when the submit button is clicked
	$("#Form").submit(
		function(event) {
			var isValid = true;
			var phoneValid = true;
			
			// validate the name entry
			var name = $('#name').val().trim();
			if (name == "") {
				$("#name").next().text("Full Name is a required field.");
				isValid = false;
			} 
			else {
				$("#name").val(name);
				$("#name").next().text("");
			}

			// validate the phone entry with a regular expression
			var phone = $("#phone").val();
			if (phone == "") { 
				$("#phone").next().text("Mobile Number is a required field.");
				isValid = false;
			} else if ( !phonePattern.test(phone) ) {
				$("#phone").next().text("Please enter a valid phone number.");
				isValid = false;
				phoneValid = false;

			} else {
				$("#email").next().text("");
			} 
			
			// Display errors if phone is wrong format
			if (phoneValid == false) {
				$('#phone').css({'backgroundColor':'red'});
			}

			// prevent the submission of the form if any entries are invalid 
			if (isValid == false) {
				event.preventDefault();		
				//$("#Form").hide();
      			//document.getElementById("have-used").style.display="block";

			}
			else{
				$("#Form").hide();
				//$('#Success').html("Congratulations!! You have reached the chat agent.");
			}
		} // end function
	);	// end submit
}); // end ready