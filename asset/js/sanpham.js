let url_pr =
  "https://jsa37-api-bca8a1a0f23b.herokuapp.com/api/tuanthanh/products";
let products_body = document.querySelector(".product_mn");

async function handleGetAPIUser(url) {
  try {
    const data = await fetch(url);
    const res = await data.json();
    for (i = 0; i < res.length; i++) {
        if(1 == res[i].userId){
            products_body.innerHTML += `<tr>
            <td>${i+1}</td>
            <td>${res[i].title}</td>
            <td>${res[i].des}</td>
            <td>${res[i].isView}</td>
            <td id="ip_${res[i].id}"> <i class="fa-solid fa-pen-to-square" onclick="handleUpdateAPIUser("${url_pr}",${res[i].id},param)"></i> &nbsp <i class="fa-solid fa-delete-left" onclick = "handleDeleteAPIUser(${url_pr},1)"></i></td>
          </tr>`;
        }

    }
    console.log(res);
  } catch (error) {
    console.error(error);
  } finally {
    console.log("Đã hoàn thành");
  }
}
handleGetAPIUser(url_pr);


async function handleUpdateAPIUser(url, id, params) {
    const td_change = document.querySelector(`ip_${id}`)
    console.log(td_change)
    try {
        const data = await fetch(url + '/' + id, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(params),
        });
        

    } catch (error) {
        console.error(error)
    } finally {
        console.log("Đã hoàn thành")
    }
}
 

async function handleDeleteAPIUser(url, id) {
    try {
        const response = await fetch(url + "/" + id, {
            method: 'DELETE'
        })

        if (!response.ok) {
            throw new Error('Xóa không thành công');
        }

        console.log("Xóa thành công")
        return response.json();
    } catch (error) {
        console.error(error)
    } finally {
        console.log("Đã hoàn thành")
    }
}
