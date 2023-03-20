
const DOM = {
  productName: null,
  productPrice: null,
  category: null,
  linkForPic: null,

  ordersTableBody: null,
};

let orders = [];

function init() {
  DOM.productName = document.querySelector("#productName");
  DOM.productPrice = document.querySelector("#productPrice");
  DOM.category = document.querySelector("#category");
  DOM.linkForPic = document.querySelector("#linkForPic");

  DOM.ordersTableBody = document.querySelector("#ordersTable tbody");


  //   making onclick="addNNewOrder()" from JS:
  //   const addNewOrderButton = document.getElementById("addNewOrderButton");
  const addNewOrderButton = document.querySelector("#addNewOrderButton");
  addNewOrderButton.addEventListener("click", addNewOrderFn);

   const clearTableButton = document.querySelector("#clearTable");
   clearTableButton.addEventListener("click", clearTableFn);


  function addNewOrderFn(event) {
    // console.log(event); // event
    // console.log(this); // button!
    orders.push(new Order(DOM.productName.value, DOM.productPrice.value, 
    DOM.category.value, DOM.linkForPic.value));
    console.log(DOM.ordersTableBody);
     draw(orders);
    //clearForm();
  }
}

function clearTableFn() {
  DOM.ordersTableBody.innerHTML = "";
}


function clearForm() {
  DOM.productName.value = "";
  DOM.productPrice.value = "";
  DOM.category.value = "";
  DOM.linkForPic.value = "";
}



function draw(ordersArray) {
  if (Array.isArray(ordersArray) === false) return;
  // document.createElement!
  // DOM.ordersTableBody.append
  // DOM.ordersTableBody > tr > td,td,td,td
  clearTableFn();
  for (let index = 0; index < ordersArray.length; index++) {
    const currentOrder = ordersArray[index];
    // create row
    const tableRow = document.createElement("tr");
    // create email column
    const tdProductName = document.createElement("td");
    tdProductName.innerText = currentOrder.productName;
    // create numberOfSeats column
    const tdProductPrice = document.createElement("td");
    tdProductPrice.innerText = currentOrder.productPrice;
    //create numberOfSeats column
    const tdCategory = document.createElement("td");
    tdCategory.innerText = currentOrder.category;

    // // const tdLinkForPicCell = document.createElement("td");
    // const tdLinkForPic = document.createElement("img");
    // tdLinkForPic.src =currentOrder.linkForPic;
    // tdLinkForPic.height = 100;
    // tdLinkForPic.width = 100;

   const tdLinkForPic = document.createElement("td");
   const imgSrc = document.createElement("img");
    imgSrc.src= currentOrder.linkForPic;
    imgSrc.height = 100;
    imgSrc.width = 100;
    tdLinkForPic.append(imgSrc);
    //create Button column
    const tdActions = document.createElement("td");
    const buttonDelete = document.createElement("button");
    buttonDelete.classList.add("btn", "btn-danger");
    buttonDelete.innerText = "X";
    tdActions.append(buttonDelete);
    buttonDelete.addEventListener("click", function () {
    const idToDelete = currentOrder.orderNumber;

    for (let index = 0; index < orders.length; index++) {
      if (orders[index].orderNumber === idToDelete) {
        orders.splice(index, 1);
        
        draw(orders);
        
      }
    }
    
    });

    tableRow.append(tdProductName, tdProductPrice,
    tdCategory, tdLinkForPic, tdActions); // tr>td,td,td,td
  DOM.ordersTableBody.append(tableRow); //table > tbody > tr

  }


}


init();
