//console.log(emailValidation("priyamail.com"));
//console.log(passwordValidation("Priya@123"));
//console.log(mobileValidation("+919688622860"));

//console.log(nameValidation("hj'"));
//console.log(aadharValidation("123456789012")); 
//console.log(pincodeValidation("123456"));
// lat and lngDecimal format
//console.log(latitudeValidation("10.922956"));       // true
//console.log(longitudeValidation("78.740536"));      // true

// DMS format
//console.log(latitudeValidation("10°55'22.64\"N"));  // true
//console.log(longitudeValidation("78°44'25.93\"E")); // true

//console.log(latitudeValidation("91°00'00\"N"));     // false 
//console.log(longitudeValidation("181°00'00\"E"));   //false

//gst
//console.log(gstValidation("22ABCDE1234F1Z5")); //true
//console.log(gstValidation("22ABCDE1234F1Z")); //false

//date

//console.log(dateValidation("31-12-2024")); // true (DD-MM-YYYY)
//console.log(dateValidation("12-31-2024")); // true (MM-DD-YYYY)
//console.log(dateValidation("2024-12-31")); // true (YYYY-MM-DD)
//console.log(dateValidation("31/12/2024")); // true (DD/MM/YYYY)
//console.log(dateValidation("12/31/2024")); // true (MM/DD/YYYY)
//console.log(dateValidation("2024/12/31")); // true (YYYY/MM/DD)
//console.log(dateValidation("2024-13-31")); // false (invalid date)

export function emailValidation(email) {
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

export function passwordValidation(password) {
    var passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return passwordRegex.test(password);
}
export function confirmPasswordValidation(password, confirmPassword) {
    return password == confirmPassword;
  }
  

export function mobileValidation(mobile) {
    // Remove any spaces from the input before validating
    mobile = mobile.trim();

    // Validate mobile with optional country code (e.g., +91 for India or without country code)
    const mobileRegex = /^(?:\+?\d{1,3})?(\d{10})$/;

    return mobileRegex.test(mobile);
}
export function otpValidation(otp) {
    // Remove any spaces from the input before validating
    otp = otp.trim();

    // Validate mobile with optional country code (e.g., +91 for India or without country code)
    const otpRegex =  /^\d{6}$/;

    return otpRegex.test(otp);
}

export function whatsappValidation(mobile) {
    var mobileRegex = /^\+?[1-9]\d{1,14}$/;
    return mobileRegex.test(mobile);
}

//here  i want name validation , if i want to enter more than 2 charecter and dont allow special charectors , its allow only '
export function nameValidation(name) {
    var nameRegex = /^[a-zA-Z']{3,}$/;
    return nameRegex.test(name);
}

// here i want to validate 6 digits pincode
export function pincodeValidation(pincode) {
    var pincodeRegex = /^\d{6}$/;
    return pincodeRegex.test(pincode);
}

//here i want date validation , if i give 31-12-2024, 12-31-2024, 2024-12-31  its accept and store database format validation
export function dateValidation(date) {
    var dateRegex = /^(0?[1-9]|[12][0-9]|3[01])[-\/](0?[1-9]|1[012])[-\/]\d{4}$|^(0?[1-9]|1[012])[-\/](0?[1-9]|[12][0-9]|3[01])[-\/]\d{4}$|^\d{4}[-\/](0?[1-9]|1[012])[-\/](0?[1-9]|[12][0-9]|3[01])$/;
    return dateRegex.test(date);
}


//here i want aadhar card num validation
export function aadharValidation(aadhar) {
    var aadharRegex = /^\d{12}$/;
    return aadharRegex.test(aadhar);
}

//here i want pancard validation
export function panValidation(pan) {
    var panRegex = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/;
    return panRegex.test(pan);
}

//here  i want latitude dms amd decimal validation
export function latitudeValidation(latitude) {
    var decimalRegex = /^[-+]?([1-8]?\d(\.\d+)?|90(\.0+)?)$/;
    var dmsRegex = /^(\d{1,2})°(\d{1,2})'(\d{1,2}(\.\d+)?)["]?[NS]?$/;
    return decimalRegex.test(latitude) || dmsRegex.test(latitude);
}


export function longitudeValidation(longitude) {
    var decimalRegex = /^[-+]?((1[0-7]\d|[1-9]?\d)(\.\d+)?|180(\.0+)?)$/;
    var dmsRegex = /^(\d{1,3})°(\d{1,2})'(\d{1,2}(\.\d+)?)["]?[EW]?$/;
    return decimalRegex.test(longitude) || dmsRegex.test(longitude);
}

//here i want gst validation
export function gstValidation(gst) {
    var gstRegex = /^\d{2}[A-Z]{5}\d{4}[A-Z]{1}\d[Z]{1}[A-Z\d]{1}$/;
    return gstRegex.test(gst);
}

// Door Number Validation (Alphanumeric and '/')
export function doorNumberValidation(doorNumber) {
    return /^[A-Za-z0-9/ ]+$/.test(doorNumber);
}

// Name Validation (At least 2 characters)
export function apartValidation(name) {
    return name.trim().length >= 5;
}

// Address Validation (At least 10 characters)
export function addressValidation(address) {
    return address.trim().length >= 10;
}

// Landmark Validation (Optional, but at least 3 characters if provided)
export function landmarkValidation(landmark) {
    return !landmark || landmark.trim().length >= 3;
}

export function imageValidation(file) {
    if (!file || !file.name) return false; // Ensure a file is selected and has a name
  
    const validExtensionsRegex = /\.(jpeg|jpg|png|gif)$/i; // Regular expression for valid image extensions
    const maxSize = 5 * 1024 * 1024; // Set maximum file size to 5 MB
  
    return validExtensionsRegex.test(file.name) && file.size <= maxSize; // Validate both extension and size
}
 
export function documentValidation(file) {
    if (!file || !file.name) return false; // Ensure a file is selected and has a name

    const validExtensionsRegex = /\.(pdf|txt|docx?|xlsx?)$/i; // Valid extensions
    const maxSize = 10 * 1024 * 1024; // Maximum file size: 10 MB

    return validExtensionsRegex.test(file.name) && file.size <= maxSize; // Validate extension and size
}

export function yearValidation(yearsOfExperience) {
    // Remove any spaces from the input before validating
    yearsOfExperience = yearsOfExperience.trim();

    // Validate 1 or 2 digit numbers only
    const yearsOfExperienceRegex = /^\d{1,2}$/;

    return yearsOfExperienceRegex.test(yearsOfExperience);
}

// customize page validation this 

export const validateSelections = (pujaMode, priestSelection, samagri) => {
    const pujaModeSelected = pujaMode.atHome || pujaMode.atTemple || pujaMode.virtual;
    const priestSelected = priestSelection.autoAssign || priestSelection.panditSharma || priestSelection.panditRamcharan;
    const samagriSelected = samagri.arrangeMyself;
 
    const errors = {};
 
    if (!pujaModeSelected) {
      errors.pujaMode = "Please select at least one option from Puja Mode.";
    }
 
    if (!priestSelected) {
      errors.priestSelection = "Please select at least one option from Priest Selection.";
    }
 
    if (!samagriSelected) {
      errors.samagri = "Please select at least one option from Samagri.";
    }
 
    return errors;
  };
  
  
  // dateTimeValidation.js
  export const validateDateTime = (selectedDate, selectedTime) => {
    const errors = {};
  
    if (!selectedDate) {
      errors.date = "Please select a date";
    }
  
    if (!selectedTime) {
      errors.time = "Please select a time slot";
    }
  
    return {
      isValid: Object.keys(errors).length === 0,
      errors
    };
  };