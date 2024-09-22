const inputtitle = document.querySelector("#title");
const inputdes = document.querySelector("#des");
const inputimg = document.querySelector("#img");
const inputisview = document.querySelector("#isview");
const url_pr ="https://jsa37-api-bca8a1a0f23b.herokuapp.com/api/tuanthanh/products";
const add = document.querySelector(".add");
add.addEventListener("click", () => handleCreateAPIUser(url_pr));

async function handleCreateAPIUser(url) {
    const data_storage = JSON.parse(localStorage.getItem("user_info"));
    let product_box = {
        "title": inputtitle.value,
        "des": inputdes.value,
        "img": inputimg.value,
        "isView": inputisview.value,
        "userId": data_storage[0].id
    };

    try {
        const data = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(product_box),
        });

        const res = await data.json();
        console.log(res);
    } catch (error) {
        console.error(error);
    } finally {
        console.log("Đã hoàn thành");
    }
}