let url_pr =
  "https://jsa37-api-bca8a1a0f23b.herokuapp.com/api/tuanthanh/products";
let products_body = document.querySelector(".product_mn");
box=[{
    "id": 1,
    "title": "Sản phẩm 1",
    "des": "Sản phẩm 1",
    "img": "Sản phẩm 1",
    "isView": "Sản phẩm 1",
    "userId": 1
  },
  {
    "id": 2,
    "title": "Sản phẩm 2",
    "des": "Sản phẩm 2",
    "img": "Sản phẩm 2",
    "isView": "Sản phẩm 2",
    "userId": 2
  },
  {
    "id": 3,
    "title": "Sản phẩm 3",
    "des": "Sản phẩm 3",
    "img": "Sản phẩm 3",
    "isView": "Sản phẩm 3",
    "userId": 3
  },
  {
    "id": 4,
    "title": "Sản phẩm 4",
    "des": "Sản phẩm 4",
    "img": "Sản phẩm 4",
    "isView": "Sản phẩm 4",
    "userId": 4
  },
  {
    "id": 5,
    "title": "Sản phẩm 5",
    "des": "Sản phẩm 5",
    "img": "Sản phẩm 5",
    "isView": "Sản phẩm 5",
    "userId": 5
  },
  {
    "id": 6,
    "title": "Sản phẩm 6",
    "des": "Sản phẩm 6",
    "img": "Sản phẩm 6",
    "isView": "Sản phẩm 6",
    "userId": 6
  },
  {
    "id": 7,
    "title": "Sản phẩm 7",
    "des": "Sản phẩm 7",
    "img": "Sản phẩm 7",
    "isView": "Sản phẩm 7",
    "userId": 7
  },
  {
    "id": 8,
    "title": "Sản phẩm 8",
    "des": "Sản phẩm 8",
    "img": "Sản phẩm 8",
    "isView": "Sản phẩm 8",
    "userId": 8
  },
  {
    "id": 9,
    "title": "Sản phẩm 9",
    "des": "Sản phẩm 9",
    "img": "Sản phẩm 9",
    "isView": "Sản phẩm 9",
    "userId": 9
  },
  {
    "id": 10,
    "title": "Sản phẩm 10",
    "des": "Sản phẩm 10",
    "img": "Sản phẩm 10",
    "isView": "Sản phẩm 10",
    "userId": 10
  }]

  async function handleCreateAPIUser(url, params) {
    try {
        const data = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(params),
        });

        const res = await data.json()
        console.log(res)
    } catch (error) {
        console.error(error)
    } finally {
        console.log("Đã hoàn thành")
    }
}

// for(item of box){
//     handleCreateAPIUser(url_pr,item);
// }

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
            <td id="ip_${res[i].id}"> <i class="fa-solid fa-pen-to-square" onclick="handleUpdateAPIUser("${url_pr}",${res[i].id},param)"></i> &nbsp <i class="fa-solid fa-delete-left" onclick = "handleDeleteAPIUser(${url_pr},${i+1})"></i></td>
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
handleGetAPIUser(url_pr)


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
   const kiemtra =confirm("Xác nhận lại");
    if(kiemtra){
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

}
