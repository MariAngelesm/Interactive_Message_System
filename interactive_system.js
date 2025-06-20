document.getElementById("data-entry-button").addEventListener("click", (event) => {
    event.preventDefault();
    infoRequest();//function invocation
  });

function infoRequest() {
//get user info
  console.log("Welcome to the Interactive Message System😀");
  let userName = prompt("Please enter your name:");
  let userAge = parseInt(prompt("Please enter your age:")); //converting variable into a number
  validator(userAge, userName); //function invocation
  let result = [userName, userAge];
  return result;
}

function validator(age, userName) {
  // logic validation
  if (isNaN(age) || age < 1) {
    console.error("Error❌​: please enter a valid age (only numbers admitted)");
    alert("The age must be a number above 1 (only numeric values)");
    return false;
  } else if (age < 18) {
    alert(`Hi ${userName}, You are underage. Keep learning and enjoying code.`);
    return false;
  } else if (age >= 18) {
    alert(
      `Hi ${userName}, You are of legal age, get ready for amazing opportunities in the development's world!​​`
    );
  }
  return true;
}
