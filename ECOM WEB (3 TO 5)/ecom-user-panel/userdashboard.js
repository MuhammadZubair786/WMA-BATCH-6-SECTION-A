function checkAuth() {
  var name = document.getElementById("name");
  var userimage = document.getElementById("userimage");

  var userId = localStorage.getItem("UserId");

  if (userId == undefined || userId == null) {
    //not user login =>access dashboard
    window.location.href = "../login.html";
  } else {
    name.innerText = localStorage.getItem("Username");
    userimage.src = localStorage.getItem("userImageUrl");
    userimage.style.width = "80px";
    userimage.style.height = "80px";
    userimage.style.borderRadius = "50%";
  }
}
checkAuth();

var category = document.getElementById("category");

async function getAlLCategory() {
  category.innerHTML = "";
  await firebase
    .database()
    .ref("CATGEORY")
    .on("value", (snap) => {
      var data = snap.val();
      data = Object.values(data);
      category.innerHTML = "";
      for (var value of data) {
        console.log(value);
        category.innerHTML += `
      <div class='col col-lg-4 col-md-4 col-sm-6 col-12 mt-3'>
      <div class="card" >
  <div class="card-body">
    <h5 class="card-title">${value["catName"]}</h5>
   <a href="./products.html?categoryname=${value["catName"]}&cat_key=${value["catKey"]}" class="btn btn-primary">view products</a>
  </div>
</div>
      </div>
        
        `;
      }
    });
}

getAlLCategory();

function logout() {
  // localStorage.removeItem("UserId")
  // localStorage.removeItem("name")

  localStorage.clear();

  window.location.href = "../login.html";
}
