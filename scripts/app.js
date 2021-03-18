const cardContainer = document.getElementById("article-cards-container");

let cartItems = [];

function callContent(category){
  console.log("calling content for category : " + category);
  let data;
  switch (category) {
    case 'laptop':
      data = laptopProducts;
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

callContent();





