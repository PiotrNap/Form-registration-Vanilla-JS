const form = document.getElementById("form-registration");
const userName = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

// Show input error message
function showError(input, message) {
  const formControl = input.parentElement;
  formControl.className = "form-control error";
  const small = formControl.querySelector("small");
  small.innerText = message;
}

// Show Success Outline
function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
}

// Check email is valid
function checkEmail(input) {
  const valid = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (valid.test(input.value.trim())) {
    showSuccess(input);
  } else {
    showError(input, "Email is not valid");
  }
}

// Check password confirmation
function checkPassword(input1, input2) {
  if (input1.value !== input2.value) {
    showError(input2, "Password do not match!");
  }
}

// Check required fields
function checkRequired(inputArr) {
  inputArr.forEach(function(input) {
    if (input.value.trim() === "") {
      showError(input, `${getFieldName(input)} is required.`);
    } else {
      showSuccess(input);
    }
  });
}

// Check input length
function checkLength(input, min, max) {
  if (input.value.length < min) {
    showError(
      input,
      `${getFieldName(input)} must to be at least ${min} characters.`
    );
  } else if (input.value.length > min) {
    showSuccess(
      input,
      `${getFieldName(input)} must be less than ${max} characters.`
    );
  }
}

// Get field name to UpperCase
function getFieldName(input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

//

// Event Listeners
form.addEventListener("submit", function(e) {
  e.preventDefault();

  checkRequired([userName, email, password, password2]);
  checkLength(username, 3, 12);
  checkLength(password, 6, 25);
  checkEmail(email);
  checkPassword(password, password2);

  //   if (userName.value === "") {
  //     showError(username, "Username is required");
  //   } else {
  //     showSuccess(userName);
  //   }

  //   if (email.value === "") {
  //     showError(email, "Email is required");
  //   } else if (!isValidEmail(email.value)) {
  //     showError(email, "Email isn't valid");
  //   } else {
  //     showSuccess(email);
  //   }

  //   if (password.value === "") {
  //     showError(password, "Password is required");
  //   } else {
  //     showSuccess(password);
  //   }

  //   if (password2.value === "") {
  //     showError(password2, "Confirm password");
  //   } else {
  //     showSuccess(password2);
  //   }
});
