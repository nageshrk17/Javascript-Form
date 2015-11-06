 // Function to change the background pictures automatically after every 6 seconds.

 function run(interval, frames) {
     var int = 1;

     function func() {
         document.body.id = "b" + int;
         int++;
         if (int === frames) {
             int = 1;
         }
     }

     var swap = window.setInterval(func, interval);
 }

 run(6000, 12); //milliseconds, frames

 // Function to Select only One Checkbox.

 var previousCheckId;

 function toggle(chkBox) {
     if (chkBox.checked) {
         if (previousCheckId) {
             document.getElementById(previousCheckId).checked = false;
         }
         previousCheckId = chkBox.getAttribute('id');
     }
 }

 // Function for Dynamic Drop Down List 

 function dynamicdropdown(listindex) {
     document.getElementById("subcategory").length = 0;
     switch (listindex) {
         case "IT":
             document.getElementById("subcategory").options[0] = new Option("Please select Your Expertise", "");
             document.getElementById("subcategory").options[1] = new Option("IT consultant", "IT consultant");
             document.getElementById("subcategory").options[2] = new Option("Database administrator", "Database administrator");
             document.getElementById("subcategory").options[3] = new Option("Network engineer", "Network engineer");
             document.getElementById("subcategory").options[4] = new Option("Web developer", "Web developer");
             document.getElementById("subcategory").options[5] = new Option("Others", "Others");
             break;

         case "Bank":
             document.getElementById("subcategory").options[0] = new Option("Please select Your Expertise", "");
             document.getElementById("subcategory").options[1] = new Option("Retail banker", "Retail banker");
             document.getElementById("subcategory").options[2] = new Option("Financial Analyst", "Financial Analyst");
             document.getElementById("subcategory").options[3] = new Option("Clerk", "Clerk");
             document.getElementById("subcategory").options[4] = new Option("Manager", "Manager");
             document.getElementById("subcategory").options[5] = new Option("Others", "Others");
             break;

         case "Business":
             document.getElementById("subcategory").options[0] = new Option("Please select Your Expertise", "");
             document.getElementById("subcategory").options[1] = new Option(" Manufacturer", " Manufacturer");
             document.getElementById("subcategory").options[2] = new Option("Franchise", "Franchise");
             document.getElementById("subcategory").options[3] = new Option("Landlord", "Landlord");
             document.getElementById("subcategory").options[4] = new Option("Others", "Others");
             break;

     }
     return true;
 }

 // Function to Validate the Form.

 function validate(form) {
     var errors = [];
     var check_err = 0;

     // Validation for User Name

     var name = document.getElementById('txtUserName');
     var nameReg = /^[a-zA-Z-,]+(\s{0,1}[a-zA-Z-, ])*$/;

     if (!nameReg.test(name.value)) {
         errors[errors.length] = "Please enter a valid User Name.";
     }

     // Validation for E-mail Address.

     var email = document.getElementById('txtEmail');
     var emailReg = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

     if (!emailReg.test(email.value)) {
         errors[errors.length] = "Please enter a valid email address.";
     }

     // Validation for Radio Button.

     var radios = document.getElementsByName('room');
     if (radios[0].checked == true) {

     } else if (radios[1].checked == true) {

     } else if (radios[2].checked == true) {

     } else {
         errors[errors.length] = "Please Click on Room Type.";
     }

     // Validation for Dynamic Drop Down List

     if (document.getElementById("category").value == "") {
         errors[errors.length] = "Please select the Area of Occupation.";
     }

     if (document.getElementById("subcategory").value == "") {
         errors[errors.length] = "Please select the Area of Expertise.";
     }

     // Validation for Select List.

     if (document.getElementById("checkin").value == "") {
         errors[errors.length] = "Please select the Check In Time.";
     }

     if (document.getElementById("checkout").value == "") {
         errors[errors.length] = "Please select the Check Out Time.";
     }

     if (document.getElementById("adults").value == "") {
         errors[errors.length] = "Please select the number of Adults.";
     }

     if (document.getElementById("childern").value == "") {
         errors[errors.length] = "Please select the number of Childern.";
     }

     // Validation for CheckBox.

     if (document.form.chkBox1.checked) {
         check_err = check_err + 1;
     }

     if (document.form.chkBox2.checked) {
         check_err = check_err + 1;
     }
     if (check_err == 0) {
         errors[errors.length] = "Please select the Mode of Payment.";
     }

     // Validation for Textarea.

     var request = document.getElementById('txtrequest');
     var requestReg = /^[a-zA-Z-,]+(\s{0,1}[a-zA-Z-, ,.])*$/;

     if (!requestReg.test(request.value)) {
         errors[errors.length] = "Please enter a valid Special Requests.";
     }
     
     if (errors.length > 0) {
         reportErrors(errors);
         return false;
     }
     return true;
 }

 // Function to Popup the Errors

 function reportErrors(errors) {
     var msg = "There were some problems...\n";
     var numError;
     for (var i = 0; i < errors.length; i++) {
         numError = i + 1;
         msg += "\n" + numError + ". " + errors[i] + "\n";
     }
     alert(msg);
 }
