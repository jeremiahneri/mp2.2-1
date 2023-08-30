import{items} from './products.js';

// Showing the top products
let showItems = document.getElementById("show-top-products");

items.forEach((product) =>{
  let createElement = document.createElement("div");
  createElement.classList.add("card", "swiper-slide", "text-center", "custom-card");
  createElement.innerHTML = `
  <img src="${product.ProductImage}" class="card-img-top p-3" alt="${product.productName}">
  <div class="card-body">
    <h5 class="card-title mb-5">${product.productName}</h5>
    <div class="text-body-secondary">
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam accusamus rem odit et explicabo aliquid.
    </div>
    <p class="card-text"><i class="fa-solid fa-peso-sign" style="color: #000000;"></i> ${product.productPrice}</p>
    <button class="btn addCartButtonColor add-cart">Add to Cart <i class="fa-solid fa-cart-shopping" style="color: #ffffff;"></i></button> 

  </div>
  `;

  showItems.appendChild(createElement);

  let addToCartBtn = createElement.querySelector(".add-cart");
  addToCartBtn.addEventListener("click", () =>{
    alert(`${product.productName} added to cart successfully!`);
  })
})

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
