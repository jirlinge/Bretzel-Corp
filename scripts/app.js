const cardContainer = document.getElementById("article-cards-container");

laptopProducts.forEach(article => {
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
      <button class="article-tocart-btn">Ajouter au panier</button>
    </div>
      `);
});
