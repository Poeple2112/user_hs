const username = document.querySelector("#username");
const password = document.querySelector("#password");
const error = document.querySelector("#error");
let check_admin = false;
async function check(){
    event.preventDefault();
    const user_data = await fetch(
      "https://jsa37-api-bca8a1a0f23b.herokuapp.com/api/tuanthanh/users",
      {
        method: "GET",
      })
      const user_list =  await user_data.json()

    let finding = user_list.find(item => item.username == username.value.trim())
    let ps = finding.password;
    // console.log(finding)
    if(finding == undefined){
        error.innerText ="Note: username không tồn tại"
    }else if (ps == password.value.trim() ){
        error.innerText="Note: đăng nhập thành công"
        window.location.href="main.html"
    }

}