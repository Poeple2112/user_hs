let fullname = document.querySelector("#fullname");
let username = document.querySelector("#username");
let birthday = document.querySelector("#birthday");
let address = document.querySelector("#address");
let password = document.querySelector("#password");
let error_check = document.querySelector("#error");
let confirm_ps = document.querySelector("#confirm");
let fullname_rg =
  /(^[A-Za-z]{3,16})([ ]{0,1})([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})/;
let username_rg = /^[0-9A-Za-z]{6,16}$/;
// let birthday_rg = /(([1-2][0-9])|([1-9])|(3[0-1]))((1[0-2])|([1-9]))[0-9]{4}/g;
let password_rg = /^(?=.*?[0-9])(?=.*?[A-Za-z]).{8,32}$/;
console.log(birthday.value);
let url_us = "https://jsa37-api-bca8a1a0f23b.herokuapp.com/api/tuanthanh/users";

box = [];
// local
// if (localStorage.getItem("user_info") == null) {
   localStorage.setItem("user_info", JSON.stringify(box));
// }

const data_storage = JSON.parse(localStorage.getItem("user_info"));



function getusers() {
  event.preventDefault();
  //   console.log(user_list);//
  if (fullname.value.trim() == "") {
    error_check.innerText = "Note: Thiếu fullname";
  } else if (username.value.trim() == "") {
    error_check.innerText = "Note: Thiếu username";
  } else if (birthday.value == "") {
    error_check.innerText = "Note: Thiếu birthday";
  } else if (address.value == "") {
    error_check.innerText = "Note: Thiếu address";
  } else if (password.value.trim() == "") {
    error_check.innerText = "Note: Thiếu password";
  } else if (confirm_ps.value.trim() == "") {
    error_check.innerText = "Note: Thiếu confirm password";
  } else {
    if (fullname_rg.test(fullname.value.trim())) {
      if (username_rg.test(username.value.trim())) {
        if (password_rg.test(password.value.trim())) {
          if (password.value.trim() == confirm_ps.value.trim()) {
            handleGetAPIUser(url_us);
          } else {
            error_check.innerText = "Note: confirm không trùng khớp";
          }
        } else {
          error_check.innerText =
            "Note:  password tối thiểu 8 kí tự, gồm chữ hoa, thường, số và kí tự khác";
        }
      } else {
        error_check.innerText = "Note: username không hợp lệ";
      }
    } else {
      error_check.innerText = "Note: fullname không gồm số và trên 8 ký tự";
    }
  }
}

async function Callapi(url, params) {
  try {
    const data = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(params),
    });

    const res = await data.json();
    console.log(res);
  } catch (error) {
    console.error(error);
  } finally {
    console.log("Đã hoàn thành putt");
    window.location.href = "login.html";
    // res.push(params);
  }
}

async function handleGetAPIUser(url) {
  try {
    const data = await fetch(url);
    const res = await data.json();
    for (i = 0; i < res.length; i++) {
      if (res[i].username == username.value) {
        error_check.innerText = "Username đã tồn tại";
        break;
      } else {
        
        create()
        break;
      }
    }

    console.log(res);
  } catch (error) {
    console.error(error);
  } finally {
    console.log("Đã hoàn thành");
  }
}
function create(){
  let user_box = {
              
    fullname: fullname.value.trim(),
    username: username.value.trim(),
    password: password.value.trim(),
    dateOfBirth: birthday.value,
    checkAdmin: false,
    address: address.value,
  };
  box.push(user_box);
  localStorage.setItem("user_info",JSON.stringify(box))
  Callapi(url_us, user_box);
}
