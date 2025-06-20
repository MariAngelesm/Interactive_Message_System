// Add a click event listener to the button with ID "data-entry-button"
document.getElementById("data-entry-button").addEventListener("click", (event) => {
    event.preventDefault();//controling submission behavior
    infoRequest();//Call the function to collect and validate user input
  });


function infoRequest() {
// Function to collect user information
  console.log("Welcome to the Interactive Message System😀");
// Prompt the user to enter their name
  let userName = prompt("Please enter your name:");
  if (!validateName(userName)) {
    alert("Invalid name. Please enter a name without numbers or empty spaces.");
    return;
  }  // Validate the name: it must not be empty or contain numbers
  let userAgeRaw = prompt("Please enter your age:"); // Prompt the user to enter their age
  let userAge = parseInt(userAgeRaw);   //  convert age to a number
  validator(userAge, userName,userAgeRaw); //function invocation
  let result = [userName, userAge];
  return result;
}

// Function to validate the name input
function validateName(name) {
  if (!name || name.trim() === "") {
    return false;
  }
  const hasNumber = /\d/.test(name); // Check if the name contains any digit
  return !hasNumber;  // Return true only if there are no digits
}

// Function to validate the age and show appropriate alerts
function validator(age, userName,originalInput) {
  const isNumericOnly = /^\d+$/.test(originalInput); // Check if the input is a pure numeric string (e.g. "18", not "18abc")
  if (!isNumericOnly || isNaN(age) || age < 1) {
    console.error("Error❌​: please enter a valid age (only numbers, no letters admitted)");
    alert("The age must be a number above 1 (only numeric values)");
    return false;  // logic validation -If the input is not a number or less than 1, show an error
  } else if (age < 18) {
    alert(`Hi ${userName}, You are underage. Keep learning and enjoying code.`);
    return false;
  } 
    alert(
      `Hi ${userName}, You are of legal age, get ready for amazing opportunities in the development's world!​​`);
  return true; // Return true if validation passed
}
