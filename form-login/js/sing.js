

const inputUsernameRegister = document.querySelector(".form-input");
const inputEmailRegister = document.querySelector(".form-input");
const inputPasswordRegister = document.querySelector(".form-input-me");
const inputconfirmpasswordRegister = document.querySelector(".form-input-me");
const btnRegister = document.querySelector(".login");

// validation form register and register user local storage

btnRegister.addEventListener("click", (e) => {
  e.preventDefault();
  if (
    inputUsernameRegister.value === "" ||
    inputPasswordRegister.value === ""
  ) {
    alert("vui lòng không để trống");
  } else {
    // array user
    const user = {
      username: inputUsernameRegister.value,
      password: inputPasswordRegister.value,
    };
    let json = JSON.stringify(user);
    localStorage.setItem(inputUsernameRegister.value, json);
    alert("Đăng Ký Thành Công");
    window.location.href = "../html/đăng nhập.html";
  }
});


