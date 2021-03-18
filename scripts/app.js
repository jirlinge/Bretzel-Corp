const cardContainer = document.getElementById("article-cards-container");
const modalCardContainer = document.getElementById("modal-cards-container");
const fullProductList = laptopProducts.concat(smartphoneProducts, mowerProducts, cameraProducts);

let cartItems = [];

function callContent(category){
  console.log("calling content for category : " + category);
  let data;
  switch (category) {
    case 'laptop':
      data = laptopProducts
      break;
    case 'smartphone':
      data = smartphoneProducts;
      break;
    case 'mower':
      data = mowerProducts;
      break;
    case 'camera':
      data = cameraProducts;
      break;
    default:
      data = laptopProducts;
  }
  cardContainer.innerHTML = "";
  data.forEach(article => {
    cardContainer.insertAdjacentHTML('beforeend', `
      <div class="article-card-container">
        <div class="article-picture-container">
          <img src="product_images/${article.pic_url[0]}" alt="tech product" title="tech product">
        </div>
        <div class="article-desc-price-container">
          <div class="article-desc-container">
            <h3 class="article-product-title">${article.product_name}</h3>
            <p class="article-product-description"></p>
          </div>
          <div class="article-pricetag-container">
            <div class="article-pricetag">${article.price} €</div>
          </div>
        </div>
        <button class="article-tocart-btn" onclick="addToCart(${article.id})">Ajouter au panier</button>
      </div>
      `);
  });
}

function addToCart(productId) {
  //document.getElementById("message").style.display="block";
  $("#message").slideToggle(500).delay(1000).fadeOut(1000);
  
  console.log(productId);
  let isDuplicate = false;
  for (let i = 0; i < cartItems.length; i++) {
    if (cartItems[i].id == productId) {
      cartItems[i].quantity++;
      isDuplicate = true;
      break; // found existing item so quit out of the loop
    }
  }
  if (!isDuplicate) cartItems.push({id: productId, quantity: 1});
  console.log(cartItems);
}

function increaseQuantity(productId) {
  console.log("increaseQuantity() id is : " + productId);
  const targetProduct = cartItems.find(product => product.id == productId);
  targetProduct.quantity++;
  callCartContent();
}

function decreaseQuantity(productID) {
  const targetProduct = cartItems.find(product => product.id == productID);
  if (targetProduct.quantity > 0) targetProduct.quantity--;
  callCartContent();
}

function removeItem(productID) {
  const targetIndex = cartItems.findIndex(product => product.id == productID);
  cartItems.splice(targetIndex, 1);
  callCartContent();
}

function callCartContent(){
  modalCardContainer.innerHTML = "";
  cartItems.forEach(article => {
    const found = fullProductList.find(product => product.id == article.id);
    console.log("found product is : " + found.pic_url);
    modalCardContainer.insertAdjacentHTML('beforeend', `
      <div class="modal-card-container">
        <div class="modal-card-picbanner">
          <img src="product_images/${found.pic_url[0]}" alt="image produit" title="image produit">
          <h3>${found.product_name}</h3>
          <div class="modal-card-quantity">${article.quantity}</div>
        </div>
        <div class="modal-card-interaction">
          <div class="modal-card-pricetag">${article.price}</div>
          <button class="modal-card-minus-btn" onclick="increaseQuantity(${article.id})">+</button>
          <button class="modal-card-plus-btn" onclick="decreaseQuantity(${article.id})">-</button>
          <button class="modal-card-close-btn" onclick="removeItem(${article.id})">x</button>
        </div>
      </div>
    `
    );
    });
  }

callContent();





