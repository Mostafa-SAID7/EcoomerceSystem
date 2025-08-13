// fetch("https://dummyjson.com/products")
//   .then((res) => res.json())
//   .then((data) => {
//     if (!Array.isArray(data)) {
//       if (data && Array.isArray(data.products)) {
//         data = data.products;
//       } else {
//         console.log(data);
//       }
//     }
//     const productContainer = document.getElementById("product-container");
//     data.forEach((product) => {

//       const cardDiv = document.createElement("div");
//       cardDiv.classList.add("col-md-4", "mb-3");

//       cardDiv.innerHTML = `
//         <div class="card" style="box-shadow:10px 10px 15px gray">
//           <img src="${product.images[0]}" class="card-img-top" width="300px" height="150px" alt="${product.title}">
//   <div class="card-body">
//     <h5 class="card-title">${product.title}</h5>
//     <p class="card-text">${product.description}</p>
//     <div class="buy">
//       <p class="card-price">$${product.price}</p>
//           <a class="addcart" href="addcart.html">Add To Card</a></div>
//     <a  href="details.html?id=${product.id}" class="btn btn-primary col-12 ">Details</a>
//   </div>
//         </div>
//         `;
//       productContainer.appendChild(cardDiv);
//     });
//   });


// end code 1 for fetching just data 
// -------------------------------------------------------------------
// start code 2 feching and pagination and btns nxt&prev

var apiurl = "https://dummyjson.com/products";
var productData = [];



let itemsPerPage = 4;
let currentPage = 1;

async function dataTable() {
  await productTable();

  const pages = [];
  
  for (let i = 0; i <= Math.ceil(productData.lenght / itemsPerPage); i++) 
    {pages.push(i);}

  const indexOfLastPage = currentPage * itemsPerPage;
  const indexOfFirstPage = indexOfLastPage - itemsPerPage;
  const currentItems = productData.slice(indexOfFirstPage, indexOfLastPage);
 
  document.getElementById("product-container").innerHTML = currentItems.map(
      products => `
         <div class="card" style="box-shadow:10px 10px 15px gray; width: 18rem;">
           <img src=${products.images[0]} class="card-img-top" width="300px" height="150px" alt="${products.title}">
            <div class="card-body">
              <h5 class="card-title">${products.title}</h5>
             
              <div class="buy">
                <p class="card-price">$${products.price}</p>
                <a class="addcart" href="addcart.html">Add To Card</a>
              </div>
              <div class="d-grid gap-2  d-flex ">
                <a  href="details.html?id=${products.id}" class="btn btn-primary  col-6 ">Details</a>
                <button class="btn btn-dark col-6" type="button">${products.category}</button>
              </div>
            </div>
         </div>
  
  `
    )
    .join("");
}

dataTable();

// nxt btn && prev Btn
const prevBtn = () => {
  if ((currentPage - 1) * itemsPerPage) {
    currentPage--;
    dataTable();
  }
};


const nxtBtn = () => {
  if ((currentPage * itemsPerPage) / productData.lenght) {
    currentPage++;
    dataTable();
  }
};

document.getElementById("prevBtn").addEventListener("click", prevBtn, false);
document.getElementById("nxtBtn").addEventListener("click", nxtBtn, false);

// end Btns

async function productTable() {
  const data = await fetch(apiurl);
  const res = await data.json();
  productData = res.products;
}
// end code 2
// ------------------------------------------------------------------------------
// 