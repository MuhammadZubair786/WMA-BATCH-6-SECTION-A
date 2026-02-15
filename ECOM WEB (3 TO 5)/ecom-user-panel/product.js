var productsName = new URLSearchParams(window.location.search);
console.log(productsName);
console.log(productsName.get("categoryname"));

var CategoryName = document.getElementById("cat_name");
CategoryName.innerText = `Category name : ${productsName.get("categoryname")}`;

async function getAllpRODUCTS() {
  var productname = productsName.get("categoryname");
  var products = document.getElementById("products");
  console.log(productname);
  await firebase
    .database()
    .ref("Products")
    .get()
    .then((snap) => {
      console.log(snap.val());
      //       if(snap.val()==null){
      //          products.innerHTML = `no product found in this category`;
      // return
      //       }

      var object = Object.values(snap.val());
      var check = false;

      for (var value of object) {
        if (value["productCat"] == productname) {
          check = true;
          console.log(value);
          products.innerHTML += `
          <div class='col col-lg-4 col-md-4 col-sm-6 col-12 mt-3'>
          <div class="card" >
  <img src=${value["productImage"]} class="card-img-top" alt="..." style="height:200px;object-fit:cover;">
  <div class="card-body">
    <h5 class="card-title">${value["productName"]}</h5>
    <p class="card-text">price : ${value["productPrice"]}</p>
    <a href="#" class="btn btn-primary">order now</a>
  </div>
</div>
          </div>
          `;
        }
      }

      if (check == false) {
        products.innerHTML = `no product found in this category`;
      }
    });
}

getAllpRODUCTS();
