const data_storage= JSON.parse(localStorage.getItem("user_info"));
const appear = document.querySelector(".user-info");
appear.innerHTML = `        <img src="./asset/img/download.jpg" alt="User Avatar">
        <h2>User Information</h2>
        <p><span class="icon"></span><strong>Username:</strong> ${data_storage[0].username}</p><span><i class="fa-solid fa-pen-to-square"></i></span>
        <p><span class="icon"></span><strong>Dateofbirth:</strong>${data_storage[0].dateOfBirth}</p><span>
        <p><span class="icon"></span><strong>Address:</strong>${data_storage[0].address}</p><span><i class="fa-solid fa-pen-to-square"></i></span>
        <p><span class="icon"></span><strong>Fullname:</strong>${data_storage[0].fullname}</p><span>
        <a href="./main.html" class="a_btn"><button class="p_btn" style="color: white;">BACK</button></a>`

