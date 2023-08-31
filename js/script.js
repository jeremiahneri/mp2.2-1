import{items} from './products.js';


window.onload = () => {
  let savedCartItems = localStorage.getItem("cartItems");
  if (savedCartItems) {
    cartItems = JSON.parse(savedCartItems);
    // updateCartCount();
    updateCartContent();
  }
};

// Showing the top products
let showItems = document.getElementById("show-top-products");
let cartItems = [];

items.forEach((product) =>{
  let createElement = document.createElement("div");
  createElement.classList.add("card", "swiper-slide", "text-center", "custom-card");
  createElement.innerHTML = `
  <img src="${product.ProductImage}" class="card-img-top p-3" alt="${product.productName}">
  <div class="card-body">
    <h5 class="card-title mb-5">${product.productName}</h5>
    <div class="text-body-secondary">
    ${product.productDescription}
    </div>
    <p class="card-text"><i class="fa-solid fa-peso-sign" style="color: #000000;"></i> ${product.productPrice}</p>
    <button class="btn addCartButtonColor add-cart">Add to Cart <i class="fa-solid fa-cart-shopping" style="color: #ffffff;"></i></button> 

  </div>
  `;

  showItems.appendChild(createElement);

  let addToCartBtn = createElement.querySelector(".add-cart");
  addToCartBtn.addEventListener("click", () =>{
    let productIndex = items.indexOf(product);

    if (productIndex !== -1) {
      cartItems.push(items[productIndex]);
      // updateCartCount();
      updateCartContent();
      saveCartToLocalStorage();

      addToCartBtn.textContent = "Added to Cart";
      addToCartBtn.disabled = true;
    }
    
    // Clear Cart Function
      function clearCart() {
      cartItems = []; 
      // updateCartCount();
      addToCartBtn.textContent = "Add to Cart";
      addToCartBtn.disabled = false;
      updateCartContent();
      saveCartToLocalStorage(); 
      }
      let clearCartButton = document.getElementById("clear-cart-button");
      clearCartButton.addEventListener("click", clearCart);

      function checkoutNow(){
        let checkOutBtn = document.getElementById("checkout");
        checkOutBtn.addEventListener("click",()=>{
          
          if(cartItems.length === 0){
            checkOutBtn.disabled = true;
            return;
          }

          cartItems = []; 
          addToCartBtn.textContent = "Add to Cart";
          addToCartBtn.disabled = false;
          updateCartContent();
          saveCartToLocalStorage(); 

          alert("Congratulations! Your checkout was successful. We're excited to move forward with your order. Keep an eye on your inbox, as we'll be sending you an email with the next steps.");

          window.location.reload();
        })
      }
      checkoutNow();
  })
})
//save cart items to local storage
function saveCartToLocalStorage() {
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
}
// function updateCartCount() {
//   let cartCount = document.getElementById("cart-count");
//   cartCount.textContent = cartItems.length;
// }

//update the cart content
function updateCartContent() {
  let cartContent = document.getElementById("cart-content");
  cartContent.innerHTML = ""; 

  cartItems.forEach((product) => {
    let cartItemElement = document.createElement("div");
    cartItemElement.classList.add("cart-item", "row"); // Apply styles if needed
    cartItemElement.innerHTML = `
            <div class="col-md-4 mb-3">
                <img src="${product.ProductImage}" style="width: 90%;" alt="">
            </div>
            <div class="col-md-4">
                <h5 class="cart-item-title">${product.productName}</h5>
            </div>
            <div class="col-md-4">
                <p class="cart-item-price py-3"><i class="fa-solid fa-peso-sign" style="color: #FAF3F0;"></i> ${product.productPrice}</p>
            </div>
    `;
    cartContent.appendChild(cartItemElement);
  });
  updateTotalPrice();
}



// Total price function
function updateTotalPrice(){
  let totalAmount= document.getElementById("total-price");
  let totalPrice = calculateTotal();
  totalAmount.textContent = totalPrice;

}
 function calculateTotal(){
  let total = 0;
  cartItems.forEach((product)=>{
    total += parseFloat(product.productPrice);
  });
  return total;
 }

// Initializing slider
var swiper = new Swiper(".slide-container", {
  slidesPerView: 1,
  spaceBetween: 30,
  grabCursor: true,
  freeMode: true,
  loop: true,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      520: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 3,
      },
      1000: {
        slidesPerView: 4,
      },
    },
});

//Image Carousel
let main = document.getElementById("main");
let thumbnail = document.querySelectorAll(".thumbnail");

thumbnail.forEach(
    function(image){
        image.addEventListener("click",
        function changeImage(event){
                main.removeAttribute("src");
                main.setAttribute("src", event.target.getAttribute("src"));
        })
    }
)
//Show Cart
let cartBtn = document.querySelector('.cart');
let closeBtn = document.querySelector(".closeCart");

cartBtn.addEventListener('click', () =>{
  document.body.classList.add('active');
});
closeBtn.addEventListener('click', () =>{
  document.body.classList.remove('active');
});
